"use server"

import { z } from "zod"
import { supabaseAdmin } from "@/lib/db"
import { sendEmail } from "@/lib/email"
import { revalidatePath } from "next/cache"

// Form validation schema
const NewsletterFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().optional(),
})

export type NewsletterFormState = {
  errors?: {
    email?: string[]
    name?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function subscribeToNewsletter(
  prevState: NewsletterFormState,
  formData: FormData,
): Promise<NewsletterFormState> {
  // Validate form data
  const validatedFields = NewsletterFormSchema.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please provide a valid email address.",
    }
  }

  const { email, name } = validatedFields.data

  try {
    // Check if email already exists
    const { data: existingSubscriber } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id, status")
      .eq("email", email)
      .single()

    // If already subscribed, return success message
    if (existingSubscriber && existingSubscriber.status === "active") {
      return {
        success: true,
        message: "You are already subscribed to our newsletter.",
      }
    }

    // If previously unsubscribed, update status to active
    if (existingSubscriber) {
      const { error: updateError } = await supabaseAdmin
        .from("newsletter_subscribers")
        .update({
          status: "active",
          name: name || existingSubscriber.name,
          subscribed_at: new Date().toISOString(),
        })
        .eq("id", existingSubscriber.id)

      if (updateError) throw new Error(updateError.message)
    } else {
      // Insert new subscriber
      const { error: insertError } = await supabaseAdmin.from("newsletter_subscribers").insert([
        {
          email,
          name: name || null,
          status: "active",
          subscribed_at: new Date().toISOString(),
        },
      ])

      if (insertError) throw new Error(insertError.message)
    }

    // Send confirmation email
    await sendEmail({
      to: email,
      subject: "Welcome to BIGApparels Newsletter",
      html: `
        <h1>Thank You for Subscribing!</h1>
        <p>Dear ${name || "Valued Customer"},</p>
        <p>Thank you for subscribing to the BIGApparels newsletter. You'll now receive updates on our latest products, promotions, and fashion industry insights.</p>
        <p>If you ever wish to unsubscribe, simply click the unsubscribe link at the bottom of any newsletter email.</p>
        <p>Best regards,</p>
        <p>The BIGApparels Team</p>
      `,
    })

    // Revalidate any pages that show newsletter subscriber count
    revalidatePath("/")
    revalidatePath("/admin/newsletter")

    // Return success response
    return {
      success: true,
      message: "Thank you for subscribing to our newsletter!",
    }
  } catch (error) {
    console.error("Error subscribing to newsletter:", error)
    return {
      errors: {
        _form: ["An error occurred while subscribing. Please try again."],
      },
      success: false,
      message: "Failed to subscribe. Please try again.",
    }
  }
}

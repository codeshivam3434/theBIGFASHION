"use server"

import { createClient } from "@supabase/supabase-js"
import { sendEmail, getContactFormEmailTemplate } from "@/lib/email"
import { sendMockEmail } from "@/lib/mock-email"
import { logError } from "@/lib/error-logger"
import { revalidatePath } from "next/cache"

// Define the form data type
type ContactFormData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

export type ContactFormState = {
  errors?: {
    firstName?: string[]
    lastName?: string[]
    email?: string[]
    phone?: string[]
    subject?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
  id?: string
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return { success: false, message: "All fields are required" }
    }

    if (!email.includes("@")) {
      return { success: false, message: "Please enter a valid email address" }
    }

    // Create Supabase client
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
    const supabase = createClient(supabaseUrl, supabaseKey)

    // Save to database
    const { data, error } = await supabase
      .from("contact_requests")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          subject,
          message,
          status: "new",
        },
      ])
      .select()

    if (error) {
      logError({
        message: "Failed to save contact form to database",
        error,
        context: { firstName, lastName, email },
      })
      return { success: false, message: "Failed to submit form. Please try again later." }
    }

    // Prepare email content
    const contactData: ContactFormData = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    }

    const emailHtml = getContactFormEmailTemplate(contactData)

    // Determine if we're in development/preview mode
    const isDevOrPreview = process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview"

    // Send email notification (or mock it in dev/preview)
    let emailResult
    if (isDevOrPreview) {
      emailResult = await sendMockEmail({
        to: "support@bigapparels.com",
        subject: `New Contact Form: ${subject}`,
        html: emailHtml,
      })
    } else {
      emailResult = await sendEmail({
        to: process.env.EMAIL_USER!,
        subject: `New Contact Form: ${subject}`,
        html: emailHtml,
      })
    }

    if (!emailResult.success && !isDevOrPreview) {
      // Log the error but don't fail the submission
      logError({
        message: "Failed to send contact form email notification",
        error: emailResult.error,
        context: { email },
      })
      // We'll still return success since the data was saved to the database
    }

    // Send confirmation email to the user
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Thank you for contacting us!</h2>
        <p>Dear ${firstName},</p>
        <p>We have received your message and will get back to you as soon as possible.</p>
        <p>Here's a summary of your inquiry:</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <p>Best regards,</p>
        <p>The BIGApparels Team</p>
      </div>
    `

    // Send or mock the confirmation email
    if (isDevOrPreview) {
      await sendMockEmail({
        to: email,
        subject: "We've received your message - BIGApparels",
        html: confirmationHtml,
      })
    } else {
      await sendEmail({
        to: email,
        subject: "We've received your message - BIGApparels",
        html: confirmationHtml,
      }).catch((error) => {
        // Log but don't fail if confirmation email fails
        logError({
          message: "Failed to send confirmation email to user",
          error,
          context: { email },
        })
      })
    }

    // Revalidate the admin contacts page
    revalidatePath("/admin/contacts")

    return {
      success: true,
      message: "Your message has been sent successfully! We'll get back to you soon.",
      id: data?.[0]?.id,
    }
  } catch (error) {
    logError({
      message: "Unexpected error in contact form submission",
      error,
    })
    return { success: false, message: "An unexpected error occurred. Please try again later." }
  }
}

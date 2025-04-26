"use server"

import { z } from "zod"
import { supabaseAdmin } from "@/lib/db"
import { sendEmail } from "@/lib/email"
import { revalidatePath } from "next/cache"

// Form validation schema
const ContactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

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
}

export async function submitContactForm(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Validate form data
  const validatedFields = ContactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
      message: "Please correct the errors in the form.",
    }
  }

  const { firstName, lastName, email, phone, subject, message } = validatedFields.data

  try {
    // 1. Store contact request in database
    const { error: dbError } = await supabaseAdmin.from("contact_requests").insert([
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

    if (dbError) throw new Error(dbError.message)

    // 2. Send notification email to admin
    const adminEmailResult = await sendEmail({
      to: "support@bigapparels.com", // Replace with your admin email
      subject: `New Contact Form: ${subject}`,
      html: `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
      `,
    })

    if (!adminEmailResult.success) throw new Error("Failed to send admin notification")

    // In preview environment, we don't actually check for email success
    // since we're just logging the emails

    // 3. Send confirmation email to user
    await sendEmail({
      to: email,
      subject: "Thank you for contacting BIGApparels",
      html: `
      <h1>Thank You for Contacting Us</h1>
      <p>Dear ${firstName},</p>
      <p>We have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
      <p>Here's a summary of your inquiry:</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
      <br>
      <p>Best regards,</p>
      <p>The BIGApparels Team</p>
      `,
    })

    // Revalidate the admin contacts page
    revalidatePath("/admin/contacts")

    // Return success response
    return {
      success: true,
      message: "Your message has been sent successfully. We will contact you soon!",
    }
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      errors: {
        _form: ["An error occurred while submitting the form. Please try again."],
      },
      success: false,
      message: "Failed to submit form. Please try again.",
    }
  }
}

"use server"

import { z } from "zod"
import { supabaseAdmin } from "@/lib/db"
import { sendEmail } from "@/lib/email"
import { revalidatePath } from "next/cache"

// Form validation schema
const PartnershipFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type PartnershipFormState = {
  errors?: {
    name?: string[]
    businessName?: string[]
    email?: string[]
    phone?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
}

export async function submitPartnershipForm(
  prevState: PartnershipFormState,
  formData: FormData,
): Promise<PartnershipFormState> {
  // Validate form data
  const validatedFields = PartnershipFormSchema.safeParse({
    name: formData.get("name"),
    businessName: formData.get("businessName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
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

  const { name, businessName, email, phone, message } = validatedFields.data

  try {
    // 1. Store partnership application in database
    const { error: dbError } = await supabaseAdmin.from("partnership_applications").insert([
      {
        contact_name: name,
        business_name: businessName,
        email,
        phone,
        message,
        status: "new",
      },
    ])

    if (dbError) throw new Error(dbError.message)

    // 2. Send notification email to partnerships team
    await sendEmail({
      to: "partnerships@bigapparels.com", // Replace with your partnerships email
      subject: `New Partnership Application: ${businessName}`,
      html: `
        <h1>New Partnership Application</h1>
        <p><strong>Business Name:</strong> ${businessName}</p>
        <p><strong>Contact Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    // 3. Send confirmation email to applicant
    await sendEmail({
      to: email,
      subject: "Your BIGApparels Partnership Application",
      html: `
        <h1>Thank You for Your Interest in Partnering with BIGApparels</h1>
        <p>Dear ${name},</p>
        <p>We have received your partnership application for ${businessName}. Our partnerships team will review your submission and contact you within 2 business days.</p>
        <p>Here's a summary of your application:</p>
        <ul>
          <li><strong>Business Name:</strong> ${businessName}</li>
          <li><strong>Contact Name:</strong> ${name}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>If you have any questions in the meantime, please reply to this email or call our partnerships team at +91 8482819965.</p>
        <p>Best regards,</p>
        <p>The BIGApparels Partnerships Team</p>
      `,
    })

    // Revalidate the admin partnerships page
    revalidatePath("/admin/partnerships")

    // Return success response
    return {
      success: true,
      message:
        "Your partnership application has been submitted successfully. We will contact you within 2 business days.",
    }
  } catch (error) {
    console.error("Error submitting partnership application:", error)
    return {
      errors: {
        _form: ["An error occurred while submitting the form. Please try again."],
      },
      success: false,
      message: "Failed to submit application. Please try again.",
    }
  }
}

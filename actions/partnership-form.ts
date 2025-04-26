"use server"

import { createClient } from "@supabase/supabase-js"
import { sendEmail, getPartnershipEmailTemplate } from "@/lib/email"
import { sendMockEmail } from "@/lib/mock-email"
import { logError } from "@/lib/error-logger"
import { revalidatePath } from "next/cache"

// Define the form data type
type PartnershipFormData = {
  businessName: string
  contactName: string
  email: string
  phone: string
  businessType: string
  message: string
}

export type PartnershipFormState = {
  errors?: {
    businessName?: string[]
    contactName?: string[]
    email?: string[]
    phone?: string[]
    businessType?: string[]
    message?: string[]
    _form?: string[]
  }
  success?: boolean
  message?: string
  id?: string
}

export async function submitPartnershipForm(
  prevState: PartnershipFormState,
  formData: FormData,
): Promise<PartnershipFormState> {
  try {
    // Extract form data
    const businessName = formData.get("businessName") as string
    const contactName = formData.get("contactName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const businessType = formData.get("businessType") as string
    const message = formData.get("message") as string

    // Validate form data
    if (!businessName || !contactName || !email || !phone || !businessType || !message) {
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
      .from("partnership_applications")
      .insert([
        {
          business_name: businessName,
          contact_name: contactName,
          email,
          phone,
          business_type: businessType,
          message,
          status: "new",
        },
      ])
      .select()

    if (error) {
      logError({
        message: "Failed to save partnership form to database",
        error,
        context: { businessName, contactName, email },
      })
      return { success: false, message: "Failed to submit form. Please try again later." }
    }

    // Prepare email content
    const partnershipData: PartnershipFormData = {
      businessName,
      contactName,
      email,
      phone,
      businessType,
      message,
    }

    const emailHtml = getPartnershipEmailTemplate(partnershipData)

    // Determine if we're in development/preview mode
    const isDevOrPreview = process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview"

    // Send email notification (or mock it in dev/preview)
    let emailResult
    if (isDevOrPreview) {
      emailResult = await sendMockEmail({
        to: "partnerships@bigapparels.com",
        subject: `New Partnership Application: ${businessName}`,
        html: emailHtml,
      })
    } else {
      emailResult = await sendEmail({
        to: process.env.EMAIL_USER!,
        subject: `New Partnership Application: ${businessName}`,
        html: emailHtml,
      })
    }

    if (!emailResult.success && !isDevOrPreview) {
      // Log the error but don't fail the submission
      logError({
        message: "Failed to send partnership form email notification",
        error: emailResult.error,
        context: { email, businessName },
      })
      // We'll still return success since the data was saved to the database
    }

    // Send confirmation email to the applicant
    const confirmationHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>Thank you for your partnership application!</h2>
        <p>Dear ${contactName},</p>
        <p>We have received your partnership application for ${businessName} and will review it shortly.</p>
        <p>Our team will contact you within 2-3 business days to discuss the next steps.</p>
        <p>Best regards,</p>
        <p>The BIGApparels Partnership Team</p>
      </div>
    `

    // Send or mock the confirmation email
    if (isDevOrPreview) {
      await sendMockEmail({
        to: email,
        subject: "Your Partnership Application - BIGApparels",
        html: confirmationHtml,
      })
    } else {
      await sendEmail({
        to: email,
        subject: "Your Partnership Application - BIGApparels",
        html: confirmationHtml,
      }).catch((error) => {
        // Log but don't fail if confirmation email fails
        logError({
          message: "Failed to send confirmation email to partnership applicant",
          error,
          context: { email, businessName },
        })
      })
    }

    // Revalidate the admin partnerships page
    revalidatePath("/admin/partnerships")

    return {
      success: true,
      message: "Your partnership application has been submitted successfully! We'll contact you soon.",
      id: data?.[0]?.id,
    }
  } catch (error) {
    logError({
      message: "Unexpected error in partnership form submission",
      error,
    })
    return { success: false, message: "An unexpected error occurred. Please try again later." }
  }
}

// Mock email service for preview environment
type EmailOptions = {
  to: string
  subject: string
  html: string
  from?: string
}

export async function sendEmail({ to, subject, html, from }: EmailOptions) {
  try {
    // In preview environment, we can't actually send emails due to DNS lookup limitations
    // So we'll log the email details instead
    console.log("=== EMAIL WOULD BE SENT ===")
    console.log("To:", to)
    console.log("Subject:", subject)
    console.log("From:", from || `"BIGApparels" <noreply@bigapparels.com>`)
    console.log("Body:", html.substring(0, 100) + "...")
    console.log("========================")

    // Return success response
    return {
      success: true,
      messageId: `mock-email-${Date.now()}`,
      message: "Email logged (not actually sent in preview environment)",
    }
  } catch (error) {
    console.error("Failed to process email:", error)
    return { success: false, error: "Failed to process email" }
  }
}

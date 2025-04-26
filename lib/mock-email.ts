// This file provides a mock email service for development and preview environments

type MockEmailParams = {
  to: string
  subject: string
  html: string
  from?: string
  attachments?: any[]
}

export async function sendMockEmail(params: MockEmailParams) {
  const { to, subject, html, from, attachments } = params

  console.log("\n📧 =============== MOCK EMAIL ===============")
  console.log(`📧 From: ${from || "default-sender@bigapparels.com"}`)
  console.log(`📧 To: ${to}`)
  console.log(`📧 Subject: ${subject}`)
  console.log(`📧 Attachments: ${attachments?.length || 0}`)
  console.log("📧 HTML Content Preview:")
  console.log("📧 ----------------------------------------")

  // Extract and log text content from HTML for better readability in console
  const textContent = html
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .substring(0, 300)

  console.log(`📧 ${textContent}${textContent.length >= 300 ? "..." : ""}`)
  console.log("📧 ========================================\n")

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return {
    success: true,
    messageId: `mock-email-${Date.now()}`,
    mockEmail: true,
  }
}

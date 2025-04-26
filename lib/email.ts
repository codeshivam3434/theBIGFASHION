import nodemailer from "nodemailer"

type EmailParams = {
  to: string
  subject: string
  html: string
  from?: string
  attachments?: Array<{
    filename: string
    content?: string | Buffer
    path?: string
    contentType?: string
  }>
}

// Create a reusable transporter
let cachedTransporter: nodemailer.Transporter | null = null

function getTransporter() {
  if (cachedTransporter) return cachedTransporter

  const emailHost = process.env.EMAIL_HOST
  const emailPort = Number(process.env.EMAIL_PORT || "587")
  const emailSecure = process.env.EMAIL_SECURE === "true"
  const emailUser = process.env.EMAIL_USER
  const emailPassword = process.env.EMAIL_PASSWORD

  if (!emailHost || !emailUser || !emailPassword) {
    throw new Error("Email configuration is incomplete. Check your environment variables.")
  }

  cachedTransporter = nodemailer.createTransport({
    host: emailHost,
    port: emailPort,
    secure: emailSecure,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
    // Add connection pool settings for production
    pool: true,
    maxConnections: 5,
    maxMessages: 100,
    // Add retry settings
    tls: {
      rejectUnauthorized: true,
    },
  })

  return cachedTransporter
}

export async function sendEmail({ to, subject, html, from, attachments }: EmailParams) {
  // For preview/development environment, just log the email
  if (process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") {
    console.log("📧 Email would be sent in production:")
    console.log(`To: ${to}`)
    console.log(`Subject: ${subject}`)
    console.log(`HTML length: ${html.length} characters`)
    console.log(`From: ${from || process.env.EMAIL_USER}`)
    console.log(`Attachments: ${attachments ? attachments.length : 0}`)

    // Return success for development environment
    return { success: true, messageId: "dev-preview-mode" }
  }

  // For production environment, actually send the email
  try {
    const transporter = getTransporter()
    const emailUser = process.env.EMAIL_USER
    const defaultFrom = `BIGApparels <${emailUser}>`

    // Send email
    const info = await transporter.sendMail({
      from: from || defaultFrom,
      to,
      subject,
      html,
      attachments,
      // Add headers for better deliverability
      headers: {
        "X-Priority": "1",
        "X-MSMail-Priority": "High",
        Importance: "High",
      },
    })

    console.log("Email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)

    // Retry once with a delay
    try {
      console.log("Retrying email send after error...")
      await new Promise((resolve) => setTimeout(resolve, 1000)) // 1 second delay

      const transporter = getTransporter()
      const emailUser = process.env.EMAIL_USER
      const defaultFrom = `BIGApparels <${emailUser}>`

      const info = await transporter.sendMail({
        from: from || defaultFrom,
        to,
        subject,
        html,
        attachments,
      })

      console.log("Email sent on retry:", info.messageId)
      return { success: true, messageId: info.messageId, wasRetry: true }
    } catch (retryError) {
      console.error("Email retry also failed:", retryError)
      return { success: false, error: error instanceof Error ? error.message : String(error) }
    }
  }
}

// Verify email configuration on startup
export async function verifyEmailConfig() {
  // Skip verification in development/preview
  if (process.env.NODE_ENV === "development" || process.env.VERCEL_ENV === "preview") {
    console.log("✅ Email verification skipped in development/preview mode")
    return true
  }

  try {
    const transporter = getTransporter()
    await transporter.verify()
    console.log("✅ Email configuration verified successfully")
    return true
  } catch (error) {
    console.error("❌ Email configuration verification failed:", error)
    return false
  }
}

// Email templates
export function getContactFormEmailTemplate(data: {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <h2 style="color: #333; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Contact Form Submission</h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
      </div>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #777;">
        <p>This email was sent from the contact form on BIGApparels website.</p>
      </div>
    </div>
  `
}

export function getPartnershipEmailTemplate(data: {
  businessName: string
  contactName: string
  email: string
  phone: string
  message: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <h2 style="color: #333; border-bottom: 1px solid #e0e0e0; padding-bottom: 10px;">New Partnership Application</h2>
      
      <div style="margin: 20px 0;">
        <p><strong>Business Name:</strong> ${data.businessName}</p>
        <p><strong>Contact Name:</strong> ${data.contactName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
          ${data.message.replace(/\n/g, "<br>")}
        </div>
      </div>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #777;">
        <p>This email was sent from the partnership form on BIGApparels website.</p>
      </div>
    </div>
  `
}

export function getWelcomeEmailTemplate(data: {
  name: string
  email: string
}) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
      <h2 style="color: #333; text-align: center; padding-bottom: 10px;">Welcome to BIGApparels!</h2>
      
      <div style="margin: 20px 0; text-align: center;">
        <p>Hello ${data.name},</p>
        <p>Thank you for creating an account with BIGApparels. We're excited to have you join our community of fashion retailers.</p>
        <p>With your new account, you can:</p>
        <ul style="text-align: left; display: inline-block;">
          <li>Access exclusive resources</li>
          <li>Track your partnership applications</li>
          <li>Receive updates on new features and offerings</li>
        </ul>
        <p>If you have any questions, please don't hesitate to contact our support team.</p>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href="${process.env.NEXT_PUBLIC_APP_URL}/auth/login" style="background-color: #f04438; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Log In to Your Account</a>
      </div>
      
      <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #777; text-align: center;">
        <p>© ${new Date().getFullYear()} BIGApparels. All rights reserved.</p>
      </div>
    </div>
  `
}

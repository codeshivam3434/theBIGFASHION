import { type NextRequest, NextResponse } from "next/server"
import { hash } from "bcryptjs"
import { supabaseAdmin } from "@/lib/db"
import { z } from "zod"
import { sendEmail } from "@/lib/email"

// Validation schema
const RegisterSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request body
    const result = RegisterSchema.safeParse(body)
    if (!result.success) {
      return NextResponse.json(
        { message: "Invalid input", errors: result.error.flatten().fieldErrors },
        { status: 400 },
      )
    }

    const { name, email, password } = result.data

    // Check if user already exists
    const { data: existingUser } = await supabaseAdmin.from("users").select("id").eq("email", email).single()

    if (existingUser) {
      return NextResponse.json({ message: "User with this email already exists" }, { status: 409 })
    }

    // Hash password
    const hashedPassword = await hash(password, 10)

    // Create user
    const { error } = await supabaseAdmin.from("users").insert([
      {
        email,
        password_hash: hashedPassword,
        name,
        role: "user", // Default role
      },
    ])

    if (error) {
      console.error("Error creating user:", error)
      return NextResponse.json({ message: "Failed to create user" }, { status: 500 })
    }

    // Send welcome email
    await sendEmail({
      to: email,
      subject: "Welcome to BIGApparels",
      html: `
        <h1>Welcome to BIGApparels</h1>
        <p>Dear ${name},</p>
        <p>Thank you for registering with BIGApparels. We're excited to have you on board!</p>
        <p>You can now log in to your account and explore our platform.</p>
        <p>Best regards,</p>
        <p>The BIGApparels Team</p>
      `,
    })

    return NextResponse.json({ message: "User registered successfully" }, { status: 201 })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ message: "Internal server error" }, { status: 500 })
  }
}

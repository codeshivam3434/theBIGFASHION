export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      contact_requests: {
        Row: {
          id: string
          first_name: string
          last_name: string
          email: string
          phone: string
          subject: string
          message: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          subject: string
          message: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          first_name?: string
          last_name?: string
          email?: string
          phone?: string
          subject?: string
          message?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      partnership_applications: {
        Row: {
          id: string
          business_name: string
          contact_name: string
          email: string
          phone: string
          message: string
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          business_name: string
          contact_name: string
          email: string
          phone: string
          message: string
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          business_name?: string
          contact_name?: string
          email?: string
          phone?: string
          message?: string
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          name: string | null
          status: string
          subscribed_at: string
        }
        Insert: {
          id?: string
          email: string
          name?: string | null
          status?: string
          subscribed_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string | null
          status?: string
          subscribed_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          password_hash: string
          name: string
          role: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          password_hash: string
          name: string
          role?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          password_hash?: string
          name?: string
          role?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}

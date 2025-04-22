"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface CustomerMessageModalProps {
  isOpen: boolean
  onClose: () => void
  customer: {
    id: string
    name: string
    email: string
    avatar: string
  }
}

export function CustomerMessageModal({ isOpen, onClose, customer }: CustomerMessageModalProps) {
  const [activeTab, setActiveTab] = useState("message")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sample message history
  const messageHistory = [
    {
      id: "msg-1",
      sender: "customer",
      content: "Hello, I have a question about my recent order #ORD-2023-456. When can I expect it to be shipped?",
      timestamp: "2 days ago",
      read: true,
    },
    {
      id: "msg-2",
      sender: "staff",
      content:
        "Hi there! Thank you for your message. Your order #ORD-2023-456 has been processed and will be shipped within the next 24 hours. You'll receive a tracking number once it's on the way.",
      timestamp: "2 days ago",
      read: true,
      staffName: "Rajesh Sharma",
    },
    {
      id: "msg-3",
      sender: "customer",
      content: "Great, thank you! Also, I wanted to ask about the return policy for this order.",
      timestamp: "1 day ago",
      read: true,
    },
    {
      id: "msg-4",
      sender: "staff",
      content:
        "You're welcome! Our return policy allows returns within 15 days of delivery for unused items in original packaging. Would you like me to send you our detailed return policy document?",
      timestamp: "1 day ago",
      read: true,
      staffName: "Rajesh Sharma",
    },
    {
      id: "msg-5",
      sender: "customer",
      content: "Yes, please send me the detailed return policy. Also, do you offer exchanges?",
      timestamp: "5 hours ago",
      read: false,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate message sending
    setTimeout(() => {
      setIsSubmitting(false)
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={customer.avatar} alt={customer.name} />
              <AvatarFallback>{customer.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <span>Conversation with {customer.name}</span>
          </DialogTitle>
          <DialogDescription>
            Customer ID: {customer.id} • {customer.email}
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="message">Send Message</TabsTrigger>
            <TabsTrigger value="history">Message History</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex-1 overflow-hidden">
          <TabsContent value="message" className="h-full flex flex-col">
            <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
              <div className="space-y-2 flex-1">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter message subject" required />

                <div className="mt-4">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Type your message here..."
                    className="min-h-[200px] flex-1"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Message Type</Label>
                <Select defaultValue="general">
                  <SelectTrigger>
                    <SelectValue placeholder="Select message type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General</SelectItem>
                    <SelectItem value="order">Order Related</SelectItem>
                    <SelectItem value="payment">Payment Related</SelectItem>
                    <SelectItem value="support">Support</SelectItem>
                    <SelectItem value="feedback">Feedback Request</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <DialogFooter className="mt-6 px-0">
                <Button type="button" variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <svg
                        className="mr-2 h-4 w-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </TabsContent>

          <TabsContent value="history" className="h-full">
            <div className="space-y-4 overflow-y-auto max-h-[350px] pr-2">
              {messageHistory.map((message) => (
                <div
                  key={message.id}
                  className={`p-3 rounded-lg ${message.sender === "customer" ? "bg-muted ml-4" : "bg-primary/10 mr-4"}`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center gap-2">
                      {message.sender === "customer" ? (
                        <>
                          <Avatar className="h-6 w-6">
                            <AvatarImage src={customer.avatar} alt={customer.name} />
                            <AvatarFallback>{customer.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{customer.name}</span>
                        </>
                      ) : (
                        <>
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>RS</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{message.staffName}</span>
                          <Badge variant="outline" className="text-xs">
                            Staff
                          </Badge>
                        </>
                      )}
                    </div>
                    <span className="text-xs text-muted-foreground">{message.timestamp}</span>
                  </div>
                  <p className="text-sm">{message.content}</p>
                  {!message.read && message.sender === "customer" && (
                    <Badge className="mt-2 bg-amber-500/20 text-amber-700 border-amber-500/30">Unread</Badge>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="templates" className="h-full">
            <div className="space-y-4 overflow-y-auto max-h-[350px] pr-2">
              <div className="p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">Order Confirmation</span>
                  <Badge variant="outline">General</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Thank you for your order! We're pleased to confirm that your order #[ORDER_ID] has been received and
                  is being processed...
                </p>
              </div>

              <div className="p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">Shipping Notification</span>
                  <Badge variant="outline">Order</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Great news! Your order #[ORDER_ID] has been shipped and is on its way to you. You can track your
                  package using the following tracking number...
                </p>
              </div>

              <div className="p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">Payment Reminder</span>
                  <Badge variant="outline">Payment</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  This is a friendly reminder that payment for invoice #[INVOICE_ID] in the amount of [AMOUNT] is due on
                  [DUE_DATE]...
                </p>
              </div>

              <div className="p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">Return Instructions</span>
                  <Badge variant="outline">Support</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  We're sorry to hear that you'd like to return your purchase. Please follow these steps to initiate
                  your return...
                </p>
              </div>

              <div className="p-3 rounded-lg border cursor-pointer hover:bg-muted/50">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-medium">Feedback Request</span>
                  <Badge variant="outline">Feedback</Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  Thank you for your recent purchase! We'd love to hear about your experience. Please take a moment to
                  share your feedback...
                </p>
              </div>
            </div>
          </TabsContent>
        </div>
      </DialogContent>
    </Dialog>
  )
}

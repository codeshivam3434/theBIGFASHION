"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Mail,
  MessageSquare,
  Video,
  FileText,
  HelpCircle,
  Search,
  ArrowRight,
  Download,
  Headphones,
  BookOpen,
  ShoppingBag,
  Package,
  CreditCard,
} from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useIsMobile } from "@/hooks/use-mobile"

export default function HelpPage() {
  const [message, setMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const isMobile = useIsMobile()

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setMessage("")
  }

  const faqCategories = [
    {
      id: "ordering",
      title: "Ordering & Payment",
      faqs: [
        {
          question: "How do I place an order?",
          answer:
            "Go to the Products page, select the items you want, and click the 'Order Now' button. Follow the instructions to complete your order. You can also contact your account manager directly to place orders.",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept payments through bank transfer, UPI, credit/debit cards, and net banking. For regular customers, we also offer credit terms with approved payment schedules.",
        },
        {
          question: "Can I modify my order after placing it?",
          answer:
            "Yes, you can modify your order within 24 hours of placing it. Please contact your account manager or our support team to make changes. After 24 hours, modifications may be subject to availability and processing status.",
        },
        {
          question: "What is the minimum order quantity?",
          answer:
            "The minimum order quantity varies by product. You can see the MOQ on each product's details page. For bulk orders or special requirements, please contact your account manager for customized solutions.",
        },
      ],
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      faqs: [
        {
          question: "When will my order be delivered?",
          answer:
            "Most orders are delivered within 3-5 business days. You can track your order status on the Orders page. For bulk orders or custom products, delivery times may vary.",
        },
        {
          question: "How can I track my shipment?",
          answer:
            "You can track your shipment by going to the Orders page and clicking on 'Track Order'. You will receive a tracking number via email once your order is shipped.",
        },
        {
          question: "Do you ship internationally?",
          answer:
            "Yes, we ship to select international destinations. International shipping costs and delivery times vary by location. Please contact your account manager for more information.",
        },
        {
          question: "What if my order is damaged during shipping?",
          answer:
            "If your order arrives damaged, please take photos and contact our support team within 48 hours of delivery. We will arrange for a replacement or refund as appropriate.",
        },
      ],
    },
    {
      id: "returns",
      title: "Returns & Refunds",
      faqs: [
        {
          question: "What is your return policy?",
          answer:
            "We accept returns within 7 days of delivery for most products. Items must be in original condition with tags attached. Custom orders and sale items may have different return policies.",
        },
        {
          question: "How do I initiate a return?",
          answer:
            "To initiate a return, go to the Orders page, select the order you want to return, and click 'Request Return'. Follow the instructions to complete the return process.",
        },
        {
          question: "When will I receive my refund?",
          answer:
            "Refunds are processed within 7-10 business days after we receive and inspect the returned items. The refund will be credited back to the original payment method.",
        },
        {
          question: "Do you offer exchanges?",
          answer:
            "Yes, we offer exchanges for items of equal or greater value. If you choose an item of greater value, you will need to pay the difference. Please contact our support team to arrange an exchange.",
        },
      ],
    },
    {
      id: "account",
      title: "Account & Technical Support",
      faqs: [
        {
          question: "How do I reset my password?",
          answer:
            "To reset your password, click on 'Forgot Password' on the login page. Enter your registered email address, and we will send you a link to reset your password.",
        },
        {
          question: "Can I have multiple users for my business account?",
          answer:
            "Yes, we offer multi-user access for business accounts. Please contact your account manager to set up additional users with appropriate access levels.",
        },
        {
          question: "How do I update my business information?",
          answer:
            "You can update your business information by going to the Profile page and selecting the Business tab. Make your changes and click 'Save Changes'.",
        },
        {
          question: "The website is not working properly. What should I do?",
          answer:
            "If you're experiencing technical issues, try clearing your browser cache and cookies, or try using a different browser. If the problem persists, please contact our technical support team.",
        },
      ],
    },
  ]

  const filteredFaqs = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          faqs: category.faqs.filter(
            (faq) =>
              faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.faqs.length > 0)
    : faqCategories

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground text-lg">We're here to help you with any questions or issues</p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for help..."
          className="w-full pl-10 py-6 text-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Tabs defaultValue="faqs" className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="faqs">FAQs</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
          <TabsTrigger value="tickets">My Tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="faqs" className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((category) => (
              <FadeInSection key={category.id}>
                <Card>
                  <CardHeader>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>Frequently asked questions about {category.title.toLowerCase()}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div className="flex items-start gap-2">
                              <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span>{faq.question}</span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pl-7">{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-8">
                <HelpCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg text-center">No FAQs found matching your search.</p>
                <p className="text-muted-foreground text-center mt-2">
                  Try a different search term or browse the categories.
                </p>
                <Button className="mt-4" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="contact" className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <FadeInSection>
              <Card className="border-2 border-primary/20">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Call Your Account Manager
                  </CardTitle>
                  <CardDescription>Get immediate assistance over the phone</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <Avatar className="h-20 w-20 border-2 border-primary/20">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Priya Sharma"
                        />
                        <AvatarFallback className="bg-primary/10 text-primary text-xl">PS</AvatarFallback>
                      </Avatar>
                    </div>
                    <p className="text-lg mb-2">Your dedicated account manager:</p>
                    <p className="text-3xl font-bold mb-4">Priya Sharma</p>
                    <p className="text-2xl font-medium mb-6">+91 98765 43210</p>
                    <p className="text-muted-foreground mb-4">Available Monday to Saturday, 9 AM to 6 PM</p>
                    <Button size="lg" className="w-full text-lg py-6">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>

            <FadeInSection delay={0.1}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Send a Message
                  </CardTitle>
                  <CardDescription>We'll respond within 24 hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="order">Order Inquiry</SelectItem>
                          <SelectItem value="product">Product Information</SelectItem>
                          <SelectItem value="payment">Payment Issue</SelectItem>
                          <SelectItem value="shipping">Shipping & Delivery</SelectItem>
                          <SelectItem value="return">Returns & Refunds</SelectItem>
                          <SelectItem value="technical">Technical Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Type your question or issue here..."
                        className="min-h-[120px] text-base"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    size="lg"
                    className="w-full"
                    disabled={!message.trim() || isSubmitting}
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </CardFooter>
              </Card>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.2}>
            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Video Call Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Schedule a video call with our support team for personalized assistance</p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg" className="w-full">
                        Schedule Call
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Schedule a Video Call</DialogTitle>
                        <DialogDescription>Select a date and time that works for you.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor="call-date">Date</Label>
                          <Input id="call-date" type="date" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="call-time">Time</Label>
                          <Select>
                            <SelectTrigger id="call-time">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="11:00">11:00 AM</SelectItem>
                              <SelectItem value="12:00">12:00 PM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="15:00">3:00 PM</SelectItem>
                              <SelectItem value="16:00">4:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="call-reason">Reason for Call</Label>
                          <Textarea id="call-reason" placeholder="Briefly describe your issue" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Schedule</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Send us an email and we'll get back to you within 24 hours</p>
                  <Button variant="outline" size="lg" className="w-full">
                    Email Us
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Headphones className="h-5 w-5" />
                    Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Chat with our support team in real-time for quick assistance</p>
                  <Button variant="outline" size="lg" className="w-full">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <FadeInSection>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    User Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Download our comprehensive user guide with step-by-step instructions</p>
                  <Button variant="outline" size="lg" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Video className="h-5 w-5" />
                    Video Tutorials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Watch our video tutorials to learn how to use our platform</p>
                  <Button variant="outline" size="lg" className="w-full">
                    Watch Videos
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Knowledge Base
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Browse our knowledge base for detailed articles and guides</p>
                  <Button variant="outline" size="lg" className="w-full">
                    Explore Articles
                  </Button>
                </CardContent>
              </Card>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle>Popular Resources</CardTitle>
                <CardDescription>Quick access to our most frequently used resources</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Getting Started Guide",
                      description: "Learn the basics of using our platform",
                      icon: <BookOpen className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Order Processing Tutorial",
                      description: "Step-by-step guide to processing orders",
                      icon: <ShoppingBag className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Product Catalog Guide",
                      description: "How to browse and order from our catalog",
                      icon: <Package className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Payment Methods Guide",
                      description: "Learn about available payment options",
                      icon: <CreditCard className="h-5 w-5 text-primary" />,
                    },
                  ].map((resource, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {resource.icon}
                      </div>
                      <div>
                        <h3 className="font-medium">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                      <Button variant="ghost" size="icon" className="ml-auto">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </TabsContent>

        <TabsContent value="tickets" className="space-y-4">
          <FadeInSection>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle>Support Tickets</CardTitle>
                  <CardDescription>View and manage your support tickets</CardDescription>
                </div>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  New Ticket
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: "TKT-001",
                      subject: "Order Delivery Delay",
                      status: "Open",
                      date: "2023-06-15",
                      lastUpdate: "2023-06-16",
                    },
                    {
                      id: "TKT-002",
                      subject: "Payment Issue",
                      status: "In Progress",
                      date: "2023-06-10",
                      lastUpdate: "2023-06-14",
                    },
                    {
                      id: "TKT-003",
                      subject: "Product Information Request",
                      status: "Closed",
                      date: "2023-06-05",
                      lastUpdate: "2023-06-07",
                    },
                  ].map((ticket) => (
                    <div
                      key={ticket.id}
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg border"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{ticket.subject}</h3>
                          <Badge
                            variant={
                              ticket.status === "Open"
                                ? "default"
                                : ticket.status === "In Progress"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {ticket.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ticket ID: {ticket.id} • Created: {ticket.date}
                        </p>
                      </div>
                      <Button variant="ghost" size="icon" className="ml-auto">
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </TabsContent>
      </Tabs>
    </div>
  )
}

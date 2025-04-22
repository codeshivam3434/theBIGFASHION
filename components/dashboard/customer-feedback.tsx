"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Search, ThumbsUp, MessageSquare, Flag } from "lucide-react"

// Sample feedback data
const feedbackData = [
  {
    id: "fb-001",
    customer: {
      id: "CUST-001",
      name: "Priya Sharma",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
    title: "Excellent quality and service!",
    comment:
      "I've been ordering from Fashion Fusion for my boutique for over a year now, and I'm consistently impressed with the quality of the garments. The customer service is exceptional, and deliveries are always on time. Highly recommended for any retailer!",
    date: "2 days ago",
    source: "order",
    orderNumber: "ORD-2023-789",
    helpful: 12,
    replied: true,
  },
  {
    id: "fb-002",
    customer: {
      id: "CUST-008",
      name: "Sanjay Mehta",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 4,
    title: "Great products, slight shipping delay",
    comment:
      "The products are excellent and my customers love them. The only issue I had was with a slight delay in shipping my last order. Otherwise, everything has been perfect. The new summer collection is selling very well in my stores.",
    date: "1 week ago",
    source: "email",
    orderNumber: "ORD-2023-654",
    helpful: 8,
    replied: true,
  },
  {
    id: "fb-003",
    customer: {
      id: "CUST-003",
      name: "Ananya Desai",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
    title: "Impressed with the new collection",
    comment:
      "The latest traditional wear collection is absolutely stunning! My customers can't get enough of the embroidered pieces. The quality is exceptional, and the designs are unique. I've already placed my third order this month.",
    date: "2 weeks ago",
    source: "website",
    orderNumber: "ORD-2023-521",
    helpful: 15,
    replied: false,
  },
  {
    id: "fb-004",
    customer: {
      id: "CUST-007",
      name: "Neha Gupta",
      avatar:
        "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 3,
    title: "Good products but sizing inconsistencies",
    comment:
      "While the quality of the fabrics is good, I've noticed some inconsistencies in sizing across different styles. This has caused some issues with my customers. I hope this can be addressed in future collections. The customer service team has been helpful in resolving the issues.",
    date: "3 weeks ago",
    source: "order",
    orderNumber: "ORD-2023-498",
    helpful: 6,
    replied: true,
  },
  {
    id: "fb-005",
    customer: {
      id: "CUST-004",
      name: "Vikram Singh",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 5,
    title: "Outstanding wholesale partner",
    comment:
      "Fashion Fusion has been an outstanding partner for my chain of boutiques. The variety of styles, quality of materials, and competitive pricing have helped my business grow significantly. The dedicated account manager is always responsive and helpful.",
    date: "1 month ago",
    source: "email",
    orderNumber: "ORD-2023-432",
    helpful: 21,
    replied: true,
  },
  {
    id: "fb-006",
    customer: {
      id: "CUST-002",
      name: "Rahul Patel",
      avatar:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    rating: 4,
    title: "Reliable supplier for my business",
    comment:
      "I've been working with Fashion Fusion for the past six months, and they've proven to be a reliable supplier for my retail store. The men's formal wear collection is particularly popular with my customers. Delivery is always prompt, and the packaging is excellent.",
    date: "1 month ago",
    source: "website",
    orderNumber: "ORD-2023-387",
    helpful: 9,
    replied: false,
  },
]

export function CustomerFeedback() {
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [ratingFilter, setRatingFilter] = useState("all")
  const [sourceFilter, setSourceFilter] = useState("all")

  const filteredFeedback = feedbackData.filter((feedback) => {
    // Apply search filter
    const matchesSearch =
      feedback.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.orderNumber.toLowerCase().includes(searchQuery.toLowerCase())

    // Apply rating filter
    const matchesRating = ratingFilter === "all" || feedback.rating === Number.parseInt(ratingFilter)

    // Apply source filter
    const matchesSource = sourceFilter === "all" || feedback.source === sourceFilter

    // Apply tab filter
    const matchesTab =
      activeTab === "all" ||
      (activeTab === "positive" && feedback.rating >= 4) ||
      (activeTab === "neutral" && feedback.rating === 3) ||
      (activeTab === "negative" && feedback.rating <= 2) ||
      (activeTab === "unreplied" && !feedback.replied)

    return matchesSearch && matchesRating && matchesSource && matchesTab
  })

  const renderStarRating = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Feedback</CardTitle>
        <CardDescription>Review and respond to customer feedback about their shopping experience</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="positive">Positive</TabsTrigger>
              <TabsTrigger value="neutral">Neutral</TabsTrigger>
              <TabsTrigger value="negative">Negative</TabsTrigger>
              <TabsTrigger value="unreplied">Unreplied</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search feedback..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Filter by rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sourceFilter} onValueChange={setSourceFilter}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Filter by source" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sources</SelectItem>
                <SelectItem value="order">Order</SelectItem>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="website">Website</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          {filteredFeedback.length > 0 ? (
            filteredFeedback.map((feedback) => (
              <div key={feedback.id} className="border rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={feedback.customer.avatar} alt={feedback.customer.name} />
                      <AvatarFallback>{feedback.customer.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{feedback.customer.name}</div>
                      <div className="text-sm text-muted-foreground">{feedback.date}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    {renderStarRating(feedback.rating)}
                    <div className="flex items-center gap-1">
                      <Badge variant="outline">{feedback.source}</Badge>
                      {feedback.orderNumber && <Badge variant="outline">{feedback.orderNumber}</Badge>}
                      {!feedback.replied && (
                        <Badge className="bg-amber-500/20 text-amber-700 border-amber-500/30">Unreplied</Badge>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium">{feedback.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{feedback.comment}</p>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-xs">{feedback.helpful}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8">
                      <Flag className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button variant="outline" size="sm" className="h-8 gap-1">
                    <MessageSquare className="h-4 w-4" />
                    {feedback.replied ? "View Reply" : "Reply"}
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground">No feedback found matching your filters.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

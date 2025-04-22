"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Mail, Send, Calendar, Clock, Users, Gift, Tag, CheckCircle2 } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface MarketingAutomationProps {
  dateRange: { from: Date; to: Date }
}

export function MarketingAutomation({ dateRange }: MarketingAutomationProps) {
  // Dummy variables for message placeholders
  const customer_name = "Customer"
  const store_link = "https://example.com"
  const discount_code = "SUMMER20"

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Marketing Automation</CardTitle>
          <CardDescription>Automate personalized marketing campaigns for your customers</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="campaigns">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
              <TabsTrigger value="personalization">Personalization</TabsTrigger>
              <TabsTrigger value="loyalty">Loyalty Program</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                      <Send className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+2</span> from last month
                      </p>
                      <Progress value={80} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12,458</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+24.3%</span> from last month
                      </p>
                      <Progress value={75} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Open Rate</CardTitle>
                      <Mail className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">32.8%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+3.2%</span> from last month
                      </p>
                      <Progress value={65} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8.5%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+1.2%</span> from last month
                      </p>
                      <Progress value={42} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Active Marketing Campaigns</CardTitle>
                    <CardDescription>Currently running automated campaigns</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "New Arrival Notification",
                          type: "WhatsApp",
                          audience: "All Customers",
                          status: "Active",
                          sent: 2458,
                          opened: 1245,
                          converted: 328,
                          nextRun: "Daily at 10:00 AM",
                        },
                        {
                          name: "Abandoned Cart Reminder",
                          type: "SMS",
                          audience: "Cart Abandoners",
                          status: "Active",
                          sent: 1245,
                          opened: 876,
                          converted: 215,
                          nextRun: "1 hour after abandonment",
                        },
                        {
                          name: "Loyalty Rewards Update",
                          type: "Email",
                          audience: "Loyalty Members",
                          status: "Active",
                          sent: 3542,
                          opened: 2124,
                          converted: 425,
                          nextRun: "Weekly on Monday",
                        },
                        {
                          name: "Flash Sale Alert",
                          type: "WhatsApp",
                          audience: "High Spenders",
                          status: "Scheduled",
                          sent: 0,
                          opened: 0,
                          converted: 0,
                          nextRun: "May 30, 2024 at 9:00 AM",
                        },
                      ].map((campaign, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                            <div>
                              <h4 className="font-medium">{campaign.name}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">{campaign.type}</Badge>
                                <Badge variant="secondary">{campaign.audience}</Badge>
                                <Badge variant={campaign.status === "Active" ? "default" : "outline"}>
                                  {campaign.status}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                Pause
                              </Button>
                              <Button variant="outline" size="sm">
                                Duplicate
                              </Button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div className="text-center p-2 bg-muted/50 rounded-lg">
                              <p className="text-xs text-muted-foreground">Messages Sent</p>
                              <p className="text-lg font-medium">{campaign.sent.toLocaleString()}</p>
                            </div>
                            <div className="text-center p-2 bg-muted/50 rounded-lg">
                              <p className="text-xs text-muted-foreground">Opened</p>
                              <p className="text-lg font-medium">{campaign.opened.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground">
                                ({Math.round((campaign.opened / Math.max(campaign.sent, 1)) * 100)}%)
                              </p>
                            </div>
                            <div className="text-center p-2 bg-muted/50 rounded-lg">
                              <p className="text-xs text-muted-foreground">Converted</p>
                              <p className="text-lg font-medium">{campaign.converted.toLocaleString()}</p>
                              <p className="text-xs text-muted-foreground">
                                ({Math.round((campaign.converted / Math.max(campaign.sent, 1)) * 100)}%)
                              </p>
                            </div>
                            <div className="text-center p-2 bg-muted/50 rounded-lg">
                              <p className="text-xs text-muted-foreground">Next Run</p>
                              <p className="text-sm font-medium">{campaign.nextRun}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Create New Campaign</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Quick Campaign Creator</CardTitle>
                    <CardDescription>Quickly set up a new marketing campaign</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="campaign-name">Campaign Name</Label>
                          <Input id="campaign-name" placeholder="Enter campaign name" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="campaign-type">Campaign Type</Label>
                          <Select defaultValue="whatsapp">
                            <SelectTrigger id="campaign-type">
                              <SelectValue placeholder="Select campaign type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="whatsapp">WhatsApp</SelectItem>
                              <SelectItem value="sms">SMS</SelectItem>
                              <SelectItem value="email">Email</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="audience">Target Audience</Label>
                        <Select defaultValue="all">
                          <SelectTrigger id="audience">
                            <SelectValue placeholder="Select target audience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Customers</SelectItem>
                            <SelectItem value="loyal">Loyal Customers</SelectItem>
                            <SelectItem value="high">High Spenders</SelectItem>
                            <SelectItem value="inactive">Inactive Customers</SelectItem>
                            <SelectItem value="new">New Customers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message Content</Label>
                        <Textarea
                          id="message"
                          placeholder="Enter your message content here..."
                          className="min-h-[100px]"
                          defaultValue={`Hello ${customer_name}, we have new arrivals that match your style preferences! Check out our latest collection at ${store_link}. Use code ${discount_code} for 10% off your next purchase.`}
                        />
                        <p className="text-xs text-muted-foreground">
                          Use {customer_name}, {store_link}, {discount_code} as placeholders for personalization
                        </p>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="schedule">Schedule</Label>
                        <Select defaultValue="now">
                          <SelectTrigger id="schedule">
                            <SelectValue placeholder="Select schedule" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="now">Send Immediately</SelectItem>
                            <SelectItem value="later">Schedule for Later</SelectItem>
                            <SelectItem value="recurring">Set up Recurring</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Switch id="preview" />
                        <Label htmlFor="preview">Send test message to my number first</Label>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline">Save as Draft</Button>
                    <Button>Create Campaign</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="personalization" className="pt-4">
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Personalization Templates</CardTitle>
                    <CardDescription>Pre-defined templates for different customer segments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          name: "New Customer Welcome",
                          segment: "New Customers",
                          channel: "WhatsApp",
                          template:
                            "Welcome to THE BIG FASHION, {customer_name}! We're excited to have you join our family. Explore our latest collections and enjoy 15% off your first purchase with code {discount_code}.",
                          variables: ["customer_name", "discount_code"],
                          performance: "42% conversion rate",
                        },
                        {
                          name: "Loyal Customer Appreciation",
                          segment: "Loyal Customers",
                          channel: "WhatsApp + Email",
                          template:
                            "Thank you for being a valued customer, {customer_name}! As a token of our appreciation, we've added {loyalty_points} points to your account and a special gift awaits you on your next visit.",
                          variables: ["customer_name", "loyalty_points"],
                          performance: "58% engagement rate",
                        },
                        {
                          name: "Re-engagement Campaign",
                          segment: "Inactive Customers",
                          channel: "SMS",
                          template:
                            "We miss you, {customer_name}! It's been a while since your last visit. Come back and discover our new {category} collection with an exclusive {discount}% discount just for you.",
                          variables: ["customer_name", "category", "discount"],
                          performance: "24% win-back rate",
                        },
                        {
                          name: "Flash Sale Alert",
                          segment: "All Customers",
                          channel: "WhatsApp",
                          template:
                            "FLASH SALE ALERT! {customer_name}, enjoy up to {discount}% off on {category} for the next {hours} hours only! Shop now: {store_link}",
                          variables: ["customer_name", "discount", "category", "hours", "store_link"],
                          performance: "32% conversion rate",
                        },
                      ].map((template, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                            <div>
                              <h4 className="font-medium">{template.name}</h4>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline">{template.segment}</Badge>
                                <Badge variant="secondary">{template.channel}</Badge>
                                <Badge variant="outline" className="bg-green-500/10 text-green-500">
                                  {template.performance}
                                </Badge>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                Use Template
                              </Button>
                            </div>
                          </div>

                          <div className="bg-muted/50 p-3 rounded-lg text-sm">
                            <p>{template.template}</p>
                          </div>

                          <div className="mt-3">
                            <p className="text-xs text-muted-foreground">Variables:</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {template.variables.map((variable, i) => (
                                <Badge key={i} variant="outline">{`{${variable}}`}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4">Create New Template</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI Message Generator</CardTitle>
                    <CardDescription>Generate personalized messages with AI</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="message-type">Message Type</Label>
                          <Select defaultValue="promotional">
                            <SelectTrigger id="message-type">
                              <SelectValue placeholder="Select message type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="promotional">Promotional</SelectItem>
                              <SelectItem value="informational">Informational</SelectItem>
                              <SelectItem value="reminder">Reminder</SelectItem>
                              <SelectItem value="thank-you">Thank You</SelectItem>
                              <SelectItem value="win-back">Win-back</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tone">Message Tone</Label>
                          <Select defaultValue="friendly">
                            <SelectTrigger id="tone">
                              <SelectValue placeholder="Select tone" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="friendly">Friendly</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                              <SelectItem value="casual">Casual</SelectItem>
                              <SelectItem value="urgent">Urgent</SelectItem>
                              <SelectItem value="formal">Formal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="key-points">Key Points to Include</Label>
                        <Textarea
                          id="key-points"
                          placeholder="Enter key points to include in the message..."
                          className="min-h-[80px]"
                          defaultValue="New summer collection, 20% discount, limited time offer, free shipping on orders above ₹1,999"
                        />
                      </div>

                      <Button className="w-full">Generate Message</Button>

                      <div className="rounded-lg border p-4 mt-4">
                        <h4 className="font-medium mb-2">Generated Message</h4>
                        <div className="bg-muted/50 p-3 rounded-lg text-sm">
                          <p>
                            Hello {customer_name}, summer just got more exciting! 🌞 Our new summer collection has
                            arrived at THE BIG FASHION, and we've got something special for you. Enjoy 20% off on all
                            summer wear for a limited time only! Plus, get FREE shipping on orders above ₹1,999. Don't
                            miss out on these hot deals! Shop now: {store_link}
                          </p>
                        </div>
                        <div className="flex justify-end mt-3">
                          <Button variant="outline" size="sm">
                            Regenerate
                          </Button>
                          <Button size="sm" className="ml-2">
                            Use This Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="loyalty" className="pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Loyalty Members</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,245</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+15.8%</span> from last month
                      </p>
                      <Progress value={78} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Points Issued</CardTitle>
                      <Gift className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">45,780</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+22.3%</span> from last month
                      </p>
                      <Progress value={85} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Points Redeemed</CardTitle>
                      <Tag className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">28,450</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+18.7%</span> from last month
                      </p>
                      <Progress value={62} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Redemption Rate</CardTitle>
                      <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">62.1%</div>
                      <p className="text-xs text-muted-foreground">
                        <span className="text-green-500 font-medium">+3.5%</span> from last month
                      </p>
                      <Progress value={62} className="h-1 mt-3" />
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Loyalty Program Management</CardTitle>
                    <CardDescription>Configure and manage your loyalty program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="tiers">
                      <TabsList className="mb-4">
                        <TabsTrigger value="tiers">Loyalty Tiers</TabsTrigger>
                        <TabsTrigger value="rewards">Rewards</TabsTrigger>
                        <TabsTrigger value="campaigns">Loyalty Campaigns</TabsTrigger>
                      </TabsList>

                      <TabsContent value="tiers">
                        <div className="space-y-4">
                          {[
                            {
                              name: "Silver",
                              criteria: "0-999 points",
                              members: 845,
                              benefits: ["5% discount on all purchases", "Birthday gift", "Free standard shipping"],
                              color: "bg-gray-200",
                            },
                            {
                              name: "Gold",
                              criteria: "1,000-4,999 points",
                              members: 325,
                              benefits: [
                                "10% discount on all purchases",
                                "Birthday gift",
                                "Free express shipping",
                                "Early access to sales",
                              ],
                              color: "bg-yellow-200",
                            },
                            {
                              name: "Platinum",
                              criteria: "5,000+ points",
                              members: 75,
                              benefits: [
                                "15% discount on all purchases",
                                "Premium birthday gift",
                                "Free express shipping",
                                "Early access to sales",
                                "Dedicated customer service",
                                "Exclusive events",
                              ],
                              color: "bg-purple-200",
                            },
                          ].map((tier, index) => (
                            <div key={index} className="rounded-lg border p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <div className={`h-8 w-8 rounded-full ${tier.color}`}></div>
                                <div>
                                  <h4 className="font-medium">{tier.name} Tier</h4>
                                  <p className="text-xs text-muted-foreground">{tier.criteria}</p>
                                </div>
                                <Badge className="ml-auto">{tier.members} members</Badge>
                              </div>

                              <div className="space-y-2">
                                <p className="text-sm font-medium">Benefits:</p>
                                <ul className="text-sm space-y-1">
                                  {tier.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="flex justify-end mt-3">
                                <Button variant="outline" size="sm">
                                  Edit Tier
                                </Button>
                              </div>
                            </div>
                          ))}
                          <Button className="w-full">Add New Tier</Button>
                        </div>
                      </TabsContent>

                      <TabsContent value="rewards">
                        <div className="space-y-4">
                          {[
                            {
                              name: "₹500 Off Coupon",
                              points: 1000,
                              redemptions: 245,
                              status: "Active",
                              expiry: "None",
                            },
                            {
                              name: "Free Express Shipping",
                              points: 500,
                              redemptions: 378,
                              status: "Active",
                              expiry: "None",
                            },
                            {
                              name: "Exclusive Product Access",
                              points: 2000,
                              redemptions: 124,
                              status: "Active",
                              expiry: "None",
                            },
                            {
                              name: "Summer Collection Discount",
                              points: 1500,
                              redemptions: 87,
                              status: "Limited Time",
                              expiry: "Jun 30, 2024",
                            },
                          ].map((reward, index) => (
                            <div key={index} className="rounded-lg border p-4">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                <div>
                                  <h4 className="font-medium">{reward.name}</h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge variant="outline">{reward.points} points</Badge>
                                    <Badge variant="secondary">{reward.redemptions} redemptions</Badge>
                                    <Badge variant={reward.status === "Active" ? "default" : "destructive"}>
                                      {reward.status}
                                    </Badge>
                                    {reward.expiry !== "None" && (
                                      <Badge variant="outline">
                                        <Clock className="h-3 w-3 mr-1" />
                                        Expires: {reward.expiry}
                                      </Badge>
                                    )}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    Edit
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    Disable
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                          <Button className="w-full">Add New Reward</Button>
                        </div>
                      </TabsContent>

                      <TabsContent value="campaigns">
                        <div className="space-y-4">
                          {[
                            {
                              name: "Double Points Weekend",
                              description: "Earn 2x points on all purchases this weekend",
                              status: "Scheduled",
                              startDate: "Jun 3, 2024",
                              endDate: "Jun 5, 2024",
                              audience: "All Members",
                            },
                            {
                              name: "Birthday Month Bonus",
                              description: "Extra 500 points for purchases during birthday month",
                              status: "Active",
                              startDate: "Jan 1, 2024",
                              endDate: "Dec 31, 2024",
                              audience: "All Members",
                            },
                            {
                              name: "Tier Upgrade Challenge",
                              description: "Complete 3 purchases to fast-track to next tier",
                              status: "Active",
                              startDate: "May 1, 2024",
                              endDate: "Jul 31, 2024",
                              audience: "Silver & Gold Members",
                            },
                            {
                              name: "Referral Bonus",
                              description: "Earn 1000 points for each friend who joins",
                              status: "Active",
                              startDate: "Apr 1, 2024",
                              endDate: "None",
                              audience: "All Members",
                            },
                          ].map((campaign, index) => (
                            <div key={index} className="rounded-lg border p-4">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                <div>
                                  <h4 className="font-medium">{campaign.name}</h4>
                                  <p className="text-sm text-muted-foreground">{campaign.description}</p>
                                  <div className="flex items-center gap-2 mt-1">
                                    <Badge variant={campaign.status === "Active" ? "default" : "outline"}>
                                      {campaign.status}
                                    </Badge>
                                    <Badge variant="secondary">{campaign.audience}</Badge>
                                    <Badge variant="outline">
                                      <Calendar className="h-3 w-3 mr-1" />
                                      {campaign.startDate} to{" "}
                                      {campaign.endDate === "None" ? "Ongoing" : campaign.endDate}
                                    </Badge>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    Edit
                                  </Button>
                                  <Button variant="outline" size="sm">
                                    Pause
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}
                          <Button className="w-full">Create New Campaign</Button>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Loyalty Program Insights</CardTitle>
                    <CardDescription>AI-generated insights about your loyalty program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Tier Optimization</h4>
                        <p className="text-sm text-muted-foreground">
                          Increasing the Gold tier threshold to 1,500 points could motivate 35% of Silver members to
                          make additional purchases to reach the next tier.
                        </p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Reward Preferences</h4>
                        <p className="text-sm text-muted-foreground">
                          Exclusive product access rewards have a 28% higher redemption rate than discount coupons among
                          Platinum members.
                        </p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Engagement Opportunity</h4>
                        <p className="text-sm text-muted-foreground">
                          42% of members have points that will expire in the next 30 days. A reminder campaign could
                          increase redemption by up to 65%.
                        </p>
                      </div>
                      <div className="rounded-lg bg-primary/10 p-4">
                        <h4 className="font-semibold">Referral Potential</h4>
                        <p className="text-sm text-muted-foreground">
                          Loyal customers are 4x more likely to refer friends. Increasing the referral bonus to 1,500
                          points could boost referrals by 40%.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { User, Store, Upload, Lock, CreditCard, Bell, Shield, MapPin, Building } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function ProfilePage() {
  const [isSaving, setIsSaving] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  const handleSave = async () => {
    setIsSaving(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSaving(false)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
        <p className="text-muted-foreground text-lg">View and update your personal and store information</p>
      </div>

      <Tabs defaultValue="personal" value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid grid-cols-4 md:w-[600px]">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <FadeInSection>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Personal Information
                </CardTitle>
                <CardDescription>Update your personal details and contact information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col items-center text-center sm:flex-row sm:text-left sm:items-start gap-6">
                  <div className="relative">
                    <Avatar className="h-24 w-24 border-2 border-primary/20">
                      <AvatarImage
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Rajesh Sharma"
                      />
                      <AvatarFallback className="bg-primary/10 text-primary text-2xl">RS</AvatarFallback>
                    </Avatar>
                    <Button size="icon" variant="outline" className="absolute bottom-0 right-0 rounded-full h-8 w-8">
                      <Upload className="h-4 w-4" />
                      <span className="sr-only">Upload new photo</span>
                    </Button>
                  </div>

                  <div className="space-y-4 flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <Label htmlFor="firstName" className="text-base">
                          First Name
                        </Label>
                        <Input id="firstName" defaultValue="Rajesh" className="text-lg py-6" />
                      </div>

                      <div className="space-y-1">
                        <Label htmlFor="lastName" className="text-base">
                          Last Name
                        </Label>
                        <Input id="lastName" defaultValue="Sharma" className="text-lg py-6" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="email" className="text-base">
                        Email Address
                      </Label>
                      <Input id="email" defaultValue="rajesh@jfh.com" className="text-lg py-6" />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="phone" className="text-base">
                        Phone Number
                      </Label>
                      <Input id="phone" defaultValue="+91 98765 43210" className="text-lg py-6" />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Address Information
                </CardTitle>
                <CardDescription>Update your personal address details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="address" className="text-base">
                    Street Address
                  </Label>
                  <Input id="address" defaultValue="123 Fashion Street" className="text-lg py-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="city" className="text-base">
                      City
                    </Label>
                    <Input id="city" defaultValue="Jaipur" className="text-lg py-6" />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="state" className="text-base">
                      State
                    </Label>
                    <Select defaultValue="rajasthan">
                      <SelectTrigger id="state" className="text-lg py-6">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="pincode" className="text-base">
                      PIN Code
                    </Label>
                    <Input id="pincode" defaultValue="302001" className="text-lg py-6" />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="country" className="text-base">
                      Country
                    </Label>
                    <Select defaultValue="india">
                      <SelectTrigger id="country" className="text-lg py-6">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="india">India</SelectItem>
                        <SelectItem value="usa">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>
        </TabsContent>

        <TabsContent value="business" className="space-y-4">
          <FadeInSection>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="h-5 w-5" />
                  Business Information
                </CardTitle>
                <CardDescription>Update your business details and store information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="businessName" className="text-base">
                    Business Name
                  </Label>
                  <Input id="businessName" defaultValue="Jaipur Fashion House" className="text-lg py-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="businessType" className="text-base">
                      Business Type
                    </Label>
                    <Select defaultValue="retail">
                      <SelectTrigger id="businessType" className="text-lg py-6">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="wholesale">Wholesale</SelectItem>
                        <SelectItem value="manufacturing">Manufacturing</SelectItem>
                        <SelectItem value="distribution">Distribution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="gstNumber" className="text-base">
                      GST Number
                    </Label>
                    <Input id="gstNumber" defaultValue="22AAAAA0000A1Z5" className="text-lg py-6" />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label htmlFor="businessDescription" className="text-base">
                    Business Description
                  </Label>
                  <Textarea
                    id="businessDescription"
                    defaultValue="Jaipur Fashion House is a premium retailer of traditional and modern clothing, specializing in high-quality fabrics and designs."
                    className="min-h-[100px] text-base"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="businessWebsite" className="text-base">
                    Business Website
                  </Label>
                  <Input id="businessWebsite" defaultValue="www.jaipurfashionhouse.com" className="text-lg py-6" />
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Business Address
                </CardTitle>
                <CardDescription>Update your business location and contact details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="businessAddress" className="text-base">
                    Street Address
                  </Label>
                  <Input id="businessAddress" defaultValue="123 Fashion Street" className="text-lg py-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="businessCity" className="text-base">
                      City
                    </Label>
                    <Input id="businessCity" defaultValue="Jaipur" className="text-lg py-6" />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="businessState" className="text-base">
                      State
                    </Label>
                    <Select defaultValue="rajasthan">
                      <SelectTrigger id="businessState" className="text-lg py-6">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                        <SelectItem value="delhi">Delhi</SelectItem>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="businessPincode" className="text-base">
                      PIN Code
                    </Label>
                    <Input id="businessPincode" defaultValue="302001" className="text-lg py-6" />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="businessPhone" className="text-base">
                      Business Phone
                    </Label>
                    <Input id="businessPhone" defaultValue="+91 141 2345678" className="text-lg py-6" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <FadeInSection>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="h-5 w-5" />
                  Password & Security
                </CardTitle>
                <CardDescription>Update your password and security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="currentPassword" className="text-base">
                    Current Password
                  </Label>
                  <Input id="currentPassword" type="password" className="text-lg py-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <Label htmlFor="newPassword" className="text-base">
                      New Password
                    </Label>
                    <Input id="newPassword" type="password" className="text-lg py-6" />
                  </div>

                  <div className="space-y-1">
                    <Label htmlFor="confirmPassword" className="text-base">
                      Confirm New Password
                    </Label>
                    <Input id="confirmPassword" type="password" className="text-lg py-6" />
                  </div>
                </div>

                <div className="pt-2">
                  <h3 className="text-base font-medium mb-2">Password Requirements:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      Minimum 8 characters
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      At least one uppercase letter
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      At least one number
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-green-500" />
                      At least one special character
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Update Password"}
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Two-Factor Authentication
                </CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="text-base font-medium">Enable Two-Factor Authentication</h3>
                    <p className="text-sm text-muted-foreground">
                      Receive a verification code on your phone when signing in
                    </p>
                  </div>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </FadeInSection>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4">
          <FadeInSection>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Manage how you receive notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">Order Updates</h3>
                      <p className="text-sm text-muted-foreground">Receive notifications about your order status</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">New Products</h3>
                      <p className="text-sm text-muted-foreground">Get notified when new products are added</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">Promotions & Offers</h3>
                      <p className="text-sm text-muted-foreground">Receive special offers and discount notifications</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">Email Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <h3 className="text-base font-medium">SMS Notifications</h3>
                      <p className="text-sm text-muted-foreground">Receive notifications via SMS</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Preferences"}
                </Button>
              </CardFooter>
            </Card>
          </FadeInSection>

          <FadeInSection delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Payment Methods
                </CardTitle>
                <CardDescription>Manage your payment methods</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-md border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                        <CreditCard className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-medium">HDFC Bank</h3>
                        <p className="text-sm text-muted-foreground">**** **** **** 1234</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <CreditCard className="h-4 w-4 mr-2" />
                  Add New Payment Method
                </Button>
              </CardContent>
            </Card>
          </FadeInSection>
        </TabsContent>
      </Tabs>
    </div>
  )
}

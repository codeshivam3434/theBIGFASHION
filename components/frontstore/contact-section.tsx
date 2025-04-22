"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"

interface ContactSectionProps {
  preview?: boolean
}

export function ContactSection({ preview = false }: ContactSectionProps) {
  const [contactInfo, setContactInfo] = useState({
    address: "123 Fashion Street, Mumbai, Maharashtra 400001",
    phone: "+91 98765 43210",
    email: "contact@fashionelegance.com",
    website: "www.fashionelegance.com",
    hours: "Monday-Saturday: 10:00 AM - 8:00 PM\nSunday: 11:00 AM - 6:00 PM",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0256429701047!2d72.82766091538558!3d19.076912687087776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b888ae67fd%3A0xe0e5fc68529dba36!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactInfo({ ...contactInfo, [name]: value })
  }

  if (preview) {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Get in touch or visit us in-store</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">{contactInfo.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">{contactInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">{contactInfo.email}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Website</h3>
                  <p className="text-muted-foreground">{contactInfo.website}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary" />
                <div>
                  <h3 className="font-medium">Store Hours</h3>
                  <p className="text-muted-foreground whitespace-pre-line">{contactInfo.hours}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="h-80 rounded-lg overflow-hidden">
            <iframe
              src={contactInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location"
            ></iframe>
          </div>
        </div>
      </section>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
        <CardDescription>Update your store's contact details and location</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="address">Store Address</Label>
            <Textarea
              id="address"
              name="address"
              value={contactInfo.address}
              onChange={handleChange}
              placeholder="Enter your store address"
              rows={2}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                value={contactInfo.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                value={contactInfo.email}
                onChange={handleChange}
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              name="website"
              value={contactInfo.website}
              onChange={handleChange}
              placeholder="Enter your website URL"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="hours">Store Hours</Label>
            <Textarea
              id="hours"
              name="hours"
              value={contactInfo.hours}
              onChange={handleChange}
              placeholder="Enter your store hours"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mapEmbed">Google Maps Embed URL</Label>
            <Input
              id="mapEmbed"
              name="mapEmbed"
              value={contactInfo.mapEmbed}
              onChange={handleChange}
              placeholder="Enter Google Maps embed URL"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Get this from Google Maps by clicking "Share" and then "Embed a map"
            </p>
          </div>

          <div className="h-60 rounded-lg overflow-hidden border">
            <iframe
              src={contactInfo.mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Store Location Preview"
            ></iframe>
          </div>

          <Button className="w-full">Save Contact Information</Button>
        </div>
      </CardContent>
    </Card>
  )
}

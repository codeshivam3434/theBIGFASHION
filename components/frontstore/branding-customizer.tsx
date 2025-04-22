"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Check } from "lucide-react"
import Image from "next/image"

export function BrandingCustomizer() {
  const [branding, setBranding] = useState({
    storeName: "Fashion Elegance",
    tagline: "Premium Clothing for Every Occasion",
    description:
      "Fashion Elegance offers a curated selection of premium clothing and accessories for men and women. Our collections blend timeless elegance with contemporary trends, ensuring you always look your best.",
    logo: "/placeholder.svg?height=200&width=200",
    banner: "/placeholder.svg?height=600&width=1200",
    primaryColor: "#4f46e5",
    secondaryColor: "#f97316",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setBranding({ ...branding, [name]: value })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Branding Customization</CardTitle>
        <CardDescription>Customize your store's branding and appearance</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="storeName">Store Name</Label>
              <Input
                id="storeName"
                name="storeName"
                value={branding.storeName}
                onChange={handleChange}
                placeholder="Enter your store name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                name="tagline"
                value={branding.tagline}
                onChange={handleChange}
                placeholder="Enter your store tagline"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Store Description</Label>
            <Textarea
              id="description"
              name="description"
              value={branding.description}
              onChange={handleChange}
              placeholder="Enter a brief description of your store"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Store Logo</Label>
              <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
                <div className="relative h-32 w-32 rounded-full overflow-hidden border">
                  <Image src={branding.logo || "/placeholder.svg"} alt="Store logo" fill className="object-cover" />
                </div>
                <Button variant="outline" type="button">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Logo
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Recommended size: 200x200 pixels. Square format works best.
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Banner Image</Label>
              <div className="flex flex-col items-center gap-4 p-4 border rounded-lg">
                <div className="relative h-32 w-full rounded overflow-hidden border">
                  <Image src={branding.banner || "/placeholder.svg"} alt="Store banner" fill className="object-cover" />
                </div>
                <Button variant="outline" type="button">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Banner
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Recommended size: 1200x400 pixels. This will appear at the top of your store page.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primaryColor">Primary Color</Label>
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded border" style={{ backgroundColor: branding.primaryColor }} />
                <Input
                  id="primaryColor"
                  name="primaryColor"
                  type="text"
                  value={branding.primaryColor}
                  onChange={handleChange}
                  placeholder="#000000"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondaryColor">Secondary Color</Label>
              <div className="flex gap-2">
                <div className="h-10 w-10 rounded border" style={{ backgroundColor: branding.secondaryColor }} />
                <Input
                  id="secondaryColor"
                  name="secondaryColor"
                  type="text"
                  value={branding.secondaryColor}
                  onChange={handleChange}
                  placeholder="#000000"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Preview</h3>
            <div className="border rounded-lg overflow-hidden">
              <div className="relative h-48 w-full">
                <Image src={branding.banner || "/placeholder.svg"} alt="Banner preview" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                  <div className="relative h-16 w-16 mr-4 rounded-full overflow-hidden border-4 border-white">
                    <Image src={branding.logo || "/placeholder.svg"} alt="Logo preview" fill className="object-cover" />
                  </div>
                  <div className="text-white">
                    <h1 className="text-2xl font-bold">{branding.storeName}</h1>
                    <p className="text-sm opacity-90">{branding.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div
                  className="p-2 rounded-md text-white text-center mb-2"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  Primary Color Button
                </div>
                <div
                  className="p-2 rounded-md text-white text-center"
                  style={{ backgroundColor: branding.secondaryColor }}
                >
                  Secondary Color Button
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" />
            Save Branding Changes
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

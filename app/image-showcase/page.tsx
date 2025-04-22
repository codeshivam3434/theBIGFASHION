"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ImageGallery } from "@/components/ui/image-gallery"
import { ImageShowcase } from "@/components/ui/image-showcase"
import { imageRepository } from "@/lib/image-repository"
import { Button } from "@/components/ui/button"

export default function ImageShowcasePage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof imageRepository>("product")

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">High-Definition Image Showcase</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore our collection of high-quality images optimized for web performance
        </p>
      </div>

      <Tabs defaultValue="gallery" className="w-full mb-12">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="showcase">Showcase</TabsTrigger>
          <TabsTrigger value="individual">Individual</TabsTrigger>
        </TabsList>

        <TabsContent value="gallery" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Image Gallery</CardTitle>
              <CardDescription>Browse through multiple images with our interactive gallery component</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Product Gallery</h3>
                  <ImageGallery images={imageRepository.product} aspectRatio="aspect-[4/3]" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Service Gallery</h3>
                  <ImageGallery images={imageRepository.service} aspectRatio="aspect-[4/3]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="showcase" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Image Showcase</CardTitle>
              <CardDescription>Automatic slideshow of images from different categories</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ImageShowcase
                  category="product"
                  title="Product Showcase"
                  description="Our latest product collection"
                />
                <ImageShowcase
                  category="promotion"
                  title="Promotion Showcase"
                  description="Current promotions and events"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="individual" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Individual Images</CardTitle>
              <CardDescription>Browse images by category with our optimized image component</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {(Object.keys(imageRepository) as Array<keyof typeof imageRepository>).map((category) => (
                    <Button
                      key={category}
                      variant={category === activeCategory ? "default" : "outline"}
                      onClick={() => setActiveCategory(category)}
                      className="capitalize"
                    >
                      {category}
                    </Button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {imageRepository[activeCategory].map((image, index) => (
                    <div key={index} className="rounded-lg overflow-hidden">
                      <OptimizedImage
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        aspectRatio={
                          activeCategory === "testimonial" || activeCategory === "team"
                            ? "aspect-square"
                            : "aspect-[4/3]"
                        }
                      />
                      <div className="p-2 text-sm text-muted-foreground">{image.alt}</div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-12">
        <CardHeader>
          <CardTitle>Image Optimization Features</CardTitle>
          <CardDescription>Our image system includes several features to ensure optimal performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Responsive Images",
                description: "Images automatically adapt to different screen sizes and device types",
              },
              {
                title: "Lazy Loading",
                description: "Images load only when they enter the viewport, improving initial page load time",
              },
              {
                title: "Blur-up Loading",
                description: "Low-quality image placeholders provide a smooth loading experience",
              },
              {
                title: "Fallback Support",
                description: "Automatic fallback to placeholder images if the original fails to load",
              },
              {
                title: "Optimized Formats",
                description: "Images are served in modern formats like WebP when supported by the browser",
              },
              {
                title: "Centralized Management",
                description: "All images are organized in a central repository for easy maintenance",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-muted/50 p-4 rounded-lg">
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

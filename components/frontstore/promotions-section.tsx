"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Calendar, CalendarIcon, Edit, Plus, Trash2 } from "lucide-react"
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { getCategoryImage } from "@/lib/image-repository"

// Mock promotions data
const mockPromotions = [
  {
    id: "1",
    title: "Summer Sale",
    description: "Get up to 50% off on all summer clothing items",
    image: getCategoryImage("promotion", 0).src,
    startDate: new Date(2023, 5, 1).toISOString(),
    endDate: new Date(2023, 7, 31).toISOString(),
    type: "sale",
  },
  {
    id: "2",
    title: "Fashion Show Event",
    description: "Join us for our annual fashion show featuring the latest trends",
    image: getCategoryImage("promotion", 1).src,
    startDate: new Date(2023, 8, 15).toISOString(),
    endDate: new Date(2023, 8, 15).toISOString(),
    type: "event",
  },
  {
    id: "3",
    title: "New Collection Arrival",
    description: "Check out our new autumn collection now available in store",
    image: getCategoryImage("promotion", 2).src,
    startDate: new Date(2023, 8, 1).toISOString(),
    endDate: new Date(2023, 10, 30).toISOString(),
    type: "announcement",
  },
]

interface PromotionsSectionProps {
  preview?: boolean
}

export function PromotionsSection({ preview = false }: PromotionsSectionProps) {
  const [promotions, setPromotions] = useState(mockPromotions)
  const [activePromotion, setActivePromotion] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddPromotion = (promotion: any) => {
    setPromotions([...promotions, { ...promotion, id: Date.now().toString() }])
    setIsAddDialogOpen(false)
  }

  const handleEditPromotion = (promotion: any) => {
    setPromotions(promotions.map((p) => (p.id === promotion.id ? promotion : p)))
    setIsEditDialogOpen(false)
  }

  const handleDeletePromotion = (id: string) => {
    setPromotions(promotions.filter((p) => p.id !== id))
  }

  if (preview) {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Promotions & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promotion) => (
            <Card key={promotion.id} className="overflow-hidden">
              <div className="relative">
                <OptimizedImage
                  src={promotion.image || "/placeholder.svg"}
                  alt={promotion.title}
                  width={400}
                  height={300}
                  aspectRatio="aspect-[4/3]"
                />
                <div className="absolute top-2 right-2">
                  <Badge
                    className={cn(
                      promotion.type === "sale"
                        ? "bg-green-500"
                        : promotion.type === "event"
                          ? "bg-blue-500"
                          : "bg-amber-500",
                    )}
                  >
                    {promotion.type === "sale" ? "Sale" : promotion.type === "event" ? "Event" : "Announcement"}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{promotion.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(promotion.startDate).toLocaleDateString() ===
                    new Date(promotion.endDate).toLocaleDateString()
                      ? format(new Date(promotion.startDate), "MMMM d, yyyy")
                      : `${format(new Date(promotion.startDate), "MMMM d")} - ${format(new Date(promotion.endDate), "MMMM d, yyyy")}`}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{promotion.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Promotions Management</CardTitle>
          <CardDescription>Add, edit, and manage your promotions, events, and announcements</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Promotion
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <PromotionForm onSubmit={handleAddPromotion} onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {promotions.map((promotion) => (
            <Card key={promotion.id}>
              <div className="flex flex-col md:flex-row">
                <div className="relative md:w-1/3">
                  <OptimizedImage
                    src={promotion.image || "/placeholder.svg"}
                    alt={promotion.title}
                    width={400}
                    height={300}
                    aspectRatio="aspect-[4/3]"
                    className="h-full"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={cn(
                        promotion.type === "sale"
                          ? "bg-green-500"
                          : promotion.type === "event"
                            ? "bg-blue-500"
                            : "bg-amber-500",
                      )}
                    >
                      {promotion.type === "sale" ? "Sale" : promotion.type === "event" ? "Event" : "Announcement"}
                    </Badge>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{promotion.title}</h3>
                      <p className="text-sm text-muted-foreground flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(promotion.startDate).toLocaleDateString() ===
                        new Date(promotion.endDate).toLocaleDateString()
                          ? format(new Date(promotion.startDate), "MMMM d, yyyy")
                          : `${format(new Date(promotion.startDate), "MMMM d")} - ${format(new Date(promotion.endDate), "MMMM d, yyyy")}`}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setActivePromotion(promotion)
                          setIsEditDialogOpen(true)
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeletePromotion(promotion.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2">{promotion.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          {activePromotion && (
            <PromotionForm
              promotion={activePromotion}
              onSubmit={handleEditPromotion}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}

function PromotionForm({
  promotion,
  onSubmit,
  onCancel,
}: {
  promotion?: any
  onSubmit: (promotion: any) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState(
    promotion || {
      title: "",
      description: "",
      image: "/placeholder.svg?height=300&width=300",
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      type: "sale",
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (name: string, date: Date | undefined) => {
    if (date) {
      setFormData({ ...formData, [name]: date.toISOString() })
    }
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>{promotion ? "Edit Promotion" : "Add New Promotion"}</DialogTitle>
        <DialogDescription>
          {promotion
            ? "Update the details of your existing promotion"
            : "Fill in the details to add a new promotion to your store"}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="title">Promotion Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter promotion title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter promotion description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type">Promotion Type</Label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={(e) => handleSelectChange("type", e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="sale">Sale</option>
              <option value="event">Event</option>
              <option value="announcement">Announcement</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Start Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.startDate ? format(new Date(formData.startDate), "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={formData.startDate ? new Date(formData.startDate) : undefined}
                  onSelect={(date) => handleDateChange("startDate", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="space-y-2">
            <Label>End Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.endDate ? format(new Date(formData.endDate), "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <CalendarComponent
                  mode="single"
                  selected={formData.endDate ? new Date(formData.endDate) : undefined}
                  onSelect={(date) => handleDateChange("endDate", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <Label>Promotion Image</Label>
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 rounded border overflow-hidden">
              <OptimizedImage
                src={formData.image || "/placeholder.svg"}
                alt="Promotion image"
                width={96}
                height={96}
                aspectRatio="aspect-square"
              />
            </div>
            <Button variant="outline" type="button">
              <Plus className="mr-2 h-4 w-4" />
              Upload Image
            </Button>
          </div>
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={() => onSubmit(formData)}>{promotion ? "Save Changes" : "Add Promotion"}</Button>
      </DialogFooter>
    </>
  )
}

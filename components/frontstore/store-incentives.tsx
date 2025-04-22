"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Edit, Plus, Trash2, Tag } from "lucide-react"
import Image from "next/image"

// Mock incentives data
const mockIncentives = [
  {
    id: "1",
    title: "In-Store Exclusive: 20% Off First Purchase",
    description: "Visit our physical store and get 20% off your first purchase when you show this offer",
    image: "/placeholder.svg?height=300&width=300",
    type: "discount",
    code: "INSTORE20",
  },
  {
    id: "2",
    title: "Free Style Consultation",
    description: "Book a free 30-minute style consultation with our fashion experts in-store",
    image: "/placeholder.svg?height=300&width=300",
    type: "service",
    code: "",
  },
  {
    id: "3",
    title: "Weekend Fashion Workshop",
    description: "Join our weekend workshop on latest fashion trends and styling tips",
    image: "/placeholder.svg?height=300&width=300",
    type: "event",
    code: "",
  },
]

interface StoreIncentivesProps {
  preview?: boolean
}

export function StoreIncentives({ preview = false }: StoreIncentivesProps) {
  const [incentives, setIncentives] = useState(mockIncentives)
  const [activeIncentive, setActiveIncentive] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddIncentive = (incentive: any) => {
    setIncentives([...incentives, { ...incentive, id: Date.now().toString() }])
    setIsAddDialogOpen(false)
  }

  const handleEditIncentive = (incentive: any) => {
    setIncentives(incentives.map((i) => (i.id === incentive.id ? incentive : i)))
    setIsEditDialogOpen(false)
  }

  const handleDeleteIncentive = (id: string) => {
    setIncentives(incentives.filter((i) => i.id !== id))
  }

  if (preview) {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">In-Store Exclusives</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {incentives.map((incentive) => (
            <Card key={incentive.id} className="overflow-hidden">
              <div className="relative h-48 w-full">
                <Image
                  src={incentive.image || "/placeholder.svg"}
                  alt={incentive.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge
                    className={
                      incentive.type === "discount"
                        ? "bg-green-500"
                        : incentive.type === "service"
                          ? "bg-blue-500"
                          : "bg-purple-500"
                    }
                  >
                    {incentive.type === "discount" ? "Discount" : incentive.type === "service" ? "Service" : "Event"}
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{incentive.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{incentive.description}</p>
                {incentive.code && (
                  <div className="flex items-center justify-between p-2 bg-muted rounded-md">
                    <div className="flex items-center">
                      <Tag className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">Code: {incentive.code}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                  </div>
                )}
              </CardContent>
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
          <CardTitle>In-Store Incentives</CardTitle>
          <CardDescription>Create exclusive offers to drive customers to your physical store</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Incentive
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <IncentiveForm onSubmit={handleAddIncentive} onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {incentives.map((incentive) => (
            <Card key={incentive.id}>
              <div className="flex flex-col md:flex-row">
                <div className="relative h-48 md:h-auto md:w-1/3">
                  <Image
                    src={incentive.image || "/placeholder.svg"}
                    alt={incentive.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      className={
                        incentive.type === "discount"
                          ? "bg-green-500"
                          : incentive.type === "service"
                            ? "bg-blue-500"
                            : "bg-purple-500"
                      }
                    >
                      {incentive.type === "discount" ? "Discount" : incentive.type === "service" ? "Service" : "Event"}
                    </Badge>
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{incentive.title}</h3>
                      {incentive.code && (
                        <p className="text-sm text-muted-foreground flex items-center">
                          <Tag className="h-4 w-4 mr-2" />
                          Code: {incentive.code}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setActiveIncentive(incentive)
                          setIsEditDialogOpen(true)
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteIncentive(incentive.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2">{incentive.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          {activeIncentive && (
            <IncentiveForm
              incentive={activeIncentive}
              onSubmit={handleEditIncentive}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}

function IncentiveForm({
  incentive,
  onSubmit,
  onCancel,
}: {
  incentive?: any
  onSubmit: (incentive: any) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState(
    incentive || {
      title: "",
      description: "",
      image: "/placeholder.svg?height=300&width=300",
      type: "discount",
      code: "",
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>{incentive ? "Edit Incentive" : "Add New Incentive"}</DialogTitle>
        <DialogDescription>
          {incentive
            ? "Update the details of your existing in-store incentive"
            : "Create a new incentive to attract customers to your physical store"}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="title">Incentive Title</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter incentive title"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter incentive description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type">Incentive Type</Label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={(e) => handleSelectChange("type", e.target.value)}
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="discount">Discount</option>
              <option value="service">Service</option>
              <option value="event">Event</option>
            </select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="code">Promo Code (if applicable)</Label>
            <Input id="code" name="code" value={formData.code} onChange={handleChange} placeholder="Enter promo code" />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Incentive Image</Label>
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 rounded border overflow-hidden">
              <Image src={formData.image || "/placeholder.svg"} alt="Incentive image" fill className="object-cover" />
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
        <Button onClick={() => onSubmit(formData)}>{incentive ? "Save Changes" : "Add Incentive"}</Button>
      </DialogFooter>
    </>
  )
}

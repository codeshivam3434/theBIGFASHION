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
import { Clock, Edit, Plus, Trash2 } from "lucide-react"
// Update the imports at the top to include our new components
import { OptimizedImage } from "@/components/ui/optimized-image"
import { getCategoryImage } from "@/lib/image-repository"

// Replace the mockServices array with this updated version that uses our image repository
const mockServices = [
  {
    id: "1",
    name: "Custom Tailoring",
    description: "Get your clothes perfectly fitted with our expert tailoring service",
    price: "Starting at ₹500",
    image: getCategoryImage("service", 0).src,
    hours: "Mon-Fri: 10AM-6PM",
  },
  {
    id: "2",
    name: "Style Consultation",
    description: "Personal styling advice from our fashion experts",
    price: "₹1,500 per session",
    image: getCategoryImage("service", 1).src,
    hours: "By appointment only",
  },
  {
    id: "3",
    name: "Express Alterations",
    description: "Quick alterations while you wait or shop",
    price: "Varies by service",
    image: getCategoryImage("service", 2).src,
    hours: "Mon-Sat: 11AM-7PM",
  },
]

interface ServicesSectionProps {
  preview?: boolean
}

export function ServicesSection({ preview = false }: ServicesSectionProps) {
  const [services, setServices] = useState(mockServices)
  const [activeService, setActiveService] = useState<any>(null)
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

  const handleAddService = (service: any) => {
    setServices([...services, { ...service, id: Date.now().toString() }])
    setIsAddDialogOpen(false)
  }

  const handleEditService = (service: any) => {
    setServices(services.map((s) => (s.id === service.id ? service : s)))
    setIsEditDialogOpen(false)
  }

  const handleDeleteService = (id: string) => {
    setServices(services.filter((s) => s.id !== id))
  }

  if (preview) {
    return (
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id}>
              {/* Replace the Image component in the preview section with OptimizedImage */}
              {/* Find this code in the preview section: */}
              {/* <div className="relative h-48 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
              </div> */}

              {/* Replace it with: */}
              <div className="relative">
                <OptimizedImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={400}
                  height={300}
                  aspectRatio="aspect-[4/3]"
                />
              </div>
              <CardHeader>
                <CardTitle>{service.name}</CardTitle>
                <CardDescription>{service.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
                <div className="flex items-center mt-4 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2" />
                  {service.hours}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Book Appointment
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
          <CardTitle>Services Management</CardTitle>
          <CardDescription>Add, edit, and manage the services you offer</CardDescription>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent>
            <ServiceForm onSubmit={handleAddService} onCancel={() => setIsAddDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {services.map((service) => (
            <Card key={service.id}>
              <div className="flex flex-col md:flex-row">
                {/* Also replace the Image component in the service card with OptimizedImage */}
                {/* Find this code in the service card: */}
                {/* <div className="relative h-48 md:h-auto md:w-1/3">
                  <Image src={service.image || "/placeholder.svg"} alt={service.name} fill className="object-cover" />
                </div> */}

                {/* Replace it with: */}
                <div className="relative md:w-1/3">
                  <OptimizedImage
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    width={400}
                    height={300}
                    aspectRatio="aspect-[4/3]"
                    className="h-full"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          setActiveService(service)
                          setIsEditDialogOpen(true)
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="destructive" size="icon" onClick={() => handleDeleteService(service.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <p className="mt-2">{service.description}</p>
                  <div className="flex items-center mt-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {service.hours}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </CardContent>

      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent>
          {activeService && (
            <ServiceForm
              service={activeService}
              onSubmit={handleEditService}
              onCancel={() => setIsEditDialogOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </Card>
  )
}

function ServiceForm({
  service,
  onSubmit,
  onCancel,
}: {
  service?: any
  onSubmit: (service: any) => void
  onCancel: () => void
}) {
  const [formData, setFormData] = useState(
    service || {
      name: "",
      description: "",
      price: "",
      image: "/placeholder.svg?height=300&width=300",
      hours: "",
    },
  )

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>{service ? "Edit Service" : "Add New Service"}</DialogTitle>
        <DialogDescription>
          {service
            ? "Update the details of your existing service"
            : "Fill in the details to add a new service to your store"}
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-4 py-4">
        <div className="space-y-2">
          <Label htmlFor="name">Service Name</Label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter service name" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter service description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="E.g., Starting at ₹500"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="hours">Service Hours</Label>
            <Input
              id="hours"
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              placeholder="E.g., Mon-Fri: 10AM-6PM"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Service Image</Label>
          <div className="flex items-center gap-4">
            {/* Finally, replace the Image component in the ServiceForm component with OptimizedImage */}
            {/* Find this code in the ServiceForm component: */}
            {/* <div className="relative h-24 w-24 rounded border overflow-hidden">
              <Image src={formData.image || "/placeholder.svg"} alt="Service image" fill className="object-cover" />
            </div> */}

            {/* Replace it with: */}
            <div className="relative h-24 w-24 rounded border overflow-hidden">
              <OptimizedImage
                src={formData.image || "/placeholder.svg"}
                alt="Service image"
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
        <Button onClick={() => onSubmit(formData)}>{service ? "Save Changes" : "Add Service"}</Button>
      </DialogFooter>
    </>
  )
}

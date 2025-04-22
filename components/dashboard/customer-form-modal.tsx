"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface CustomerFormModalProps {
  isOpen: boolean
  onClose: () => void
  existingCustomer?: {
    id: string
    name: string
    email: string
    phone: string
    location: string
  } | null
}

export function CustomerFormModal({ isOpen, onClose, existingCustomer }: CustomerFormModalProps) {
  const [activeTab, setActiveTab] = useState(existingCustomer ? "order" : "customer")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      onClose()
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {existingCustomer
              ? `${activeTab === "customer" ? "Edit Customer" : "New Order for"} ${existingCustomer.name}`
              : "Add New Customer"}
          </DialogTitle>
          <DialogDescription>
            {existingCustomer
              ? activeTab === "customer"
                ? "Update customer information or create a new order"
                : "Create a new order for this customer"
              : "Fill in the details to add a new customer to your database"}
          </DialogDescription>
        </DialogHeader>

        {existingCustomer && (
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="customer">Customer Details</TabsTrigger>
              <TabsTrigger value="order">New Order</TabsTrigger>
            </TabsList>
          </Tabs>
        )}

        <form onSubmit={handleSubmit}>
          <TabsContent value="customer" className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  defaultValue={existingCustomer?.name || ""}
                  placeholder="Enter customer name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue={existingCustomer?.email || ""}
                  placeholder="customer@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" defaultValue={existingCustomer?.phone || ""} placeholder="+91 98765 43210" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  defaultValue={existingCustomer?.location || ""}
                  placeholder="City, State"
                  required
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="business-name">Business Name (Optional)</Label>
                <Input id="business-name" placeholder="Enter business name if applicable" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Customer Type</Label>
                <RadioGroup defaultValue="retail" className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="retail" id="retail" />
                    <Label htmlFor="retail">Retail</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="wholesale" id="wholesale" />
                    <Label htmlFor="wholesale">Wholesale</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="distributor" id="distributor" />
                    <Label htmlFor="distributor">Distributor</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any additional information about this customer"
                  className="min-h-[100px]"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="order" className="space-y-4 py-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="order-type">Order Type</Label>
                <Select defaultValue="standard">
                  <SelectTrigger>
                    <SelectValue placeholder="Select order type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Order</SelectItem>
                    <SelectItem value="bulk">Bulk Order</SelectItem>
                    <SelectItem value="custom">Custom Order</SelectItem>
                    <SelectItem value="sample">Sample Order</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="payment-terms">Payment Terms</Label>
                <Select defaultValue="advance">
                  <SelectTrigger>
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="advance">Advance Payment</SelectItem>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="credit-30">30 Days Credit</SelectItem>
                    <SelectItem value="credit-60">60 Days Credit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="shipping-method">Shipping Method</Label>
                <Select defaultValue="standard">
                  <SelectTrigger>
                    <SelectValue placeholder="Select shipping method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="standard">Standard Shipping</SelectItem>
                    <SelectItem value="express">Express Shipping</SelectItem>
                    <SelectItem value="pickup">Store Pickup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="expected-date">Expected Delivery Date</Label>
                <Input id="expected-date" type="date" required />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="shipping-address">Shipping Address</Label>
                <Textarea
                  id="shipping-address"
                  placeholder="Enter complete shipping address"
                  className="min-h-[80px]"
                  required
                />
              </div>
              <div className="col-span-2 space-y-2">
                <Label htmlFor="order-notes">Order Notes</Label>
                <Textarea
                  id="order-notes"
                  placeholder="Add any special instructions for this order"
                  className="min-h-[80px]"
                />
              </div>
              <div className="col-span-2 p-3 bg-muted rounded-md">
                <p className="text-sm font-medium">Next Steps:</p>
                <p className="text-sm text-muted-foreground">
                  After creating this order, you'll be redirected to the product selection page to add items to this
                  order.
                </p>
              </div>
            </div>
          </TabsContent>

          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <svg
                    className="mr-2 h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Processing...
                </>
              ) : existingCustomer ? (
                activeTab === "customer" ? (
                  "Update Customer"
                ) : (
                  "Create Order"
                )
              ) : (
                "Add Customer"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

"use client"

import { useState } from "react"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PaymentModal } from "@/components/dashboard/payment-modal"

interface ProductOrderButtonProps {
  productName: string
  productId: string
  price: string
}

export function ProductOrderButton({ productName, productId, price }: ProductOrderButtonProps) {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)

  // Sample order details
  const orderDetails = {
    id: `ORD-${Math.floor(Math.random() * 10000)}`,
    items: [
      {
        name: productName,
        quantity: 50,
        price: price,
      },
    ],
    subtotal: price,
    tax: "₹" + (Number.parseInt(price.replace(/[^\d]/g, "")) * 0.18).toLocaleString(),
    shipping: "₹1,200",
    total: "₹" + (Number.parseInt(price.replace(/[^\d]/g, "")) * 1.18 + 1200).toLocaleString(),
  }

  return (
    <>
      <Button size="sm" className="flex-1 bg-amber-600 hover:bg-amber-700" onClick={() => setIsPaymentModalOpen(true)}>
        <ShoppingCart className="h-4 w-4 mr-1" />
        Order
      </Button>

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        orderDetails={orderDetails}
      />
    </>
  )
}

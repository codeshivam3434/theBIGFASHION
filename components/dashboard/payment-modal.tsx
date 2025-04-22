"use client"

import { useState } from "react"
import { CheckCircle, ChevronRight, Shield, Wallet, BanknoteIcon as Bank, CreditCardIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  orderDetails: {
    id: string
    items: Array<{
      name: string
      quantity: number
      price: string
    }>
    subtotal: string
    tax: string
    shipping: string
    total: string
  }
}

export function PaymentModal({ isOpen, onClose, orderDetails }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [paymentStep, setPaymentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isComplete, setIsComplete] = useState(false)

  const handlePayment = () => {
    if (paymentStep === 1) {
      setPaymentStep(2)
      return
    }

    setIsProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setIsComplete(true)
    }, 2000)
  }

  const resetAndClose = () => {
    setPaymentStep(1)
    setIsComplete(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={resetAndClose}>
      <DialogContent className="sm:max-w-[500px]">
        {!isComplete ? (
          <>
            <DialogHeader>
              <DialogTitle>Complete Your Payment</DialogTitle>
              <DialogDescription>
                Order #{orderDetails.id} • {orderDetails.items.reduce((acc, item) => acc + item.quantity, 0)} items
              </DialogDescription>
            </DialogHeader>

            {paymentStep === 1 ? (
              <>
                <div className="space-y-4 py-2">
                  <div className="rounded-lg border p-3">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Order Summary</span>
                        <Button variant="ghost" size="sm" className="h-auto p-0 text-sm">
                          View Details
                        </Button>
                      </div>
                      <div className="space-y-1">
                        {orderDetails.items.slice(0, 2).map((item, index) => (
                          <div key={index} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">
                              {item.name} × {item.quantity}
                            </span>
                            <span>{item.price}</span>
                          </div>
                        ))}
                        {orderDetails.items.length > 2 && (
                          <div className="text-sm text-muted-foreground">
                            +{orderDetails.items.length - 2} more items
                          </div>
                        )}
                      </div>
                      <Separator className="my-2" />
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Subtotal</span>
                          <span>{orderDetails.subtotal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>{orderDetails.tax}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Shipping</span>
                          <span>{orderDetails.shipping}</span>
                        </div>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>{orderDetails.total}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-medium">Select Payment Method</h3>
                    <Tabs defaultValue="all" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="all">All</TabsTrigger>
                        <TabsTrigger value="cards">Cards</TabsTrigger>
                        <TabsTrigger value="banking">Banking</TabsTrigger>
                      </TabsList>
                      <TabsContent value="all" className="pt-4">
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                          <div
                            className={`flex items-center justify-between rounded-lg border p-3 ${paymentMethod === "card" ? "border-primary" : ""}`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="card" id="card" />
                              <Label htmlFor="card" className="flex items-center gap-2">
                                <CreditCardIcon className="h-4 w-4" />
                                Credit/Debit Card
                              </Label>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-6 w-10 rounded bg-[#1434CB]"></div>
                              <div className="h-6 w-10 rounded bg-[#FF5F00]"></div>
                              <div className="h-6 w-10 rounded bg-[#00579F]"></div>
                            </div>
                          </div>
                          <div
                            className={`flex items-center justify-between rounded-lg border p-3 ${paymentMethod === "upi" ? "border-primary" : ""}`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="upi" id="upi" />
                              <Label htmlFor="upi" className="flex items-center gap-2">
                                <Wallet className="h-4 w-4" />
                                UPI
                              </Label>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-6 w-10 rounded bg-[#6A3AB2]"></div>
                              <div className="h-6 w-10 rounded bg-[#4BC1E1]"></div>
                            </div>
                          </div>
                          <div
                            className={`flex items-center justify-between rounded-lg border p-3 ${paymentMethod === "netbanking" ? "border-primary" : ""}`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="netbanking" id="netbanking" />
                              <Label htmlFor="netbanking" className="flex items-center gap-2">
                                <Bank className="h-4 w-4" />
                                Net Banking
                              </Label>
                            </div>
                          </div>
                        </RadioGroup>
                      </TabsContent>
                      <TabsContent value="cards" className="pt-4">
                        <RadioGroup defaultValue="card" className="space-y-3">
                          <div className="flex items-center justify-between rounded-lg border border-primary p-3">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="card" id="card-tab" checked />
                              <Label htmlFor="card-tab" className="flex items-center gap-2">
                                <CreditCardIcon className="h-4 w-4" />
                                Credit/Debit Card
                              </Label>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-6 w-10 rounded bg-[#1434CB]"></div>
                              <div className="h-6 w-10 rounded bg-[#FF5F00]"></div>
                              <div className="h-6 w-10 rounded bg-[#00579F]"></div>
                            </div>
                          </div>
                        </RadioGroup>
                      </TabsContent>
                      <TabsContent value="banking" className="pt-4">
                        <RadioGroup defaultValue="netbanking" className="space-y-3">
                          <div className="flex items-center justify-between rounded-lg border border-primary p-3">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="netbanking" id="netbanking-tab" checked />
                              <Label htmlFor="netbanking-tab" className="flex items-center gap-2">
                                <Bank className="h-4 w-4" />
                                Net Banking
                              </Label>
                            </div>
                          </div>
                          <div className="flex items-center justify-between rounded-lg border p-3">
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="upi" id="upi-tab" />
                              <Label htmlFor="upi-tab" className="flex items-center gap-2">
                                <Wallet className="h-4 w-4" />
                                UPI
                              </Label>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="h-6 w-10 rounded bg-[#6A3AB2]"></div>
                              <div className="h-6 w-10 rounded bg-[#4BC1E1]"></div>
                            </div>
                          </div>
                        </RadioGroup>
                      </TabsContent>
                    </Tabs>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-muted p-3 text-sm">
                  <Shield className="h-4 w-4 text-muted-foreground" />
                  <span>Your payment information is secure and encrypted</span>
                </div>
              </>
            ) : (
              <div className="space-y-4 py-2">
                {paymentMethod === "card" && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="col-span-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" />
                      </div>
                      <div className="col-span-2">
                        <Label htmlFor="name">Name on Card</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="save-card" className="h-4 w-4 rounded border-gray-300" />
                      <Label htmlFor="save-card" className="text-sm">
                        Save card for future payments
                      </Label>
                    </div>
                  </div>
                )}

                {paymentMethod === "upi" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="upi-id">UPI ID</Label>
                      <Input id="upi-id" placeholder="name@upi" />
                    </div>
                    <div className="rounded-lg bg-muted p-3 text-sm">
                      <p>You will receive a payment request on your UPI app.</p>
                    </div>
                  </div>
                )}

                {paymentMethod === "netbanking" && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="bank">Select Bank</Label>
                      <select
                        id="bank"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select your bank</option>
                        <option value="sbi">State Bank of India</option>
                        <option value="hdfc">HDFC Bank</option>
                        <option value="icici">ICICI Bank</option>
                        <option value="axis">Axis Bank</option>
                        <option value="kotak">Kotak Mahindra Bank</option>
                      </select>
                    </div>
                    <div className="rounded-lg bg-muted p-3 text-sm">
                      <p>You will be redirected to your bank's website to complete the payment.</p>
                    </div>
                  </div>
                )}

                <div className="rounded-lg border p-3">
                  <div className="flex justify-between font-medium">
                    <span>Total Amount</span>
                    <span>{orderDetails.total}</span>
                  </div>
                </div>
              </div>
            )}

            <DialogFooter>
              {paymentStep === 2 && (
                <Button variant="outline" onClick={() => setPaymentStep(1)} className="mr-auto">
                  Back
                </Button>
              )}
              <Button onClick={handlePayment} disabled={isProcessing}>
                {isProcessing ? (
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
                ) : paymentStep === 1 ? (
                  <>
                    Continue
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  "Pay Now"
                )}
              </Button>
            </DialogFooter>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 text-center">
            <div className="mb-4 rounded-full bg-green-100 p-3">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="mb-2 text-xl font-semibold">Payment Successful!</h2>
            <p className="mb-6 text-muted-foreground">Your order #{orderDetails.id} has been placed successfully.</p>
            <div className="mb-6 w-full rounded-lg border p-4">
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-muted-foreground">Amount Paid</span>
                <span className="font-medium">{orderDetails.total}</span>
              </div>
              <div className="mb-2 flex justify-between">
                <span className="text-sm text-muted-foreground">Payment Method</span>
                <span className="font-medium">
                  {paymentMethod === "card" ? "Credit/Debit Card" : paymentMethod === "upi" ? "UPI" : "Net Banking"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Transaction ID</span>
                <span className="font-medium">TXN{Math.floor(Math.random() * 1000000)}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={resetAndClose}>
                Close
              </Button>
              <Button>View Order</Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

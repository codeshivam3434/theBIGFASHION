"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export default function RefundPolicyPage() {
  return (
    <div className="container max-w-4xl py-12">
      <FadeInSection>
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl font-bold">Refund Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: June 1, 2023</p>
        </div>
      </FadeInSection>

      <div className="space-y-8">
        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Return Eligibility</h2>
            <p>
              At Fashion Fusion, we want you to be completely satisfied with your purchase. Our return policy varies
              depending on whether you are a retail customer or a wholesale partner:
            </p>
            <h3 className="text-xl font-semibold mt-4">Retail Customers</h3>
            <p>Retail customers may return items within 30 days of receipt under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items must be unworn, unwashed, and in their original condition with all tags attached.</li>
              <li>Original packaging must be intact and included with the return.</li>
              <li>Proof of purchase (order number, receipt, or confirmation email) must be provided.</li>
              <li>
                Final sale items, including items purchased at a discount of 40% or more, are not eligible for return.
              </li>
              <li>Intimate apparel, swimwear, and accessories are final sale for hygiene reasons unless defective.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Wholesale Partners</h3>
            <p>Wholesale partners may return items within 14 days of receipt under the following conditions:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Items must be in original condition with all tags attached and in original packaging.</li>
              <li>Returns must be approved by your account manager before shipping.</li>
              <li>A Return Authorization Number (RAN) must be obtained and included with your return.</li>
              <li>
                Custom orders, private label items, and special production runs are not eligible for return unless
                defective.
              </li>
              <li>
                A restocking fee of 15% may apply to wholesale returns that are not due to defects or errors on our
                part.
              </li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Defective Items</h2>
            <p>
              If you receive a defective item, please contact us within 7 days of receipt. We will work with you to
              resolve the issue through one of the following options:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Replacement of the defective item</li>
              <li>Store credit for the value of the item</li>
              <li>Full refund to the original payment method</li>
            </ul>
            <p>
              Please note that normal wear and tear, improper use, or damage that occurs after receipt is not considered
              a defect.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Return Process</h2>
            <h3 className="text-xl font-semibold mt-4">Retail Customers</h3>
            <p>To initiate a return as a retail customer:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Log into your Fashion Fusion account and navigate to your order history.</li>
              <li>Select the order containing the item(s) you wish to return.</li>
              <li>Follow the prompts to initiate a return request.</li>
              <li>Once approved, you will receive a return shipping label and instructions.</li>
              <li>Package the item(s) securely with all original tags and packaging.</li>
              <li>Attach the provided shipping label and drop off at the designated carrier.</li>
            </ol>
            <h3 className="text-xl font-semibold mt-4">Wholesale Partners</h3>
            <p>To initiate a return as a wholesale partner:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Contact your account manager or email wholesale@fashionfusion.com with your order number and details of
                the items you wish to return.
              </li>
              <li>Wait for approval and a Return Authorization Number (RAN).</li>
              <li>Package the items securely with all original tags and packaging.</li>
              <li>Include the RAN prominently on the outside of the package.</li>
              <li>Ship the return to the address provided by your account manager.</li>
            </ol>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Refund Processing</h2>
            <p>Once we receive and inspect your return, we will process your refund as follows:</p>
            <h3 className="text-xl font-semibold mt-4">Retail Customers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Refunds will be issued to the original payment method used for the purchase.</li>
              <li>Processing time is typically 3-5 business days after we receive and inspect the return.</li>
              <li>You will receive an email notification when your refund has been processed.</li>
              <li>
                Depending on your financial institution, it may take an additional 5-10 business days for the refund to
                appear in your account.
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Wholesale Partners</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Approved returns will be processed as a credit to your account or as a refund to the original payment
                method, depending on your partnership agreement.
              </li>
              <li>Processing time is typically 5-7 business days after we receive and inspect the return.</li>
              <li>Any applicable restocking fees will be deducted from the refund amount.</li>
              <li>Your account manager will notify you when your refund or credit has been processed.</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Return Shipping Costs</h2>
            <h3 className="text-xl font-semibold mt-4">Retail Customers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>For standard returns, the customer is responsible for return shipping costs.</li>
              <li>
                If an item is defective or if we made an error in your order, Fashion Fusion will provide a prepaid
                return shipping label.
              </li>
              <li>Premium customers (those who spend over $1,000 annually) receive free return shipping.</li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Wholesale Partners</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Wholesale partners are responsible for return shipping costs unless otherwise specified in their
                partnership agreement.
              </li>
              <li>
                For defective items or errors on our part, Fashion Fusion will arrange for return shipping at our
                expense.
              </li>
              <li>
                Elite Partners may have special return shipping arrangements as detailed in their partnership agreement.
              </li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Exchanges</h2>
            <p>
              We do not process direct exchanges. If you wish to exchange an item, please return the original item for a
              refund and place a new order for the desired item. This ensures accurate inventory management and faster
              processing times.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Contact Us</h2>
            <p>If you have any questions about our refund policy, please contact us:</p>
            <p>
              The BIGFASHION
              <br />
              B-12, Sector 63,Andheri East,
              <br />
              Mumbai, Maharashtra-401208
              <br />
              Email: shipping.thebigfashion.com
              <br />
              Phone: +91 - 7033383119
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export default function ShippingPolicyPage() {
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
          <h1 className="text-4xl font-bold">Shipping Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: June 1, 2023</p>
        </div>
      </FadeInSection>

      <div className="space-y-8">
        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Processing Times</h2>
            <p>
              At Fashion Fusion, we strive to process and ship all orders as quickly as possible. Our standard
              processing times are as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Retail Orders:</strong> 1-2 business days
              </li>
              <li>
                <strong>Standard Wholesale Orders:</strong> 3-5 business days
              </li>
              <li>
                <strong>Custom Wholesale Orders:</strong> 7-14 business days, depending on the complexity and volume
              </li>
              <li>
                <strong>Private Label Orders:</strong> 14-21 business days, depending on specifications
              </li>
            </ul>
            <p>
              Please note that processing times may be extended during peak seasons, promotional periods, or due to
              unforeseen circumstances. We will communicate any delays promptly.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Shipping Methods and Timeframes</h2>
            <p>Fashion Fusion offers various shipping methods to accommodate different needs and budgets:</p>
            <h3 className="text-xl font-semibold mt-4">Domestic Shipping (United States)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Standard Shipping:</strong> 3-5 business days
              </li>
              <li>
                <strong>Expedited Shipping:</strong> 2-3 business days
              </li>
              <li>
                <strong>Priority Shipping:</strong> 1-2 business days
              </li>
              <li>
                <strong>Overnight Shipping:</strong> Next business day (orders must be placed before 12 PM EST)
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">International Shipping</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Standard International:</strong> 7-14 business days
              </li>
              <li>
                <strong>Expedited International:</strong> 5-7 business days
              </li>
              <li>
                <strong>Priority International:</strong> 3-5 business days
              </li>
            </ul>
            <p>
              Please note that international shipping times are estimates and may vary depending on customs processing
              in the destination country.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Shipping Costs</h2>
            <p>
              Shipping costs are calculated based on the weight, dimensions, destination, and selected shipping method.
              The exact shipping cost will be displayed during checkout before payment is processed.
            </p>
            <h3 className="text-xl font-semibold mt-4">Free Shipping</h3>
            <p>We offer free standard shipping on the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Retail orders over $100 within the United States</li>
              <li>Wholesale orders over $500 within the United States</li>
              <li>Premium and Elite Partner orders as specified in partnership agreements</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Tracking Information</h2>
            <p>
              Once your order has been shipped, you will receive a confirmation email with tracking information. You can
              track your order by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Clicking the tracking link in your shipping confirmation email</li>
              <li>Logging into your Fashion Fusion account and viewing your order history</li>
              <li>Contacting our customer service team with your order number</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. International Orders</h2>
            <p>For international orders, please be aware of the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The recipient is responsible for all customs duties, taxes, and import fees imposed by the destination
                country.
              </li>
              <li>Fashion Fusion is not responsible for delays due to customs processing.</li>
              <li>
                Some countries have restrictions on certain textile imports. Please check your local regulations before
                placing an order.
              </li>
              <li>International tracking may not be as detailed as domestic tracking in some countries.</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Wholesale and Partner Shipping</h2>
            <p>For our wholesale customers and retail partners, we offer:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bulk shipping discounts</li>
              <li>Consolidated shipping options</li>
              <li>Custom shipping arrangements for regular orders</li>
              <li>Priority processing for Premium and Elite Partners</li>
              <li>Drop-shipping services for eligible partners</li>
            </ul>
            <p>
              Please refer to your specific partnership agreement for detailed shipping terms or contact your account
              manager for more information.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Shipping Issues</h2>
            <p>In the event of shipping issues such as delays, damages, or lost packages:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contact our customer service team immediately with your order number and details of the issue.</li>
              <li>
                For damaged packages, please take photos of the damaged packaging and contents before opening
                completely.
              </li>
              <li>
                For lost packages, we will work with the shipping carrier to locate your order or process a
                replacement/refund.
              </li>
            </ul>
            <p>
              Fashion Fusion is not responsible for shipping delays caused by weather, natural disasters, customs
              delays, or other circumstances beyond our control.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">8. Contact Us</h2>
            <p>If you have any questions about our shipping policy, please contact us:</p>
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

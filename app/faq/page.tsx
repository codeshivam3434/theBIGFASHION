"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FadeInSection from "@/components/fade-in-section"

export default function FAQPage() {
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
          <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-muted-foreground">Find answers to common questions about our products and services</p>
        </div>
      </FadeInSection>

      <div className="space-y-8">
        <FadeInSection>
          <div>
            <h2 className="text-2xl font-bold mb-4">General Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Fashion Fusion?</AccordionTrigger>
                <AccordionContent>
                  Fashion Fusion is a premium clothing business that connects manufacturers to retailers while also
                  growing our own distinctive clothing line. We offer both wholesale and direct-to-consumer services,
                  providing high-quality fashion products with flexible ordering options and private labeling
                  capabilities.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Where is Fashion Fusion located?</AccordionTrigger>
                <AccordionContent>
                  Our headquarters is located in New York City, with manufacturing partners across the United States and
                  internationally. We serve customers and retail partners worldwide.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How can I contact customer service?</AccordionTrigger>
                <AccordionContent>
                  You can reach our customer service team by email at support@fashionfusion.com, by phone at +1 (555)
                  123-4567, or through the contact form on our website. Our customer service hours are Monday through
                  Friday, 9 AM to 6 PM EST.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div>
            <h2 className="text-2xl font-bold mb-4">Retail Customers</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="retail-1">
                <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
                <AccordionContent>
                  Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by
                  location. You can view the shipping options available to your country during checkout. Please note
                  that international orders may be subject to customs duties and taxes, which are the responsibility of
                  the recipient.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="retail-2">
                <AccordionTrigger>What is your return policy?</AccordionTrigger>
                <AccordionContent>
                  Retail customers may return unworn, unwashed items with original tags attached within 30 days of
                  receipt. Please visit our{" "}
                  <Link href="/refunds" className="text-primary hover:underline">
                    Refund Policy
                  </Link>{" "}
                  page for complete details on the return process.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="retail-3">
                <AccordionTrigger>How do I track my order?</AccordionTrigger>
                <AccordionContent>
                  Once your order ships, you will receive a shipping confirmation email with tracking information. You
                  can also log into your account on our website and view your order status and tracking information in
                  the order history section.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="retail-4">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay,
                  and Google Pay. For wholesale orders, we also offer terms to qualified businesses.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div>
            <h2 className="text-2xl font-bold mb-4">Wholesale & Partnerships</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="wholesale-1">
                <AccordionTrigger>How do I become a retail partner?</AccordionTrigger>
                <AccordionContent>
                  To become a retail partner, visit our{" "}
                  <Link href="/partners" className="text-primary hover:underline">
                    Partners
                  </Link>{" "}
                  page and complete the application form. Our team will review your application and contact you within 2
                  business days. We offer different partnership tiers based on your business needs and volume.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wholesale-2">
                <AccordionTrigger>What are your minimum order quantities (MOQs)?</AccordionTrigger>
                <AccordionContent>
                  Our standard MOQ is 100 units per style for wholesale orders. However, Premium and Elite Partners
                  enjoy lower MOQs starting at 50 units per style. For custom and private label orders, MOQs may vary
                  depending on the complexity of the design and manufacturing requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wholesale-3">
                <AccordionTrigger>Do you offer private labeling?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer private labeling services for qualified retail partners. This includes custom labels,
                  packaging, and even design modifications to suit your brand. Private labeling options are available to
                  all partnership tiers, with enhanced capabilities for Premium and Elite Partners.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="wholesale-4">
                <AccordionTrigger>What are the payment terms for wholesale orders?</AccordionTrigger>
                <AccordionContent>
                  For new partners, we require 50% payment upfront and 50% before shipping. Established partners with
                  good payment history may qualify for Net 30 terms. Elite Partners may receive custom payment terms as
                  part of their partnership agreement.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div>
            <h2 className="text-2xl font-bold mb-4">Products & Manufacturing</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="products-1">
                <AccordionTrigger>Where are your products manufactured?</AccordionTrigger>
                <AccordionContent>
                  Our products are manufactured in carefully selected facilities in the United States, India, and
                  Portugal. All manufacturing partners adhere to our strict quality standards and ethical manufacturing
                  practices. We regularly audit our facilities to ensure compliance with labor laws and environmental
                  regulations.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="products-2">
                <AccordionTrigger>What materials do you use in your clothing?</AccordionTrigger>
                <AccordionContent>
                  We use a variety of high-quality materials including organic cotton, sustainable bamboo, premium linen
                  blends, and recycled polyester. Each product listing includes detailed information about the specific
                  materials used. We prioritize sustainable and eco-friendly materials whenever possible without
                  compromising on quality or comfort.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="products-3">
                <AccordionTrigger>Do you offer custom manufacturing?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer custom manufacturing services for qualified partners. This can range from simple
                  modifications to existing designs to fully custom creations based on your specifications. Custom
                  manufacturing requires longer lead times and may have higher MOQs depending on the complexity of the
                  project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="products-4">
                <AccordionTrigger>How often do you release new collections?</AccordionTrigger>
                <AccordionContent>
                  We release four major seasonal collections per year (Spring, Summer, Fall, Winter), with smaller
                  capsule collections and limited editions throughout the year. Our wholesale partners receive early
                  access to upcoming collections, allowing for pre-ordering and planning.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div>
            <h2 className="text-2xl font-bold mb-4">Account & Dashboard</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="account-1">
                <AccordionTrigger>How do I create an account?</AccordionTrigger>
                <AccordionContent>
                  You can create an account by clicking the "Sign Up" button in the top right corner of our website.
                  Fill out the registration form with your personal and business information. Once submitted, you'll
                  receive a verification email to activate your account.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="account-2">
                <AccordionTrigger>I forgot my password. How do I reset it?</AccordionTrigger>
                <AccordionContent>
                  If you've forgotten your password, click on the "Sign In" button, then select "Forgot Password." Enter
                  the email address associated with your account, and we'll send you a link to reset your password. The
                  link is valid for 30 minutes.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="account-3">
                <AccordionTrigger>What features are available in the retailer dashboard?</AccordionTrigger>
                <AccordionContent>
                  The retailer dashboard provides a comprehensive suite of tools to manage your partnership with Fashion
                  Fusion. Features include order management, inventory tracking, sales analytics, invoice history,
                  account settings, and access to exclusive wholesale catalogs. Premium and Elite Partners receive
                  additional features such as custom reporting and priority support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="account-4">
                <AccordionTrigger>How do I update my business information?</AccordionTrigger>
                <AccordionContent>
                  You can update your business information by logging into your account and navigating to the "Profile"
                  or "Settings" section in your dashboard. From there, you can edit your business details, shipping
                  address, billing information, and contact preferences.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="bg-muted p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-4">
              If you couldn't find the answer to your question, please don't hesitate to contact us. Our customer
              service team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button>Contact Us</Button>
              </Link>
              <Link href="mailto:support@fashionfusion.com">
                <Button variant="outline">Email Support</Button>
              </Link>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

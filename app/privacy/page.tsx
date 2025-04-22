"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-muted-foreground">Last updated: June 1, 2023</p>
        </div>
      </FadeInSection>

      <div className="space-y-8">
        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              Fashion Fusion ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website
              fashionfusion.com, including any other media form, media channel, mobile website, or mobile application
              related or connected thereto (collectively, the "Site").
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert
              you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or
              modifications will be effective immediately upon posting the updated Privacy Policy on the Site, and you
              waive the right to receive specific notice of each such change or modification.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Collection of Your Information</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site
              includes:
            </p>
            <h3 className="text-xl font-semibold mt-4">Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, shipping address, email address, and telephone
              number, and demographic information, such as your age, gender, hometown, and interests, that you
              voluntarily give to us when you register with the Site or when you choose to participate in various
              activities related to the Site, such as online chat and message boards. You are under no obligation to
              provide us with personal information of any kind, however your refusal to do so may prevent you from using
              certain features of the Site.
            </p>
            <h3 className="text-xl font-semibold mt-4">Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the Site, such as your IP address, your
              browser type, your operating system, your access times, and the pages you have viewed directly before and
              after accessing the Site.
            </p>
            <h3 className="text-xl font-semibold mt-4">Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card
              brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
              information about our services from the Site. We store only very limited, if any, financial information
              that we collect. Otherwise, all financial information is stored by our payment processor and you are
              encouraged to review their privacy policy and contact them directly for responses to your questions.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Create and manage your account.</li>
              <li>Process your orders and manage your wholesale or retail partnership.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
              <li>Send you promotional information, such as new products, services, and special offers.</li>
              <li>Respond to your inquiries and customer service requests.</li>
              <li>Administer promotions, surveys, and contests.</li>
              <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
              <li>
                Deliver targeted advertising, newsletters, and other information regarding promotions and the Site to
                you.
              </li>
              <li>Increase the efficiency and operation of the Site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              <li>Notify you of updates to the Site.</li>
              <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>
            <h3 className="text-xl font-semibold mt-4">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>
            <h3 className="text-xl font-semibold mt-4">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>
            <h3 className="text-xl font-semibold mt-4">Business Transfers</h3>
            <p>
              We may share your information in connection with, or during negotiations of, any merger, sale of company
              assets, financing, or acquisition of all or a portion of our business to another company.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
            <p>
              Any information disclosed online is vulnerable to interception and misuse by unauthorized parties.
              Therefore, we cannot guarantee complete security if you provide personal information.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Your Rights Regarding Your Information</h2>
            <h3 className="text-xl font-semibold mt-4">Account Information</h3>
            <p>You may at any time review or change the information in your account or terminate your account by:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Logging into your account settings and updating your account</li>
              <li>Contacting us using the contact information provided below</li>
            </ul>
            <p>
              Upon your request to terminate your account, we will deactivate or delete your account and information
              from our active databases. However, some information may be retained in our files to prevent fraud,
              troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal
              requirements.
            </p>
            <h3 className="text-xl font-semibold mt-4">Emails and Communications</h3>
            <p>
              If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out
              by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Noting your preferences at the time you register your account with the Site</li>
              <li>Logging into your account settings and updating your preferences</li>
              <li>Contacting us using the contact information provided below</li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>
              Fashion Fusion
              <br />
              123 Fashion Avenue, Suite 500
              <br />
              New York, NY 10001
              <br />
              Email: privacy@fashionfusion.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

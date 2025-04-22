"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import FadeInSection from "@/components/fade-in-section"

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-muted-foreground">Last updated: June 1, 2023</p>
        </div>
      </FadeInSection>

      <div className="space-y-8">
        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">1. Introduction</h2>
            <p>
              Welcome to Fashion Fusion ("Company", "we", "our", "us")! These Terms of Service ("Terms", "Terms of
              Service") govern your use of our website located at fashionfusion.com (together or individually "Service")
              operated by Fashion Fusion.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and
              disclose information that results from your use of our web pages. Your agreement with us includes these
              Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements,
              and agree to be bound by them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please
              let us know by emailing at support@fashionfusion.com so we can try to find a solution. These Terms apply
              to all visitors, users and others who wish to access or use Service.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">2. Communications</h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other
              information we may send. However, you may opt out of receiving any, or all, of these communications from
              us by following the unsubscribe link or by emailing at support@fashionfusion.com.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">3. Purchases</h2>
            <p>
              If you wish to purchase any product or service made available through Service ("Purchase"), you may be
              asked to supply certain information relevant to your Purchase including, without limitation, your credit
              card number, the expiration date of your credit card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to use any credit card(s) or other payment
              method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct
              and complete.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to:
              product or service availability, errors in the description or price of the product or service, error in
              your order or other reasons.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">4. Wholesale and Retail Partnerships</h2>
            <p>
              Fashion Fusion offers both wholesale and retail partnership opportunities. By entering into a partnership
              with us, you agree to the specific terms outlined in your partnership agreement, which may include minimum
              order quantities, payment terms, shipping arrangements, and other business-specific conditions.
            </p>
            <p>
              All partners are expected to maintain the integrity of the Fashion Fusion brand and adhere to our quality
              standards and business practices. We reserve the right to terminate partnerships that do not comply with
              our standards or the terms of their specific agreements.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">5. Intellectual Property</h2>
            <p>
              Service and its original content (excluding Content provided by users), features and functionality are and
              will remain the exclusive property of Fashion Fusion and its licensors. Service is protected by copyright,
              trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress
              may not be used in connection with any product or service without the prior written consent of Fashion
              Fusion.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">6. Prohibited Uses</h2>
            <p>
              You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>
                To transmit, or procure the sending of, any advertising or promotional material, including any "junk
                mail", "chain letter," "spam," or any other similar solicitation.
              </li>
              <li>
                To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person
                or entity.
              </li>
              <li>
                In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent,
                or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.
              </li>
            </ul>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">7. Limitation of Liability</h2>
            <p>
              In no event shall Fashion Fusion, nor its directors, employees, partners, agents, suppliers, or
              affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including
              without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i)
              your access to or use of or inability to access or use the Service; (ii) any conduct or content of any
              third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use
              or alteration of your transmissions or content, whether based on warranty, contract, tort (including
              negligence) or any other legal theory, whether or not we have been informed of the possibility of such
              damage.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">8. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of New York, United
              States, without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those
              rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining
              provisions of these Terms will remain in effect.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">9. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision
              is material we will try to provide at least 30 days notice prior to any new terms taking effect. What
              constitutes a material change will be determined at our sole discretion.
            </p>
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree to be bound
              by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">10. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>By email: legal@fashionfusion.com</li>
              <li>By phone: +1 (555) 123-4567</li>
              <li>By mail: 123 Fashion Avenue, Suite 500, New York, NY 10001</li>
            </ul>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}

import { siteConfig } from "@/lib/metadata"

export function HomePageJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.links.twitter,
      "https://www.facebook.com/bigapparels",
      "https://www.instagram.com/bigapparels",
      "https://www.linkedin.com/company/bigapparels",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-7033383119",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    description: siteConfig.description,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export function ProductJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Fashion Fusion Retail Platform",
    description:
      "A comprehensive retail technology platform for fashion retailers in Tier 2 & 3 cities, offering inventory management, analytics, and risk-free logistics.",
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "0",
      highPrice: "50000",
      offerCount: "3",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

export function FAQJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How can I become a retail partner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit our Partners page to learn about our partnership program and submit an application. Our team will review your submission and contact you within 2 business days.",
        },
      },
      {
        "@type": "Question",
        name: "What are your minimum order quantities?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our standard MOQ is 50 units per style, but this can vary based on your partnership tier and specific products. Premium and Elite partners enjoy lower MOQs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer custom manufacturing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer custom manufacturing services for partners looking to create unique pieces or private label collections. Contact our partnerships team to discuss your specific needs.",
        },
      },
      {
        "@type": "Question",
        name: "What is your shipping policy across India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have regional warehouses in Delhi, Mumbai, Kolkata, and Bangalore with specialized delivery routes covering 20+ states. Most locations receive deliveries within 24-48 hours.",
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  )
}

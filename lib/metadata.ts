import type { Metadata } from "next"

// Base metadata configuration
export const siteConfig = {
  name: "BigApparels",
  description:
    "Premium wholesale clothing connecting manufacturers to retailers with flexible ordering and private labeling options.",
  url: "https://bigapparels.com",
  ogImage: "https://bigapparels.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/bigapparels",
    github: "https://github.com/bigapparels",
  },
}

// Helper function to generate metadata for each page
export function generateMetadata({
  title,
  description,
  path = "",
  ogImage,
}: {
  title?: string
  description?: string
  path?: string
  ogImage?: string
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const url = `${siteConfig.url}${path}`
  const ogImageUrl = ogImage || siteConfig.ogImage

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "wholesale clothing",
      "fashion retail",
      "retail technology",
      "inventory management",
      "fashion analytics",
      "retail platform",
      "Indian fashion",
      "tier 2 cities",
      "tier 3 cities",
      "fashion business",
      "retail solution",
    ],
    authors: [{ name: "BigApparels Team" }],
    creator: "BigApparels",
    publisher: "BigApparels",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImageUrl],
      creator: "@bigapparels",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

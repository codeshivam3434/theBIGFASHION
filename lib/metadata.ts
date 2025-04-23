import type { Metadata } from "next"

// Base metadata configuration
export const siteConfig = {
  name: "THE BIG FASHION",
  description:
    "Premium wholesale clothing connecting manufacturers to retailers with flexible ordering and private labeling options.",
  url: "https://thebigfashion.com",
  ogImage: "https://thebigfashion.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/thebigfashion",
    github: "https://github.com/thebigfashion",
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
    authors: [{ name: "THE BIG FASHION Team" }],
    creator: "THE BIG FASHION",
    publisher: "THE BIG FASHION",
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
      creator: "@thebigfashion",
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

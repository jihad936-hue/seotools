import { Metadata } from "next";
import { SEOProps } from "@/types";

export function generateSEO({
  title,
  description,
  canonical,
  ogImage = "/og-image.jpg",
  noIndex = false,
}: SEOProps): Metadata {
  const siteName = "SEO Tools Pro";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  return {
    title: fullTitle,
    description: description.slice(0, 160),
    ...(canonical && { alternates: { canonical } }),
    ...(noIndex && { robots: { index: false, follow: false } }),
    openGraph: {
      title: fullTitle,
      description: description.slice(0, 160),
      url: canonical,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description.slice(0, 160),
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_CODE",
    },
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://seotools.pro"),
  title: {
    default: "SEO Tools Pro - Free Professional SEO Tools",
    template: "%s | SEO Tools Pro",
  },
  description:
    "Access 50+ free professional SEO tools. Keyword research, backlink analysis, rank tracking, site audit, and more. Boost your search rankings today.",
  keywords: [
    "SEO tools",
    "free SEO tools",
    "keyword research",
    "backlink checker",
    "site audit",
    "rank tracker",
    "SEO analysis",
  ],
  authors: [{ name: "SEO Tools Pro" }],
  creator: "SEO Tools Pro",
  publisher: "SEO Tools Pro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://seotools.pro",
    siteName: "SEO Tools Pro",
    title: "SEO Tools Pro - Free Professional SEO Tools",
    description:
      "Access 50+ free professional SEO tools. Boost your search rankings today.",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Tools Pro - Free Professional SEO Tools",
    description: "Access 50+ free professional SEO tools. Boost your search rankings today.",
    creator: "@seotoolspro",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

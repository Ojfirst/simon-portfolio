import "./globals.css"
import type { Metadata } from "next"
import { seo } from "@/lib/seo"
import { Header } from "@/components/layout/header"

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  metadataBase: new URL(seo.url),

  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: seo.name,
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: seo.name,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.image],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-950 text-gray-100">
        <Header />
        <main className="pt-28">{children}</main>
      </body>
    </html>
  )
}

import "./globals.css"
import type { Metadata } from "next"
import { Toaster } from "sonner";
import { JsonLd } from "@/components/seo/json-ld"
import { personSchema } from '@/lib/schema/person.schema';
import { websiteSchema } from "@/lib/schema/website.schema";
import { ThemeProvider } from "next-themes"
import { SeoPerson } from "@/components/seo/seo-person"
import { SeoSoftware } from "@/components/seo/seo-software"
import { Header } from "@/components/layout/header"


export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default:
      "Simon Abiodun Aina — Automotive Operations Leader & Software Systems Architect",
    template: "%s | Simon Abiodun Aina",
  },

  description:
    "Automotive operations leader and full-stack software systems architect building dealership platforms, service scheduling systems, inventory management software, and automotive retail solutions.",

  keywords: [
    "Simon Abiodun Aina",
    "Automotive Operations",
    "Automotive Software Architect",
    "Dealership Management Systems",
    "Automotive Service Scheduling Software",
    "Inventory Management Systems",
    "Automotive SaaS Platforms",
    "Retail Operations Technology",
    "Full Stack Developer",
    "Automotive Systems Engineer",
  ],

  authors: [
    {
      name: "Simon Abiodun Aina",
      url: "https://your-domain.com",
    },
  ],

  creator: "Simon Abiodun Aina",
  publisher: "Simon Abiodun Aina",

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

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://your-domain.com",
    siteName: "Simon Abiodun Aina",

    title:
      "Simon Abiodun Aina — Automotive Operations & Software Systems Architect",

    description:
      "Designing and building production-grade automotive platforms for dealership operations, service workflows, inventory control, and retail automation.",

    images: [
      {
        url: "/images/simon-profile.jpg",
        width: 1200,
        height: 630,
        alt: "Simon Abiodun Aina — Automotive Operations & Software Architect",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle",
    title:
      "Simon Abiodun Aina — Automotive Operations & Software Architect",
    description:
      "Automotive operations leader building real-world dealership and service management software systems.",
    images: ["/images/simon-profile.jpg"],
  },

  category: "Technology",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd schema={personSchema} />
        <JsonLd schema={websiteSchema} />
      </head>
      <body className="bg-gray-950 text-gray-100">
        <SeoPerson />
        <SeoSoftware />
        <ThemeProvider attribute="class" defaultTheme='system' enableSystem={false}>
          <Header />
          <main className="pt-28">{children}</main>
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}

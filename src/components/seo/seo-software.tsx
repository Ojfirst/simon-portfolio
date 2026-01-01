
export const SeoSoftware = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Automotive Operations Platform",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "A modern automotive operations platform covering service scheduling, inventory management, transactions, and dealership workflows.",
    creator: {
      "@type": "Person",
      name: "Simon Abiodun Aina",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(softwareSchema),
      }}
    />
  )
}

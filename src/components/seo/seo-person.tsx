export const SeoPerson = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Simon Abiodun Aina",
    url: "https://your-domain.com",
    image: "https://your-domain.com/images/simon-profile.jpg",
    jobTitle: [
      "Automotive Operations Specialist",
      "Software Systems Architect",
      "Full-Stack Developer",
    ],
    description:
      "Automobile operations veteran with over 25 years of experience designing and managing dealership operations and modern automotive software systems.",
    knowsAbout: [
      "Automotive Operations",
      "Dealership Management",
      "Service Scheduling Systems",
      "Inventory Management",
      "Retail Operations",
      "Software Architecture",
      "SaaS Platforms",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Ojfirst Autos",
    },
    sameAs: [
      "https://www.linkedin.com/in/your-linkedin",
      "https://github.com/your-github",
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  )
}

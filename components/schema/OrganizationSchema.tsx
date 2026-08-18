import { SITE_URL } from "@/lib/routes";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NAVNEET TOPTECH",
    alternateName: "NTT",
    url: SITE_URL,
    logo: `${SITE_URL}/assets/logo.png`,
    description:
      "India's School Transformation Partner — EdTech arm of Navneet Education Limited. Partnering with 4,000+ CBSE and Maharashtra State Board schools.",
    telephone: "+911800266676",
    email: "info@navneettoptech.com",
    foundingDate: "2008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1B, Benefice Business House",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.facebook.com/navneettoptech",
      "https://www.linkedin.com/company/navneet-toptech",
      "https://www.youtube.com/c/navneettoptech",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "Navneet Education Limited",
      url: "https://navneet.com",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

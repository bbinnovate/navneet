import { SITE_URL } from "@/lib/routes";

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "NAVNEET TOPTECH",
    url: SITE_URL,
    description:
      "India's School Transformation Partner — TopSchool LMS, TopClass, TopAssess, and Navneet AI for CBSE and Maharashtra State Board schools.",
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

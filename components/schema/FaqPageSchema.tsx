import { SITE_URL } from "@/lib/routes";

export function FaqPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is NAVNEET TOPTECH?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NAVNEET TOPTECH is the EdTech arm of Navneet Education Limited — founded in 2008, partnering with 4,000+ schools across CBSE, CBSE Pattern, and Maharashtra State Board.",
        },
      },
      {
        "@type": "Question",
        name: "Which boards do your products support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CBSE (NCERT and RISE series), CBSE Pattern schools, and Maharashtra State Board — bilingual in English and Marathi, Grades Nursery to 10.",
        },
      },
      {
        "@type": "Question",
        name: "What Interactive Flat Panel partners does NAVNEET TOPTECH work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Brio, Cybernetix, and Hikvision. All panels come pre-loaded with TopClass and Navneet AI — ready on delivery, no IT setup required.",
        },
      },
      {
        "@type": "Question",
        name: "Do your products work without internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. TopClass and TopAssess are fully offline-capable. Designed for India's real classroom infrastructure.",
        },
      },
      {
        "@type": "Question",
        name: "Is NAVNEET TOPTECH aligned with NEP 2020?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All solutions are aligned with NEP 2020 and NCF 2023 — including outcome-based learning, competency-based assessments, and CBSE CPD requirements.",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import type { Metadata } from "next";
import { SITE_URL } from "@/lib/routes";

export const siteConfig = {
  name: "NAVNEET TOPTECH",
  url: SITE_URL,
  twitter: "@navneettoptech",
  defaultOgImage: `${SITE_URL}/assets/og-home.jpg`,
};

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const image = ogImage ?? siteConfig.defaultOgImage;

  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title,
      description,
      url,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter,
      title,
      description,
      images: [image],
    },
  };
}

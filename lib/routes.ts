export const ROUTES = {
  home: "/",
  about: "/about",
  topschool: "/topschool-learning-management-system",
  topclass: "/topclass-digital-classroom",
  topassess: "/topassess",
  topseries: "/topseries-grade-1-to-8",
  ifp: "/interactive-flat-panels",
  contact: "/contact",
  conclaves: "/conclaves",
  news: "/news",
  blogs: "/blogs",
  locations: "/locations",
  careers: "/careers",
  support: "/support-services",
} as const;

export type RouteKey = keyof typeof ROUTES;

export const SITE_URL = "https://navneettoptech.com";

export function route(key: RouteKey): string {
  return ROUTES[key];
}

export function legacyPagePath(key: string): string {
  return ROUTES[key as RouteKey] || `/${key}`;
}

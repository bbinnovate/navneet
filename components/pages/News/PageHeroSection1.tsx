import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function PageHeroSection1({
  title = "NAVNEET TOPTECH in the News.",
  subtitle = "Coverage from leading education media, recognition from industry bodies, and stories of school transformation from across India.",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "In the News" }
  ],
  eyebrow = "Press Coverage · Awards · Media"
}: {
  title?: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  eyebrow?: string;
}) {
  return (
    <div className="page-hero-block">
      <div className="breadcrumb">
        {breadcrumbs.map((item, idx) => (
          <span key={idx}>
            {item.href ? (
              <Link href={item.href}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {idx < breadcrumbs.length - 1 && <span>/</span>}
          </span>
        ))}
      </div>
      <div className="page-hero">
        <div className="hero-eyebrow tag">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="hero-sub subtitle grey-text ">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

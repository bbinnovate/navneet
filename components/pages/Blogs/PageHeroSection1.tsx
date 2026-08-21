import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function PageHeroSection1({
  title = "Ideas That Move Schools Forward.",
  subtitle = "Perspectives from NAVNEET TOPTECH on school transformation, teaching innovation, AI in education, and the future of learning in India.",
  breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blogs" }
  ],
  eyebrow = "Insights · Education · Technology · Teaching"
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
        <div className="hero-eyebrow tag">
          {eyebrow}
        </div>
        <h1>{title}</h1>
        <p className="hero-sub subtitle grey-text ">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

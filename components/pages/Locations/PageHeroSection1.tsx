import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>Our Locations</span>
      </div>
<div className="page-hero">
        <div className="hero-eyebrow tag">6 Offices · 30+ Cities · Pan India</div>
        <h1>We're Present Across India.</h1>
      <p className="hero-sub subtitle grey-text ">
          NAVNEET TOPTECH has offices in six cities with on-ground teams serving
          schools across 30+ cities nationally.
        </p>
      </div>
</div>
  );
}

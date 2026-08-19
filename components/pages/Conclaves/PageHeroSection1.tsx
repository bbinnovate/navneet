import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb"><Link href="/" >Home</Link><span>/</span><span>Conclaves</span></div>
<div className="page-hero">
    <div className="hero-eyebrow tag">India's Largest Educators' Event · NEP 2020 Workshops · Pan-India</div>
    <h1>Fostering a Community of Principals & Educators Leading India's Education Revolution.</h1>
     <p className="hero-sub subtitle grey-text ">NAVNEET TOPTECH Conclaves bring principals, trustees, school owners, and teachers together across 50+ cities — for panel discussions, hands-on workshops, and a community built to move school education forward through technology.</p>
    <Link href="/contact" className="btn-gold" >Register Your City</Link>
  </div>
</div>
  );
}

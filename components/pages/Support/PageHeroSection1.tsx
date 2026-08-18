import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb"><Link href="/" >Home</Link><span>/</span><span>Support & Services</span></div>
<div className="page-hero">
    <div className="page-hero-tag">Support & Services · Onboarding · Training</div>
    <h1>On-Site Support, Stationed Services.</h1>
    <p>With 65+ years of expertise in educational syllabi and smart curriculums, NAVNEET TOPTECH provides world-class service from the moment you onboard to every time you need support after.</p>
    <Link href="/contact" className="btn-gold" >Talk to Our Support Team</Link>
  </div>
</div>
  );
}

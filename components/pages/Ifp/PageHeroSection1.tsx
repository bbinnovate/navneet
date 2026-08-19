import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>Hardware & IFP</span>
      </div>
<div className="page-hero">
        <div className="hero-eyebrow tag">
          Interactive Flat Panels · Hardware Partners · AI-Enabled Smart Boards
        </div>
        <h1>The Classroom Technology Behind TopClass.</h1>
         <p className="hero-sub subtitle grey-text ">
          Industry-grade Interactive Flat Panels from Brio, Cybernetix, and
          Hikvision. No laptop. No projector. No IT setup. Walk in, turn on,
          teach.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold" >
            Book a Hardware Demo
          </Link>
        </div>
      </div>
</div>
  );
}

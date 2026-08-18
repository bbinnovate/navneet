import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb"><Link href="/" >Home</Link><span>/</span><span>Careers</span></div>
<div className="page-hero">
    <div className="page-hero-tag">Careers · Join the TopForce</div>
    <h1>Join the TopForce: Where Innovation Meets Education Excellence.</h1>
    <p>NAVNEET TOPTECH, a 100% subsidiary of Navneet Education Limited — a 65+ year legacy in education — is on a mission to redefine learning through technology. We're looking for dynamic people who want to build impactful learning experiences for students and educators across India.</p>
    <Link href="/contact" className="btn-gold" >View Open Roles ↓</Link>
  </div>
</div>
  );
}

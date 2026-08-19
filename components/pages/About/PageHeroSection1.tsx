import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>About Us</span>
      </div>
<div className="page-hero">
        <div className="hero-eyebrow tag">
          EdTech Arm of Navneet Education Limited · Founded 2008 · Mumbai
        </div>
        <h1>
          <span style={{ color: '#f5b61f' }}>School Transformation</span> Starts with
          the Right Partner.
        </h1>
         <p className="hero-sub subtitle grey-text ">
          We don't just hand schools a product. We walk alongside them from
          strengthening everyday classroom learning to enabling long-term
          institutional growth.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold" >
            Book a Free Demo
          </Link>
          <button className="btn-wh-outline">Download Company Profile</button>
        </div>
      </div>
</div>
  );
}

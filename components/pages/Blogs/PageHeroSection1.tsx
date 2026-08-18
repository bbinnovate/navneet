import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>Blogs</span>
      </div>
<div className="page-hero">
        <div className="page-hero-tag">
          Insights · Education · Technology · Teaching
        </div>
        <h1>Ideas That Move Schools Forward.</h1>
        <p>
          Perspectives from NAVNEET TOPTECH on school transformation, teaching
          innovation, AI in education, and the future of learning in India.
        </p>
      </div>
</div>
  );
}

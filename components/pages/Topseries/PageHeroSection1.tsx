import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><Link href="/topschool-learning-management-system" >TopSchool</Link><span>/</span><span>TopSeries</span>
      </div>
<div className="page-hero">
        <div className="hero-eyebrow tag">
          Phygital Coursebooks · NEP & NCF Aligned · Nursery to Grade 8
        </div>
        <h1>Printed Books That Connect to Digital Learning.</h1>
        <p className="hero-sub subtitle grey-text ">
          TopSeries is a comprehensive set of curriculum-aligned coursebooks for
          Grades Nursery to 8 — meticulously crafted to align with NEP 2020 and
          NCF guidelines. Every book connects to TopSchool LMS for a true
          phygital experience.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold" >
            Request a Specimen Kit
          </Link>
        </div>
      </div>
</div>
  );
}

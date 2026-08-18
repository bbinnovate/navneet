import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>Products</span><span>/</span><span>TopSchool LMS</span>
      </div>
<div className="page-hero">
        <div className="page-hero-tag">
          Smart LMS · School ERP · Grades Nursery–10 · CBSE & State Boards
        </div>
        <h1>Operate Your School on One Integrated Platform.</h1>
        <p>
          A smart Learning Management System that unifies teaching and learning,
          assessments, and school management in a single place from Nursery to
          Grade 10.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn-gold" >
            Book a Free Demo
          </Link>
          <button className="btn-wh-outline">
            <span className="play-ring"></span> Product Video
          </button>
        </div>
      </div>
</div>
  );
}

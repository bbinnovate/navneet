import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>Products</span><span>/</span><span>TopClass</span>
      </div>
<div className="page-hero">
        <div className="hero-eyebrow tag">
          Digital Classroom · Offline Capable · CBSE & Maharashtra State Board
        </div>
        <h1>Make Classrooms More Engaging — Even Without the Internet.</h1>
       <p className="hero-sub subtitle grey-text ">
          An offline digital classroom solution that brings interactive,
          curriculum-aligned content to every classroom without depending on
          connectivity. Lessons become more visual, teachers explain concepts
          better, and students stay actively involved.
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

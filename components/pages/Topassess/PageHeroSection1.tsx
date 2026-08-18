import Link from 'next/link';

export default function PageHeroSection1() {
  return (
    <div className="page-hero-block">
<div className="breadcrumb">
        <Link href="/" >Home</Link><span>/</span><span>Products</span><span>/</span><span>TopAssess</span>
      </div>
<div className="page-hero">
        <div className="page-hero-tag">
          AI-Enabled · Formative & Summative · Online & Offline · Grades 1–10
        </div>
        <h1>AI-Enabled Assessments with Real-Time Performance Analytics.</h1>
        <p>
          An assessment tool that helps teachers create, administer, and
          evaluate assessments effortlessly — with 2,00,000+ questions,
          NCERT-aligned content, customisable test blueprints, flexible paper
          creation, and real-time analytics.
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

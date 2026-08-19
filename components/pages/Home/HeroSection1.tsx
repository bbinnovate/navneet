import Link from 'next/link';

export default function HeroSection1() {
  return (
    <section className="hero sec">
      
        <div>
          <div className="hero-eyebrow tag">
            EdTech Arm of Navneet Education Limited · Since 2008
          </div>
          <h1>
            India's
            <em style={{ color: '#f5b61f', fontStyle: 'normal' }}>School Transformation</em>
            Partner.
          </h1>
          <p className="hero-sub subtitle grey-text ">
            For generations, Navneet has been part of how India studies. NAVNEET
            TOPTECH carries that 65+ year legacy into the digital classroom,
            partnering with CBSE, CBSE Pattern, and Maharashtra State Board
            schools to transform how they teach, learn, and grow.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="btn-gold" >
              Book a Free Demo
            </Link>
          </div>
        </div>
        <div className="hero-video">
          <div className="vbadge">Overview Video</div>
          <div className="vplay"></div>
          <span className="vlabel">NAVNEET TOPTECH — Transforming Schools Across India</span>
        </div>
      </section>
  );
}

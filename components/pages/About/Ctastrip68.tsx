import Link from 'next/link';

export default function Ctastrip68() {
  return (
    <section className="cta-strip">
          <h2 className="sec-title white-text heading">Ready to See What Partnership Looks Like?</h2>
        <p className="subtitle dark-text">
          Book a free 30-minute demo. We'll show you what NAVNEET TOPTECH looks
          like inside your school.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-gold" >
            Book a Free Demo</Link><button className="btn-wh-outline">Download Brochure</button>
        </div>
      </section>
  );
}

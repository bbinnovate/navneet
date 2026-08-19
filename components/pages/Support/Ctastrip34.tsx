import Link from 'next/link';

export default function Ctastrip34() {
  return (
    <section className="cta-strip">
     <h2 className="sec-title sec-title-wh heading" >See the Difference for Your School.</h2>
   <p className="pcard-desc subtitle dark-text"> From onboarding to ongoing support, we're with you at every step. Let's talk about what your school needs.</p>
    <div className="cta-btns"><Link href="/contact" className="btn-gold" >Contact Us</Link></div>
  </section>
  );
}

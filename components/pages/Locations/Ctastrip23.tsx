import Link from 'next/link';

export default function Ctastrip23() {
  return (
    <section className="cta-strip">
                <h2 className="sec-title sec-title-wh heading" >Talk to Your Local Team.</h2>
      <p className="pcard-desc subtitle dark-text">
          Our on-ground teams are present in 30+ cities. Reach us on 1800 266
          6676 or book a demo.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-gold" >Contact Us</Link>
        </div>
      </section>
  );
}

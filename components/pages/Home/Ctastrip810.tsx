import Link from 'next/link';

export default function Ctastrip810() {
  return (
    <section className="cta-strip">
        <h2>Partner with NAVNEET TOPTECH.</h2>
        <p>
          See how we can work for your school and become your partner in lasting
          change.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-wh" >
            Book a Free Demo
          </Link>
          <a className="btn-ghost" href="tel:18002666676">Call 1800 266 6676</a>
        </div>
      </section>
  );
}

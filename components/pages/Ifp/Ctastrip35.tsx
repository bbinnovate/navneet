import Link from 'next/link';

export default function Ctastrip35() {
  return (
    <section className="cta-strip">
        <h2>See the Panel in Action at Your School.</h2>
        <p>
          Book a demo and we'll bring the full classroom experience to you —
          hardware, TopClass content, and Navneet AI — in one session.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-wh" >
            Book a Hardware Demo
          </Link>
        </div>
      </section>
  );
}

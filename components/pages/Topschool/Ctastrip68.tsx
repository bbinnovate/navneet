import Link from 'next/link';

export default function Ctastrip68() {
  return (
    <section className="cta-strip">
        <h2>See TopSchool Running in a School Like Yours.</h2>
        <p>
          Book a free personalised demo — configured for your board, your
          grades, and your school's size.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-wh" >
            Book a Free Demo</Link><button className="btn-ghost">Download Brochure</button>
        </div>
      </section>
  );
}

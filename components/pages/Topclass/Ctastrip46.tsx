import Link from 'next/link';

export default function Ctastrip46() {
  return (
    <section className="cta-strip">
        <h2>Let Your Teachers Focus on Teaching.</h2>
        <p>
          Book a free demo and see how TopClass reduces preparation time while
          improving what students experience in every lesson.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-wh" >
            Book a Free Demo</Link><button className="btn-ghost">Download Brochure</button>
        </div>
      </section>
  );
}

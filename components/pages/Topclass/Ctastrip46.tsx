import Link from 'next/link';

export default function Ctastrip46() {
  return (
    <section className="cta-strip">
        <h2 className="sec-title sec-title-wh heading" >Let Your Teachers Focus on Teaching.</h2>
       <p className="pcard-desc subtitle dark-text">
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

import Link from 'next/link';

export default function Ctastrip46() {
  return (
    <section className="cta-strip">
         <h2 className="sec-title sec-title-wh heading" >Stop Spending Time on Tests. Start Using What They Tell You.</h2>
       <p className="pcard-desc subtitle dark-text">
          TopAssess handles creation and evaluation. Teachers get back the time
          — and the insight — to focus on what matters.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-gold" >
            Try TopAssess Free</Link><button className="btn-wh-outline">Request a Demo</button>
        </div>
      </section>
  );
}

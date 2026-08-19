import Link from 'next/link';

export default function Ctastrip34() {
  return (
    <section className="cta-strip">
        <h2 className="sec-title sec-title-wh heading" >Request a Specimen Kit for Your School.</h2>
       <p className="pcard-desc subtitle dark-text">
          See the books, the digital integration, and the full phygital
          experience — before you commit.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-gold" >
            Request Specimen Kit
          </Link>
        </div>
      </section>
  );
}

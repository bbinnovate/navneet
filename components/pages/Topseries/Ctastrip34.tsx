import Link from 'next/link';

export default function Ctastrip34() {
  return (
    <section className="cta-strip">
        <h2>Request a Specimen Kit for Your School.</h2>
        <p>
          See the books, the digital integration, and the full phygital
          experience — before you commit.
        </p>
        <div className="cta-btns">
          <Link href="/contact" className="btn-wh" >
            Request Specimen Kit
          </Link>
        </div>
      </section>
  );
}

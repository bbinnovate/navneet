import Link from 'next/link';

export default function Ctastrip79() {
  return (
    <section className="cta-strip">
    <h2   className="heading white-text"> Bring the Next Conclave to Your City.</h2>
    <p className="subtitle dark-text" >Register your school's interest, and our events team will confirm your city, date, and participation details.</p>
    <div className="cta-btns">
      <Link href="/contact" className="btn-gold" >Register Interest</Link>
    </div>
  </section>
  );
}

import Link from 'next/link';

export default function Ctastrip35() {
  return (
    <section className="cta-strip">
     <h2 className="heading white-text" >Don't See Your Role?</h2>
    <p  className="subtitle dark-text" >We're always looking for people who care about education and technology. Send us your CV and we'll reach out when a fit opens up.</p>
    <div className="cta-btns"><Link href="/contact" className="btn-gold" >Send Your CV</Link></div>
  </section>
  );
}

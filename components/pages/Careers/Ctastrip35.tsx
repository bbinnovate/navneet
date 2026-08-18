import Link from 'next/link';

export default function Ctastrip35() {
  return (
    <section className="cta-strip">
    <h2>Don't See Your Role?</h2>
    <p>We're always looking for people who care about education and technology. Send us your CV and we'll reach out when a fit opens up.</p>
    <div className="cta-btns"><Link href="/contact" className="btn-wh" >Send Your CV</Link></div>
  </section>
  );
}

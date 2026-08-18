import Link from 'next/link';

export default function White1() {
  return (
    <section className="sec sec-white">
       <div className="g2" style={{ gap: 'clamp(1rem, 1rem, 3.5rem)', alignItems: 'center' }}>
          <div>
            <p className="sec-tag">Who We Are</p>
            <h2 className="sec-title">Built on 65+ Years of Educational Trust.</h2>
            <p
              style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.78', marginBottom: '1.25rem' }}
            >
              NAVNEET TOPTECH is the EdTech arm of Navneet Education Limited,
              built to carry a 65+-year legacy of trusted learning into the
              digital classroom. For generations, Navneet has been a part of how
              India studies — present in millions of homes, schools, and study
              desks across the country. NAVNEET TOPTECH extends that same trust
              into technology, partnering with schools to transform how they
              teach, learn, and grow.
            </p>
            <p
              style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.78', marginBottom: '1.25rem' }}
            >
              What sets us apart is deep academic expertise drawn from decades
              of curriculum and content, technology built specifically for the
              realities of Indian classrooms, and lasting relationships with
              thousands of schools, all backed by the trust of the Navneet name.
            </p>
            <p
              style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: '1.78', marginBottom: '1.5rem' }}
            >
              We partner with CBSE, CBSE Pattern, and Maharashtra State Board
              schools at every stage of their journey from strengthening
              everyday classroom learning to enabling long-term institutional
              growth.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <div
                style={{ background: 'var(--light)', borderRadius: '14px', border: '2px dashed var(--border)', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', padding: '1.5rem', textAlign: 'center' }}
              >
                <div style={{ fontSize: '32px' }}>📸</div>
                <div
                  style={{ fontFamily: 'var(--fh)', fontSize: '13px', fontWeight: '700', color: 'var(--muted)' }}
                >
                  About / Office Photo
                </div>
                <div style={{ fontSize: '11px', color: 'var(--border)' }}>
                  [ 800×600px — team, office, or brand image ]
                </div>
                <div
                  style={{ position: 'absolute', top: '8px', right: '10px', background: 'var(--light)', border: '1px solid var(--border)', borderRadius: '6px', padding: '2px 8px', fontSize: '10px', fontWeight: '700', fontFamily: 'var(--fh)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}
                >
                  Placeholder
                </div>
              </div>
            </div>
           <Link href="/contact"
  className="btn-outline-blue"
  
  style={{ marginTop: '1rem', display: 'none' }}
>
  Talk to Us →
</Link>
          </div>
          <div style={{ width: '100%' }}>
            <div
              style={{ background: 'var(--light)', borderRadius: '14px', border: '2px dashed var(--border)', aspectRatio: '4/3', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', position: 'relative', padding: '1.5rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '32px' }}>🏫</div>
              <div
                style={{ fontFamily: 'var(--fh)', fontSize: '13px', fontWeight: '700', color: 'var(--muted)' }}
              >
                School Photo / Brand Image
              </div>
              <div style={{ fontSize: '11px', color: 'var(--border)' }}>
                [ 800×600px — school environment or team photo ]
              </div>
              <div
                style={{ position: 'absolute', top: '8px', right: '10px', background: 'var(--light)', border: '1px solid var(--border)', borderRadius: '6px', padding: '2px 8px', fontSize: '10px', fontWeight: '700', fontFamily: 'var(--fh)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.8px' }}
              >
                Placeholder
              </div>
            </div>
          </div>
          
        </div>
         <Link href="/contact"
              className="btn-outline-blue"
              
              style={{ marginTop: '1rem' }}
            >
              Talk to Us →
            </Link>
      </section>
  );
}

'use client';

import { FormEvent, use, useState } from 'react';
import Link from 'next/link';

export default function ApplyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set('careerSlug', slug);

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: data });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed.');
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  if (success) {
    return (
      <main className="sec sec-light">
        <div className="form-box" style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h1 className="heading blue-text">Application submitted</h1>
          <p className="subtitle dark-text">Thank you for applying. Our team will review your application and get back to you.</p>
          <Link href={`/careers/${slug}`} className="btn-gold" style={{ display: 'inline-block', marginTop: 16 }}>Back to job details</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="sec sec-light">
      <form className="form-box" style={{ maxWidth: 560, margin: '0 auto' }} onSubmit={submit}>
        <h1 className="heading blue-text">Apply for this role</h1>
        <p className="subtitle dark-text">Fill in your details and upload your CV to apply.</p>

        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required placeholder="you@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone *</label>
          <input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" pattern="[+]?[\d\s\-()]{7,20}" />
        </div>
        <div className="form-group">
          <label htmlFor="role">Which Role *</label>
          <input id="role" name="role" required placeholder="Job title you are applying for" />
        </div>
        <div className="form-group">
          <label htmlFor="cv">CV / Resume * (PDF or Word, max 10MB)</label>
          <input id="cv" name="cv" type="file" required accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" />
        </div>
        <div className="form-group">
          <label htmlFor="portfolio">Portfolio (optional)</label>
          <input id="portfolio" name="portfolio" type="file" accept=".pdf,.doc,.docx,image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Tell us why you are a great fit…" />
        </div>

        {error && <p className="admin-error" style={{ marginBottom: 12 }}>{error}</p>}

        <button type="submit" className="btn-gold w-full" disabled={busy}>
          {busy ? 'Submitting…' : 'Submit Application'}
        </button>
      </form>
    </main>
  );
}

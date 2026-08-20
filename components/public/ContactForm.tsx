'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError('');
    setMessage('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      role: String(data.get('role') || ''),
      board: String(data.get('board') || ''),
      schoolName: String(data.get('schoolName') || ''),
      city: String(data.get('city') || ''),
      product: String(data.get('product') || ''),
      message: String(data.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Submission failed.');
      setMessage('Thank you! Our team will reach out within 24 hours.');
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="form-box" onSubmit={submit}>
      <h2 className="heading blue-text mb-3">Book a Free Demo</h2>
      <p className="subtitle dark-text">
        Our team will reach out within 24 hours to schedule your personalised walkthrough.
      </p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-name">Your Name</label>
          <input id="contact-name" name="name" type="text" required placeholder="e.g. Priya Sharma" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-phone">Mobile Number</label>
          <input id="contact-phone" name="phone" type="tel" required placeholder="Your WhatsApp number" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">School Email</label>
        <input id="contact-email" name="email" type="email" required placeholder="principal@school.com" />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-role">Your Role</label>
          <select id="contact-role" name="role" required defaultValue="">
            <option value="" disabled>Select Role</option>
            <option>School Owner</option>
            <option>Principal</option>
            <option>Teacher</option>
            <option>Coordinator</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="contact-board">Board</label>
          <select id="contact-board" name="board" defaultValue="">
            <option value="">Select Board</option>
            <option>CBSE</option>
            <option>CBSE Pattern</option>
            <option>Maharashtra State Board</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="contact-school">School Name</label>
          <input id="contact-school" name="schoolName" type="text" placeholder="Full school name" />
        </div>
        <div className="form-group">
          <label htmlFor="contact-city">City</label>
          <input id="contact-city" name="city" type="text" placeholder="e.g. Mumbai" />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="contact-product">I&apos;m interested in</label>
        <select id="contact-product" name="product" defaultValue="">
          <option value="">Select Product</option>
          <option>TopSchool LMS</option>
          <option>TopClass</option>
          <option>TopAssess</option>
          <option>TopSeries</option>
          <option>Hardware & IFP</option>
          <option>All Products</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Anything else?</label>
        <textarea id="contact-message" name="message" placeholder="Optional — number of students, current setup, goals" />
      </div>

      {error && <p className="admin-error" style={{ marginBottom: 12 }}>{error}</p>}
      {message && <p className="tag green-text" style={{ marginBottom: 12 }}>{message}</p>}

      <div className="flex w-full gap-3">
        <button type="submit" className="btn-gold w-full" disabled={busy}>
          {busy ? 'Submitting…' : 'Book My Free Demo →'}
        </button>
      </div>

      <p className="subtitle dark-text mb-3" style={{ marginTop: 10, textAlign: 'center' }}>
        By submitting, you agree to receive communications from NAVNEET TOPTECH.
      </p>
    </form>
  );
}

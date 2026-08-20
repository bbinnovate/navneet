'use client';

import { useState } from 'react';

type Props = {
  folder: string;
  value?: string;
  onChange: (url: string) => void;
  label?: string;
};

export default function ImageUploader({ folder, value, onChange, label = 'Featured Image' }: Props) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  async function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError('');
    try {
      const form = new FormData();
      form.append('file', file);
      form.append('folder', folder);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      onChange(data.url);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-field">
      <label>{label}</label>
      {value && (
        <img src={value} alt="" className="admin-preview-img" />
      )}
      <input type="file" accept="image/*" onChange={upload} disabled={busy} />
      {busy && <small>Uploading…</small>}
      {error && <small className="admin-error-text">{error}</small>}
    </div>
  );
}

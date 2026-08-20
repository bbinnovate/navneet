'use client';

import { FormEvent, useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '@/lib/firebase/client';
import {
  ADMIN_NAV,
  APPLICATION_STATUSES,
  CONTENT_STATUSES,
  ENQUIRY_STATUSES,
  RESOURCE_LABELS,
} from '@/lib/constants';
import ContentEditor from './ContentEditor';
import ImageUploader from './ImageUploader';

type Row = Record<string, unknown> & { id: string };

const CONTENT_RESOURCES = ['news', 'articles', 'blogs', 'careers'];

function fmtDate(v: unknown) {
  if (!v) return '—';
  try { return new Date(String(v)).toLocaleDateString(); } catch { return '—'; }
}

function statusOptions(resource?: string) {
  if (resource === 'applications') return APPLICATION_STATUSES;
  if (resource === 'enquiries') return ENQUIRY_STATUSES;
  if (resource === 'careers') return [...CONTENT_STATUSES, 'closed'];
  if (CONTENT_RESOURCES.includes(resource || '')) return CONTENT_STATUSES;
  return [];
}

export function AuthForm({ mode }: { mode: 'login' | 'signup' }) {
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setError('');
    const form = new FormData(e.currentTarget);
    try {
      const credential = await signInWithEmailAndPassword(
        firebaseAuth,
        String(form.get('email')),
        String(form.get('password'))
      );
      const res = await fetch('/api/admin/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken: await credential.user.getIdToken() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'This account is not an administrator.');
      location.href = '/admin/dashboard';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to sign in.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="admin-auth">
      <form onSubmit={submit} className="auth-card">
        <span className="admin-kicker">NAVNEET TOPTECH</span>
        <h1>{mode === 'login' ? 'Welcome back' : 'Admin access'}</h1>
        <p>
          {mode === 'signup'
            ? 'New admin accounts are created by an existing administrator from User Management.'
            : 'Sign in with your administrator account.'}
        </p>
        <input required name="email" type="email" placeholder="Email address" />
        <input required name="password" type="password" placeholder="Password" />
        {error && <div className="admin-error">{error}</div>}
        <button disabled={busy} className="admin-primary">
          {busy ? 'Please wait…' : 'Sign in'}
        </button>
        {mode === 'signup' && (
          <Link href="/admin/login">Back to login</Link>
        )}
      </form>
    </main>
  );
}

function ChartBars({ data, label }: { data: Record<string, number>; label: string }) {
  const entries = Object.entries(data || {}).sort(([a], [b]) => a.localeCompare(b));
  const max = Math.max(...entries.map(([, v]) => v), 1);
  if (!entries.length) return <div className="admin-empty">No {label.toLowerCase()} in this period.</div>;
  return (
    <div className="admin-bars">
      {entries.map(([day, count]) => (
        <div key={day} className="admin-bar-row">
          <span>{day.slice(5)}</span>
          <div className="admin-bar-track"><div className="admin-bar-fill" style={{ width: `${(count / max) * 100}%` }} /></div>
          <strong>{count}</strong>
        </div>
      ))}
    </div>
  );
}

function emptyForm(resource?: string): Row {
  return {
    id: '',
    title: '',
    name: '',
    slug: '',
    category: '',
    featuredImage: '',
    shortDescription: '',
    content: '',
    author: '',
    status: 'draft',
    scheduledAt: '',
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    department: '',
    location: '',
    employmentType: '',
    experience: '',
    salary: '',
    role: 'user',
    email: '',
    password: '',
  };
}

export default function AdminApp({ resource }: { resource?: string }) {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dashboard, setDashboard] = useState<Record<string, unknown> | null>(null);
  const [modal, setModal] = useState<'create' | 'edit' | 'view' | null>(null);
  const [form, setForm] = useState<Row>(emptyForm());
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [loading, setLoading] = useState(false);
  const [periodDays, setPeriodDays] = useState(0);

  const isCategory = resource?.endsWith('-categories') ?? false;
  const isContent = CONTENT_RESOURCES.includes(resource || '');
  const isCareer = resource === 'careers';
  const title = resource
    ? isCategory
      ? `${resource.replace('-categories', '').replace(/^./, (x) => x.toUpperCase())} Categories`
      : RESOURCE_LABELS[resource] || resource
    : 'Dashboard';

  const notify = useCallback((msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 3000);
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      if (!resource) {
        const from = periodDays
          ? `?from=${new Date(Date.now() - periodDays * 86400000).toISOString()}`
          : '';
        const r = await fetch(`/api/admin/dashboard${from}`);
        if (!r.ok) throw new Error('Unauthorized');
        setDashboard(await r.json());
        return;
      }
      const params = new URLSearchParams({ search, page: String(page), limit: '20' });
      if (statusFilter) params.set('status', statusFilter);
      const r = await fetch(`/api/admin/${resource}?${params}`);
      if (!r.ok) throw new Error('Unauthorized');
      const d = await r.json();
      setRows(d.rows || []);
      setTotal(d.total || 0);
    } catch {
      location.href = '/admin/login';
    } finally {
      setLoading(false);
    }
  }, [resource, search, page, statusFilter, periodDays]);

  useEffect(() => { load(); }, [load]);

  async function logout() {
    await fetch('/api/admin/auth/logout', { method: 'POST' });
    location.href = '/admin/login';
  }

  function openCreate() {
    setForm(emptyForm(resource));
    setError('');
    setModal('create');
  }

  async function openEdit(row: Row) {
    if (resource === 'applications' || resource === 'enquiries') {
      setForm({ ...row });
      setModal('view');
      return;
    }
    const r = await fetch(`/api/admin/${resource}/${row.id}`);
    const data = await r.json();
    setForm({
      ...data,
      scheduledAt: data.scheduledAt ? new Date(data.scheduledAt).toISOString().slice(0, 16) : '',
    });
    setError('');
    setModal('edit');
  }

  async function save(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (resource === 'users' && modal === 'create') {
        const r = await fetch('/api/admin/auth/create-user', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            password: form.password,
            role: form.role,
          }),
        });
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
      } else if (modal === 'create') {
        const r = await fetch(`/api/admin/${resource}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
      } else if (modal === 'edit' && resource) {
        const { id, ...payload } = form;
        const r = await fetch(`/api/admin/${resource}/${id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const d = await r.json();
        if (!r.ok) throw new Error(d.error);
      }
      setModal(null);
      notify('Saved successfully.');
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed.');
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: string) {
    if (!confirm('Delete this record? This cannot be undone.')) return;
    await fetch(`/api/admin/${resource}/${id}`, { method: 'DELETE' });
    notify('Deleted.');
    load();
  }

  async function updateStatus(id: string, status: string) {
    await fetch(`/api/admin/${resource}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    load();
  }

  async function updateRole(id: string, role: string) {
    await fetch(`/api/admin/${resource}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ role }),
    });
    notify('Role updated.');
    load();
  }

  async function runScheduler() {
    const r = await fetch('/api/cron/publish-scheduled', { method: 'POST' });
    const d = await r.json();
    notify(`Published ${d.published || 0} scheduled item(s).`);
    load();
  }

  const stats = useMemo(() => {
    if (!dashboard?.totals) return [];
    const t = dashboard.totals as Record<string, number>;
    const p = (dashboard.published || {}) as Record<string, number>;
    const s = (dashboard.scheduled || {}) as Record<string, number>;
    return [
      ['Total News', t.news], ['Published News', p.news], ['Scheduled News', s.news],
      ['Total Articles', t.articles], ['Published Articles', p.articles], ['Scheduled Articles', s.articles],
      ['Total Blogs', t.blogs], ['Published Blogs', p.blogs], ['Scheduled Blogs', s.blogs],
      ['Total Careers', t.careers], ['Active Careers', p.careers],
      ['Applications', t.applications], ['Enquiries', t.enquiries],
      ['Users', t.users], ['Admins', t.admins],
    ];
  }, [dashboard]);

  const totalPages = Math.max(1, Math.ceil(total / 20));
  const opts = statusOptions(resource);

  function setField(key: string, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <div className="admin-shell">
      {menu && <div className="admin-overlay" onClick={() => setMenu(false)} />}
      <aside className={menu ? 'admin-side open' : 'admin-side'}>
        <div className="admin-brand">NTT <span>ADMIN</span></div>
        <nav>
          {ADMIN_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href || (resource && item.href.endsWith(`/${resource}`)) ? 'active' : ''}
              onClick={() => setMenu(false)}
            >
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}
        </nav>
        <button className="admin-logout" onClick={logout}>Sign out</button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <button type="button" className="admin-menu" onClick={() => setMenu(!menu)} aria-label="Menu">☰</button>
          <div>
            <span className="admin-kicker">CONTENT OPERATIONS</span>
            <h1>{title}</h1>
          </div>
          <div className="admin-header-actions">
            {!resource && (
              <button type="button" className="admin-secondary" onClick={runScheduler}>
                Run scheduler
              </button>
            )}
            {resource && (
              <button type="button" className="admin-primary" onClick={openCreate}>
                + Add {isCategory ? 'category' : RESOURCE_LABELS[resource]?.replace(' Management', '') || 'item'}
              </button>
            )}
          </div>
        </header>

        {!resource ? (
          <>
            <div className="admin-period">
              <span>Date range</span>
              <select value={periodDays} onChange={(e) => setPeriodDays(Number(e.target.value))}>
                <option value={0}>All time</option>
                <option value={7}>Last 7 days</option>
                <option value={30}>Last 1 month</option>
                <option value={180}>Last 6 months</option>
                <option value={365}>Last 1 year</option>
              </select>
            </div>
            {loading ? (
              <div className="admin-empty">Loading dashboard…</div>
            ) : (
              <>
                <section className="admin-stats">
                  {stats.map(([name, value]) => (
                    <article key={String(name)}>
                      <span>{name}</span>
                      <strong>{value as number}</strong>
                    </article>
                  ))}
                </section>
                <section className="admin-chart">
                  <h2>Activity overview</h2>
                  <div className="admin-charts-grid">
                    <div><h3>News</h3><ChartBars data={(dashboard?.charts as Record<string, Record<string, number>>)?.news || {}} label="News" /></div>
                    <div><h3>Articles</h3><ChartBars data={(dashboard?.charts as Record<string, Record<string, number>>)?.articles || {}} label="Articles" /></div>
                    <div><h3>Blogs</h3><ChartBars data={(dashboard?.charts as Record<string, Record<string, number>>)?.blogs || {}} label="Blogs" /></div>
                    <div><h3>Applications</h3><ChartBars data={(dashboard?.charts as Record<string, Record<string, number>>)?.applications || {}} label="Applications" /></div>
                    <div><h3>Enquiries</h3><ChartBars data={(dashboard?.charts as Record<string, Record<string, number>>)?.enquiries || {}} label="Enquiries" /></div>
                    <div><h3>Users</h3><ChartBars data={(dashboard?.charts as Record<string, Record<string, number>>)?.users || {}} label="Users" /></div>
                  </div>
                </section>
              </>
            )}
          </>
        ) : (
          <>
            <div className="admin-toolbar">
              <input
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                placeholder={`Search ${title.toLowerCase()}…`}
              />
              {opts.length > 0 && (
                <select value={statusFilter} onChange={(e) => { setStatusFilter(e.target.value); setPage(1); }}>
                  <option value="">All statuses</option>
                  {opts.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              )}
              <span>{total} records</span>
            </div>

            <div className="admin-table-wrap">
              {loading ? (
                <div className="admin-empty">Loading…</div>
              ) : (
                <>
                  <table>
                    <thead>
                      <tr>
                        <th>{isCategory ? 'Name' : 'Title / Name'}</th>
                        <th>{isCategory ? 'Slug' : 'Status / Role'}</th>
                        <th>Created</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.id}>
                          <td>
                            <strong>{String(row.title || row.name || '')}</strong>
                            <small>{String(row.email || row.slug || row.shortDescription || row.role || '')}</small>
                          </td>
                          <td>
                            {row.status && opts.length ? (
                              <select
                                value={String(row.status)}
                                onChange={(e) => updateStatus(row.id, e.target.value)}
                              >
                                {opts.map((s) => <option key={s} value={s}>{s}</option>)}
                              </select>
                            ) : resource === 'users' ? (
                              <select
                                value={String(row.role || 'user')}
                                onChange={(e) => updateRole(row.id, e.target.value)}
                              >
                                <option value="user">user</option>
                                <option value="admin">admin</option>
                              </select>
                            ) : (
                              String(row.slug || row.role || '—')
                            )}
                          </td>
                          <td>{fmtDate(row.createdAt)}</td>
                          <td className="admin-actions">
                            <button type="button" className="admin-secondary-sm" onClick={() => openEdit(row)}>View</button>
                            {!isCategory && resource !== 'users' && (
                              <button type="button" className="admin-secondary-sm" onClick={() => openEdit(row)}>Edit</button>
                            )}
                            <button type="button" className="admin-danger" onClick={() => remove(row.id)}>Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {!rows.length && (
                    <div className="admin-empty">No records found. Create your first one to get started.</div>
                  )}
                </>
              )}
            </div>

            {totalPages > 1 && (
              <div className="admin-pagination">
                <button type="button" disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
                <span>Page {page} of {totalPages}</span>
                <button type="button" disabled={page >= totalPages} onClick={() => setPage((p) => p + 1)}>Next</button>
              </div>
            )}
          </>
        )}

        {modal && (
          <div className="admin-modal" onClick={() => setModal(null)}>
            <form className="admin-modal-form" onSubmit={save} onClick={(e) => e.stopPropagation()}>
              <button type="button" className="admin-close" onClick={() => setModal(null)}>×</button>
              <h2>
                {modal === 'view' ? 'Details' : modal === 'edit' ? 'Edit' : 'New'}{' '}
                {isCategory ? 'category' : title.replace(' Management', '')}
              </h2>

              {modal === 'view' && resource === 'applications' && (
                <div className="admin-detail">
                  <p><strong>Name:</strong> {String(form.name)}</p>
                  <p><strong>Email:</strong> {String(form.email)}</p>
                  <p><strong>Phone:</strong> {String(form.phone)}</p>
                  <p><strong>Role:</strong> {String(form.role)}</p>
                  <p><strong>Message:</strong> {String(form.message || '—')}</p>
                  {form.cvPath && <p><strong>CV:</strong> {String(form.cvPath)}</p>}
                  {form.portfolioPath && <p><strong>Portfolio:</strong> {String(form.portfolioPath)}</p>}
                </div>
              )}

              {modal === 'view' && resource === 'enquiries' && (
                <div className="admin-detail">
                  <p><strong>ID:</strong> {String(form.id)}</p>
                  <p><strong>Name:</strong> {String(form.name)}</p>
                  <p><strong>Email:</strong> {String(form.email)}</p>
                  <p><strong>Phone:</strong> {String(form.phone || form.mobile || '—')}</p>
                  <p><strong>Message:</strong> {String(form.message || form.notes || '—')}</p>
                </div>
              )}

              {modal !== 'view' && isCategory && (
                <>
                  <input required value={String(form.name || '')} onChange={(e) => setField('name', e.target.value)} placeholder="Category name" />
                  <input required value={String(form.slug || '')} onChange={(e) => setField('slug', e.target.value)} placeholder="seo-friendly-slug" />
                </>
              )}

              {modal !== 'view' && !isCategory && resource === 'users' && modal === 'create' && (
                <>
                  <input required value={String(form.name || '')} onChange={(e) => setField('name', e.target.value)} placeholder="Full name" />
                  <input required type="email" value={String(form.email || '')} onChange={(e) => setField('email', e.target.value)} placeholder="Email" />
                  <input required type="password" minLength={10} value={String(form.password || '')} onChange={(e) => setField('password', e.target.value)} placeholder="Password (10+ characters)" />
                  <select value={String(form.role || 'user')} onChange={(e) => setField('role', e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </>
              )}

              {modal !== 'view' && isContent && (
                <>
                  <input required value={String(form.title || '')} onChange={(e) => setField('title', e.target.value)} placeholder="Title" />
                  <input required value={String(form.slug || '')} onChange={(e) => setField('slug', e.target.value)} placeholder="seo-friendly-slug" />
                  <input value={String(form.category || '')} onChange={(e) => setField('category', e.target.value)} placeholder="Category" />
                  <ImageUploader folder={resource!} value={String(form.featuredImage || '')} onChange={(url) => setField('featuredImage', url)} />
                  <textarea value={String(form.shortDescription || '')} onChange={(e) => setField('shortDescription', e.target.value)} placeholder="Short description" />
                  <ContentEditor value={String(form.content || '')} onChange={(v) => setField('content', v)} placeholder="Full content…" />
                  <input value={String(form.author || '')} onChange={(e) => setField('author', e.target.value)} placeholder="Author" />
                  {isCareer && (
                    <>
                      <input value={String(form.department || '')} onChange={(e) => setField('department', e.target.value)} placeholder="Department" />
                      <input value={String(form.location || '')} onChange={(e) => setField('location', e.target.value)} placeholder="Location" />
                      <input value={String(form.employmentType || '')} onChange={(e) => setField('employmentType', e.target.value)} placeholder="Employment type" />
                      <input value={String(form.experience || '')} onChange={(e) => setField('experience', e.target.value)} placeholder="Experience" />
                      <input value={String(form.salary || '')} onChange={(e) => setField('salary', e.target.value)} placeholder="Salary / CTC" />
                    </>
                  )}
                  <select value={String(form.status || 'draft')} onChange={(e) => setField('status', e.target.value)}>
                    {statusOptions(resource).map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <input type="datetime-local" value={String(form.scheduledAt || '')} onChange={(e) => setField('scheduledAt', e.target.value)} />
                  <input value={String(form.seoTitle || '')} onChange={(e) => setField('seoTitle', e.target.value)} placeholder="SEO title" />
                  <textarea value={String(form.seoDescription || '')} onChange={(e) => setField('seoDescription', e.target.value)} placeholder="SEO description" />
                  <input value={String(form.seoKeywords || '')} onChange={(e) => setField('seoKeywords', e.target.value)} placeholder="SEO keywords" />
                </>
              )}

              {error && <p className="admin-error">{error}</p>}
              {modal !== 'view' && (
                <button type="submit" className="admin-primary" disabled={loading}>
                  {loading ? 'Saving…' : 'Save'}
                </button>
              )}
            </form>
          </div>
        )}

        {toast && <div className="admin-toast">{toast}</div>}
      </main>
    </div>
  );
}

import { NextRequest, NextResponse } from 'next/server';
import { db, FieldValue, bucket } from '@/lib/firebase/admin';
import { ALLOWED_CV_TYPES, MAX_CV_SIZE } from '@/lib/constants';
import { randomUUID } from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const phone = String(form.get('phone') || '').trim();
    const role = String(form.get('role') || '').trim();
    const message = String(form.get('message') || '').trim();
    const careerId = String(form.get('careerId') || '');
    const careerSlug = String(form.get('careerSlug') || '');
    const cvFile = form.get('cv') as File | null;
    const portfolioFile = form.get('portfolio') as File | null;

    if (!name || !email || !phone || !role) {
      return NextResponse.json({ error: 'Name, email, phone, and role are required.' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    if (!cvFile) {
      return NextResponse.json({ error: 'CV is required.' }, { status: 400 });
    }
    if (!ALLOWED_CV_TYPES.includes(cvFile.type)) {
      return NextResponse.json({ error: 'CV must be PDF or Word document.' }, { status: 400 });
    }
    if (cvFile.size > MAX_CV_SIZE) {
      return NextResponse.json({ error: 'CV file exceeds 10MB limit.' }, { status: 400 });
    }

    async function uploadFile(file: File, folder: string) {
      const ext = file.name.split('.').pop()?.toLowerCase() || 'bin';
      const path = `uploads/applications/${folder}/${randomUUID()}.${ext}`;
      const buffer = Buffer.from(await file.arrayBuffer());
      const gcsFile = bucket.file(path);
      await gcsFile.save(buffer, { metadata: { contentType: file.type } });
      return path;
    }

    const cvPath = await uploadFile(cvFile, 'cv');
    let portfolioPath: string | null = null;
    if (portfolioFile && portfolioFile.size > 0) {
      portfolioPath = await uploadFile(portfolioFile, 'portfolio');
    }

    const ref = db.collection('careerApplications').doc();
    await ref.set({
      id: ref.id,
      name,
      email,
      phone,
      role,
      message,
      careerId,
      careerSlug,
      cvPath,
      portfolioPath,
      status: 'new',
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ ok: true, id: ref.id }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Application could not be submitted.' }, { status: 500 });
  }
}

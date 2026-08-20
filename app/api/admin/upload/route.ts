import { NextRequest, NextResponse } from 'next/server';
import { bucket } from '@/lib/firebase/admin';
import { requireAdmin } from '@/lib/firebase/server';
import {
  ALLOWED_CV_TYPES,
  ALLOWED_IMAGE_TYPES,
  MAX_CV_SIZE,
  MAX_IMAGE_SIZE,
} from '@/lib/constants';
import { randomUUID } from 'crypto';

const FOLDERS: Record<string, { types: string[]; maxSize: number }> = {
  news: { types: ALLOWED_IMAGE_TYPES, maxSize: MAX_IMAGE_SIZE },
  articles: { types: ALLOWED_IMAGE_TYPES, maxSize: MAX_IMAGE_SIZE },
  blogs: { types: ALLOWED_IMAGE_TYPES, maxSize: MAX_IMAGE_SIZE },
  careers: { types: ALLOWED_IMAGE_TYPES, maxSize: MAX_IMAGE_SIZE },
  cv: { types: ALLOWED_CV_TYPES, maxSize: MAX_CV_SIZE },
  portfolio: { types: [...ALLOWED_CV_TYPES, ...ALLOWED_IMAGE_TYPES], maxSize: MAX_CV_SIZE },
};

export async function POST(request: NextRequest) {
  try {
    await requireAdmin();
    const form = await request.formData();
    const file = form.get('file') as File | null;
    const folder = String(form.get('folder') || 'news');

    if (!file) return NextResponse.json({ error: 'No file provided.' }, { status: 400 });

    const config = FOLDERS[folder];
    if (!config) return NextResponse.json({ error: 'Invalid upload folder.' }, { status: 400 });
    if (!config.types.includes(file.type)) {
      return NextResponse.json({ error: 'File type not allowed.' }, { status: 400 });
    }
    if (file.size > config.maxSize) {
      return NextResponse.json({ error: 'File exceeds size limit.' }, { status: 400 });
    }

    const ext = file.name.split('.').pop()?.toLowerCase() || 'bin';
    const path = `uploads/${folder}/${randomUUID()}.${ext}`;
    const buffer = Buffer.from(await file.arrayBuffer());

    const gcsFile = bucket.file(path);
    await gcsFile.save(buffer, {
      metadata: { contentType: file.type },
      public: folder !== 'cv' && folder !== 'portfolio',
    });

    let url: string;
    if (folder === 'cv' || folder === 'portfolio') {
      const [signed] = await gcsFile.getSignedUrl({
        action: 'read',
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
      });
      url = signed;
    } else {
      url = `https://storage.googleapis.com/${bucket.name}/${path}`;
    }

    return NextResponse.json({ url, path });
  } catch {
    return NextResponse.json({ error: 'Upload failed.' }, { status: 401 });
  }
}

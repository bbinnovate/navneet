import { NextRequest, NextResponse } from 'next/server';
import { publishScheduledContent } from '@/lib/firebase/content';
import { requireAdmin } from '@/lib/firebase/server';

export async function POST(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get('authorization');

  if (cronSecret && authHeader === `Bearer ${cronSecret}`) {
    const count = await publishScheduledContent();
    return NextResponse.json({ published: count });
  }

  try {
    await requireAdmin();
    const count = await publishScheduledContent();
    return NextResponse.json({ published: count });
  } catch {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
}

export async function GET(request: NextRequest) {
  return POST(request);
}

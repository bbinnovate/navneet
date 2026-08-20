import { NextRequest, NextResponse } from 'next/server';
import { getPublishedContent } from '@/lib/firebase/content';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  if (!['news', 'articles', 'blogs', 'careers'].includes(type)) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }

  const slug = request.nextUrl.searchParams.get('slug');
  const category = request.nextUrl.searchParams.get('category');
  const limit = Math.min(50, Number(request.nextUrl.searchParams.get('limit') || 50));

  try {
    let result = await getPublishedContent(type, slug || undefined);
    if (slug) return NextResponse.json(result);

    if (Array.isArray(result) && category) {
      result = result.filter((item) => item.category === category);
    }
    if (Array.isArray(result)) {
      result = result.slice(0, limit);
    }

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch content.' }, { status: 500 });
  }
}

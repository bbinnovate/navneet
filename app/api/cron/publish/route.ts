import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

// This endpoint should be triggered by a Cron Job (e.g., Vercel Cron, GitHub Actions, etc.)
// GET /api/cron/publish
export async function GET(request: Request) {
  // In production, you would add an authorization header check here to verify the request comes from your cron service
  /*
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  */

  const collectionsToPublish = ['news', 'articles', 'blogs', 'careers'];
  let publishedCount = 0;

  try {
    const now = new Date();

    for (const collectionName of collectionsToPublish) {
      const snapshot = await adminDb.collection(collectionName)
        .where('status', '==', 'scheduled')
        .where('scheduledDate', '<=', now)
        .get();

      if (!snapshot.empty) {
        const batch = adminDb.batch();
        
        snapshot.forEach((doc) => {
          batch.update(doc.ref, {
            status: 'published',
            publishDate: FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
          });
          publishedCount++;
        });

        await batch.commit();
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully published ${publishedCount} scheduled items.` 
    });
  } catch (error: any) {
    console.error('Scheduled publish error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

// This endpoint can be triggered by a Cron Job (e.g., Vercel Cron, GitHub Actions, Cloud Scheduler, etc.)
// GET /api/cron/publish
export async function GET(request: Request) {
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
        
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          batch.update(docSnap.ref, {
            status: 'published',
            publishDate: data.scheduledDate || FieldValue.serverTimestamp(),
            updatedAt: FieldValue.serverTimestamp(),
          });
          publishedCount++;
        });

        await batch.commit();
      }
    }

    return NextResponse.json({ 
      success: true, 
      message: `Successfully processed ${publishedCount} scheduled items.`,
      timestamp: now.toISOString()
    });
  } catch (error: any) {
    console.error('Scheduled publish error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

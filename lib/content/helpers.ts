/**
 * Content status and scheduling helper utilities
 */

export interface ContentItem {
  id?: string;
  status?: string;
  publishDate?: any;
  scheduledDate?: any;
  createdAt?: any;
  [key: string]: any;
}

/**
 * Determines whether a content item is published and should be visible on the public frontend.
 * - 'published': visible (unless it has a future publishDate).
 * - 'scheduled': visible automatically once the scheduledDate is in the past or now.
 * - 'draft': never visible on public frontend.
 */
export function isContentPublished(item: ContentItem | null | undefined): boolean {
  if (!item) return false;

  const status = item.status;
  if (!status) return false;

  const now = new Date().getTime();

  if (status === 'published') {
    // If a publish date is explicitly set in the future, honor that
    if (item.publishDate) {
      const pubTime = parseTimestampToMs(item.publishDate);
      if (pubTime && pubTime > now) {
        return false;
      }
    }
    return true;
  }

  if (status === 'scheduled') {
    if (!item.scheduledDate) return false;
    const schedTime = parseTimestampToMs(item.scheduledDate);
    // Becomes automatically published once scheduled time is reached
    return schedTime ? schedTime <= now : false;
  }

  return false;
}

/**
 * Safely parse a Firestore Timestamp, Date object, ISO string, or number to milliseconds since epoch.
 */
export function parseTimestampToMs(dateVal: any): number | null {
  if (!dateVal) return null;
  if (typeof dateVal === 'number') return dateVal;
  if (dateVal instanceof Date) return dateVal.getTime();
  
  // Firestore Timestamp (client-side or admin SDK)
  if (typeof dateVal.toMillis === 'function') {
    return dateVal.toMillis();
  }
  if (typeof dateVal.toDate === 'function') {
    return dateVal.toDate().getTime();
  }
  if (dateVal.seconds !== undefined) {
    return dateVal.seconds * 1000;
  }
  if (dateVal._seconds !== undefined) {
    return dateVal._seconds * 1000;
  }
  
  // String or other date representation
  const parsed = new Date(dateVal).getTime();
  return isNaN(parsed) ? null : parsed;
}

/**
 * Formats a date value for public display (e.g. "Aug 21, 2026").
 */
export function formatDisplayDate(dateVal: any, fallback: string = ''): string {
  const ms = parseTimestampToMs(dateVal);
  if (!ms) return fallback;
  return new Date(ms).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

/**
 * Converts a date/timestamp to format suitable for datetime-local inputs (YYYY-MM-DDTHH:mm).
 * Preserves local timezone correctly.
 */
export function toDatetimeLocalValue(dateVal: any): string {
  const ms = parseTimestampToMs(dateVal);
  if (!ms) return '';
  const d = new Date(ms);
  
  const pad = (n: number) => n.toString().padStart(2, '0');
  const year = d.getFullYear();
  const month = pad(d.getMonth() + 1);
  const day = pad(d.getDate());
  const hours = pad(d.getHours());
  const minutes = pad(d.getMinutes());
  
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

/**
 * Converts a category name to a URL-friendly slug
 */
export function getCategorySlug(name: string | null | undefined): string {
  if (!name) return '';
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
}


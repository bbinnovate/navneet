export const CONTENT_STATUSES = ['draft', 'scheduled', 'published', 'unpublished'] as const;
export const APPLICATION_STATUSES = ['new', 'reviewing', 'shortlisted', 'interview', 'selected', 'rejected'] as const;
export const ENQUIRY_STATUSES = ['new', 'contacted', 'in_progress', 'converted', 'closed'] as const;
export const USER_ROLES = ['user', 'admin'] as const;

export const COLLECTIONS: Record<string, string> = {
  news: 'news',
  articles: 'articles',
  blogs: 'blogs',
  careers: 'careers',
  'news-categories': 'newsCategories',
  'article-categories': 'articleCategories',
  'blog-categories': 'blogCategories',
  applications: 'careerApplications',
  enquiries: 'contactEnquiries',
  users: 'users',
};

export const CONTENT_TYPES = ['news', 'articles', 'blogs', 'careers'] as const;

export const ADMIN_NAV = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
  { label: 'News', href: '/admin/news', icon: '📰', group: 'Content' },
  { label: 'News Categories', href: '/admin/news-categories', icon: '🏷️', group: 'Content' },
  { label: 'Articles', href: '/admin/articles', icon: '📄', group: 'Content' },
  { label: 'Article Categories', href: '/admin/article-categories', icon: '🏷️', group: 'Content' },
  { label: 'Blogs', href: '/admin/blogs', icon: '✍️', group: 'Content' },
  { label: 'Blog Categories', href: '/admin/blog-categories', icon: '🏷️', group: 'Content' },
  { label: 'Careers', href: '/admin/careers', icon: '💼', group: 'Careers' },
  { label: 'Applications', href: '/admin/applications', icon: '📋', group: 'Careers' },
  { label: 'Contact Enquiries', href: '/admin/enquiries', icon: '✉️', group: 'Enquiries' },
  { label: 'User Management', href: '/admin/users', icon: '👥', group: 'Users' },
] as const;

export const RESOURCE_LABELS: Record<string, string> = {
  news: 'News',
  articles: 'Articles',
  blogs: 'Blogs',
  careers: 'Careers',
  applications: 'Career Applications',
  enquiries: 'Contact Enquiries',
  users: 'User Management',
};

export const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
export const MAX_CV_SIZE = 10 * 1024 * 1024;
export const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
export const ALLOWED_CV_TYPES = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

export function normalizeStatus(value: string): string {
  return value.toLowerCase().replace(/\s+/g, '_');
}

export function normalizeRole(value: string): 'user' | 'admin' {
  return value.toLowerCase() === 'admin' ? 'admin' : 'user';
}

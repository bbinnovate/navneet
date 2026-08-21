import Link from 'next/link';
import Footer from '@/components/Footer';
import { Home, ArrowLeft, BookOpen, Mail, Newspaper } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found (404) | NAVNEET TOPTECH',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#f7f8fd]">
      <section className="sec pt-24 pb-20 flex-1 flex items-center justify-center">
        <div className="max-w-3xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="inline-block mb-4">
            <span className="tag green-text px-4 py-1.5 bg-[rgba(27,138,115,0.1)] rounded-full text-xs font-bold uppercase tracking-wider">
              Error 404
            </span>
          </div>

          {/* Large 404 Number */}
          <div className="font-extrabold text-7xl sm:text-9xl text-[#0A4B9B] tracking-tight font-montserrat opacity-90 mb-2">
            4<span className="text-[#1b8a73]">0</span>4
          </div>

          {/* Title */}
          <h1 className="heading blue-text text-2xl sm:text-4xl font-bold mb-4">
            Oops! Page Not Found.
          </h1>

          {/* Subtitle */}
          <p className="subtitle text-[#5a5f8a] max-w-xl mx-auto mb-8 text-base sm:text-lg leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let us help you get back on track.
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Link
              href="/"
              className="btn-gold flex items-center justify-center gap-2"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              <Home className="w-4 h-4" />
              Return to Homepage
            </Link>
            
            <Link
  href="/contact"
  className="flex w-full sm:w-auto items-center justify-center gap-2"
  style={{
    padding: '12px 28px',
    fontSize: '15px',
    border: '1.5px solid #0A4B9B',
    color: '#0A4B9B',
    borderRadius: '6px',
    fontWeight: 600,
  }}
>
  <Mail className="w-4 h-4" />
  Contact Support
</Link>
          </div>

       
        </div>
      </section>

    </main>
  );
}

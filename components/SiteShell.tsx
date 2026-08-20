'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      <SmoothScroll>{children}</SmoothScroll>
    </>
  );
}

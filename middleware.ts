import { NextRequest, NextResponse } from 'next/server';

const SESSION = 'ntt_admin_session';
const PUBLIC_ADMIN = ['/admin/login', '/admin/signup'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  if (PUBLIC_ADMIN.some((p) => pathname === p || pathname.startsWith(p + '/'))) {
    const token = request.cookies.get(SESSION)?.value;
    if (token) {
      return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION)?.value;
  if (!token) {
    const login = new URL('/admin/login', request.url);
    login.searchParams.set('next', pathname);
    return NextResponse.redirect(login);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};

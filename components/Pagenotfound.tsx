"use client";

import Link from "next/link";
import { Home } from "lucide-react";

export default function Pagenotfound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center px-4 py-16">
      <div className="inline-block mb-4">
        <span className="tag green-text px-4 py-1.5 bg-[rgba(27,138,115,0.1)] rounded-full text-xs font-bold uppercase tracking-wider">
          Error 404
        </span>
      </div>

      <div className="font-extrabold text-7xl sm:text-8xl text-[#0A4B9B] tracking-tight font-montserrat opacity-90 mb-2">
        4<span className="text-[#1b8a73]">0</span>4
      </div>

      <h1 className="heading blue-text text-2xl sm:text-3xl font-bold mb-3">
        Page Not Found
      </h1>

      <p className="subtitle text-[#5a5f8a] max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="btn-gold flex items-center justify-center gap-2"
        style={{ padding: '12px 28px', fontSize: '15px' }}
      >
        <Home className="w-4 h-4" />
        Return to Homepage
      </Link>
    </div>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type DropdownItem = {
  label: string;
  href: string;
  external?: boolean;
  muted?: boolean;
};

type NavItem = {
  label: string;
  items?: DropdownItem[];
  href?: string;
  external?: boolean;
};

const navItems: NavItem[] = [
  {
    label: "About Us",
    items: [
      {
        label: "About NTT",
        href: "/about",
      },
      {
        label: "About NEL ↗",
        href: "https://navneet.com",
        external: true,
      },
      {
        label: "Awards",
        href: "/news",
      },
    ],
  },

  {
    label: "Our Products",
    items: [
      {
        label: "TopSchool LMS",
        href: "/topschool",
      },
      {
        label: "↳ TopSeries",
        href: "/topseries",
        muted: true,
      },
      {
        label: "TopClass",
        href: "/topclass",
      },
      {
        label: "TopAssess",
        href: "/topassess",
      },
      {
        label: "Hardware & IFP",
        href: "/ifp",
      },
    ],
  },

  {
    label: "Events",
    items: [
      {
        label: "Conclaves",
        href: "/conclaves",
      },
      {
        label: "Expos",
        href: "/conclaves",
      },
      {
        label: "Contests",
        href: "/conclaves",
      },
    ],
  },

  {
    label: "Blogs",
    items: [
      {
        label: "In the News",
        href: "/news",
      },
      {
        label: "Blogs",
        href: "/blogs",
      },
    ],
  },

  {
    label: "Contact",
    items: [
      {
        label: "Contact Us",
        href: "/contact",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Support & Services",
        href: "/support",
      },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown((current) =>
      current === label ? null : label
    );
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  return (
    <header className="relative z-[100] w-full border-b border-slate-200 bg-white">
      {/* ================= DESKTOP / MAIN NAV ================= */}
      <nav className="mx-auto flex lg:h-[76px] h-[70px] w-full items-center justify-between px-5 sm:px-7 lg:px-10 xl:px-10">
        {/* ================= LOGO ================= */}
        <div className="relative inline-block">
              {/* Your Logo */}
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  alt="Bombay Blokes Logo"
                  width={150}
                  height={80}
                  className="object-cover transition-opacity duration-300"
                />
              </Link>
            </div>

        {/* ================= DESKTOP MENU ================= */}
        <div className="hidden items-center lg:flex">
          <ul className="flex items-center gap-5 xl:gap-8">
            {navItems.map((item) => (
              <li key={item.label} className="group relative">
                {item.items ? (
                  <>
                    {/* MAIN NAV ITEM */}
                    <button
                      type="button"
                      className="flex items-center gap-1.5 whitespace-nowrap border-0 bg-transparent py-7 subtitle text-[#172b87] transition-colors duration-200 hover:text-[#1b8a73]"
                    >
                      {item.label}

                      <span className="text-[20px]">
                        ▾
                      </span>
                    </button>

                    {/* DESKTOP DROPDOWN */}
                    <div className="pointer-events-none invisible absolute left-1/2 top-full w-[205px] -translate-x-1/2 translate-y-2 rounded-b-md border border-slate-100 bg-white p-2 opacity-0 shadow-[0_12px_30px_rgba(0,0,0,0.10)] transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {item.items.map((subItem) =>
                        subItem.external ? (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block rounded px-3 py-2.5 text-[12px] transition-colors hover:bg-[#eef1fa] hover:text-[#1b8a73] ${
                              subItem.muted
                                ? "text-slate-400"
                                : "text-[#303b76]"
                            }`}
                          >
                            {subItem.label}
                          </a>
                        ) : (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            className={`block rounded px-3 py-2.5 text-[12px] transition-colors hover:bg-[#eef1fa] hover:text-[#1b8a73] ${
                              subItem.muted
                                ? "pl-8 text-slate-400"
                                : "text-[#303b76]"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        )
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href || "#"}
                    className="whitespace-nowrap text-[15px] font-medium text-[#172b87] transition-colors hover:text-[#1b8a73]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            {/* NITYA */}
            <li>
              <a
                href="http://nityatraining.com"
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap text-[15px] font-bold text-[#1b8a73] transition-colors hover:text-[#172b87]"
              >
                Nitya Training ↗
              </a>
            </li>
          </ul>
        </div>

        {/* ================= DESKTOP ACTIONS ================= */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="https://navneetfoundation.in"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap text-[15px] font-medium text-[#4a5587] transition-colors hover:text-[#1b8a73]"
          >
            Support a Child ↗
          </a>

          <Link
            href="/contact"
            className="flex h-[52px] items-center justify-center rounded-[7px] bg-[#1054a4] px-7 text-[15px] font-bold text-white transition-all duration-200 hover:bg-[#0d478d] hover:shadow-lg"
          >
            Book a Free Demo
          </Link>
        </div>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          aria-label={
            mobileOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-[#1054a4] transition-colors hover:bg-slate-50 lg:hidden"
        >
          {mobileOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          )}
        </button>
      </nav>

      {/* ================= MOBILE MENU ================= */}
<div
  className={`fixed inset-x-0 bottom-0 top-[70px] z-[99] overflow-hidden bg-white transition-all duration-300 lg:hidden ${
    mobileOpen
      ? "visible opacity-100"
      : "pointer-events-none invisible opacity-0"
  }`}
>
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto px-3 pb-5">
          {/* MOBILE NAV ITEMS */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isOpen = mobileDropdown === item.label;

              return (
                <div key={item.label}>
                  {item.items ? (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          toggleMobileDropdown(item.label)
                        }
                        className={`flex w-full items-center justify-between px-1 py-3 text-left subtitle text-[#303b76] transition-colors ${
                          isOpen
                            ? "bg-[#eef1fa]"
                            : "bg-transparent"
                        }`}
                      >
                        <span>{item.label}</span>

                        <span
                          className={`text-[20px] transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▾
                        </span>
                      </button>

                      {/* MOBILE SUBMENU */}
                      <div
                        className={`grid overflow-hidden transition-all duration-200 ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="pb-1 pl-2">
                            {item.items.map((subItem) =>
                              subItem.external ? (
                                <a
                                  key={subItem.label}
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={closeMobileMenu}
                                  className="block py-2.5 pl-2 subtitle text-[#6c7394] transition-colors hover:text-[#1b8a73]"
                                >
                                  {subItem.label}
                                </a>
                              ) : (
                                <Link
                                  key={subItem.label}
                                  href={subItem.href}
                                  onClick={closeMobileMenu}
                                  className={`block py-2.5 subtitle transition-colors hover:text-[#1b8a73] ${
                                    subItem.muted
                                      ? "pl-6 text-slate-400"
                                      : "pl-2 text-[#6c7394]"
                                  }`}
                                >
                                  {subItem.label}
                                </Link>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      onClick={closeMobileMenu}
                      className="block px-1 py-3 subtitle font-medium text-[#303b76]"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}

            {/* NITYA MOBILE */}
            <a
              href="http://nityatraining.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="block px-1 py-3 subtitle text-[#1b8a73]"
            >
              Nitya Training ↗
            </a>
          </div>

          {/* MOBILE CTA */}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="mt-1 flex h-[38px] w-full items-center justify-center rounded-[5px] bg-[#1054a4] text-[11px] font-bold text-white transition-colors hover:bg-[#0d478d]"
          >
            Book a Free Demo
          </Link>

          {/* MOBILE SUPPORT */}
          <a
            href="https://navneetfoundation.in"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="mt-3 block text-center subtitle text-[#4a5587]"
          >
            Support a Child ↗
          </a>
        </div>
      </div>
    </header>
  );
}
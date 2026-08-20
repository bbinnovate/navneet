"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type SectionName =
  | "products"
  | "company"
  | "events"
  | "support"
  | "contact";

/* =========================================================
   SOCIAL ICONS
========================================================= */

const FacebookIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M14 8h3V4h-3c-3.314 0-5 1.686-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.667.333-1 1-1Z" />
  </svg>
);

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-[17px] w-[17px]"
    aria-hidden="true"
  >
    <path d="M18.244 2H21.5l-7.11 8.13L22.75 22h-6.54l-5.12-6.68L5.25 22H2l7.61-8.7L1.5 2h6.71l4.63 6.1L18.244 2Zm-1.147 17.7h1.813L7.22 4.18H5.274L17.097 19.7Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M23.5 6.2a3.04 3.04 0 0 0-2.14-2.15C19.47 3.5 12 3.5 12 3.5s-7.47 0-9.36.55A3.04 3.04 0 0 0 .5 6.2 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 5.8 3.04 3.04 0 0 0 2.14 2.15c1.89.55 9.36.55 9.36.55s7.47 0 9.36-.55a3.04 3.04 0 0 0 2.14-2.15A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-5.8ZM9.6 15.93V8.07L16.4 12l-6.8 3.93Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-5 w-5"
    aria-hidden="true"
  >
    <path d="M5.2 3.5A2.2 2.2 0 1 1 5.2 7.9a2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v11.7H3.3V9Zm6.2 0H13v1.6h.05c.52-.98 1.8-2 3.7-2 3.95 0 4.68 2.6 4.68 5.98v6.12h-3.8v-5.42c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.52H9.5V9Z" />
  </svg>
);

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com",
    icon: <FacebookIcon />,
  },
  {
    name: "X",
    href: "https://twitter.com",
    icon: <XIcon />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com",
    icon: <YoutubeIcon />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com",
    icon: <InstagramIcon />,
  },
  {
    name: "LinkedIn",
    href: "https://in.linkedin.com/company/navneettoptech",
    icon: <LinkedinIcon />,
  },
];

export default function Footer() {
  const [openSection, setOpenSection] =
    useState<SectionName | null>(null);

const goPage = useCallback((page: string) => {
  window.location.assign(page);
}, []);

  const toggleSection = (section: SectionName) => {
    setOpenSection((current) =>
      current === section ? null : section
    );
  };

  return (
    <footer className="w-full bg-[#061e3e] text-white">
      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}
      <div
        className="
          mx-auto
          grid
          w-full
          grid-cols-1
          gap-0
          pt-3
          pb-0
          sm:px-6
          md:px-8
          lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]
          lg:gap-10
          lg:pb-0
        "
      >
        {/* =====================================================
            BRAND COLUMN
        ===================================================== */}
        <div className="w-full">
          {/* LOGO */}
          <div className="relative inline-block">
            <Link href="/" aria-label="NAVNEET TOPTECH Home">
              <Image
                src="/images/logo.webp"
                alt="NAVNEET TOPTECH Logo"
                width={150}
                height={80}
                className="object-cover transition-opacity duration-300 hover:opacity-80"
              />
            </Link>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-1
              max-w-[280px]
              subtitle grey-text
             
            "
          >
            India's School Transformation Partner — the EdTech arm of{" "}
            <span className="font-bold text-[#0f9bd7]">
              Navneet Education Limited
            </span>
            . Combining 65+ years of educational expertise with technology
            built for Indian classrooms.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit NAVNEET TOPTECH on ${social.name}`}
                title={social.name}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  text-white/70
                  transition-all
                  duration-300
                  hover:border-[#0f9bd7]
                  hover:bg-[#0f9bd7]
                  hover:text-white
                "
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* ===================================================
              CONTACT
              Desktop only
          =================================================== */}
          <div
            className="
              mt-5
              hidden
              border-t
              border-white/[0.12]
              pt-5
              lg:block
            "
          >
            <div
              className="
                mb-4
                subtitle
                uppercase
                
                text-[#0f9bd7]
              "
            >
              Contact
            </div>

            <a
              href="tel:18002666676"
              className="
                mb-1.5
                block
               subtitle
                text-white/[0.85]
                transition-colors
                hover:text-[#0f9bd7]
              "
            >
              📞 1800 266 6676 (Toll Free)
            </a>

            <a
              href="mailto:info@navneettoptech.com"
              className="
                block
                subtitle
                text-white/[0.85]
                transition-colors
                hover:text-[#0f9bd7]
              "
            >
              ✉️ info@navneettoptech.com
            </a>
          </div>
        </div>

        {/* =====================================================
            DESKTOP PRODUCTS
        ===================================================== */}
        <div className="hidden lg:block">
          <div
            className="
              mb-6
            subtitle
              uppercase
              
              text-[#0f9bd7]
            "
          >
            Products
          </div>

          <button
            onClick={() => goPage("topschool")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            TopSchool LMS
          </button>

          <button
            onClick={() => goPage("topseries")}
            className="mb-2.5 block pl-3.5 text-left subtitle text-white/[0.65] transition-colors hover:text-[#0f9bd7]"
          >
            ↳ TopSeries
          </button>

          <button
            onClick={() => goPage("topclass")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            TopClass
          </button>

          <button
            onClick={() => goPage("topassess")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            TopAssess
          </button>

          <button
            onClick={() => goPage("ifp")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Hardware & IFP
          </button>

          <a
            href="http://nityatraining.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Nitya Training ↗
          </a>

          <a
            href="http://navneetedu.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Navneet AI ↗
          </a>
        </div>

        {/* =====================================================
            DESKTOP COMPANY
        ===================================================== */}
        <div className="hidden lg:block">
          <div
            className="
              mb-6
              subtitle 
              uppercase
              tracking-[1.4px]
              text-[#0f9bd7]
            "
          >
            Company
          </div>

          <button
            onClick={() => goPage("about")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            About NTT
          </button>

          <a
            href="https://navneet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block subtitle text-[#0f9bd7]"
          >
            About NEL ↗
          </a>

          <button
            onClick={() => goPage("news")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Awards & News
          </button>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Events
          </button>

          <button
            onClick={() => goPage("careers")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Careers
          </button>

          <button
            onClick={() => goPage("blogs")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Blogs
          </button>
        </div>

        {/* =====================================================
            DESKTOP EVENTS
        ===================================================== */}
        <div className="hidden lg:block">
          <div
            className="
              mb-6
              subtitle 
              uppercase
              tracking-[1.4px]
              text-[#0f9bd7]
            "
          >
            Events
          </div>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Conclaves
          </button>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Expos
          </button>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Contests
          </button>

          <button
            onClick={() => goPage("news")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            In the News
          </button>
        </div>

        {/* =====================================================
            DESKTOP SUPPORT
        ===================================================== */}
        <div className="hidden lg:block">
          <div
            className="
              mb-6
              subtitle 
              uppercase
              tracking-[1.4px]
              text-[#0f9bd7]
            "
          >
            Support
          </div>

          <button
            onClick={() => goPage("contact")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Contact Us
          </button>

          <button
            onClick={() => goPage("support")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Support & Services
          </button>

          <a
            href="https://navneetfoundation.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Support a Child ↗
          </a>

          <button
            onClick={() => goPage("careers")}
            className="mb-2.5 block text-left subtitle grey-text transition-colors hover:text-[#0f9bd7]"
          >
            Careers
          </button>

          <Link
            href="/privacy-policy"
            className="mb-2.5 block subtitle text-white/40 transition-colors hover:text-[#0f9bd7]"
          >
            Privacy Policy
          </Link>
        </div>

        {/* =====================================================
            MOBILE ACCORDION
        ===================================================== */}
        <div className="mt-5 block lg:hidden">
          {/* PRODUCTS */}
          <div className="border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => toggleSection("products")}
              className="flex w-full items-center justify-between py-3.5 text-left"
            >
              <span className="subtitle  uppercase  text-white">
                Products
              </span>

              <span className="font-bold faq-chev">
                {openSection === "products" ? "−" : "+"}
              </span>
            </button>

            {openSection === "products" && (
              <div className="pb-3">
                <button
                  onClick={() => goPage("topschool")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  TopSchool LMS
                </button>

                <button
                  onClick={() => goPage("topseries")}
                  className="mb-2 block pl-3 subtitle text-white/[0.65]"
                >
                  ↳ TopSeries
                </button>

                <button
                  onClick={() => goPage("topclass")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  TopClass
                </button>

                <button
                  onClick={() => goPage("topassess")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  TopAssess
                </button>

                <button
                  onClick={() => goPage("ifp")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Hardware & IFP
                </button>

                <a
                  href="http://nityatraining.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Nitya Training ↗
                </a>

                <a
                  href="http://navneetedu.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block subtitle text-white/[0.88]"
                >
                  Navneet AI ↗
                </a>
              </div>
            )}
          </div>

          {/* COMPANY */}
          <div className="border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => toggleSection("company")}
              className="flex w-full items-center justify-between py-3.5 text-left"
            >
              <span className="subtitle  uppercase  text-white">
                Company
              </span>

              <span className="font-bold faq-chev">
                {openSection === "company" ? "−" : "+"}
              </span>
            </button>

            {openSection === "company" && (
              <div className="pb-3">
                <button
                  onClick={() => goPage("about")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  About NTT
                </button>

                <a
                  href="https://navneet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 block subtitle text-[#0f9bd7]"
                >
                  About NEL ↗
                </a>

                <button
                  onClick={() => goPage("news")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Awards & News
                </button>

                <button
                  onClick={() => goPage("conclaves")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Events
                </button>

                <button
                  onClick={() => goPage("careers")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Careers
                </button>

                <button
                  onClick={() => goPage("blogs")}
                  className="block subtitle text-white/[0.88]"
                >
                  Blogs
                </button>
              </div>
            )}
          </div>

          {/* EVENTS */}
          <div className="border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => toggleSection("events")}
              className="flex w-full items-center justify-between py-3.5 text-left"
            >
              <span className="subtitle  uppercase  text-white">
                Events
              </span>

              <span className="font-bold faq-chev">
                {openSection === "events" ? "−" : "+"}
              </span>
            </button>

            {openSection === "events" && (
              <div className="pb-3">
                <button
                  onClick={() => goPage("conclaves")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Conclaves
                </button>

                <button
                  onClick={() => goPage("conclaves")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Expos
                </button>

                <button
                  onClick={() => goPage("conclaves")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Contests
                </button>

                <button
                  onClick={() => goPage("news")}
                  className="block subtitle text-white/[0.88]"
                >
                  In the News
                </button>
              </div>
            )}
          </div>

          {/* SUPPORT */}
          <div className="border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => toggleSection("support")}
              className="flex w-full items-center justify-between py-3.5 text-left"
            >
              <span className="subtitle  uppercase  text-white">
                Support
              </span>

              <span className="font-bold faq-chev">
                {openSection === "support" ? "−" : "+"}
              </span>
            </button>

            {openSection === "support" && (
              <div className="pb-3">
                <button
                  onClick={() => goPage("contact")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Contact Us
                </button>

                <button
                  onClick={() => goPage("support")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Support & Services
                </button>

                <a
                  href="https://navneetfoundation.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Support a Child ↗
                </a>

                <button
                  onClick={() => goPage("careers")}
                  className="mb-2 block subtitle text-white/[0.88]"
                >
                  Careers
                </button>

                <Link
                  href="/privacy-policy"
                  className="block subtitle text-white/40"
                >
                  Privacy Policy
                </Link>
              </div>
            )}
          </div>

          {/* CONTACT US */}
          <div className="border-y border-white/[0.08]">
            <button
              type="button"
              onClick={() => toggleSection("contact")}
              className="flex w-full items-center justify-between py-3.5 text-left"
            >
              <span className="subtitle  uppercase  text-white">
                Contact Us
              </span>

              <span className="font-bold faq-chev">
                {openSection === "contact" ? "−" : "+"}
              </span>
            </button>

            {openSection === "contact" && (
              <div className="pb-3">
                <a
                  href="tel:18002666676"
                  className="
                    mb-2
                    block
                    subtitle
                    text-white/[0.85]
                    transition-colors
                    hover:text-[#0f9bd7]
                  "
                >
                  📞 1800 266 6676 (Toll Free)
                </a>

                <a
                  href="mailto:info@navneettoptech.com"
                  className="
                    block
                 subtitle
                    text-white/[0.85]
                    transition-colors
                    hover:text-[#0f9bd7]
                  "
                >
                  ✉️ info@navneettoptech.com
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}
      <div
        className="
          mx-auto
          flex
          w-full
          flex-wrap
          items-center
          justify-between
          gap-4
          pt-5
          pb-5
          sm:px-6
          md:px-8
        "
      >
        <p className="m-0     subtitle text-white/50">
          © 2026 NAVNEET TOPTECH. All Rights Reserved. · A 100% Subsidiary of{" "}
          <a
            href="https://navneet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#0f9bd7] transition-opacity hover:opacity-80"
          >
            Navneet Education Limited
          </a>
        </p>

        <p className="m-0  text-white/50 subtitle">
          Mumbai · Bengaluru · Delhi · Chennai · Hyderabad · Nashik
        </p>
      </div>
    </footer>
  );
}

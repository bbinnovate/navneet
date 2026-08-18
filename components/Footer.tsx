"use client";

import { useCallback, useState } from "react";
import { ROUTES, type RouteKey } from "@/lib/routes";

type SectionName =
  | "products"
  | "company"
  | "events"
  | "support"
  | "contact";

export default function Footer() {
  const [openSection, setOpenSection] = useState<SectionName | null>(null);

  const goPage = useCallback((page: RouteKey) => {
    window.location.assign(ROUTES[page]);
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
          <div className="mb-1">
            <svg
              width="180"
              height="44"
              viewBox="0 0 360 88"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[44px] w-[180px]"
            >
              <text
                x="0"
                y="32"
                fontFamily="Montserrat,sans-serif"
                fontWeight="800"
                fontSize="26"
                fill="white"
              >
                nav
              </text>

              <text
                x="58"
                y="32"
                fontFamily="Montserrat,sans-serif"
                fontWeight="800"
                fontSize="26"
                fill="white"
              >
                N
              </text>

              <text
                x="79"
                y="32"
                fontFamily="Montserrat,sans-serif"
                fontWeight="800"
                fontSize="21"
                fill="white"
              >
                EET
              </text>

              <text
                x="0"
                y="74"
                fontFamily="Montserrat,sans-serif"
                fontWeight="800"
                fontSize="40"
                fill="white"
              >
                T
              </text>

              <circle
                cx="40"
                cy="55"
                r="20"
                fill="#0F9BD7"
              />

              <text
                x="64"
                y="74"
                fontFamily="Montserrat,sans-serif"
                fontWeight="800"
                fontSize="40"
                fill="white"
              >
                P
              </text>

              <text
                x="107"
                y="74"
                fontFamily="Montserrat,sans-serif"
                fontWeight="800"
                fontSize="40"
                fill="#0F9BD7"
              >
                TECH
              </text>
            </svg>
          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-1
              max-w-[280px]
              text-[13px]
              leading-[1.72]
              text-white/70
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
            {["Fb", "Tw", "Yt", "Ig", "Li"].map((social) => (
              <div
                key={social}
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
                  text-[11px]
                  font-medium
                  text-white/60
                "
              >
                {social}
              </div>
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
                text-[10px]
                font-bold
                uppercase
                tracking-[1.4px]
                text-[#0f9bd7]
              "
            >
              Contact
            </div>

            <div className="mb-1.5 text-[13px] text-white/[0.85]">
              📞 1800 266 6676 (Toll Free)
            </div>

            <div className="text-[13px] text-white/[0.85]">
              ✉️ info@navneettoptech.com
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP PRODUCTS
        ===================================================== */}
        <div className="hidden lg:block">
          <div
            className="
              mb-6
              text-[10px]
              font-bold
              uppercase
              tracking-[1.4px]
              text-[#0f9bd7]
            "
          >
            Products
          </div>

          <button
            onClick={() => goPage("topschool")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            TopSchool LMS
          </button>

          <button
            onClick={() => goPage("topseries")}
            className="mb-2.5 block pl-3.5 text-left text-[12px] text-white/[0.65] transition-colors hover:text-[#0f9bd7]"
          >
            ↳ TopSeries
          </button>

          <button
            onClick={() => goPage("topclass")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            TopClass
          </button>

          <button
            onClick={() => goPage("topassess")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            TopAssess
          </button>

          <button
            onClick={() => goPage("ifp")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Hardware & IFP
          </button>

          <a
            href="http://nityatraining.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Nitya Training ↗
          </a>

          <a
            href="http://navneetedu.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
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
              text-[10px]
              font-bold
              uppercase
              tracking-[1.4px]
              text-[#0f9bd7]
            "
          >
            Company
          </div>

          <button
            onClick={() => goPage("about")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            About NTT
          </button>

          <a
            href="https://navneet.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block text-[13px] font-semibold text-[#0f9bd7]"
          >
            About NEL ↗
          </a>

          <button
            onClick={() => goPage("news")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Awards & News
          </button>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Events
          </button>

          <button
            onClick={() => goPage("careers")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Careers
          </button>

          <button
            onClick={() => goPage("blogs")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
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
              text-[10px]
              font-bold
              uppercase
              tracking-[1.4px]
              text-[#0f9bd7]
            "
          >
            Events
          </div>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Conclaves
          </button>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Expos
          </button>

          <button
            onClick={() => goPage("conclaves")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Contests
          </button>

          <button
            onClick={() => goPage("news")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
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
              text-[10px]
              font-bold
              uppercase
              tracking-[1.4px]
              text-[#0f9bd7]
            "
          >
            Support
          </div>

          <button
            onClick={() => goPage("contact")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Contact Us
          </button>

          <button
            onClick={() => goPage("support")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Support & Services
          </button>

          <a
            href="https://navneetfoundation.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-2.5 block text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Support a Child ↗
          </a>

          <button
            onClick={() => goPage("careers")}
            className="mb-2.5 block text-left text-[13px] font-medium text-white/[0.88] transition-colors hover:text-[#0f9bd7]"
          >
            Careers
          </button>

          <span className="mb-2.5 block text-[13px] text-white/40">
            Privacy Policy
          </span>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-white">
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
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  TopSchool LMS
                </button>

                <button
                  onClick={() => goPage("topseries")}
                  className="mb-2 block pl-3 text-[10px] text-white/[0.65]"
                >
                  ↳ TopSeries
                </button>

                <button
                  onClick={() => goPage("topclass")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  TopClass
                </button>

                <button
                  onClick={() => goPage("topassess")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  TopAssess
                </button>

                <button
                  onClick={() => goPage("ifp")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Hardware & IFP
                </button>

                <a
                  href="http://nityatraining.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Nitya Training ↗
                </a>

                <a
                  href="http://navneetedu.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[10px] font-medium text-white/[0.88]"
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
              <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-white">
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
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  About NTT
                </button>

                <a
                  href="https://navneet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 block text-[10px] font-medium text-[#0f9bd7]"
                >
                  About NEL ↗
                </a>

                <button
                  onClick={() => goPage("news")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Awards & News
                </button>

                <button
                  onClick={() => goPage("conclaves")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Events
                </button>

                <button
                  onClick={() => goPage("careers")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Careers
                </button>

                <button
                  onClick={() => goPage("blogs")}
                  className="block text-[10px] font-medium text-white/[0.88]"
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
              <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-white">
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
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Conclaves
                </button>

                <button
                  onClick={() => goPage("conclaves")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Expos
                </button>

                <button
                  onClick={() => goPage("conclaves")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Contests
                </button>

                <button
                  onClick={() => goPage("news")}
                  className="block text-[10px] font-medium text-white/[0.88]"
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
              <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-white">
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
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Contact Us
                </button>

                <button
                  onClick={() => goPage("support")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Support & Services
                </button>

                <a
                  href="https://navneetfoundation.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Support a Child ↗
                </a>

                <button
                  onClick={() => goPage("careers")}
                  className="mb-2 block text-[10px] font-medium text-white/[0.88]"
                >
                  Careers
                </button>

                <span className="block text-[10px] text-white/40">
                  Privacy Policy
                </span>
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
              <span className="text-[10px] font-bold uppercase tracking-[0.8px] text-white">
                Contact Us
              </span>

              <span className="font-bold faq-chev">
                {openSection === "contact" ? "−" : "+"}
              </span>
            </button>

            {openSection === "contact" && (
              <div className="pb-3">
                <div className="mb-2 text-[10px] text-white/[0.85]">
                  📞 1800 266 6676 (Toll Free)
                </div>

                <div className="text-[10px] text-white/[0.85]">
                  ✉️ info@navneettoptech.com
                </div>
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
        <p className="m-0 text-[10px] leading-[1.5] text-white/50 sm:text-[12px]">
          © 2026 NAVNEET TOPTECH. All Rights Reserved. · A 100% Subsidiary of{" "}
          <span className="font-semibold text-[#0f9bd7]">
            Navneet Education Limited
          </span>
        </p>

        <p className="m-0 text-[10px] leading-[1.5] text-white/50 sm:text-[12px]">
          Mumbai · Bengaluru · Delhi · Chennai · Hyderabad · Nashik
        </p>
      </div>
    </footer>
  );
}

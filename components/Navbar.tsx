"use client";

import Link from "next/link";
import { NavLogo } from "@/components/NavLogo";
import { ROUTES } from "@/lib/routes";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link href={ROUTES.home} className="nav-logo">
          <NavLogo />
        </Link>
        <ul className="nav-links">
          <li>
            <span>About Us ▾</span>
            <div className="dropdown">
              <Link href={ROUTES.about}>About NTT</Link>
              <a
                href="https://navneet.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                About NEL ↗
              </a>
              <Link href={ROUTES.news}>Awards</Link>
            </div>
          </li>
          <li>
            <span>Our Products ▾</span>
            <div className="dropdown">
              <Link href={ROUTES.topschool}>TopSchool LMS</Link>
              <Link
                href={ROUTES.topseries}
                style={{
                  paddingLeft: "32px",
                  fontSize: "12px",
                  color: "var(--muted)",
                }}
              >
                ↳ TopSeries
              </Link>
              <Link href={ROUTES.topclass}>TopClass</Link>
              <Link href={ROUTES.topassess}>TopAssess</Link>
              <Link href={ROUTES.ifp}>Hardware & IFP</Link>
            </div>
          </li>
          <li>
            <span>Events ▾</span>
            <div className="dropdown">
              <Link href={ROUTES.conclaves}>Conclaves</Link>
              <Link href={ROUTES.conclaves}>Expos</Link>
              <Link href={ROUTES.conclaves}>Contests</Link>
            </div>
          </li>
          <li>
            <span>Blogs ▾</span>
            <div className="dropdown">
              <Link href={ROUTES.news}>In the News</Link>
              <Link href={ROUTES.blogs}>Blogs</Link>
            </div>
          </li>
          <li>
            <span>Contact ▾</span>
            <div className="dropdown">
              <Link href={ROUTES.contact}>Contact Us</Link>
              <Link href={ROUTES.careers}>Careers</Link>
              <Link href={ROUTES.support}>Support & Services</Link>
            </div>
          </li>
          <li>
            <a
              href="http://nityatraining.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--green)", fontWeight: 700 }}
            >
              Nitya Training ↗
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <a
            className="nav-sup"
            href="https://navneetfoundation.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Support a Child ↗
          </a>
          <Link href={ROUTES.contact} className="nav-cta">
            Book a Free Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}

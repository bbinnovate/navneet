import Link from "next/link";
import { ROUTES } from "@/lib/routes";

function FooterLogo() {
  return (
    <svg
      width="180"
      height="44"
      viewBox="0 0 360 88"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
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
      <circle cx="40" cy="55" r="20" fill="#0F9BD7" />
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
  );
}

const linkStyle = {
  display: "block",
  color: "rgba(255, 255, 255, 0.88)",
  fontSize: "13px",
  textDecoration: "none",
  marginBottom: "10px",
  cursor: "pointer",
  fontWeight: 500,
} as const;

const labelStyle = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "1.4px",
  textTransform: "uppercase" as const,
  color: "#0f9bd7",
  marginBottom: "16px",
  fontFamily: "var(--fh)",
};

export default function Footer() {
  return (
    <footer style={{ background: "#061e3e" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
          gap: "2.5rem",
          marginBottom: "2.5rem",
          padding: "12px 1.9rem 0",
        }}
      >
        <div>
          <div className="footer-logo-wrap">
            <FooterLogo />
          </div>
          <p
            style={{
              color: "rgba(255, 255, 255, 0.72)",
              fontSize: "13px",
              lineHeight: 1.72,
              marginTop: "12px",
              maxWidth: "280px",
            }}
          >
            India&apos;s School Transformation Partner — the EdTech arm of{" "}
            <span style={{ color: "#0f9bd7", fontWeight: 700 }}>
              Navneet Education Limited
            </span>
            . Combining 65+ years of educational expertise with technology built
            for Indian classrooms.
          </p>
          <div className="socials" style={{ marginTop: "16px" }}>
            <div className="sdot">Fb</div>
            <div className="sdot">Tw</div>
            <div className="sdot">Yt</div>
            <div className="sdot">Ig</div>
            <div className="sdot">Li</div>
          </div>
          <div
            className="mobile-no-border"
            style={{
              marginTop: "1.25rem",
              paddingTop: "1.25rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            }}
          >
            <div className="products-label" style={labelStyle}>
              Contact
            </div>
            <div
              style={{
                fontSize: "13px",
                color: "rgba(255, 255, 255, 0.85)",
                marginBottom: "6px",
              }}
            >
              📞 1800 266 6676 (Toll Free)
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255, 255, 255, 0.85)" }}>
              ✉️ info@navneettoptech.com
            </div>
          </div>
        </div>

        <div>
          <div className="products-label" style={labelStyle}>
            Products
          </div>
          <Link href={ROUTES.topschool} style={linkStyle}>
            TopSchool LMS
          </Link>
          <Link
            href={ROUTES.topseries}
            style={{
              ...linkStyle,
              color: "rgba(255, 255, 255, 0.65)",
              fontSize: "12px",
              paddingLeft: "0.85rem",
            }}
          >
            ↳ TopSeries
          </Link>
          <Link href={ROUTES.topclass} style={linkStyle}>
            TopClass
          </Link>
          <Link href={ROUTES.topassess} style={linkStyle}>
            TopAssess
          </Link>
          <Link href={ROUTES.ifp} style={linkStyle}>
            Hardware & IFP
          </Link>
          <a
            href="http://nityatraining.com"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Nitya Training ↗
          </a>
          <a
            href="http://navneetedu.ai"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Navneet AI ↗
          </a>
        </div>

        <div>
          <div className="products-label" style={labelStyle}>
            Company
          </div>
          <Link href={ROUTES.about} style={linkStyle}>
            About NTT
          </Link>
          <a
            href="https://navneet.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...linkStyle, color: "#0f9bd7", fontWeight: 600 }}
          >
            About NEL ↗
          </a>
          <Link href={ROUTES.news} style={linkStyle}>
            Awards & News
          </Link>
          <Link href={ROUTES.conclaves} style={linkStyle}>
            Events
          </Link>
          <Link href={ROUTES.careers} style={linkStyle}>
            Careers
          </Link>
          <Link href={ROUTES.blogs} style={linkStyle}>
            Blogs
          </Link>
        </div>

        <div>
          <div className="products-label" style={labelStyle}>
            Events
          </div>
          <Link href={ROUTES.conclaves} style={linkStyle}>
            Conclaves
          </Link>
          <Link href={ROUTES.conclaves} style={linkStyle}>
            Expos
          </Link>
          <Link href={ROUTES.conclaves} style={linkStyle}>
            Contests
          </Link>
          <Link href={ROUTES.news} style={linkStyle}>
            In the News
          </Link>
        </div>

        <div>
          <div className="products-label" style={labelStyle}>
            Support
          </div>
          <Link href={ROUTES.contact} style={linkStyle}>
            Contact Us
          </Link>
          <Link href={ROUTES.support} style={linkStyle}>
            Support & Services
          </Link>
          <a
            href="https://navneetfoundation.in"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            Support a Child ↗
          </a>
          <Link href={ROUTES.careers} style={linkStyle}>
            Careers
          </Link>
          <span
            style={{
              ...linkStyle,
              color: "rgba(255, 255, 255, 0.4)",
              cursor: "default",
            }}
          >
            Privacy Policy
          </span>
        </div>
      </div>

      <div
        style={{
          padding: "0 1.9rem 28px",
          paddingTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)", margin: 0 }}>
          © 2026 NAVNEET TOPTECH. All Rights Reserved. · A 100% Subsidiary of{" "}
          <span style={{ color: "#0f9bd7", fontWeight: 600 }}>
            Navneet Education Limited
          </span>
        </p>
        <p style={{ fontSize: "12px", color: "rgba(255, 255, 255, 0.5)", margin: 0 }}>
          Mumbai · Bengaluru · Delhi · Chennai · Hyderabad · Nashik
        </p>
      </div>
    </footer>
  );
}

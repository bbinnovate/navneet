export function NavLogo() {
  return (
    <svg
      width="180"
      height="44"
      viewBox="0 0 360 88"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="NAVNEET TOPTECH"
    >
      <text
        x="0"
        y="32"
        fontFamily="Montserrat,sans-serif"
        fontWeight="800"
        fontSize="28"
        fill="#2e3191"
      >
        nav
      </text>
      <text
        x="62"
        y="32"
        fontFamily="Montserrat,sans-serif"
        fontWeight="800"
        fontSize="28"
        fill="#2e3191"
      >
        N
      </text>
      <text
        x="84"
        y="32"
        fontFamily="Montserrat,sans-serif"
        fontWeight="800"
        fontSize="22"
        fill="#2e3191"
      >
        EET
      </text>
      <text
        x="0"
        y="75"
        fontFamily="Montserrat,sans-serif"
        fontWeight="800"
        fontSize="42"
        fill="#2e3191"
      >
        T
      </text>
      <circle
        cx="42"
        cy="55"
        r="22"
        fill="none"
        stroke="#2e3191"
        strokeWidth="2"
      />
      <circle cx="42" cy="55" r="22" fill="url(#globeGrad)" opacity="0.9" />
      <defs>
        <radialGradient id="globeGrad" cx="40%" cy="40%">
          <stop offset="0%" stopColor="#2e3191" />
          <stop offset="100%" stopColor="#1b8a73" />
        </radialGradient>
      </defs>
      <text
        x="68"
        y="75"
        fontFamily="Montserrat,sans-serif"
        fontWeight="800"
        fontSize="42"
        fill="#2e3191"
      >
        P
      </text>
      <text
        x="113"
        y="75"
        fontFamily="Montserrat,sans-serif"
        fontWeight="800"
        fontSize="42"
        fill="#1b8a73"
      >
        TECH
      </text>
    </svg>
  );
}

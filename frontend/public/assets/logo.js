export const LogoIcon = ({ className }) => (
    <svg width="40" height="40" viewBox="0 0 512 512" className={className}>
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4DD0E1" />
          <stop offset="100%" stopColor="#00BCD4" />
        </linearGradient>
      </defs>
      <g transform="rotate(-45 256 256)">
        <circle cx="256" cy="256" r="240" fill="none" stroke="url(#logoGrad)" strokeWidth="16"/>
        <path d="M256 96L384 416L256 352L128 416L256 96Z" fill="url(#logoGrad)"/>
        <circle cx="256" cy="256" r="32" fill="#fff"/>
      </g>
    </svg>
  );
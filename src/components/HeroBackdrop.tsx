/** Animated mesh + grid hero — no photo banner. */
export function HeroBackdrop() {
  return (
    <div
      className="hero-backdrop pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
      aria-hidden
    >
      <div className="hero-backdrop-base" />

      <div className="hero-backdrop-mesh hero-backdrop-mesh--violet" />
      <div className="hero-backdrop-mesh hero-backdrop-mesh--magenta" />
      <div className="hero-backdrop-mesh hero-backdrop-mesh--indigo" />

      <svg
        className="hero-backdrop-grid"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
      >
        <defs>
          <linearGradient id="hero-grid-fade" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(167,139,250,0.35)" />
            <stop offset="100%" stopColor="rgba(124,58,237,0.05)" />
          </linearGradient>
        </defs>
        <g stroke="url(#hero-grid-fade)" strokeWidth="0.6" fill="none" opacity="0.45">
          {Array.from({ length: 25 }, (_, i) => (
            <line key={`v-${i}`} x1={i * 50} y1="0" x2={i * 50 - 200} y2="800" />
          ))}
          {Array.from({ length: 18 }, (_, i) => (
            <line key={`h-${i}`} x1="0" y1={i * 48} x2="1200" y2={i * 48 + 80} />
          ))}
        </g>
        <g className="hero-backdrop-radar">
          <ellipse
            cx="600"
            cy="400"
            rx="260"
            ry="260"
            fill="none"
            stroke="rgba(192,132,252,0.28)"
            strokeWidth="1"
            strokeDasharray="8 14"
            className="hero-backdrop-ring"
          />
          <ellipse
            cx="600"
            cy="400"
            rx="180"
            ry="180"
            fill="none"
            stroke="rgba(176,64,251,0.4)"
            strokeWidth="1.5"
            className="hero-backdrop-ring hero-backdrop-ring--inner"
          />
          <ellipse
            cx="600"
            cy="400"
            rx="95"
            ry="95"
            fill="rgba(124,58,237,0.06)"
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="1"
          />
          <circle cx="600" cy="400" r="5" fill="rgba(233,213,255,0.95)" />
          <line x1="600" y1="80" x2="600" y2="720" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
          <line x1="340" y1="400" x2="860" y2="400" stroke="rgba(167,139,250,0.3)" strokeWidth="1" />
          <line
            x1="600"
            y1="400"
            x2="780"
            y2="280"
            stroke="rgba(192,132,252,0.45)"
            strokeWidth="1.5"
            className="hero-backdrop-sweep"
          />
        </g>
      </svg>

      <div className="hero-backdrop-storm" />
      <div className="hero-backdrop-noise" />
      <div className="hero-backdrop-vignette" />
      <div className="hero-backdrop-floor" />
    </div>
  )
}

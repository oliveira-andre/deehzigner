export function BulbMark({
  className,
  gid = "dzg",
}: {
  className?: string;
  gid?: string;
}) {
  return (
    <svg viewBox="0 0 120 150" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${gid}-grad`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7dd3fc" />
          <stop offset="0.5" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#3730a3" />
        </linearGradient>
      </defs>
      <g fill={`url(#${gid}-grad)`}>
        {/* splash dots around the bulb */}
        <circle cx="60" cy="10" r="7" />
        <circle cx="30" cy="20" r="4" />
        <circle cx="90" cy="20" r="4" />
        <circle cx="14" cy="46" r="6" />
        <circle cx="106" cy="46" r="6" />
        <circle cx="16" cy="80" r="4" />
        <circle cx="104" cy="80" r="4" />
        {/* petals hugging the glass */}
        <path d="M60 24c-22 0-38 15-38 35 0 16 10 26 18 33h40c8-7 18-17 18-33 0-20-16-35-38-35z" />
      </g>
      {/* inner bulb */}
      <circle cx="60" cy="60" r="26" fill="#04070d" />
      <path
        d="M60 42c-11 0-19 8-19 18 0 7 4 12 8 16h22c4-4 8-9 8-16 0-10-8-18-19-18z"
        fill="none"
        stroke="#e8f4ff"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* base */}
      <g stroke="#e8f4ff" strokeWidth="5" strokeLinecap="round">
        <line x1="48" y1="104" x2="72" y2="104" />
        <line x1="50" y1="114" x2="70" y2="114" />
        <line x1="54" y1="124" x2="66" y2="124" />
      </g>
    </svg>
  );
}

export function Wordmark({
  className = "",
  light = true,
  gid = "wm",
}: {
  className?: string;
  light?: boolean;
  gid?: string;
}) {
  return (
    <span className={`relative inline-flex items-start gap-1 ${className}`}>
      <span
        className={`font-bold tracking-tight leading-none ${
          light ? "text-white" : "text-zinc-900"
        }`}
        style={{ fontSize: "1em" }}
      >
        D<span className="tracking-tighter">EE</span>H
      </span>
      <BulbMark gid={gid} className="h-[1.15em] w-auto -mt-[0.35em]" />
      <span
        className="font-script text-gradient-blue absolute left-[38%] top-[55%] leading-none"
        style={{ fontSize: "0.72em" }}
      >
        Zigner
      </span>
    </span>
  );
}

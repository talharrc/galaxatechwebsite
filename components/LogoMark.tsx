"use client";

interface LogoMarkProps {
  variant?: "dark" | "light";
  size?: number;
}

export function LogoMark({ variant = "dark", size = 36 }: LogoMarkProps) {
  const bg = variant === "dark" ? "#6C3CFF" : "white";
  const fg = variant === "dark" ? "white" : "#6C3CFF";
  const accent = variant === "dark" ? "rgba(255,255,255,0.45)" : "rgba(108,60,255,0.35)";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Galaxa Tech logo mark"
    >
      {/* Background square */}
      <rect width="44" height="44" rx="8" fill={bg} />

      {/* Top bar — slanted at top-right */}
      <polygon points="7,7 30,7 37,14 7,14" fill={fg} />

      {/* Left vertical bar */}
      <rect x="7" y="7" width="7" height="30" rx="1" fill={fg} />

      {/* Bottom bar */}
      <rect x="7" y="30" width="30" height="7" rx="1" fill={fg} />

      {/* G tongue — horizontal middle right element */}
      <rect x="22" y="20" width="15" height="7" rx="1" fill={fg} />

      {/* Circuit node dot row */}
      <circle cx="18" cy="21" r="2" fill={accent} />
      <circle cx="18" cy="27" r="2" fill={accent} />

      {/* Circuit lines */}
      <rect x="20.5" y="20.2" width="5" height="1.5" rx="0.75" fill={accent} />
      <rect x="20.5" y="26.2" width="5" height="1.5" rx="0.75" fill={accent} />

      {/* Diagonal connector accent — bottom left inner */}
      <line
        x1="15"
        y1="30"
        x2="19"
        y2="26"
        stroke={accent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface LogoProps {
  variant?: "dark" | "light";
  textClass?: string;
  iconSize?: number;
  showTagline?: boolean;
}

export function Logo({
  variant = "dark",
  textClass,
  iconSize = 36,
  showTagline = false,
}: LogoProps) {
  const defaultText =
    variant === "dark" ? "text-dark" : "text-white";
  const accentText =
    variant === "dark" ? "text-primary" : "text-primary-light";

  return (
    <div className="flex items-center gap-3">
      <LogoMark variant={variant === "dark" ? "dark" : "light"} size={iconSize} />
      <div>
        <span
          className={`font-bold text-xl tracking-tight leading-none ${textClass ?? defaultText}`}
        >
          Galaxa Tech
          <span className={accentText}>.</span>
        </span>
        {showTagline && (
          <p
            className={`text-xs font-medium tracking-wide mt-0.5 ${variant === "dark" ? "text-gray-400" : "text-primary-light"}`}
          >
            Ecosystems, Optimized.
          </p>
        )}
      </div>
    </div>
  );
}

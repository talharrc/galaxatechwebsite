import Link from "next/link";

function NetworkSVG() {
  return (
    <svg
      viewBox="0 0 560 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Background gradient glow */}
      <defs>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6C3CFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6C3CFF" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6C3CFF" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#6C3CFF" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6C3CFF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#C0B4FC" stopOpacity="0.2" />
        </linearGradient>
        <filter id="blur1">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Main glow ellipse */}
      <ellipse cx="280" cy="260" rx="220" ry="200" fill="url(#glow)" />

      {/* Connection lines */}
      <g opacity="0.5">
        <line x1="280" y1="120" x2="420" y2="200" stroke="#6C3CFF" strokeWidth="1.5" />
        <line x1="280" y1="120" x2="140" y2="210" stroke="#8D5CFF" strokeWidth="1.5" />
        <line x1="280" y1="120" x2="280" y2="280" stroke="#6C3CFF" strokeWidth="1" />
        <line x1="420" y1="200" x2="460" y2="320" stroke="#C0B4FC" strokeWidth="1.5" />
        <line x1="420" y1="200" x2="280" y2="280" stroke="#8D5CFF" strokeWidth="1" />
        <line x1="140" y1="210" x2="100" y2="330" stroke="#C0B4FC" strokeWidth="1.5" />
        <line x1="140" y1="210" x2="280" y2="280" stroke="#6C3CFF" strokeWidth="1" />
        <line x1="280" y1="280" x2="460" y2="320" stroke="#8D5CFF" strokeWidth="1.5" />
        <line x1="280" y1="280" x2="100" y2="330" stroke="#C0B4FC" strokeWidth="1" />
        <line x1="280" y1="280" x2="280" y2="400" stroke="#6C3CFF" strokeWidth="1.5" />
        <line x1="460" y1="320" x2="380" y2="420" stroke="#C0B4FC" strokeWidth="1" />
        <line x1="100" y1="330" x2="180" y2="420" stroke="#8D5CFF" strokeWidth="1" />
        <line x1="380" y1="420" x2="280" y2="400" stroke="#6C3CFF" strokeWidth="1" />
        <line x1="180" y1="420" x2="280" y2="400" stroke="#C0B4FC" strokeWidth="1" />
        {/* Extended network edges */}
        <line x1="420" y1="200" x2="500" y2="160" stroke="#C0B4FC" strokeWidth="1" opacity="0.4" />
        <line x1="140" y1="210" x2="60" y2="170" stroke="#C0B4FC" strokeWidth="1" opacity="0.4" />
        <line x1="460" y1="320" x2="520" y2="360" stroke="#C0B4FC" strokeWidth="1" opacity="0.4" />
        <line x1="100" y1="330" x2="40" y2="380" stroke="#C0B4FC" strokeWidth="1" opacity="0.4" />
        <line x1="380" y1="420" x2="400" y2="490" stroke="#C0B4FC" strokeWidth="1" opacity="0.4" />
        <line x1="180" y1="420" x2="150" y2="490" stroke="#C0B4FC" strokeWidth="1" opacity="0.4" />
      </g>

      {/* Secondary thin connections */}
      <g opacity="0.2" stroke="#6C3CFF" strokeWidth="0.75">
        <line x1="280" y1="120" x2="500" y2="160" />
        <line x1="420" y1="200" x2="100" y2="330" />
        <line x1="140" y1="210" x2="460" y2="320" />
        <line x1="60" y1="170" x2="280" y2="280" />
        <line x1="520" y1="360" x2="280" y2="400" />
      </g>

      {/* Central hub glow */}
      <circle cx="280" cy="280" r="40" fill="url(#nodeGlow)" />

      {/* Nodes — outer peripheral (small) */}
      <g fill="#C0B4FC" opacity="0.6">
        <circle cx="500" cy="160" r="5" />
        <circle cx="60" cy="170" r="5" />
        <circle cx="520" cy="360" r="5" />
        <circle cx="40" cy="380" r="5" />
        <circle cx="400" cy="490" r="5" />
        <circle cx="150" cy="490" r="5" />
      </g>

      {/* Nodes — mid ring */}
      <g fill="#8D5CFF" opacity="0.8">
        <circle cx="460" cy="320" r="8" />
        <circle cx="100" cy="330" r="8" />
        <circle cx="380" cy="420" r="8" />
        <circle cx="180" cy="420" r="8" />
        <circle cx="280" cy="400" r="8" />
      </g>

      {/* Nodes — inner ring (larger) */}
      <circle cx="420" cy="200" r="10" fill="#8D5CFF" opacity="0.9" />
      <circle cx="140" cy="210" r="10" fill="#8D5CFF" opacity="0.9" />
      <circle cx="280" cy="120" r="12" fill="#6C3CFF" opacity="0.9" />

      {/* Center hub */}
      <circle cx="280" cy="280" r="18" fill="#6C3CFF" />
      <circle cx="280" cy="280" r="10" fill="white" />
      <circle cx="280" cy="280" r="5" fill="#6C3CFF" />

      {/* Floating data labels */}
      <g fontSize="10" fontFamily="sans-serif">
        {/* Label card: Web */}
        <rect x="350" y="82" width="68" height="26" rx="13" fill="#6C3CFF" opacity="0.9" />
        <text x="384" y="99" fill="white" textAnchor="middle" fontSize="9" fontWeight="600">Web Dev</text>

        {/* Label card: AI */}
        <rect x="76" y="170" width="48" height="26" rx="13" fill="#8D5CFF" opacity="0.9" />
        <text x="100" y="187" fill="white" textAnchor="middle" fontSize="9" fontWeight="600">AI / ML</text>

        {/* Label card: Brand */}
        <rect x="428" y="302" width="64" height="26" rx="13" fill="#6C3CFF" opacity="0.9" />
        <text x="460" y="319" fill="white" textAnchor="middle" fontSize="9" fontWeight="600">Branding</text>

        {/* Label card: Growth */}
        <rect x="20" y="310" width="68" height="26" rx="13" fill="#8D5CFF" opacity="0.9" />
        <text x="54" y="327" fill="white" textAnchor="middle" fontSize="9" fontWeight="600">Growth</text>
      </g>

      {/* Pulsing ring on center (decorative) */}
      <circle cx="280" cy="280" r="28" stroke="#6C3CFF" strokeWidth="1" strokeDasharray="4 4" opacity="0.4" />
      <circle cx="280" cy="280" r="50" stroke="#8D5CFF" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.2" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[55%] h-[70%] rounded-bl-[120px] bg-gradient-to-br from-primary/8 via-primary-mid/5 to-primary-light/10 -z-0" />
      <div className="absolute bottom-20 left-0 w-64 h-64 rounded-full bg-primary-light/10 blur-3xl -z-0" />
      <div className="absolute top-40 right-20 w-40 h-40 rounded-full bg-primary/10 blur-2xl -z-0" />

      <div className="section-container relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-16 lg:py-24">
          {/* Left: Copy */}
          <div className="flex flex-col gap-7 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded" />
              <span className="section-label text-xs">Ecosystems, Optimized.</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-dark leading-[1.08] tracking-tight">
              We Build{" "}
              <span className="relative">
                Digital
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-mid rounded-full" />
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-mid to-primary-light bg-clip-text text-transparent">
                Ecosystems
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-500 font-light leading-relaxed">
              We generate, optimize, and scale digital revenue for modern businesses through
              end-to-end web, app, AI, and marketing solutions — built as a unified ecosystem, not
              fragmented pieces.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-6 text-sm text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>50+ Projects Delivered</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
                <span>International Teams</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>End-to-End Delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#case-studies" className="btn-primary">
                Explore Our Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" className="btn-ghost">
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Network visualization */}
          <div className="relative lg:flex justify-end hidden">
            <div className="relative w-full max-w-[540px] aspect-square">
              {/* Outer decorative ring */}
              <div className="absolute inset-6 rounded-full border border-primary/10" />
              <div className="absolute inset-12 rounded-full border border-primary/8" />
              <NetworkSVG />
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-gray-100 pt-10 pb-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projects Shipped" },
            { value: "3×", label: "Avg. Revenue Growth" },
            { value: "12+", label: "Countries Served" },
            { value: "98%", label: "Client Retention" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-3xl font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

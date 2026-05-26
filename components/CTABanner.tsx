export default function CTABanner() {
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-mid to-[#3a1a8f]" />

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/4" />

      {/* Floating abstract shapes */}
      <svg className="absolute left-12 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="55" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
        <circle cx="60" cy="60" r="35" stroke="white" strokeWidth="1" />
        <circle cx="60" cy="60" r="15" fill="white" opacity="0.3" />
      </svg>
      <svg className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 hidden lg:block" width="100" height="100" viewBox="0 0 100 100" fill="none">
        <rect x="10" y="10" width="80" height="80" rx="8" stroke="white" strokeWidth="1" strokeDasharray="5 5" />
        <rect x="25" y="25" width="50" height="50" rx="4" stroke="white" strokeWidth="1" />
      </svg>

      <div className="section-container relative z-10 py-24 lg:py-32 text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-6 h-0.5 bg-primary-light rounded" />
          <span className="text-sm font-semibold tracking-widest uppercase text-primary-light">
            Let&apos;s Build Together
          </span>
          <span className="w-6 h-0.5 bg-primary-light rounded" />
        </div>

        {/* Headline */}
        <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl mx-auto">
          Ready to Build Your
          <br />
          <span className="text-primary-light">Digital Ecosystem?</span>
        </h2>

        <p className="text-xl text-white/75 leading-relaxed max-w-xl mx-auto mb-10">
          Let&apos;s have a 30-minute strategy call. No pressure, no pitch decks — just a real
          conversation about your business and what&apos;s possible.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a href="mailto:hello@galaxatech.io" className="btn-primary-white group">
            Start a Project
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#case-studies" className="btn-ghost-white">
            View Our Work
          </a>
        </div>

        {/* Reassurance row */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-white/55">
          {["No commitment required", "Response within 24 hours", "Strategy session is free"].map((item, i) => (
            <span key={item} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 rounded-full bg-white/30 hidden sm:block" />}
              <svg className="w-4 h-4 text-primary-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

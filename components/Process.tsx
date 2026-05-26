const steps = [
  {
    number: "01",
    label: "Discovery",
    description: "Deep-dive into your business, goals, market, and current ecosystem to define the real opportunity.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    number: "02",
    label: "Strategy",
    description: "We map the complete ecosystem — tech stack, channels, content, automation — before a single line of code is written.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
  {
    number: "03",
    label: "Build",
    description: "Agile sprints with weekly demos. Clean code, pixel-perfect design, and rigorous QA before anything ships.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    number: "04",
    label: "Launch",
    description: "Coordinated go-live with performance monitoring, user testing, and a 30-day support window built-in.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    label: "Optimize",
    description: "Data-informed iteration post-launch. We analyze performance, refine, and continuously push your ecosystem forward.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="section-padding bg-gray-50/70">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-3 block">Our Methodology</span>
          <h2 className="section-heading mb-5">
            How We{" "}
            <span className="bg-gradient-to-r from-primary to-primary-mid bg-clip-text text-transparent">
              Work
            </span>
          </h2>
          <p className="section-subheading mx-auto">
            A proven, repeatable process that keeps projects on track, on budget, and consistently
            delivers above expectations.
          </p>
        </div>

        {/* Steps — horizontal scroll on mobile, flex on desktop */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[calc(10%+28px)] right-[calc(10%+28px)] h-0.5 bg-gradient-to-r from-primary via-primary-mid to-primary-light hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center text-center gap-4 relative">
                {/* Step circle */}
                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      i === 0 || i === steps.length - 1
                        ? "border-primary bg-primary text-white shadow-lg shadow-primary/25"
                        : "border-primary/30 bg-white text-primary"
                    }`}
                  >
                    {step.icon}
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-dark text-white text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>

                {/* Label */}
                <h3 className="text-base font-bold text-dark">{step.label}</h3>

                {/* Description */}
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <a href="#contact" className="btn-primary">
            Start Your Project
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

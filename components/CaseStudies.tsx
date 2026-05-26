const cases = [
  {
    name: "NovaPay Fintech Platform",
    category: "Web Development + AI Automation",
    description:
      "Rebuilt the entire customer-facing platform and integrated an AI-powered fraud detection system. Reduced churn by 42% and doubled conversion rates within 90 days of launch.",
    metrics: [
      { label: "Revenue Growth", value: "+120%" },
      { label: "Churn Reduced", value: "-42%" },
      { label: "Conversion Rate", value: "×2.4" },
    ],
    tag: "Fintech",
    gradient: "from-[#1a0a3c] to-[#2d1068]",
    accent: "#8D5CFF",
  },
  {
    name: "Meridian Growth Agency",
    category: "Digital Marketing + Brand & Design",
    description:
      "Full brand overhaul paired with a performance marketing engine across Google and Meta. Scaled monthly revenue from $80k to $310k in 6 months with consistent ROAS above 4.2×.",
    metrics: [
      { label: "Revenue Scale", value: "×3.8" },
      { label: "ROAS Achieved", value: "4.2×" },
      { label: "Time to Results", value: "6 mo." },
    ],
    tag: "Marketing",
    gradient: "from-[#0a1a3c] to-[#102558]",
    accent: "#C0B4FC",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-dark">
      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-primary-light">
              Selected Work
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Results That{" "}
              <span className="bg-gradient-to-r from-primary-mid to-primary-light bg-clip-text text-transparent">
                Speak for Themselves
              </span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
              A selection of client engagements where we delivered measurable ecosystem growth — not
              just deliverables.
            </p>
          </div>
          <a
            href="#"
            className="flex-shrink-0 btn-ghost-white text-sm py-3 px-6 self-start lg:self-auto"
          >
            View Full Portfolio
          </a>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div
              key={c.name}
              className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${c.gradient} p-10 border border-white/5 group hover:border-white/10 transition-all duration-300`}
            >
              {/* Decorative circle */}
              <div
                className="absolute -right-16 -top-16 w-64 h-64 rounded-full opacity-10"
                style={{ background: `radial-gradient(circle, ${c.accent} 0%, transparent 70%)` }}
              />

              {/* Tag */}
              <div className="mb-6">
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background: `${c.accent}22`, color: c.accent }}
                >
                  {c.tag}
                </span>
              </div>

              {/* Title + category */}
              <h3 className="text-2xl font-bold text-white mb-1">{c.name}</h3>
              <p className="text-sm text-gray-400 font-medium mb-4">{c.category}</p>
              <p className="text-sm text-gray-300 leading-relaxed mb-8">{c.description}</p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-8 pt-6 border-t border-white/8">
                {c.metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      className="text-2xl font-bold mb-0.5"
                      style={{ color: c.accent }}
                    >
                      {m.value}
                    </div>
                    <div className="text-xs text-gray-400 font-medium">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white group-hover:gap-4 transition-all duration-300"
              >
                View Case Study
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

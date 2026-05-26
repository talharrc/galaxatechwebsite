const differentiators = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Ecosystem Thinking",
    description:
      "We don't build isolated deliverables. Every engagement starts with a systems-level analysis of your business, so every component we build feeds the whole.",
    stat: "3× avg. synergy gain",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: "End-to-End Delivery",
    description:
      "Strategy, design, development, marketing, and optimization — all under one roof. No vendor juggling, no communication gaps, no dropped balls.",
    stat: "1 team. Complete ownership.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "International Expertise",
    description:
      "Our team has shipped products for clients across North America, Europe, and the Middle East — we understand global markets and what it takes to scale across borders.",
    stat: "12+ countries served",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Transparent Process",
    description:
      "You'll always know exactly where your project stands. Weekly updates, shared dashboards, and direct Slack access to your lead — no agency black boxes.",
    stat: "98% client retention",
  },
];

export default function WhyGalaxa() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label mb-3 block">Why Us</span>
          <h2 className="section-heading mb-5">
            Why Teams Choose{" "}
            <span className="bg-gradient-to-r from-primary to-primary-mid bg-clip-text text-transparent">
              Galaxa Tech
            </span>
          </h2>
          <p className="section-subheading mx-auto">
            Most agencies sell services. We sell outcomes. Here&apos;s what makes our approach
            fundamentally different.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {differentiators.map((item, i) => (
            <div
              key={item.title}
              className={`relative flex gap-6 p-8 rounded-2xl border transition-all duration-300 group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 ${
                i === 0
                  ? "bg-gradient-to-br from-primary/5 to-primary-light/10 border-primary/15"
                  : "bg-white border-gray-100"
              }`}
            >
              {/* Icon */}
              <div
                className={`flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  i === 0
                    ? "bg-primary text-white"
                    : "bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white"
                }`}
              >
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2 min-w-0">
                <h3 className="text-lg font-bold text-dark">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                <span className="text-xs font-semibold text-primary mt-1">{item.stat}</span>
              </div>

              {/* Accent dot */}
              <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

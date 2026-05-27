import { Search, Network, Zap, Globe2 } from "lucide-react";

const items = [
  {
    Icon: Search,
    title: "Audit Before Action",
    body: "We never start blind. Every engagement begins with understanding your current digital state — gaps, opportunities, and priorities.",
  },
  {
    Icon: Network,
    title: "Systems, Not Just Services",
    body: "We don't deliver isolated outputs. We build connected ecosystems where every element works together toward your business goals.",
  },
  {
    Icon: Zap,
    title: "Execution-Driven",
    body: "Strategy without delivery is useless. We execute with precision, transparency, and a clear sense of accountability.",
  },
  {
    Icon: Globe2,
    title: "Global Standards, Local Understanding",
    body: "We work with international benchmarks while understanding the Bangladeshi and regional business context deeply.",
  },
];

export default function WhyGT() {
  return (
    <section className="section-py bg-surface-bg">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label">Why GT</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mt-3 leading-tight">
            Why Businesses{" "}
            <span className="gradient-text">Choose Us</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Cards — 2-col within first 2 cols */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
            {items.map(({ Icon, title, body }, i) => (
              <div
                key={title}
                className="bg-surface-card border border-surface-border rounded-2xl p-7 flex gap-5
                           hover:border-surface-border-glow transition-all duration-300
                           animate-on-scroll group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-primary/10
                                flex items-center justify-center text-brand-primary
                                group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                  <Icon size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-text-primary mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative right column */}
          <div className="hidden lg:flex items-center justify-center relative h-full min-h-[320px]">
            {/* Glowing orb */}
            <div
              className="absolute w-64 h-64 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(108,60,255,0.15) 0%, transparent 70%)",
              }}
            />
            {/* Large GT text */}
            <span
              className="font-display font-black text-text-primary select-none relative z-10"
              style={{ fontSize: "10rem", opacity: 0.03, lineHeight: 1 }}
            >
              GT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

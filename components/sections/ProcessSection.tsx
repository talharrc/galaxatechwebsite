import { Search, Compass, Map, Code2, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    Icon: Search,
    label: "Audit",
    description: "We analyze your current digital ecosystem and identify gaps.",
  },
  {
    number: "02",
    Icon: Compass,
    label: "Discovery",
    description: "We understand your business, goals, and competitive landscape.",
  },
  {
    number: "03",
    Icon: Map,
    label: "Strategy",
    description: "We map out the roadmap — what to build, how, and why.",
  },
  {
    number: "04",
    Icon: Code2,
    label: "Build",
    description: "We execute with precision — design, development, and deployment.",
  },
  {
    number: "05",
    Icon: TrendingUp,
    label: "Optimize",
    description: "We monitor, improve, and scale what we've built together.",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-py bg-surface-card border-y border-surface-border">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">Our Methodology</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mt-3 leading-tight">
            How We Work
          </h2>
          <p className="text-base lg:text-lg text-text-secondary leading-relaxed mt-4">
            A structured process built for clarity, speed, and results.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="absolute top-10 left-[calc(10%+40px)] right-[calc(10%+40px)] h-px hidden lg:block"
               style={{
                 background: "linear-gradient(to right, #3D2D8A, rgba(61,45,138,0.3), #3D2D8A)"
               }} />

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div
                key={step.label}
                className="flex flex-col items-center text-center gap-4 relative animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Circle */}
                <div
                  className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center
                              border-2 transition-colors ${
                    i === 0 || i === steps.length - 1
                      ? "border-brand-primary bg-brand-primary text-white shadow-glow-sm"
                      : "border-surface-border-glow bg-surface-elevated text-brand-primary"
                  }`}
                >
                  <step.Icon size={24} strokeWidth={1.75} />
                </div>
                {/* Number badge */}
                <div className="absolute top-0 right-1/2 translate-x-[calc(50%+24px)] -translate-y-1
                                w-5 h-5 rounded-full bg-surface-border-glow text-text-accent text-[10px] font-bold
                                flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-display font-semibold text-text-primary text-sm">{step.label}</h3>
                <p className="text-xs text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

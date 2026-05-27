import { CheckCircle2, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

const bullets = [
  "Real projects. Not simulations.",
  "Real workflows. Real discipline.",
  "Real growth. Measurable outcomes.",
];

const stats = [
  { value: "Real", label: "Client Projects" },
  { value: "1:1", label: "Mentorship" },
  { value: "12 wk", label: "Program Length" },
  { value: "Free*", label: "Top Applicants" },
];

export default function BuildersTeaser() {
  return (
    <section className="section-py bg-surface-bg grid-bg relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top, rgba(108,60,255,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="container-xl relative z-10">
        {/* Container card */}
        <div className="bg-surface-card border border-surface-border-glow rounded-3xl p-10 lg:p-14 glow-purple">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <div className="flex flex-col gap-7">
              <div>
                <span className="section-label">For Aspiring Digital Professionals</span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mt-3 leading-tight">
                  The Galaxa{" "}
                  <span className="gradient-text">Builders Program</span>
                </h2>
              </div>

              <p className="text-base text-text-secondary leading-relaxed">
                A project-based digital apprenticeship where selected individuals learn through
                real execution — not theory. If you want to build, you need to build.
              </p>

              <ul className="flex flex-col gap-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-text-primary text-sm font-medium">
                    <CheckCircle2 size={16} className="text-brand-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Button href="/builders" variant="ghost" size="lg">
                  Learn About the Program
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>

            {/* Right: stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-elevated border border-surface-border rounded-xl px-6 py-5"
                >
                  <p className="font-display text-3xl font-bold text-text-accent">{item.value}</p>
                  <p className="text-sm text-text-secondary mt-1 font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

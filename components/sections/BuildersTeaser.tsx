import { CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";

const bullets = [
  "Real projects. Not simulations.",
  "Real workflows. Real discipline.",
  "Real growth. Measurable outcomes.",
];

export default function BuildersTeaser() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-mid to-[#3a1a8f]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Decorative large text */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 text-[180px] font-black
                   text-white/[0.06] leading-none select-none hidden lg:block tracking-tighter"
      >
        GT
      </div>

      <div className="container-xl relative z-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="flex flex-col gap-7">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-lavender">
                For Aspiring Digital Professionals
              </span>
              <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-white leading-tight">
                The Galaxa Builders Program
              </h2>
            </div>

            <p className="text-lg text-white/75 leading-relaxed">
              A project-based digital apprenticeship where selected individuals learn through
              real execution — not theory. If you want to build, you need to build.
            </p>

            <ul className="flex flex-col gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-white/90 text-base font-medium">
                  <CheckCircle2 size={18} className="text-brand-lavender flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Button href="/builders" variant="ghost-white" size="lg">
                Learn About the Program
              </Button>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "Real", label: "Client Projects" },
              { value: "1:1", label: "Mentorship" },
              { value: "12 wk", label: "Program Length" },
              { value: "Free*", label: "Top Applicants" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-sm"
              >
                <p className="text-3xl font-bold text-white">{item.value}</p>
                <p className="text-sm text-white/60 mt-1 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

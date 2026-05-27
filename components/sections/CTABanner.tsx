import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="section-py bg-surface-card border-t border-surface-border relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(108,60,255,0.12) 0%, transparent 65%)",
        }}
      />

      <div className="container-xl relative z-10 text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="font-display text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
            Your Digital Ecosystem
            <br />
            <span className="gradient-text">Needs a System.</span>
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Start with a free audit. No commitment. Just clarity.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/contact" size="lg">
            Get Your Free Audit
            <ArrowRight size={16} />
          </Button>
          <Button href="/services" variant="ghost" size="lg">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

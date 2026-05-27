import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTABanner() {
  return (
    <section className="section-py bg-brand-dark relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-xl relative z-10 text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Your Digital Ecosystem Needs a System.
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Start with a free audit. No commitment. Just clarity.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button href="/contact" size="lg">
            Get Your Free Audit
            <ArrowRight size={18} />
          </Button>
          <Button href="/services" variant="ghost-white" size="lg">
            Explore Our Services
          </Button>
        </div>
      </div>
    </section>
  );
}

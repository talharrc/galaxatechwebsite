import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-surface-bg grid-bg overflow-hidden pt-[72px]">
      {/* Background radial glows */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(108,60,255,0.12) 0%, transparent 70%)",
          transform: "translate(25%, -15%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(141,92,255,0.06) 0%, transparent 70%)",
          transform: "translate(-20%, 20%)",
        }}
      />

      <div className="container-xl relative z-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow badge */}
            <div className="self-start">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
                               bg-brand-primary/10 border border-brand-primary/30 text-text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                Digital Agency — Dhaka & Global
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-1">
              <h1 className="font-display font-bold leading-[1.05] tracking-tight text-text-primary"
                  style={{ fontSize: "clamp(2.75rem, 6vw, 5rem)" }}>
                <span className="block">Your Digital</span>
                <span className="block gradient-text">Ecosystem</span>
                <span className="block">Has Gaps.</span>
                <span className="block text-text-secondary">We Find Them.</span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg text-text-secondary leading-relaxed max-w-lg">
              Galaxa Tech audits your digital presence, identifies what&apos;s holding you back,
              and builds the systems that move you forward.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                Get a Free Audit
                <ArrowRight size={16} />
              </Button>
              <Button href="/work" variant="ghost" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
              {["5+ Years in Digital", "6 Service Lines", "BD & Global"].map((item, i) => (
                <span key={item} className="flex items-center gap-2 text-sm text-text-muted">
                  {i > 0 && (
                    <span className="w-px h-3 bg-surface-border hidden sm:block" />
                  )}
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative hidden lg:flex justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Image with glow */}
              <div className="relative rounded-2xl overflow-hidden glow-purple border border-surface-border-glow">
                <Image
                  src="/images/hero-visual.jpg"
                  alt="Digital ecosystem dashboard — Galaxa Tech"
                  width={640}
                  height={480}
                  className="object-cover w-full"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-5 -left-6
                              bg-surface-card/90 backdrop-blur-md
                              border border-surface-border-glow
                              rounded-xl px-4 py-3 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-primary flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-text-primary font-display">
                    Audit-First Agency
                  </p>
                  <p className="text-xs text-text-muted">Strategy before execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

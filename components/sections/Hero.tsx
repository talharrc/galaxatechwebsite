import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Background radial blob */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(192,180,252,0.2) 0%, transparent 70%)",
          transform: "translate(20%, -20%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(108,60,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-xl relative z-10 w-full py-16 lg:py-24">
        <div className="grid lg:grid-cols-[58%_42%] gap-12 lg:gap-8 items-center">
          {/* Left: Copy */}
          <div className="flex flex-col gap-8">
            {/* Eyebrow pill */}
            <div className="self-start">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                               bg-brand-primary text-white text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                Digital Agency — Dhaka & Global
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-dark
                             leading-[1.08] tracking-tight">
                Your Digital
                <br />
                Ecosystem{" "}
                <span className="text-brand-primary">Has Gaps.</span>
                <br />
                We Find Them.
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-brand-gray font-normal leading-relaxed max-w-xl">
              Galaxa Tech audits your digital presence, identifies what&apos;s holding you back,
              and builds the systems that move you forward.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button href="/contact" size="lg">
                Get a Free Audit
                <ArrowRight size={18} />
              </Button>
              <Button href="/work" variant="secondary" size="lg">
                View Our Work
              </Button>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {["5+ Years in Digital", "6 Service Lines", "BD & Global"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-brand-gray">
                  <CheckCircle2 size={14} className="text-brand-primary flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative hidden lg:flex justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Glow behind image */}
              <div className="absolute inset-8 rounded-2xl bg-brand-lavender/30 blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-glow">
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
              <div className="absolute -bottom-4 -left-6 bg-white border border-gray-100
                              rounded-xl shadow-lg px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center
                                justify-center text-brand-primary font-bold text-lg">
                  G
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-dark">Audit-First Agency</p>
                  <p className="text-xs text-brand-gray">Strategy before execution</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

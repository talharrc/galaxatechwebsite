import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import ScrollAnimator from "@/components/ScrollAnimator";
import { SERVICES } from "@/lib/constants";
import {
  Globe, Smartphone, Bot, TrendingUp, Palette, Layout,
  CheckCircle2, ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — Galaxa Tech",
  description:
    "Web development, app development, AI automation, digital marketing, brand & design, and Notion systems. Every service built around your business outcomes.",
};

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, Bot, TrendingUp, Palette, Layout,
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-surface-bg pt-32 pb-16 grid-bg">
          <div className="container-xl">
            <div className="max-w-3xl">
              <span className="section-label">What We Do</span>
              <h1 className="font-display mt-3 text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
                What We Do —<br />And How We Do It
              </h1>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed max-w-xl">
                Every service at Galaxa Tech is designed around one principle: your business needs
                systems, not just deliverables.
              </p>
            </div>
          </div>
        </section>

        {/* Services list */}
        <section className="section-py bg-surface-bg">
          <div className="container-xl flex flex-col gap-24">
            {SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Globe;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={service.slug}
                  id={service.slug}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center animate-on-scroll ${
                    isEven ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Visual */}
                  <div className="relative">
                    <div
                      className="aspect-[4/3] rounded-2xl flex items-center justify-center
                                  bg-surface-card border border-surface-border"
                    >
                      <Icon size={80} className="text-brand-primary/20" strokeWidth={1} />
                      <div className="absolute inset-6 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-3xl bg-brand-primary/10 flex items-center
                                        justify-center shadow-glow-sm">
                          <Icon size={40} className="text-brand-primary" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs
                                       font-semibold bg-brand-primary/10 text-text-accent mb-3">
                        Service {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="font-display text-3xl font-bold text-text-primary">{service.title}</h2>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                          The Problem
                        </p>
                        <p className="text-text-secondary leading-relaxed text-sm">{service.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-2">
                          What GT Does
                        </p>
                        <p className="text-text-secondary leading-relaxed text-sm">{service.solution}</p>
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-text-primary mb-3">
                        What You Get
                      </p>
                      <ul className="flex flex-col gap-2">
                        {service.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-2.5 text-sm text-text-secondary">
                            <CheckCircle2 size={16} className="text-brand-primary flex-shrink-0 mt-0.5" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button href="/contact" size="md">
                      Get a Free Audit for This
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Not sure CTA */}
        <section className="section-py bg-surface-card border-y border-surface-border">
          <div className="container-xl text-center flex flex-col items-center gap-6">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold text-text-primary mb-3">
                Not sure which service you need?
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Start with a free audit and we&apos;ll map it out for you.
              </p>
            </div>
            <Button href="/contact" size="lg">
              Request a Free Audit
              <ArrowRight size={18} />
            </Button>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}

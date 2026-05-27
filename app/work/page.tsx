import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import ScrollAnimator from "@/components/ScrollAnimator";
import { PROJECTS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Work — Galaxa Tech",
  description:
    "Real projects. Real execution. Real outcomes. Browse Galaxa Tech's portfolio of web, app, and branding work.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Page hero */}
        <section className="bg-surface-bg pt-32 pb-16 grid-bg">
          <div className="container-xl">
            <div className="max-w-2xl">
              <span className="section-label">Portfolio</span>
              <h1 className="font-display mt-3 text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
                Our Work
              </h1>
              <p className="mt-5 text-lg text-text-secondary leading-relaxed">
                Real projects. Real execution. Real outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-py bg-surface-bg border-t border-surface-border">
          <div className="container-xl flex flex-col gap-20">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                id={project.id}
                className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-start animate-on-scroll"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Images */}
                <div className="flex flex-col gap-4">
                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-surface-border">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {project.appImage && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative aspect-[9/16] rounded-xl overflow-hidden border border-surface-border">
                        <Image
                          src={project.appImage}
                          alt={`${project.name} app`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold
                                         bg-brand-primary/20 text-text-accent self-start">
                          Mobile App
                        </span>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          Companion mobile app built alongside the website — shared brand,
                          distinct utility.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-6 lg:sticky lg:top-24">
                  <div>
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold
                                     bg-brand-primary/20 text-text-accent mb-3">
                      {project.category}
                    </span>
                    <h2 className="font-display text-3xl font-bold text-text-primary">{project.name}</h2>
                    <p className="mt-1 text-text-accent font-medium">{project.title}</p>
                  </div>

                  <p className="text-text-secondary text-sm leading-relaxed">{project.description}</p>

                  {/* Case study breakdown */}
                  <div className="flex flex-col gap-5 border-t border-surface-border pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                        Challenge
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                        Approach
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-text-muted mb-2">
                        Outcome
                      </p>
                      <p className="text-sm text-text-secondary leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-surface-elevated text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-surface-card border-t border-surface-border text-center">
          <div className="container-xl">
            <h2 className="font-display text-2xl font-bold text-text-primary mb-4">
              Want to see your project here?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-primary text-white
                         font-semibold px-6 py-3 rounded-full hover:bg-brand-mid transition-all duration-200
                         hover:shadow-glow-sm"
            >
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}

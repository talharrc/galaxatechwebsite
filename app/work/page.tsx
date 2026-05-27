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
        <section className="bg-brand-dark pt-32 pb-16">
          <div className="container-xl">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-lavender">
                Portfolio
              </span>
              <h1 className="mt-3 text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                Our Work
              </h1>
              <p className="mt-5 text-lg text-white/60 leading-relaxed">
                Real projects. Real execution. Real outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="section-py bg-brand-dark border-t border-white/8">
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
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {project.appImage && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative aspect-[9/16] rounded-xl overflow-hidden">
                        <Image
                          src={project.appImage}
                          alt={`${project.name} app`}
                          fill
                          className="object-cover object-top"
                        />
                      </div>
                      <div className="flex flex-col gap-3 pt-2">
                        <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold
                                         bg-brand-primary/20 text-brand-lavender self-start">
                          Mobile App
                        </span>
                        <p className="text-sm text-white/50 leading-relaxed">
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
                                     bg-brand-primary/20 text-brand-lavender mb-3">
                      {project.category}
                    </span>
                    <h2 className="text-3xl font-bold text-white">{project.name}</h2>
                    <p className="mt-1 text-brand-lavender font-medium">{project.title}</p>
                  </div>

                  <p className="text-white/60 text-sm leading-relaxed">{project.description}</p>

                  {/* Case study breakdown */}
                  <div className="flex flex-col gap-5 border-t border-white/10 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">
                        Challenge
                      </p>
                      <p className="text-sm text-white/55 leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">
                        Approach
                      </p>
                      <p className="text-sm text-white/55 leading-relaxed">{project.approach}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-2">
                        Outcome
                      </p>
                      <p className="text-sm text-white/55 leading-relaxed">{project.outcome}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-white/8 text-white/50"
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
        <section className="py-16 bg-brand-dark border-t border-white/8 text-center">
          <div className="container-xl">
            <h2 className="text-2xl font-bold text-white mb-4">
              Want to see your project here?
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-primary text-white
                         font-semibold px-6 py-3 rounded-lg hover:bg-brand-mid transition-colors"
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

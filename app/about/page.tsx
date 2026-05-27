import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CTABanner from "@/components/sections/CTABanner";
import ScrollAnimator from "@/components/ScrollAnimator";
import Button from "@/components/ui/Button";
import { TEAM } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Galaxa Tech",
  description:
    "A systems-driven creative tech agency built to help modern businesses audit, optimize, and scale their digital ecosystems.",
};

const values = [
  { title: "Systems Over Shortcuts", description: "We build things that last — not things that look good for a week." },
  { title: "Execution Over Excuses", description: "Delivery is non-negotiable. We do what we say, when we say it." },
  { title: "Clarity Over Complexity", description: "Simple, structured, and easy to understand — in communication and in product." },
  { title: "Growth Over Vanity", description: "We care about business outcomes, not awards or aesthetic trends." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
                  About Us
                </span>
                <h1 className="mt-3 text-5xl lg:text-6xl font-bold text-brand-dark leading-tight tracking-tight">
                  We Are Galaxa Tech
                </h1>
              </div>
              <div>
                <p className="text-lg text-brand-gray leading-relaxed">
                  A systems-driven creative tech agency built to help modern businesses audit,
                  optimize, and scale their digital ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-py bg-brand-offwhite">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
                  Mission
                </span>
                <h2 className="mt-3 text-4xl font-bold text-brand-dark leading-tight">
                  Why GT Exists
                </h2>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-primary rounded-full" />
                <p className="pl-6 text-lg text-brand-gray leading-relaxed">
                  &ldquo;Our mission is to close the gap between where businesses are digitally
                  and where they need to be — through structured audits, strategic execution,
                  and scalable systems.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-py bg-white">
          <div className="container-xl">
            <div className="mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
                The Team
              </span>
              <h2 className="mt-3 text-4xl font-bold text-brand-dark">The Team</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TEAM.map((member, i) => (
                <div
                  key={member.name}
                  className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col gap-5
                             hover:border-brand-primary/30 hover:shadow-md transition-all duration-300
                             animate-on-scroll"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center
                                  justify-center text-white text-2xl font-bold">
                    {member.initial}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark text-lg leading-tight">{member.name}</h3>
                    <p className="text-brand-primary text-sm font-semibold mt-1">{member.role}</p>
                  </div>
                  <p className="text-sm text-brand-gray leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-py bg-brand-offwhite">
          <div className="container-xl">
            <div className="mb-12 text-center">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
                What We Stand For
              </span>
              <h2 className="mt-3 text-4xl font-bold text-brand-dark">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-white rounded-xl p-8 border border-gray-100 flex gap-5
                             hover:border-brand-primary/20 transition-all duration-300 animate-on-scroll"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center
                                  justify-center text-brand-primary font-bold text-sm flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-2">{v.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-py bg-white text-center">
          <div className="container-xl flex flex-col items-center gap-5">
            <h2 className="text-3xl font-bold text-brand-dark">Want to work with us?</h2>
            <Button href="/contact" size="lg">
              Get a Free Audit <ArrowRight size={18} />
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

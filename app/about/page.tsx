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
        <section className="pt-32 pb-16 bg-surface-bg grid-bg">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="section-label">About Us</span>
                <h1 className="font-display mt-3 text-5xl lg:text-6xl font-bold text-text-primary leading-tight tracking-tight">
                  We Are Galaxa Tech
                </h1>
              </div>
              <div>
                <p className="text-lg text-text-secondary leading-relaxed">
                  A systems-driven creative tech agency built to help modern businesses audit,
                  optimize, and scale their digital ecosystems.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="section-py bg-surface-card border-y border-surface-border">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div>
                <span className="section-label">Mission</span>
                <h2 className="font-display mt-3 text-4xl font-bold text-text-primary leading-tight">
                  Why GT Exists
                </h2>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-brand-primary rounded-full" />
                <p className="pl-6 text-lg text-text-secondary leading-relaxed">
                  &ldquo;Our mission is to close the gap between where businesses are digitally
                  and where they need to be — through structured audits, strategic execution,
                  and scalable systems.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-py bg-surface-bg">
          <div className="container-xl">
            <div className="mb-12">
              <span className="section-label">The Team</span>
              <h2 className="font-display mt-3 text-4xl font-bold text-text-primary">The Team</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {TEAM.map((member, i) => (
                <div
                  key={member.name}
                  className="bg-surface-card border border-surface-border rounded-2xl p-8 flex flex-col gap-5
                             hover:border-surface-border-glow hover:shadow-glow-sm transition-all duration-300
                             animate-on-scroll"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center
                                  justify-center text-white text-2xl font-bold font-display">
                    {member.initial}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-brand-primary text-sm font-semibold mt-1">{member.role}</p>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-py bg-surface-card border-y border-surface-border">
          <div className="container-xl">
            <div className="mb-12 text-center">
              <span className="section-label">What We Stand For</span>
              <h2 className="font-display mt-3 text-4xl font-bold text-text-primary">Our Values</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-surface-elevated rounded-xl p-8 border border-surface-border flex gap-5
                             hover:border-surface-border-glow transition-all duration-300 animate-on-scroll"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center
                                  justify-center text-text-accent font-bold text-sm flex-shrink-0 font-display">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-text-primary mb-2">{v.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="section-py bg-surface-bg text-center">
          <div className="container-xl flex flex-col items-center gap-5">
            <h2 className="font-display text-3xl font-bold text-text-primary">
              Want to work with us?
            </h2>
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

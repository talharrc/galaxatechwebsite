import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollAnimator from "@/components/ScrollAnimator";
import Button from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Galaxa Builders Program — Galaxa Tech",
  description:
    "A project-based digital apprenticeship. Learn through execution. Build real systems. Grow with discipline.",
};

const whatYouGet = [
  {
    title: "Real Project Exposure",
    description: "Work on live client projects — not simulations or case studies.",
    emoji: "💼",
  },
  {
    title: "Mentorship",
    description: "Direct guidance from GT's core team throughout your journey.",
    emoji: "🎯",
  },
  {
    title: "Operational Training",
    description: "Learn how real digital businesses operate — workflows, tools, systems.",
    emoji: "⚙️",
  },
  {
    title: "Portfolio + Certificate",
    description: "Graduate with real work to show and a certificate of completion.",
    emoji: "📜",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Apply & Get Evaluated",
    description: "Submit your application. We review your motivation and baseline.",
  },
  {
    step: "02",
    title: "Onboard & Learn Systems",
    description: "Learn GT's workflows, tools, and operational standards.",
  },
  {
    step: "03",
    title: "Execute on Real Projects",
    description: "Work on actual projects with accountability and mentorship.",
  },
];

export default function BuildersPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-dark pt-32 pb-20">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-transparent to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="container-xl relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-lavender">
                For Aspiring Digital Professionals
              </span>
              <h1 className="mt-3 text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                The Galaxa Builders Program
              </h1>
              <p className="mt-5 text-xl text-white/65 leading-relaxed">
                A project-based digital apprenticeship. Learn through execution. Build real
                systems. Grow with discipline.
              </p>
              <div className="mt-8">
                <Button href="/contact" size="lg">
                  Apply to the Program <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="section-py bg-white">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-on-scroll">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-primary">
                  What It Is
                </span>
                <h2 className="mt-3 text-4xl font-bold text-brand-dark leading-tight">
                  Not a Course. Not a Community.
                </h2>
              </div>
              <div>
                <p className="text-lg text-brand-gray leading-relaxed">
                  The Builders Program is a structured apprenticeship where selected individuals
                  work on real GT projects, learn operational workflows, and develop into
                  execution-ready digital professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="section-py bg-brand-offwhite">
          <div className="container-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark">What You Get</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {whatYouGet.map((item, i) => (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-5
                             hover:border-brand-primary/30 hover:shadow-sm transition-all duration-300
                             animate-on-scroll"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="text-3xl">{item.emoji}</div>
                  <div>
                    <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                    <p className="text-sm text-brand-gray leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section-py bg-white">
          <div className="container-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-brand-dark">How It Works</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6 relative">
              <div className="absolute top-8 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)]
                              h-px border-t-2 border-dashed border-brand-lavender hidden md:block" />
              {howItWorks.map((step, i) => (
                <div
                  key={step.step}
                  className="flex flex-col items-center text-center gap-4 animate-on-scroll"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="relative z-10 w-16 h-16 rounded-full bg-brand-primary text-white
                                  flex items-center justify-center text-lg font-bold shadow-glow-sm">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-brand-dark">{step.title}</h3>
                  <p className="text-sm text-brand-gray leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="section-py bg-brand-offwhite">
          <div className="container-xl max-w-3xl mx-auto text-center animate-on-scroll">
            <h2 className="text-3xl font-bold text-brand-dark mb-5">Who It&apos;s For</h2>
            <p className="text-lg text-brand-gray leading-relaxed">
              Motivated individuals who want to build real skills in web, app, marketing, design,
              or AI — and are willing to work for it.
            </p>
          </div>
        </section>

        {/* Apply */}
        <section className="section-py bg-brand-dark relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent" />
          <div className="container-xl relative z-10 text-center flex flex-col items-center gap-6">
            <h2 className="text-4xl font-bold text-white">Ready to Build?</h2>
            <div className="flex flex-col items-center gap-3">
              {["Real projects. Not simulations.", "Real workflows. Real discipline.", "Real growth. Measurable outcomes."].map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/70 text-sm">
                  <CheckCircle2 size={14} className="text-brand-lavender" />
                  {b}
                </div>
              ))}
            </div>
            <Button href="/contact" size="lg">
              Apply to the Program <ArrowRight size={18} />
            </Button>
            <p className="text-xs text-white/35">
              Applications are reviewed on a rolling basis. Spots are limited.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}

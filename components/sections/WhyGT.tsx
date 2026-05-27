import { Search, Network, Zap, Globe2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const items = [
  {
    Icon: Search,
    title: "Audit Before Action",
    body: "We never start blind. Every engagement begins with understanding your current digital state — gaps, opportunities, and priorities.",
  },
  {
    Icon: Network,
    title: "Systems, Not Just Services",
    body: "We don't deliver isolated outputs. We build connected ecosystems where every element works together toward your business goals.",
  },
  {
    Icon: Zap,
    title: "Execution-Driven",
    body: "Strategy without delivery is useless. We execute with precision, transparency, and a clear sense of accountability.",
  },
  {
    Icon: Globe2,
    title: "Global Standards, Local Understanding",
    body: "We work with international benchmarks while understanding the Bangladeshi and regional business context deeply.",
  },
];

export default function WhyGT() {
  return (
    <section className="section-py bg-brand-offwhite">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionHeading
            eyebrow="Why GT"
            title="Why Businesses Choose GT"
            centered
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {items.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 border border-gray-100 flex gap-6
                         hover:border-brand-primary/30 hover:shadow-sm transition-all duration-300
                         animate-on-scroll group"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-primary/8
                              flex items-center justify-center text-brand-primary
                              group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-dark mb-2">{title}</h3>
                <p className="text-sm text-brand-gray leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

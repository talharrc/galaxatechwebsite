const testimonials = [
  {
    quote:
      "Galaxa Tech didn't just build us a website — they rebuilt our entire digital operation. Revenue is up 120% and our team actually has systems that work. This is what ecosystem thinking looks like in practice.",
    name: "Sarah Whitfield",
    title: "CEO, NovaPay",
    initials: "SW",
    tag: "Web Dev + AI",
    rating: 5,
  },
  {
    quote:
      "I've worked with 5 agencies over 8 years. None of them had the strategic depth that Galaxa Tech brings. They asked questions no agency had ever asked us before, and then they actually executed on the answers.",
    name: "Marcus Oduya",
    title: "Founder, Meridian Agency",
    initials: "MO",
    tag: "Marketing + Brand",
    rating: 5,
  },
  {
    quote:
      "From week one, it felt like they were co-founders, not contractors. The Notion operating system they built for us alone saved us 15 hours per week. Absolutely worth every penny.",
    name: "Priya Nambiar",
    title: "COO, ScaleOps Ltd.",
    initials: "PN",
    tag: "Notion Systems",
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="section-label mb-3 block">Social Proof</span>
          <h2 className="section-heading mb-4">
            What Clients{" "}
            <span className="bg-gradient-to-r from-primary to-primary-mid bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <p className="section-subheading mx-auto text-base">
            We let results do the talking — but here&apos;s what our clients have to say about the
            process.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-base flex flex-col gap-5 relative overflow-hidden"
            >
              {/* Large quote mark accent */}
              <div className="absolute -top-2 -right-2 text-[120px] leading-none font-bold text-primary/6 select-none pointer-events-none">
                &ldquo;
              </div>

              {/* Stars + tag */}
              <div className="flex items-center justify-between">
                <StarRating count={t.rating} />
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/8 text-primary">
                  {t.tag}
                </span>
              </div>

              {/* Quote */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Client info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-mid flex items-center justify-center text-white text-sm font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-dark">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 pt-10 border-t border-gray-100">
          <div className="text-sm text-gray-400 font-medium">Trusted by teams at</div>
          {["NovaPay", "Meridian", "ScaleOps", "Elevance", "TrueNode"].map((brand) => (
            <div key={brand} className="text-base font-bold text-gray-300 tracking-tight">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

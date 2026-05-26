const benefits = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Mentorship from Practitioners",
    description: "Work directly alongside Galaxa Tech's senior builders — not theory, but real live projects with real clients.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0c-.234-.18-.389-.423-.389-.707V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "Portfolio-Ready Client Work",
    description: "Graduate with a professional portfolio built on actual shipped projects — the most credible proof of skill in the market.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Network & Placement",
    description: "Join a vetted community of ambitious builders and get first access to Galaxa Tech's open roles and partner opportunities.",
  },
];

export default function Builders() {
  return (
    <section id="builders" className="section-padding relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-mid to-[#3a1a8f]" />

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-black/10 translate-y-1/2 -translate-x-1/3" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-7">
            <div>
              <span className="text-sm font-semibold tracking-widest uppercase text-primary-light mb-3 block">
                For Builders
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
                Galaxa Builders
                <br />
                <span className="text-primary-light">Program</span>
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                An intensive, hands-on program for ambitious developers, designers, and marketers
                who want to build real skills on real projects — under the mentorship of the Galaxa
                Tech team.
              </p>
            </div>

            {/* Benefits list */}
            <div className="flex flex-col gap-5">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-sm text-white/65 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-primary-white">
                Apply to the Program
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#" className="btn-ghost-white text-sm">
                Learn More
              </a>
            </div>
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "12 weeks", label: "Program Duration" },
              { value: "Live", label: "Real Client Projects" },
              { value: "1:1", label: "Mentorship Sessions" },
              { value: "Free", label: "for Top Applicants" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/10 border border-white/15 rounded-2xl p-6 flex flex-col gap-2 backdrop-blur-sm"
              >
                <span className="text-2xl font-bold text-white">{item.value}</span>
                <span className="text-sm text-white/65 font-medium">{item.label}</span>
              </div>
            ))}
            {/* Bottom full-width card */}
            <div className="col-span-2 bg-white/10 border border-white/15 rounded-2xl p-6 backdrop-blur-sm">
              <p className="text-sm text-white/80 italic leading-relaxed">
                &ldquo;The Builders Program turned me from a freelancer into a real agency professional. I
                shipped 3 client projects in 12 weeks and got hired full-time at Galaxa Tech.&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-8 h-8 rounded-full bg-primary-light/40 flex items-center justify-center text-white text-xs font-bold">
                  AK
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Arjun K.</div>
                  <div className="text-xs text-white/50">Cohort 2 Graduate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="section-py bg-white">
      <div className="container-xl">
        <div className="mb-14">
          <SectionHeading
            eyebrow="What We Do"
            title="What We Build &amp; Optimize"
            subtitle="Every service is designed around one principle — your business needs systems, not just deliverables."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.short}
              href={`/services#${service.slug}`}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

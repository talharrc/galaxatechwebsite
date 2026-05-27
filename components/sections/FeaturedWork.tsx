import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { PROJECTS } from "@/lib/constants";

export default function FeaturedWork() {
  return (
    <section className="section-py bg-brand-dark">
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="Real Projects. Real Execution."
            subtitle="Real outcomes."
            light
          />
          <Button href="/work" variant="ghost-white" className="flex-shrink-0 self-start lg:self-auto">
            View All Work
          </Button>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              category={project.category}
              title={project.title}
              description={project.description}
              scope={project.scope}
              href="/work"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function FeaturedWork() {
  return (
    <section className="section-py bg-surface-card border-y border-surface-border">
      <div className="container-xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <span className="section-label">Selected Work</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-text-primary mt-3 leading-tight">
              Real Projects.{" "}
              <span className="gradient-text">Real Execution.</span>
            </h2>
          </div>
          <Link
            href="/work"
            className="flex-shrink-0 self-start lg:self-auto flex items-center gap-2
                       text-sm font-medium text-text-accent hover:text-text-primary transition-colors"
          >
            View All Work <ArrowRight size={14} />
          </Link>
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

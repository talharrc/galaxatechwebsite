import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  scope: string;
  href?: string;
  index?: number;
}

export default function ProjectCard({
  image,
  category,
  title,
  description,
  scope,
  href = "/work",
  index = 0,
}: ProjectCardProps) {
  return (
    <div
      className="group bg-surface-bg border border-surface-border rounded-2xl overflow-hidden flex flex-col
                 hover:border-surface-border-glow hover:-translate-y-1 transition-all duration-300 animate-on-scroll"
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-bg/70" />
        {/* Category badge */}
        <span className="absolute top-4 left-4 inline-flex px-3 py-1 rounded-full text-xs font-semibold
                         bg-brand-primary/20 text-text-accent border border-brand-primary/40
                         uppercase tracking-wide">
          {category}
        </span>
      </div>

      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h3 className="font-display text-lg font-semibold text-text-primary mb-2">{title}</h3>
          <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-surface-border">
          <span className="text-xs font-medium text-text-muted bg-surface-elevated px-3 py-1 rounded-full">
            {scope}
          </span>
          <Link
            href={href}
            className="text-sm font-medium text-text-accent hover:text-text-primary
                       flex items-center gap-1.5 transition-colors"
          >
            View Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
}

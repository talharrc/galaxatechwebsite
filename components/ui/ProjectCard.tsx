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
      className="group bg-[#1A1428] border border-[#2D2444] rounded-2xl overflow-hidden flex flex-col
                 hover:border-brand-primary hover:scale-[1.01] transition-all duration-300 animate-on-scroll"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col gap-4 p-7 flex-1">
        <span className="inline-flex self-start px-3 py-1 rounded-full text-xs font-semibold
                         bg-brand-primary/20 text-brand-lavender">
          {category}
        </span>

        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{description}</p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
          <span className="text-xs font-medium text-white/40 bg-white/8 px-3 py-1 rounded-full">
            {scope}
          </span>
          <Link
            href={href}
            className="text-sm font-semibold text-brand-lavender hover:text-white
                       flex items-center gap-1.5 transition-colors group-hover:gap-3"
          >
            View Case Study →
          </Link>
        </div>
      </div>
    </div>
  );
}

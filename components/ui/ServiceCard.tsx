"use client";
import Link from "next/link";
import {
  Globe, Smartphone, Bot, TrendingUp, Palette, Layout,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Globe, Smartphone, Bot, TrendingUp, Palette, Layout,
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  href?: string;
  index?: number;
}

export default function ServiceCard({ icon, title, description, href = "/services", index = 0 }: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Globe;

  return (
    <div
      className="group bg-surface-card border border-surface-border rounded-2xl p-7 flex flex-col gap-5
                 hover:border-surface-border-glow hover:bg-surface-elevated hover:-translate-y-1
                 transition-all duration-300 animate-on-scroll"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-11 h-11 rounded-xl bg-brand-primary/10 flex items-center justify-center
                      text-brand-primary group-hover:bg-brand-primary group-hover:text-white
                      transition-all duration-300">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-semibold text-text-primary">{title}</h3>
        <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
      </div>
      <Link
        href={href}
        className="text-sm font-medium text-text-accent hover:text-text-primary flex items-center gap-1.5 mt-auto transition-colors"
      >
        Learn More
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </Link>
    </div>
  );
}

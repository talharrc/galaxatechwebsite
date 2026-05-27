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
      className="group bg-white border border-gray-100 rounded-xl p-7 flex flex-col gap-5
                 hover:border-brand-primary hover:shadow-md hover:-translate-y-0.5
                 transition-all duration-300 animate-on-scroll"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-brand-primary/8 flex items-center justify-center
                      text-brand-primary group-hover:bg-brand-primary group-hover:text-white
                      transition-all duration-300">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-base font-semibold text-brand-dark">{title}</h3>
        <p className="text-sm text-brand-gray leading-relaxed">{description}</p>
      </div>
      <Link
        href={href}
        className="text-sm font-semibold text-brand-primary hover:underline flex items-center gap-1.5 mt-auto"
      >
        Learn More
        <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
      </Link>
    </div>
  );
}

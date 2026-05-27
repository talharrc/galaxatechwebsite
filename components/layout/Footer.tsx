import Link from "next/link";
import Image from "next/image";
import { Linkedin, Instagram, MessageCircle, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Web Development", href: "/services#web-development" },
      { label: "App Development", href: "/services#app-development" },
      { label: "AI Automation", href: "/services#ai-automation" },
      { label: "Digital Marketing", href: "/services#digital-marketing" },
      { label: "Brand & Design", href: "/services#brand-design" },
      { label: "Notion Systems", href: "/services#notion-systems" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Builders Program", href: "/builders" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: SITE.email, href: `mailto:${SITE.email}` },
      { label: "WhatsApp", href: `https://wa.me/${SITE.whatsapp}` },
      { label: "LinkedIn", href: SITE.linkedin },
      { label: "Instagram", href: SITE.instagram },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Top accent */}
      <div className="h-0.5 bg-gradient-to-r from-brand-primary via-brand-mid to-transparent" />

      <div className="container-xl py-16 lg:py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9">
                <Image
                  src="/images/logo-purple.png"
                  alt="Galaxa Tech"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-lg text-white leading-none">Galaxa Tech</p>
                <p className="text-xs text-brand-lavender font-medium mt-0.5">{SITE.tagline}</p>
              </div>
            </div>

            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              A systems-driven creative tech agency. We audit, optimize, and build scalable
              digital ecosystems for modern businesses.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { Icon: Linkedin, href: SITE.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: SITE.instagram, label: "Instagram" },
                { Icon: MessageCircle, href: `https://wa.me/${SITE.whatsapp}`, label: "WhatsApp" },
                { Icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 flex items-center justify-center
                             text-white/50 hover:bg-brand-primary hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/40">
                  {col.heading}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/55 hover:text-white transition-colors duration-200
                                   break-all"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © 2026 Galaxa Tech. All rights reserved. Built by GT.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/35">
            <Link href="/contact" className="hover:text-white/60 transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-white/60 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

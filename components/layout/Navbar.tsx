"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo-purple.png"
                alt="Galaxa Tech"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-lg text-brand-dark tracking-tight">
                Galaxa Tech
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 relative ${
                      active
                        ? "text-brand-primary"
                        : "text-brand-gray hover:text-brand-dark"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-brand-primary rounded-full" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="bg-brand-primary text-white text-sm font-semibold px-5 py-2.5
                         rounded-lg hover:bg-brand-mid transition-colors duration-200"
            >
              Get a Free Audit
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg text-brand-dark hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-white border-t border-gray-100 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-xl py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-brand-primary/8 text-brand-primary"
                    : "text-brand-gray hover:text-brand-dark hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-3 bg-brand-primary text-white text-sm font-semibold px-5 py-3
                       rounded-lg text-center hover:bg-brand-mid transition-colors"
          >
            Get a Free Audit
          </Link>
        </div>
      </div>
    </header>
  );
}

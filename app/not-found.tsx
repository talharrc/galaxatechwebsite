import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface-bg grid-bg flex flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="relative w-12 h-12">
        <Image src="/images/logo-purple.png" alt="Galaxa Tech" fill className="object-contain" />
      </div>
      <div>
        <p className="font-display text-[120px] font-black text-brand-primary/10 leading-none tracking-tight select-none">
          404
        </p>
        <h1 className="font-display text-2xl font-bold text-text-primary -mt-6">
          This page doesn&apos;t exist in our ecosystem.
        </h1>
        <p className="mt-3 text-text-secondary text-base">
          Looks like you took a wrong turn somewhere.
        </p>
      </div>
      <Link
        href="/"
        className="bg-brand-primary text-white font-semibold px-7 py-3 rounded-full
                   hover:bg-brand-mid transition-all duration-200 hover:shadow-glow-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}

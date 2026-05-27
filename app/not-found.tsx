import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-offwhite flex flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="relative w-14 h-14">
        <Image src="/images/logo-purple.png" alt="Galaxa Tech" fill className="object-contain" />
      </div>
      <div>
        <p className="text-[120px] font-black text-brand-primary/15 leading-none tracking-tight">
          404
        </p>
        <h1 className="text-2xl font-bold text-brand-dark -mt-6">
          This page doesn&apos;t exist in our ecosystem.
        </h1>
        <p className="mt-3 text-brand-gray text-base">
          Looks like you took a wrong turn somewhere.
        </p>
      </div>
      <Link
        href="/"
        className="bg-brand-primary text-white font-semibold px-7 py-3 rounded-lg
                   hover:bg-brand-mid transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}

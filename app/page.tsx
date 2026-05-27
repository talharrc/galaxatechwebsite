import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WhyGT from "@/components/sections/WhyGT";
import ProcessSection from "@/components/sections/ProcessSection";
import BuildersTeaser from "@/components/sections/BuildersTeaser";
import CTABanner from "@/components/sections/CTABanner";
import ScrollAnimator from "@/components/ScrollAnimator";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesGrid />
        <FeaturedWork />
        <WhyGT />
        <ProcessSection />
        <BuildersTeaser />
        <CTABanner />
      </main>
      <Footer />
      <ScrollAnimator />
    </>
  );
}

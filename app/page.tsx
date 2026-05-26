import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import CaseStudies from "@/components/CaseStudies";
import WhyGalaxa from "@/components/WhyGalaxa";
import Process from "@/components/Process";
import Builders from "@/components/Builders";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <CaseStudies />
        <WhyGalaxa />
        <Process />
        <Builders />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

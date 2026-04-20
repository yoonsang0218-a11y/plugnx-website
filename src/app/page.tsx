import Hero from "@/components/sections/Hero";
import BrandMeaning from "@/components/sections/BrandMeaning";
import ServicesPreview from "@/components/sections/ServicesPreview";
import Stats from "@/components/sections/Stats";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMeaning />
      <ServicesPreview />
      <Stats />
      <Testimonials />
      <CTA />
    </>
  );
}

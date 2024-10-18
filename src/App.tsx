import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import HeroSection from "@/sections/hero-section";
import ServicesSection from "@/sections/services-section";
import AutomationSection from "@/sections/automation-section";
import CallToActionBanner from "@/components/cta-banner";
import TestimonialsSection from "@/sections/testimonials-section";
import FeaturesSection from "./sections/features-section";

export default function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AutomationSection />
      <CallToActionBanner />
      <TestimonialsSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}

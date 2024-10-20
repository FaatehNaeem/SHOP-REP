import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import HeroSection from "@/sections/hero-section";
import ServicesSection from "@/sections/services-section";
import AutomationSection from "@/sections/automation-section";
import CallToActionBanner from "@/components/cta-banner";
import TestimonialsSection from "@/sections/testimonials-section";
import FeaturesSection from "@/sections/features-section";
import CustomerExperienceBanner from "@/components/customer-experience-banner";

export default function Home() {
  return (
    <div className="flex w-screen flex-col bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AutomationSection />
      <CallToActionBanner />
      <TestimonialsSection />
      <FeaturesSection />
      <CustomerExperienceBanner />
      <Footer />
    </div>
  );
}

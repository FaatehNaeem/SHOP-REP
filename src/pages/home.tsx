import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import CallToActionBanner from "@/components/cta-banner";
import CustomerExperienceBanner from "@/components/customer-experience-banner";
import HeroSection from "@/sections/home/hero-section";
import ServicesSection from "@/sections/home/services-section";
import AutomationSection from "@/sections/home/automation-section";
import TestimonialsSection from "@/sections/home/testimonials-section";
import FeaturesSection from "@/sections/home/features-section";

export default function Home() {
  return (
    <div className="flex w-screen flex-col bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AutomationSection />
      <CallToActionBanner
        title="Try Our E-Commerce Chatbot Free for 14 Days – No Credit Card Required"
        marginTop="64px"
      />
      <TestimonialsSection />
      <FeaturesSection />
      <CustomerExperienceBanner />
      <Footer />
    </div>
  );
}

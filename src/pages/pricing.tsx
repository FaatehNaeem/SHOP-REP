import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import CallToActionBanner from "@/components/cta-banner";
import HeroSection from "@/sections/pricing/hero-section";
import TestimonialSection from "@/sections/pricing/testimonial-section";

export default function Pricing() {
  return (
    <div className="flex w-screen flex-col bg-background">
      <Header />
      <HeroSection />
      <TestimonialSection />
      <CallToActionBanner
        title="Start your free trial today—no credit card required."
        marginTop="0px"
      />
      <Footer />
    </div>
  );
}

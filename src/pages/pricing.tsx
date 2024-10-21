import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import CallToActionBanner from "@/components/cta-banner";
import LeadingBrandsBanner from "@/components/leading-brands-banner";
import HeroSection from "@/sections/pricing/hero-section";
import QuestionSection from "@/sections/pricing/question-section";
import QuestionSection2 from "@/sections/pricing/question-section-2";
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
      <QuestionSection />
      <QuestionSection2 />
      <LeadingBrandsBanner/>
      <Footer />
    </div>
  );
}

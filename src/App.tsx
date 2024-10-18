import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import HeroSection from "./sections/hero-section";
import ServicesSection from "@/sections/services-section";

export default function App() {
  return (
    <div className="flex min-h-screen w-screen flex-col bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

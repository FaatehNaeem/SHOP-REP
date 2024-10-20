import LeadingBrandsBanner from "@/components/leading-brands-banner";
import { Button } from "@/components/ui/button";
import { CheckCircle2Icon } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* heading and para */}
      <div className="text-center mt-2">
        <h1 className="text-primary-foreground font-bold">Boost Sales &</h1>
        <h1 className="text-secondary-foreground font-bold">
          Delight Customers
        </h1>
        <p className="mt-4 text-primary-foreground">
          Instant responses and seamless multi-channel support
        </p>
      </div>
      {/* btn */}
      <Button className="bg-secondary-foreground rounded-3xl w-[236px] h-[44px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none mt-4">
        Start Your Free Trial Today
      </Button>

      <div className="flex-col mt-8">
        {/* 100% growth section */}
        <div className="flex flex-row gap-4 growth-guaranteed-section">
          <div className="flex flex-row">
            <CheckCircle2Icon className="text-secondary-foreground" />
            <p className="text-primary-foreground ml-2 font-bold">
              100% Growth guaranteed
            </p>
          </div>
          <div className="flex flex-row">
            <CheckCircle2Icon className="text-secondary-foreground" />
            <p className="text-primary-foreground ml-2 font-bold">
              100% Growth guaranteed
            </p>
          </div>
          <div className="flex flex-row">
            <CheckCircle2Icon className="text-secondary-foreground" />
            <p className="text-primary-foreground ml-2 font-bold">
              100% Growth guaranteed
            </p>
          </div>
        </div>

        {/* rating */}
        <div className="flex flex-row gap-12 mt-8 items-center ratings-container">
          <img src="trusted-by-1230.svg" alt="" className="trusted-icon" />
          <div className="border border-[#E6E6E6] h-6 ratings-divider"></div>

          <img src="rating.svg" alt="" className="rating-icon" />
        </div>
      </div>
      {/* ui ss */}
      <div className="flex flex-col justify-center items-center mt-6">
        <img src="shop-rep-ui.svg" alt="" />
      </div>
      {/* banner */}
      <LeadingBrandsBanner />
    </div>
  );
}

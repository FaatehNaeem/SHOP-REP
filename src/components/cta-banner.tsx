import { Button } from "./ui/button";

export default function CallToActionBanner() {
  return (
    <div className="relative w-screen mt-16 bg-[#00CCBB80] h-[194px] flex items-center">
      {/* Left Image */}
      <div className="absolute left-0 top-0">
        <img
          src="cta-section.svg"
          alt=""
          width={"200px"}
          height={"373px"}
          className="xl:w-[200px] lg:w-[200px] md:w-[150px] sm:w-[100px] cta-section"
        />
      </div>

      {/* Center Content */}
      <div className="flex flex-col justify-center items-center h-full mx-auto">
        <p className="text-background font-bold text-lg text-center">
          Try Our E-Commerce Chatbot Free for 14 Days – No Credit Card Required
        </p>

        <Button className="bg-secondary-foreground rounded-3xl w-[236px] h-[44px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none mt-4">
          Start Your Free Trial Today
        </Button>
      </div>

      {/* Right Image */}
      <div className="absolute right-0 top-20 xl:top-[80px] lg:top-[80px] md:top-[120px] sm:top-[130px] cta-container">
        <img
          src="cta-section-2.svg"
          alt=""
          width={"200px"}
          height={"373px"}
          className="xl:w-[200px] lg:w-[200px] md:w-[150px] sm:w-[100px] cta-section"
        />
      </div>
    </div>
  );
}

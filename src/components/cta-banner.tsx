import { Button } from "./ui/button";

export default function CallToActionBanner() {
    return (
      <div className="w-screen mt-16 bg-[#00CCBB80] h-[194px] flex flex-row">
        <div className="w-[30%]">
          <img src="cta-section.svg" alt="" width={"200px"} height={"373px"} />
        </div>

        <div className="flex flex-col ml-[-100px] w-[60%] justify-center items-center">
          <p className="text-background font-bold text-lg">
            Try Our E-Commerce Chatbot Free for 14 Days – No Credit Card
            Required
          </p>

          <Button
            className="bg-secondary-foreground rounded-3xl w-[236px] h-[44px] text-background focus-visible:
        ring-0 hover:border-none hover:bg-teal-500 focus:outline-none mt-4"
          >
            Start Your Free Trial Today
          </Button>
        </div>

        <div className="flex items-end ml-4">
          <img src="cta-section-2.svg" alt="" width={"200px"} height={"373px"} />
        </div>
      </div>
    );
}



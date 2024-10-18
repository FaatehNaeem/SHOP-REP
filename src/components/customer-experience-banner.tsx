import Divider from "./divider";
import { Button } from "./ui/button";

export default function CustomerExperienceBanner() {
  return (
    <div className="w-screen mt-16 bg-[#00CCBB80] flex flex-row h-[546px]">
      <div className="w-[15%]">
        <img
          src="customer-experience-banner.svg"
          alt=""
          width={"200px"}
          height={"373px"}
        />
      </div>

      <div className="flex flex-col w-[70%] justify-center items-center gap-4">
        <h1 className="text-background text-[40px]">
          Ready to Enchance Your Customer Experience?
        </h1>
        <p className="text-background">
          Discover how our AI chatbot can help solve your customer service
          challenges today.
        </p>
        <Button className="bg-secondary-foreground rounded-3xl w-[185px] h-[44px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none">
          Simulate Shop Rep
        </Button>
        <Divider imgString="white-comma.svg" />
        <p className="text-background w-[618px] text-center">
          “Our sales increased by 30% in just three months thanks to this
          chatbot.
        </p>
        <p className="text-background w-[618px] text-center">
          It’s like having a full-time sales and support team available 24/7.”
        </p>

        <img
          src="testimonial.svg"
          alt=""
          width={"40px"}
          height={"40px"}
          className="mt-2 rounded-md"
        />
        <p className="text-background font-bold mt-2">
          Jane Doe, CEO at TechRetail
        </p>
      </div>

      <div className="flex items-end ml-4">
        <img
          src="customer-experience-banner-2.svg"
          alt=""
          width={"200px"}
          height={"373px"}
        />
      </div>
    </div>
  );
}

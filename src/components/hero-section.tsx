import { Button } from "./ui/button";
import { CheckCircle2Icon, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-[187px] text-center mt-2">
        <h1 className="text-primary-foreground font-bold">Boost Sales &</h1>
        <h1 className="text-secondary-foreground font-bold">
          Delight Customers
        </h1>
        <p className="mt-2 text-primary-foreground">
          Instant responses and seamless multi-channel support
        </p>
      </div>
      <Button className="bg-secondary-foreground rounded-3xl w-[236px] h-[44px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none">
        Start Your Free Trial Today
      </Button>

      <div className="flex-col h-[84px] mt-8">
        <div className="flex flex-row gap-4">
          <CheckCircle2Icon className="text-secondary-foreground" />
          <p className="text-primary-foreground">100% Growth guaranteed</p>
          <CheckCircle2Icon className="text-secondary-foreground" />
          <p className="text-primary-foreground">100% Growth guaranteed</p>
          <CheckCircle2Icon className="text-secondary-foreground" />
          <p className="text-primary-foreground">100% Growth guaranteed</p>
        </div>

        <div className="flex flex-row gap-4 mt-4 items-center">
          <img
            src="hero-section-icon.png"
            alt=""
            width={"116px"}
            height={"32px"}
          />
          <p className="text-zinc-500">Trusted by 1230+ businesses</p>
          <div className="border border-zinc-300 h-6"></div>
          <p className="text-primary-foreground font-bold">4.9</p>
          <div className="flex flex-row items-center">
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" fill="yellow" />
            <Star color="yellow" fill="yellow" />
            <p className="text-zinc-500 ml-2">from 10k+ reviews</p>
          </div>
        </div>
      </div>
        <div className="flex flex-col justify-center items-center">
          <img src="hero-section-img.png" alt="" />
        </div>
    </div>
  );
}

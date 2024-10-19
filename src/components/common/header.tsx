import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <nav className="flex flex-row gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 h-[64px] navbar justify-between items-center">
      <div className="w-[33%] pl-12 logo-container items-center justify-center">
        <a
          href="#"
          className="flex flex-row items-center gap-2 text-lg font-semibold md:text-base min-w-max"
        >
          <img src="shop-rep-logo.svg" alt="" className="logo-img" />
          <img src="cart-logo.svg" alt="" className="logo-img-2 hidden" />
        </a>
      </div>

      <div className="flex w-[30%] justify-center items-center gap-12 p-2 menu-items">
        <a
          href="#"
          className="text-primary-foreground transition-colors hover:text-foreground"
        >
          Product
        </a>
        <a
          href="#"
          className="text-primary-foreground transition-colors hover:text-foreground"
        >
          Features
        </a>
        <a
          href="#"
          className="text-primary-foreground transition-colors hover:text-foreground"
        >
          Pricing
        </a>
      </div>

      <div className="flex w-[20%] items-center gap-4 lg:ml-auto md:gap-2 lg:gap-4 hamburger-container">
        <a
          href="#"
          className="transition-colors hover:text-foreground text-primary-foreground login-text"
        >
          Login
        </a>
        <Button className="bg-secondary-foreground rounded-3xl w-[112px] h-[32px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none header-btn">
          Try for free
        </Button>
        <Menu className="hidden menu-icon" />
      </div>
    </nav>
  );
}

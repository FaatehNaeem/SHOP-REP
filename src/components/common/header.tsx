import { ShoppingCart} from "lucide-react";
import { Button } from "@/components/ui/button"


export default function Header() {
  return (
    // <header className="sticky top-0 flex h-16 items-center gap-4 bg-background px-4 md:px-6">
    <nav className="hidden flex-row gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 w-screen h-[64px]">
      <div className="w-[33%] pl-12">
        <a
          href="#"
          className="flex flex-row items-center gap-2 text-lg font-semibold md:text-base min-w-max"
        >
          <ShoppingCart className="h-6 w-6 text-secondary-foreground" />
          <p className="text-secondary-foreground font-bold text-2xl font-sans">
            SHOP REP
          </p>
        </a>
      </div>

      <div className="flex w-[30%] justify-center items-center gap-12 p-2">
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

      <div className="flex w-[20%] items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <a
          href="#"
          className="transition-colors hover:text-foreground text-primary-foreground"
        >
          Login
        </a>
        <Button className="bg-secondary-foreground rounded-3xl w-[112px] h-[32px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none">
          Try for free
        </Button>
      </div>
    </nav>
    // </header>
  );
}

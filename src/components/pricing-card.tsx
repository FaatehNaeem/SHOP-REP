import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface PricingCardProps {
  title: string;
  subtitle: string;
  pricing: string;
}

export default function PricingCard({
  title,
  subtitle,
  pricing,
}: PricingCardProps) {
  return (
    <Card className="w-[350px] h-[321px] bg-background mt-8">
      {/* logo + heading */}
      <CardHeader className="flex flex-row items-center space-x-4 rounded-md pt-8 h-[32px]">
        <img
          src="pricing-cart-logo.svg"
          height={"32px"}
          width={"32px"}
          className="mt-2"
        />
        <CardTitle className="text-[20px]">{title}</CardTitle>
      </CardHeader>
      {/* description */}
      <CardDescription className="pl-8 w-[352px] pt-2">
        {subtitle}
      </CardDescription>
      {/* divider */}
      <div className="h-[2px] w-10/12 bg-zinc-100 mx-auto mt-6"></div>
      {/* price */}
      <CardContent className="flex mt-2 flex-row items-center">
        <CardTitle className="text-primary-foreground text-[56px] font-bold">
          {pricing}
        </CardTitle>
        <CardTitle className="text-[#6F6A7C] text-[16px] mt-8 font-light ml-2">
          / month
        </CardTitle>
      </CardContent>
      {/* btn */}
      <CardFooter>
        <Button className="bg-secondary-foreground rounded-3xl w-[352px] h-[44px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none">
          Start Your Free Trial Today
        </Button>
      </CardFooter>
    </Card>
  );
}

import Divider from "./divider";
import { Button } from "./ui/button";

export default function CustomerExperienceBanner() {
  return (
    <div className="w-screen bg-[#00CCBB80] flex flex-col items-center gap-4 h-[546px] mt-16 pt-8">
      <h1 className="text-background text-[40px]">Ready to Enchance Your Customer Experience?</h1>
      <p className="text-background">
        Discover how our AI chatbot can help solve your customer service
        challenges today.
      </p>
      <Button className="bg-secondary-foreground rounded-3xl w-[185px] h-[44px] text-background focus-visible:ring-0 hover:border-none hover:bg-teal-500 focus:outline-none">
        Simulate Shop Rep
          </Button>

          <Divider/>
          
    </div>
  );
}

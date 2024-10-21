import PricingCard from "@/components/pricing-card";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center h-[550px]">
      {/* heading and para */}
      <div className="text-center mt-2">
        <h1 className="text-primary-foreground font-bold">
          Flexible <span className="text-secondary-foreground">Pricing</span>
          <span className="text-primary-foreground ml-1">for</span>
        </h1>
        <h1 className="text-primary-foreground font-bold">
          Businesses of All Sizes
        </h1>
        <p className="mt-4 text-primary-foreground w-[731px] mx-auto text-[18px]">
          Get the best value with our all-inclusive AI chatbot solution,
          available across web, chat, phone, and SMS.
        </p>
      </div>
      <div className="flex flex-row gap-4">
        <PricingCard
          title="Starter Plan"
          subtitle="Perfect for small businesses. Includes web and chat support."
          pricing="$10"
        />
        <PricingCard
          title="Growth Plan"
          subtitle="Unlock phone support and advanced analytics to boost customer engagement."
          pricing="$20"
        />
        <PricingCard
          title="Enterprise Plan"
          subtitle="Full access to all features, including SMS, with priority support and custom integrations."
          pricing="$40"
        />
      </div>
    </div>
  );
}

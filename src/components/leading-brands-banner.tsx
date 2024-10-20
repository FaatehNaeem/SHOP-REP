export default function LeadingBrandsBanner() {
  return (
    <div className="flex flex-col bg-secondary-foreground h-[183px] items-center justify-center">
      <p className="text-background text-lg font-bold">
        Trusted by Leading Brands
      </p>
      <div className="w-screen flex flex-row items-center justify-evenly mt-6 leading-brands-container">
        <img src="Brand 1.svg" alt="" />
        <img src="Brand 2.svg" alt="" />
        <img src="Brand 3.svg" alt="" />
        <img src="Brand 4.svg" alt="" />
        <img src="Brand 5.svg" alt="" />
        <img src="Brand 6.svg" alt="" />
      </div>
    </div>
  );
}

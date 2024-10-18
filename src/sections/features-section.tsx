import Features from "@/components/features";

export default function FeaturesSection() {
  return (
    <section>
      <div className="w-screen flex flex-col mt-16 justify-center items-center">
        <h1 className="text-[40px] font-bold">
          Transform Your Brand Communication
        </h1>
        <h1 className="text-[40px] font-bold">Across All Channels Instantly</h1>
      </div>
      <div className="flex flex-row">
        <Features />
        <Features />
        <Features />
        <Features />
      </div>
    </section>
  );
}

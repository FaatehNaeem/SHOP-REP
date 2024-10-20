import FeatureCard from "@/components/feature-card";

export default function Features() {
  return (
    //do flex 1 here // 
    <div className="w-screen flex flex-col mt-6 justify-center items-center feature-card-container">
      <FeatureCard
        heading="Guided Shopping"
        description=" Seamlessly Connect to Live Agents When It Matters Most"
      />

      <FeatureCard
        heading="Guided Shopping"
        description=" Seamlessly Connect to Live Agents When It Matters Most"
      />

      <FeatureCard
        heading="Guided Shopping"
        description=" Seamlessly Connect to Live Agents When It Matters Most"
      />
    </div>
  );
}

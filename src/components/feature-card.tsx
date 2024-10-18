interface featureCardInterface {
  heading: string;
  description: string;
}

export default function FeatureCard({ heading, description }: featureCardInterface) {
  return (
    <div className="w-[301px] h-[153px] flex flex-col justify-center items-center">
      <img src="guided-shopping.svg" alt="" width={"56px"} height={"56px"} />
      <p className="text-center text-[20px] font-bold">{heading} </p>
      <p className="text-center text-[16px] w-[250px]">{description}</p>
    </div>
  );
}

import Divider from "@/components/divider";
import Testimonial from "@/components/testimonial";

export default function ServicesSection() {
  return (
    <div className="w-screen flex flex-col items-center justify-center mt-12">
      <h1 className="text-center boost-sales-heading font-bold">
        Boost Sales and Enhance
      </h1>
      <h1 className="text-center boost-sales-heading font-bold">
        Customer Support Effortlessly
      </h1>
      <div className="w-[70%] text-center mt-4 para-container">
        <p>
          Struggling to manage customer queries and sales across multiple
          platforms? Our chatbot integrates seamlessly with web, chat,
        </p>
        <p>
          and phone, providing quick responses and personalized support to drive
          sales and improve customer experiences.
        </p>
      </div>

      <div className="w-[1240px] flex flex-row mt-12 justify-evenly items-center services-container">
        <div className="flex flex-col justify-center items-center w-[394px] services-card h-[213px]">
          <img src="headset.svg" alt="" width={"60px"} height={"60px"} />
          <h5 className="text-primary-foreground font-bold text-[20px] mt-2 text-center services-heading">
            24/7 Automated Customer Support
          </h5>
          <p className="text-center mt-2 text-zinc-500 text-[16px] w-[364px] services-para">
            Never miss a query with round-the-clock automated assistance,
            ensuring your customers receive immediate and accurate responses.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[394px] services-card h-[213px]">
          <img
            src="circular-connection.svg"
            alt=""
            width={"60px"}
            height={"60px"}
          />
          <h5 className="text-primary-foreground font-bold text-[20px] mt-2 services-heading">
            Omnichannel Integration
          </h5>
          <p className="text-center mt-2 text-zinc-500 text-[16px] w-[364px] services-para">
            Engage with customers on their preferred platform—be it web, chat,
            or phone—ensuring a consistent and unified experience.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[394px] services-card h-[213px]">
          <img src="signal.svg" alt="" width={"60px"} height={"60px"} />
          <h5 className="text-primary-foreground font-bold text-[20px] mt-2 services-heading">
            Increased Sales Conversions
          </h5>
          <p className="text-center mt-2 text-zinc-500 text-[16px] w-[364px] services-para">
            Drive sales by guiding customers through their buying journey with
            personalized recommendations and timely offers.
          </p>
        </div>
      </div>

      <Divider imgString="comma.svg" />

      <Testimonial
        text={
          "“Our sales increased by 30% in just three months thanks to this chatbot. It’s like having a full-time sales and support team available 24/7.”"
        }
        width="max-screen"
        paragraphWidth="max-screen"
      />
    </div>
  );
}

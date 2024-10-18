import Testimonial from "@/components/testimonial";

export default function TestimonialsSection() {
  return (
    <>
      <div className="w-screen flex flex-col justify-center items-center mt-8">
        <img src="comma.svg" alt="" width={"46px"} height={"39px"} />
        <h1 className="text-[40px] font-bold">
          Over 1,000 e-com stores trust Shop Rep with
        </h1>
        <h1 className="text-[40px] font-bold">
          delighting their customers and increading revenue{" "}
        </h1>
          </div>
          
          <div className="flex flex-row w-screen items-center justify-center gap-8 mt-8">
              
        <Testimonial
          text={
            "“Shoprep’s ability to seamlessly switch between platforms has revolutionized our customer service operations.”"
          }
          width="508px"
          paragraphWidth="508px"
        />
        <Testimonial
          text={
            "“Shoprep’s ability to seamlessly switch between platforms has revolutionized our customer service operations.”"
          }
          width="508px"
          paragraphWidth="508px"
        />
      </div>
          <div className="flex flex-row w-screen items-center justify-center gap-8 mt-8">
              
        <Testimonial
          text={
            "“Shoprep’s ability to seamlessly switch between platforms has revolutionized our customer service operations.”"
          }
          width="508px"
          paragraphWidth="508px"
        />
        <Testimonial
          text={
            "“Shoprep’s ability to seamlessly switch between platforms has revolutionized our customer service operations.”"
          }
          width="508px"
          paragraphWidth="508px"
        />
      </div>
    </>
  );
}

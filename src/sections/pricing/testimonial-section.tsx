import Divider from "@/components/divider";
import Testimonial from "@/components/testimonial";
export default function TestimonialSection() {
  return (
    <div className="w-screen h-[462px] flex flex-col items-center justify-center">
      <h1 className="text-primary-foreground font-bold text-[40px] w-[598px] text-center">
        Join Over 1,000 happy customer
      </h1>
      <p className="text-primary-foreground text-[16px]">
        Sit nec in enim bibendum morbi lectus nulla duis ornare. Donec hendrerit
        nisi sollicitudin orci sed porta id.
      </p>
      <Divider imgString="comma.svg" />

      <Testimonial
        text={
          "“Since adopting the AI chatbot, we've seen a 20% increase in conversions and a 50% reduction in response time.”"
        }
        width="618px"
        paragraphWidth="618px"
      />
    </div>
  );
}

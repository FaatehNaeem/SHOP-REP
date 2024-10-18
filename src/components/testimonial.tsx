export default function Testimonial() {
  return (
    <div className="flex flex-col w-screen justify-center items-center mt-2">
      <p className="w-[696px] text-center">
        “Our sales increased by 30% in just three months thanks to this chatbot.
        It&apos;s like having a full-time sales and support team available
        24/7.”
      </p>
      <img
        src="testimonial.svg"
        alt=""
        width={"40px"}
        height={"40px"}
        className="mt-2 rounded-md"
      />
      <p className="text-primary-foreground font-bold mt-2">
        Jane Doe, CEO at TechRetail
      </p>
    </div>
  );
}

interface TestimonialProps {
  text: string;
  width: string;
  paragraphWidth: string;
}

export default function Testimonial({
  text,
  width,
  paragraphWidth,
}: TestimonialProps) {
  return (
    <div
      className="flex flex-col justify-center items-center mt-2"
      style={{ width: width }}
    >
      <p className="text-center" style={{ width: paragraphWidth }}>
        {text}
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

export default function QuestionSection2() {
  return (
    <div className="w-screen flex-col items-center justify-center h-[400px]">
      <div className="w-[780px] mx-auto pt-12">
        <h1 className="text-[40px] text-center font-semibold text-primary-foreground">
          Have questions about our plans? Here are some common inquiries
        </h1>
      </div>
      {/* questions */}
      <div className="flex flex-row w-screen h-[163px] gap-8 items-center justify-center mt-8">
        <div className="flex flex-col w-[508px] h-[163px] justify-center items-center">
          <img src="1-question.svg" alt="" />
          <p className="text-primary-foreground font-semibold text-[20px]">
            What’s included in each plan?
          </p>
          <p className="text-center w-[508px] text-primary-foreground font-normal text-[18px] mt-2">
            Augue iaculis morbi platea pretium scelerisque gravida. Amet eros
            cursus porta congue in.
          </p>
        </div>
        {/* divider */}
        {/* <div className="bg-zinc-200 w-[1px] h-40 mt-8"></div> */}
        <div className="flex flex-col w-[508px] h-[163px] justify-center items-center">
          <img src="1-question.svg" alt="" />
          <p className="text-primary-foreground font-semibold text-[20px]">
            What’s included in each plan?
          </p>
          <p className="text-center w-[508px] text-primary-foreground font-normal text-[18px] mt-2">
            Augue iaculis morbi platea pretium scelerisque gravida. Amet eros
            cursus porta congue in.
          </p>
        </div>
      </div>
    </div>
  );
}

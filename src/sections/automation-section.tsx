export default function AutomationSection() {
  return (
    <div className="bg-background2 mt-8">
      {/* first section */}
      <div className="w-screen flex flex-row items-center pl-16 pt-6 image-heading-container">
        <img
          src="automation-section-icon.svg"
          alt=""
          width={"261px"}
          height={"261px"}
          className="automation-logo"
        />
        <div className="flex flex-col ml-8 items-center automation-titles-container">
          <h1 className="heading1">Experience the Full Potential of</h1>
          <h1 className="heading1">AI-Powered Support</h1>
        </div>
      </div>

      {/* second section */}
      <div className="flex flex-row items-center justify-center gap-8 mt-8 automation-sections">
        <div className="flex flex-col w-[357px] automation-subtitles-container">
          <h1 className="text-[34px] heading2">Automate</h1>
          <h1 className="text-[34px] heading2">Repetitive Tasks</h1>
          <p className="mt-4">
            Reduce workload and improve efficiency by automating routine
            queries, allowing your team to focus on more complex issues.
          </p>
        </div>
        <img
          src="automation-section-1.svg"
          alt=""
          width={"367px"}
          height={"237px"}
          className="automation-section-logo"
        />
      </div>

      {/* third section */}
      <div className="flex flex-row items-center justify-center gap-8 mt-8 automation-sections">
        <div className="flex-col w-[357px] automation-subtitles-container hidden display-headings">
          <h1 className="text-[34px] heading2">Automate</h1>
          <h1 className="text-[34px] heading2">Repetitive Tasks</h1>
          <p className="mt-4">
            Reduce workload and improve efficiency by automating routine
            queries, allowing your team to focus on more complex issues.
          </p>
        </div>

        <img
          src="automation-section-1.svg"
          alt=""
          width={"367px"}
          height={"237px"}
          className="automation-section-logo"
        />

        {/* hide this for 728px */}
        <div className="flex flex-col w-[357px] automation-subtitles-container hide-on-mobile">
          <h1 className="text-[34px] heading2">Personalize Customer</h1>
          <h1 className="text-[34px] heading2">Interactions</h1>
          <p className="mt-4">
            Utilize advanced AI to provide tailored responses and product
            recommendations, enhancing the customer experience.{" "}
          </p>
        </div>
      </div>

      {/* fourth section */}
      <div className="flex flex-row items-center justify-center gap-8 mt-8 automation-sections">
        <div className="flex flex-col w-[357px] automation-subtitles-container">
          <h1 className="text-[34px] heading2">Automate</h1>
          <h1 className="text-[34px] heading2">Repetitive Tasks</h1>
          <p className="mt-4">
            Reduce workload and improve efficiency by automating routine
            queries, allowing your team to focus on more complex issues.
          </p>
        </div>
        <img
          src="automation-section-1.svg"
          alt=""
          width={"367px"}
          height={"237px"}
          className="automation-section-logo"
        />
      </div>
    </div>
  );
}

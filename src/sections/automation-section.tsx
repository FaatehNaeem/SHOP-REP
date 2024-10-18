
export default function AutomationSection() {
    return (
      <div className="bg-background2 mt-8">
        <div className="w-screen flex flex-row items-center pl-16 pt-6">
          <img
            src="automation-section-icon.svg"
            alt=""
            width={"261px"}
            height={"261px"}
          />
          <div className="flex flex-col ml-8 items-center">
            <h1>Experience the Full Potential of</h1>
            <h1>AI-Powered Support</h1>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-8 mt-8">
          <div className="flex flex-col w-[357px]">
            <h1 className="text-[34px]">Automate</h1>
            <h1 className="text-[34px]">Repetitive Tasks</h1>
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
          />
        </div>

        <div className="flex flex-row items-center justify-center gap-8 mt-8">
          <img
            src="automation-section-1.svg"
            alt=""
            width={"367px"}
            height={"237px"}
          />
          <div className="flex flex-col w-[357px]">
            <h1 className="text-[34px]">Personalize Customer</h1>
            <h1 className="text-[34px]">Interactions</h1>
            <p className="mt-4">
              Utilize advanced AI to provide tailored responses and product
              recommendations, enhancing the customer experience.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center gap-8 mt-8">
          <div className="flex flex-col w-[357px]">
            <h1 className="text-[34px]">Automate</h1>
            <h1 className="text-[34px]">Repetitive Tasks</h1>
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
          />
        </div>
      </div>
    );
}


export default function Footer() {
  return (
    <footer>
      <nav className="flex flex-row gap-5 text-lg font-medium md:flex md:flex-row md:items-center md:gap-12 md:text-sm lg:gap-12 h-[386px] border-b footer-nav">
        {/* create an account */}
        <div className="flex flex-col w-[30%] gap-4 pl-6 h-52 ml-16 create-an-account">
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground font-bold text-[14px]"
          >
            Create an account
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            Answering Service for Small Business
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            Ai Phone answering
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            Contact Us
          </a>
        </div>

        {/* resources */}
        <div className="flex flex-col w-[30%] gap-4 pl-6 h-52 resources-container">
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground font-bold text-[14px]"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            Artificial Intelligence Receptionist
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground text-[14px]"
          >
            Help Center
          </a>
        </div>

        {/* footer icon */}
        <div className="flex flex-col gap-4 w-[30%] h-52 footer-logo-container">
          <img src="footer-icon.png" alt="" width={"261px"} height={"261px"} />
        </div>

        {/* social links  */}
        <div className="flex flex-col w-[30%] gap-4 h-52 social-links-container">
          <h3>SOCIAL</h3>

          <div className="flex flex-row gap-6 items-center mt-2">
            <a href="">
              <img
                src="social-icon-1.png"
                alt=""
                width={"20px"}
                height={"13px"}
              />
            </a>
            <a href="">
              <img
                src="social-icon-2.png"
                alt=""
                width={"20px"}
                height={"13px"}
              />
            </a>
            <a href="">
              <img
                src="social-icon-3.png"
                alt=""
                width={"20px"}
                height={"13px"}
              />
            </a>
            <a href="">
              <img
                src="social-icon-4.png"
                alt=""
                width={"20px"}
                height={"13px"}
              />
            </a>
            <a href="">
              <img
                src="social-icon-5.png"
                alt=""
                width={"20px"}
                height={"13px"}
              />
            </a>
          </div>
        </div>
      </nav>

      {/* copyrights */}
      <div className="flex flex-row w-screen items-center justify-around copyrights-container border-t h-[50px]">
        <div className="p-5 pl-12 all-rights-reserved">
          <h2 className="text-primary-foreground text-[14px]">
            All rights reserved.
          </h2>
        </div>

        <div className="flex justify-end items-center w-[68%] gap-4 terms-container">
          <h2 className="text-primary-foreground text-[14px]">Term of Use</h2>
          <h2 className="text-primary-foreground text-[14px]">
            Privacy Policy
          </h2>
        </div>

        <h2 className="text-primary-foreground hidden copyrights-text">
          All rights reserved
        </h2>
        <h2 className="text-primary-foreground hidden copyrights-text">
          Term of Use
        </h2>
        <h2 className="text-primary-foreground hidden copyrights-text">
          Privacy Policy
        </h2>
      </div>
    </footer>
  );
}

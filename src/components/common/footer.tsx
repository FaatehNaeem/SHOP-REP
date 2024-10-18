export default function Footer() {
  return (
    <footer>
      <nav className="hidden flex-row gap-12 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-12 h-[386px] border-b">
        {/* create an account */}
        <div className="flex flex-col w-[30%] gap-4 pl-6 h-52">
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground font-bold"
          >
            Create an account
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            Answering Service for Small Business
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            Ai Phone answering
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            Contact Us
          </a>
        </div>

        {/* resources */}
        <div className="flex flex-col w-[30%] gap-4 pl-6 h-52">
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground font-bold"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            Artificial Intelligence Receptionist
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            Blog
          </a>
          <a
            href="#"
            className="text-primary-foreground transition-colors hover:text-foreground"
          >
            Help Center
          </a>
        </div>

        {/* footer icon */}
        <div className="flex flex-col w-[30%] gap-4 h-52">
          <img src="footer-icon.png" alt="" width={"261px"} height={"261px"} />
        </div>

        {/* social links  */}
        <div className="flex flex-col w-[30%] gap-4 h-52">
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
      <div className="flex flex-row w-[98vw]">
        <div className="p-5 pl-6">
          <h2 className="text-primary-foreground">All rights reserved</h2>
        </div>

        <div className="flex justify-end items-center w-[80%] gap-4">
          <h2 className="text-primary-foreground">Term of Use</h2>
          <h2 className="text-primary-foreground">Privacy Policy</h2>
        </div>
      </div>
    </footer>
  );
}

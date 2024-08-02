export default function Footer() {
  return (
    <div className="mt-[15rem] relative">
      <footer className=" rounded-lg shadow">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
          <div className="sm:flex sm:items-center sm:justify-between z-50">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                © Business Club NIT Agartala
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="https://www.linkedin.com/company/business-club-nit-agartala/" className="hover:underline me-4 md:me-6">
                  LinkedIn
                </a>
                
              </li>
              <li>
                <a href="https://x.com/bclubnita" className="hover:underline me-4 md:me-6">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/bclub.nita?igsh=MTV0NDF2OTBzODdsMw==" className="hover:underline me-4 md:me-6">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="custom-shape-divider-bottom-1717277712">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
              className="shape-fill"
            ></path>
          </svg>
          <h1></h1>
        </div> */}
      </footer>
    </div>
  );
}

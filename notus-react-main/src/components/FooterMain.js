import Logo from "../assets/img/logo.png";

const FooterMain = () => {
  return (
    <footer className="p-4 flex justify-center bg-white flex-wrap sm:p-6 dark:bg-gray-900 text-right">
      <div className="md:flex md:justify-center flex-wrap">
        {/* <div className="mb-6 md:mb-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src={Logo}
              className="mr-3 bg-darkBlue-700  h-8"
              alt="FlowBite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              فناوری هوشمند داتار
            </span>
          </a>
        </div> */}
        <div className="flex flex-wrap flex-row-reverse g-5 justify-between">
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
              شبکه و زیرساخت
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="">
                <span className="hover:underline">
                  خدمات مشاوره و ارائه راهکار
                </span>
              </li>
              <li>
                <span className="hover:underline">خدمات Passive شبکه</span>
              </li>
              <li>
                <span className="hover:underline">خدمات ارتباط بین دفاتر و شعب</span>
              </li>
              <li>
                <span className="hover:underline">خدمات ارتباط بین دفاتر و شعب</span>
              </li>
              <li>
                <span className="hover:underline">
                  مجازی سازی شبکه های کامپیوتری{" "}
                </span>
              </li>
              <li>
                <span className="hover:underline">
                  نگهداری و پشتیبانی شبکه های کامپیوتری{" "}
                </span>
              </li>
              <li>
                <span className="hover:underline">مجازی سازی شبکه های کامپیوتری</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold  text-gray-900 uppercase dark:text-white">
              نرم افزار و پایگاه داده{" "}
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="">
                <span className="hover:underline ">Echo Report XP</span>
              </li>
              <li>
                <span className="hover:underline">Great Score</span>
              </li>
              <li>
                <span className="hover:underline">خدمات تجمیع و آنالیز داده</span>
              </li>
              <li>
                <span className="hover:underline">امنیت نرم افزار</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white">
              تماس با ما
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <span className="hover:underline">تلفن: 91692440 - 021</span>
              </li>
              <li>
                <span className="hover:underline">info@dotrco.com :ایمیل</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    </footer>
  );
};

export default FooterMain;

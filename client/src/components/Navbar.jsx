import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import navpic from "../initpages/invest/images/navpic.png";
import assetbg from "../assets/images/assetbg.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import apple from "../assets/images/apple-badge.svg";
import google from "../assets/images/google-badge.svg";
export const InvestMenu = () => {
  return (
    <div className="absolute  w-full left-0 right-0 top-full z-5 bg-white">
      <div className="grid grid-cols-4 grid-rows-4 w-[90%] h-[300px] mx-auto gap-4 my-10">
        <Link
          to={"/invest/stock"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2 "
        >
          Stock
        </Link>
        <Link
          to={"/invest/bond-account"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Bond Account
          <span className="ml-2 text-[12px] bg-icon px-2 rounded-xl text-black">
            6.5% yield
          </span>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Investment Plans
        </Link>
        <Link
          to={"/invest/options"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Options
        </Link>
        <Link
          to={"/invest/hyca"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          High-Yield Cash Account
          <span className="ml-2 text-[12px] bg-icon px-2 rounded-xl text-black">
            4.1% APY
          </span>
        </Link>
        <Link
          to={"/invest/crypto"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Crypto
        </Link>
        <Link
          to={"/invest/margin"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Margin
          <span className="ml-2 text-sm bg-primary px-2 rounded-xl text-white">
            New
          </span>
        </Link>

        <Link
          to={"/invest/treasuries"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Treasuries
        </Link>
        <Link
          to={"/invest/etf"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          ETFs
        </Link>
        <Link
          to={"/invest/bonds"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Bonds
        </Link>
        <Link
          to={"/invest/retirement"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          Retirement (IRAs)
          <span className="ml-2 text-sm bg-primary px-2 rounded-xl text-white">
            New
          </span>
        </Link>
        <Link
          to={"/invest/stock"}
          className="text-lg  col-start-4 row-span-full"
        >
          <div className="flex flex-col p-4 bg-slate-100 ">
            <span className="text-sm text-text">start investing today</span>
            <img src={navpic} alt="" className="w-f" />
            <span className="text-sm font-bold py-2">Bond Account</span>
            <span className="text-sm py-2 text-slate-700 ">
              Discover a new way to invest in bonds and earn interest payments.
              Learn more
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export const ResourceMenu = () => {
  return (
    <div className="absolute  w-full left-0 right-0 top-full z-5 bg-white">
      <div className="grid grid-cols-4 grid-rows-4 w-[90%] h-[300px] mx-auto gap-4 my-10">
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Options Rebate FAQ</span>
            <p className="text-text text-sm">
              See how the Options Trading Rebate Program works
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Transfer Your Account</span>
            <p className="text-text text-sm">
              Get up to $10,000 when you transfer your investment portfolio to
              Public.
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">High Yield Savings Calculator.</span>
            <p className="text-text text-sm">
              Compare our competitive rates and plan your financial growth
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Bond Screener</span>
            <p className="text-text text-sm">
              Explore over 10,000 bonds with our advanced screening tool.
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Learn</span>
            <p className="text-text text-sm">
              Browse our latest articles and investing resources.
            </p>
          </div>
        </Link>

        <Link
          to={"/invest/stock"}
          className="text-lg  col-start-4 row-span-full"
        >
          <div className="flex flex-col p-4 bg-slate-100 ">
            <span className="text-sm text-text">start investing today</span>
            <img src={navpic} alt="" className="w-f" />
            <span className="text-sm font-bold py-2">Bond Account</span>
            <span className="text-sm py-2 text-slate-700 ">
              Discover a new way to invest in bonds and earn interest payments.
              Learn more
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export const Companymenu = () => {
  return (
    <div className="absolute  w-full left-0 right-0 top-full z-5 bg-white">
      <div className="grid grid-cols-4 grid-rows-4 w-[90%] h-[300px] mx-auto gap-4 my-10">
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">About</span>
            <p className="text-text text-sm">
              Discover how we're making the markets work for all investors.
              Newsroom Access our media kit and a collection of our latest news.
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Have questions?</span>
            <p className="text-text text-sm">
              Reach out to us at support@multicoin.com — we're here to help.
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Media.</span>
            <p className="text-text text-sm">
              Market news, live commentary, and analysis from industry experts
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Bond Screener</span>
            <p className="text-text text-sm">
              Explore over 10,000 bonds with our advanced screening tool.
            </p>
          </div>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-lg col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="text-base">Learn</span>
            <p className="text-text text-sm">
              Browse our latest articles and investing resources.
            </p>
          </div>
        </Link>

        <Link
          to={"/invest/stock"}
          className="text-lg  col-start-4 row-span-full"
        >
          <div className="flex flex-col p-4 bg-slate-100 ">
            <span className="text-sm text-text">start investing today</span>
            <img src={navpic} alt="" className="w-f" />
            <span className="text-sm font-bold py-2">Bond Account</span>
            <span className="text-sm py-2 text-slate-700 ">
              Discover a new way to invest in bonds and earn interest payments.
              Learn more
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export const Premiummenu = () => {
  return (
    <div className="absolute  w-full left-0 right-0 top-full z-5 bg-white">
      <div className="grid grid-cols-2 w-[90%] h-[300px] gap-4 my-10">
        <Link to={"/invest/stock"} className="text-xl">
          <div className="flex flex-col p-4">
            <img src={assetbg} alt="" className="w-2/3 h-2/3 object-cover" />
          </div>
        </Link>

        <Link
          to={"/invest/investment"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          <div className="hover:bg-slate-50">
            <span className="block text-sm text-text font-semibold">
              Multicoin Premium{" "}
            </span>
            <span className="text-base font-semibold">
              Level up your account{" "}
            </span>
            <p className="text-text text-sm">
              Unlock enhanced trading features, white-glove customer service,
              advanced data and analysis, and portfolio management tools.
            </p>
            <div className="flex gap-4 items-center">
              <button className="cursor-pointer text-white md:my-8 bg-primary py-4 rounded-2xl hover:bg-primary-very-light transition duration-300 w-[140px] text-lg  font-semibold ">
                Get started
              </button>
              <Link to={"/"}>
                <div className="flex   items-center gap-2">
                  <span className="text-primary">Learn more</span>
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
const Navbar = ({ megaOn = "text-black", megaOff = "text-head" }) => {
  const [hamburger, setHamburger] = useState(false);
  const [megaMenu, setMegaMenu] = useState({
    state: false,
    name: "",
  });

  const handleHamBurgerMenu = () => {
    setHamburger((prev) => !prev);
  };
  useEffect(() => {
    if (hamburger) {
      document.body.classList.add("overflow-hidden");
      console.log("added");
    } else {
      document.body.classList.remove("overflow-hidden");
      console.log("removed");
    }
  }, [hamburger]);

  return (
    <div className="sticky top-0 w-full bg-white z-1000">
      <nav
        className={`container-all  max-w-[1420px] sticky top-0 flex justify-between items-center pb-5 pt-2  text-base sm:text-lg z-1000 bg-white text-black px-4 ${
          megaMenu.state ? megaOn : megaOff
        }`}
        onMouseLeave={() => setMegaMenu({ state: false, name: "" })}
      >
        <Link to={"/"}>
          <div className="flex items-center gap-2">
            <img src="/logo1.jpg" alt="" className="rounded-lg w-8 h-8" />
            <span className="text-lg">Multicoin Capital</span>
          </div>
        </Link>

        <div className="hidden lg:flex space-x-4 items-center">
          <ul className={`flex space-x-10  z-10 ${megaOff}`}>
            {/* <Link
              onMouseEnter={() => setMegaMenu({ state: true, name: "invest" })}
              to={"/invest/stock"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              Stock
              {megaMenu && megaMenu.name === "invest" ? <InvestMenu /> : ""}
            </Link>

            <Link
              onMouseEnter={() =>
                setMegaMenu({ state: true, name: "resources" })
              }
              to={"/invest/crypto"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              Crypto
              {megaMenu && megaMenu.name === "resources" ? (
                <ResourceMenu />
              ) : (
                ""
              )}
            </Link>

            <Link
              onMouseEnter={() => setMegaMenu({ state: true, name: "company" })}
              to={"/invest/etf"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              ETF
              {megaMenu && megaMenu.name === "company" ? <Companymenu /> : ""}
            </Link>

            <Link
              onMouseEnter={() => setMegaMenu({ state: true, name: "premium" })}
              to={"/"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              Premium
              {megaMenu && megaMenu.name === "premium" ? <Premiummenu /> : ""}
            </Link> 
            */}
            <Link
              to={"/"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              Home
            </Link>
            <Link
              to={"/invest/stock"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              Stocks
            </Link>
            <Link
              to={"/invest/crypto"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              Crypto
            </Link>

            {/* <Link
              to={"/invest/etf"}
              className={` hover:bg-slate-100 transition duration-300 p-3 ${
                megaMenu.state ? megaOn : megaOff
              }`}
            >
              ETFs
            </Link> */}
          </ul>
          <Link
            to={"/sign-in"}
            className={`border-1 border-text  px-5 py-2 rounded-lg cursor-pointer transition-all duration-500 ${
              megaMenu.state ? megaOn : megaOff
            }`}
          >
            <span>Sign In</span>
          </Link>
          <Link to={"/sign-up"}>
            <div className="bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2 rounded-lg hover:bg-primary-dark cursor-pointer transition-all duration-500">
              <span>Get Started</span>
            </div>
          </Link>
        </div>
        <div className=" lg:hidden " onClick={handleHamBurgerMenu}>
          {hamburger ? (
            <IoClose className="text-2xl" />
          ) : (
            <RxHamburgerMenu className="text-2xl" />
          )}
        </div>

        {/* mobile menu */}
        {hamburger && (
          <div className="absolute bg-white w-[100%] top-10 right-0 left-0 lg:hidden h-[100vh] z-400 ">
            <ul className="text-center">
              <Link
                to={"/"}
                onClick={() => {
                  setHamburger(false); // triggers effect → removes overflow-hidden
                }}
                className={` flex justify-between h-10 items-center py-6 text-primary `}
              >
                <li className="text-lg">Home</li>
                {/* <MdKeyboardArrowDown className="text-2xl" /> */}
              </Link>

              <Link
                to={"/invest/stock"}
                onClick={() => {
                  setHamburger(false); // triggers effect → removes overflow-hidden
                }}
                className={` flex justify-between h-10 items-center text-primary`}
              >
                <li className="text-lg">Stocks</li>
                {/* <MdKeyboardArrowDown className="text-2xl" /> */}
              </Link>

              <Link
                to={"/invest/crypto"}
                onClick={() => {
                  setHamburger(false); // triggers effect → removes overflow-hidden
                }}
                className={` flex justify-between h-10 items-center text-primary`}
              >
                <li className="text-lg">Crypto</li>
                {/* <MdKeyboardArrowDown className="text-2xl" /> */}
              </Link>
            </ul>
            <div className="flex flex-col gap-4 w-[80%] mx-auto pt-8">
              <div className="buttons flex gap-4 items-center">
                <button className="text-black bg-white p-2 rounded-lg w-35 font-bold text-lg border-1 border-slate-200 custom-shadow">
                  Sign in
                </button>
                <button className="text-white bg-primary p-2 rounded-lg w-35 font-bold text-lg custom-shadow">
                  Get started
                </button>
              </div>

              <div className="apps p-4 flex  gap-12 items-center">
                <img src={apple} alt="" className="w-[120px]" />
                <img src={google} alt="" className="w-[120px]" />
              </div>
            </div>
          </div>
        )}

        {hamburger ? (
          ""
        ) : (
          <div className="lg:hidden fixed bg-slate-50 w-full bottom-5 rounded-lg px-4 py-2 left-0 shadow-sm custom-shadow">
            <Link to={"/sign-up"} className="flex justify-between items-center">
              <span className="text-black text-sm">Start Investing now</span>
              <button className="text-white bg-primary p-2 rounded-lg w-35 font-bold text-lg">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

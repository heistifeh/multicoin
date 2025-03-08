import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import navpic from "../initpages/invest/images/navpic.png";
export const InvestMenu = () => {
  return (
    <div className="absolute  w-full left-0 right-0 top-full z-5 bg-white">
      <div className="grid grid-cols-4 grid-rows-4 w-[90%] mx-auto gap-4 my-10">
        <Link
          to={"/invest/stock"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2 "
        >
          Stock
        </Link>
        <Link
          to={"/invest/bond-account"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Bond Account
          <span className="ml-2 text-[12px] bg-icon px-2 rounded-xl text-black">
            6.5% yield
          </span>
        </Link>
        <Link
          to={"/invest/investment"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Investment Plans
        </Link>
        <Link
          to={"/invest/options"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Options
        </Link>
        <Link
          to={"/invest/hyca"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          High-Yield Cash Account
          <span className="ml-2 text-[12px] bg-icon px-2 rounded-xl text-black">
            4.1% APY
          </span>
        </Link>
        <Link
          to={"/invest/crypto"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Crypto
        </Link>
        <Link
          to={"/invest/margin"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Margin
          <span className="ml-2 text-sm bg-primary px-2 rounded-xl text-white">
            New
          </span>
        </Link>

        <Link
          to={"/invest/treasuries"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Treasuries
        </Link>
        <Link
          to={"/invest/etf"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          ETFs
        </Link>
        <Link
          to={"/invest/bonds"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Bonds
        </Link>
        <Link
          to={"/invest/retirement"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
        >
          Retirement (IRAs)
          <span className="ml-2 text-sm bg-primary px-2 rounded-xl text-white">
            New
          </span>
        </Link>
        <Link
          to={"/invest/stock"}
          className="text-xl  col-start-4 row-span-full"
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
      <div className="grid grid-cols-4 grid-rows-4 w-[90%] mx-auto gap-4 my-10">
        <Link
          to={"/invest/investment"}
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
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
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
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
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
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
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
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
          className="text-xl col-span-1  hover:bg-slate-100 p-2"
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
          className="text-xl  col-start-4 row-span-full"
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
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const [megaMenu, setMegaMenu] = useState({
    state: false,
    name: "",
  });

  const handleHamBurgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    
    <nav
      className="relative flex justify-between items-center pb-5   text-head text-base sm:text-lg font-semibold z-50 "
      onMouseLeave={() => setMegaMenu({ state: false, name: "" })}
    >
     
      <Link to={"/"}>
        <div>
          <img src="/logo1.jpg" alt="" className="rounded-lg w-8 h-8" />
        </div>
      </Link>

      <div className="hidden lg:flex space-x-5 items-center">
        <ul className="flex space-x-10  z-10">
          <Link
            onMouseEnter={() => setMegaMenu({ state: true, name: "invest" })}
            to={"/"}
            className=" hover:bg-slate-100 transition duration-300 p-3"
          >
            Invest
            {megaMenu && megaMenu.name === "invest" ? <InvestMenu /> : ""}
          </Link>
          <Link
            onMouseEnter={() => setMegaMenu({ state: true, name: "resources" })}
            to={"/"}
            className="hover:bg-slate-100 transition duration-300 p-3"
          >
            Resources
            {megaMenu && megaMenu.name === "resources" ? <ResourceMenu /> : ""}
          </Link>
          <Link
            to={"/"}
            className="hover:bg-slate-100 transition duration-300 p-3"
          >
            Company
          </Link>
          <Link to={"/"} className="hover:bg-slate-100 p-3">
            Premium
          </Link>
        </ul>
        <div className="border-1 border-text  px-5 py-2 rounded-lg cursor-pointer transition-all duration-500">
          <span>Sign In</span>
        </div>
        <div className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark cursor-pointer transition-all duration-500">
          <span>Get Started</span>
        </div>
      </div>
      <div className="lg:hidden " onClick={handleHamBurgerMenu}>
        {hamburger ? (
          <IoClose className="text-2xl" />
        ) : (
          <RxHamburgerMenu className="text-2xl" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

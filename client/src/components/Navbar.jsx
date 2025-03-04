import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleHamBurgerMenu = () => {
    setHamburger(!hamburger);
  };
  return (
    <nav className="flex justify-between items-center py-5   text-head text-base sm:text-lg font-semibold ">
      <div>
        <img src="./logo1.jpg" alt="" className="rounded-lg w-8 h-8" />
      </div>
      <div className="hidden lg:flex space-x-5 items-center ">
        <ul className="flex space-x-10">
          <Link
            to={"/"}
            className="hover:bg-slate-100 transition duration-300 p-3"
          >
            Invest
          </Link>
          <Link
            to={"/"}
            className="hover:bg-slate-100 transition duration-300 p-3"
          >
            Resources
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

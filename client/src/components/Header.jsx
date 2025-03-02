import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [HamburgerMenu, setHamburgerMenu] = useState(false);

  const handleHamburger = () => {
    setHamburgerMenu(!HamburgerMenu);
  };
  return (
    <header className="shadow-lg bg-nav overflow-hidden position-relative">
      <nav className="flex items-center justify-between flex-wrap p-3 text-white font-semibold max-w-6xl w-[90%] mx-auto ">
        <div className="logo">
          <Link className="" to={"/"}>
            <img src="/logo.png" alt="multicoin_logo" />
          </Link>
        </div>
        <ul className="flex gap-4 w-2/5 justify-between items-center ">
          <li>
            <Link
              className="hidden md:inline hover:opacity-70 hover:underline hover:underline-offset-8 transition duration-500"
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hidden md:inline hover:opacity-70 hover:underline hover:underline-offset-8 transition duration-500"
              to={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hidden md:inline hover:opacity-70 hover:underline hover:underline-offset-8 transition duration-500"
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              className="hidden md:inline text-primary border-1 border-primary transition duration-500 p-4 hover:bg-secondary hover:text-white"
              to={"/sign-in"}
            >
              Sign In
            </Link>
          </li>
        </ul>
        <RxHamburgerMenu
          className="md:hidden text-3xl cursor-pointer font-bold"
          onClick={handleHamburger}
        />
      </nav>
      {/* <div className="cursor-pointer font-bold bg-footer position-absolute items-center justify-center top-0">
        <div className="">
          <RxHamburgerMenu
            className="md:hidden text-3xl cursor-pointer font-bold"
            onClick={handleHamburger}
          />
        </div>
      </div> */}
    </header>
  );
}

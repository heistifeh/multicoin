import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import google from "../../assets/images/google-badge.svg";
import apple from "../../assets/images/apple-badge.svg";
const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-20">
        <div className="flex flex-col gap-4">
          <span className=" hover:text-primary-very-light cursor-pointer  text-lg font-bold text-black">
            Products
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Stocks
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            ETFs
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Crypto
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Options
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Margin
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Bonds
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Treasuries
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            High-Yield Cash Account
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Premium
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Alpha
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-lg font-bold ">
            Resources
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            About Us
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Learn
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Careers
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Public’s Fee Schedule
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base font-bold ">
            Quick Links
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Investment Themes
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Investing Glossary
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Fixed Income Glossary
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Options Trading Glossary
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Transfer your Portfolio
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Treasury Yield Curve
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            High Yield Savings Calculator
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base font-bold ">
            Contact Us
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            Help
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            FAQ
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            support@public.com
          </span>
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
            press@public.com
          </span>
          <div className="gap-4 flex my-2 ">
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              <RiTwitterXLine className="text-2xl" />
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              <IoLogoInstagram className="text-2xl" />
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              <FaFacebookF className="text-2xl" />
            </span>
          </div>
          <div className="gap-4 flex my-2 ">
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              <FaLinkedinIn className="text-2xl" />
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              <RiTiktokFill className="text-2xl" />
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              <FaMedium className="text-2xl" />
            </span>
          </div>

          <span className=" my-2">
            <img src={google} alt="" className="w-40 object-cover" />
          </span>
          <span className=" my-2">
            <img src={apple} alt="" className="w-40 object-cover" />
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className=" hover:text-primary-very-light cursor-pointer text-black text-base font-bold ">
            <img src="./logo1.jpg" alt="" className="rounded-xl" />
          </span>
          <span className=" cursor-pointer text-black text-base">
            Check the background of this firm on{" "}
            <span className="text-primary-very-light hover:underline text-sm">
              FINRAs BrokerCheck.
            </span>
          </span>
          <span className=" text-primary-very-light cursor-pointer hover:underline text-sm">
            Open to the Public Investing, Inc. Customer Relationship Summary.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

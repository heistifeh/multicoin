import React from "react";
import Navbar from "../../components/Navbar";
import star from "../../assets/images/star.png";
import herobg from "../../assets/images/herobg.png";
import { MdArrowOutward } from "react-icons/md";
import { BiSolidPieChart } from "react-icons/bi";
import { TbArrowsUp } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import "../../components/animate.css";
const Header = () => {
  return (
    <div className="">
     
      <div className="container-inner max-w-[1420px] mx-auto">
        <div className="flex  h-60 items-center font-semi-bold text-4xl md:text-6xl text-black ">
          <h1 className="lg:w-2/3">
            Investing for those who take it seriously
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex justify-between ">
          <div className="flex flex-col md:flex-row gap-4 md:pb-8 lg:pb-0 pb-4">
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <BiSolidPieChart className="text-primary" />
              <span className="text-black"> Multi-asset investing</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <TbArrowsUp className="text-primary" />
              <span className="text-black"> Industry-leading yields</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <FaHeart className="text-primary" />
              <span className="text-black"> Trusted by millions</span>
            </div>
          </div>
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden w-45">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary 
                  animate-gradient"
            ></div>
            <div className="flex items-center relative z-10 text-white px-5 py-2 transition-all duration-500 justify-center gap-2">
              <span>Get Started</span>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>
      <div className="hero-bg my-10 rounded-lg overflow-hidden">
        <img src={herobg} alt="" className="w-" />
      </div>
    </div>
  );
};

export default Header;

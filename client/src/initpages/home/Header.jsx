import React from "react";
import Navbar from "../../components/Navbar";
import star from "../../assets/images/star.png";
import herobg from "../../assets/images/herobg.png";
import { MdArrowOutward } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <Navbar />
      <hero>
        <div className="flex  h-60 items-center font-semi-bold text-5xl md:6xl text-black">
          <h1 className="lg:w-1/2">
            Investing for those who take it seriously
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex justify-between ">
          <div className="flex flex-col md:flex-row gap-4 md:pb-8 lg:pb-0 pb-4">
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <img src={star} alt="" className="w-4 h-4" />
              <span className=""> Multi-asset investing</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <img src={star} alt="" className="w-4 h-4" />
              <span className=""> Industry-leading yields</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <img src={star} alt="" className="w-4 h-4" />
              <span className=""> Trusted by millions</span>
            </div>
          </div>

          <div className="flex items-center bg-primary-dark text-white rounded-2xl p-2 w-45 justify-center cursor-pointer gap-2 hover:bg-primary transition duration-300">
            <span>Get Started</span>
            <MdArrowOutward />
          </div>
        </div>

        <div className="hero-bg my-10 rounded-lg overflow-hidden">
          <img src={herobg} alt="" className="w-" />
        </div>
      </hero>
    </div>
  );
};

export default Header;

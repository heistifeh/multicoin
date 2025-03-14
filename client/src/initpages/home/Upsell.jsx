import React from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { FaFlagUsa } from "react-icons/fa";
import care from "../../assets/images/care.png";
import herobg from "../../assets/images/herobg.png";
import usa from "../../assets/images/usa.svg";

import project7 from "../../assets/images/project-7.jpg";
const Upsell = () => {
  return (
    <div>
      <div className="max-w-[1040px] w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 ">
        <div className="leading  md:w-1/2 flex flex-col justify-center text-center md:text-left md:justify-start">
          <span className="text-4xl md:text-6xl text-black">
            We’re here to help.
          </span>
          <span className="text-4xl md:text-6xl">Not upsell.</span>
          <div className="flex flex-row gap-4 justify-center items-center my-4 md:justify-start">
            <div className="flex flex-col gap-2 justify-center my-4">
              <img src={usa} className="w-8 h-6 mx-auto" alt="" />
              <span className="text-black">US-BASED</span>
            </div>
            <div className="flex flex-col gap-2 justify-center my-4">
              <FaCheck className="text-black mx-auto text-2xl" />
              <span className="text-black">REGISTERED</span>
            </div>
            <div className="flex flex-col gap-2 justify-center my-4">
              <IoIosHeart className="text-red-500 mx-auto text-2xl" />
              <span className="text-black">ACTUALLY CARES</span>
            </div>
          </div>

          <span className="text-lg  my-4 w-2/3 md:w-full mx-auto sm:text-center md:text-left md:mx-0">
            Our <span className="text-black font-bold">award-winning</span>{" "}
            customer support team of financial representatives is here to help
            you with everything from transferring a portfolio to understanding
            your account features.
          </span>
        </div>
        <div className="img">
          <img src={project7} alt="" />
        </div>
      </div>

      {/* big image */}
      <div className="bg-black my-0">
        <hr className="text-slate-400" />
        <div className="flex flex-col items-center justify-center mb-0 pt-40 pb-4 bg-black w-[90%] mx-auto text-center">
          <span className="text-4xl md:text-6xl text-white">
            Fund your account in
          </span>
          <span className="text-4xl md:text-6xl text-primary-very-light">
            5 minutes or less
          </span>
          <div className="flex items-center justify-center md:w-fit ">
            <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold custom-shadow-dark ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div
          className="relative img-alpha mt-0 max-w-[1000px] mx-auto"
          style={{ width: "100%" }}
        >
          <img src={herobg} alt="" className="h-[100%] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Upsell;

import React from "react";
import hero from "../../assets/images/hero-stocks.png";
import stock2 from "../../assets/images/guide-stock-2.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { RiPieChart2Fill } from "react-icons/ri";
import { TbArrowsUpLeft } from "react-icons/tb";
import star from "../../assets/images/star.png";
import light from "../../assets/images/light.png";
import { CiCircleInfo } from "react-icons/ci";
const Alpha = () => {
  return (
    <div>
      <div className="blocks flex rounded-2xl flex-col md:flex-row justify-around gap-4  my-16 bg-slate-100">
        <div className="key-moments flex flex-col hover:translate-y-2 duration-300">
          <div className="flex gap-2 pt-4 items-center">
            <img src={star} alt="" className="w-6 h-6" />
            <p className="text-black text-2xl md:3xl ">alpha</p>
          </div>
          <span className="text-4xl md:5xl  mt-4">AI for investors</span>
          <span className="text-4xl md:5xl text-black">
            Investment research and proactive insights
          </span>
          <div className="my-6">
            <div className="flex items-center gap-2 my-4 text-black">
              <RiPieChart2Fill className="text-icon" />
              <p>Ask any question about any stock.</p>
            </div>
            <div className="flex items-center gap-2 my-4 text-black">
              <TbArrowsUpLeft className="text-icon" />
              <p>Receive earnings call breakdowns the minute they hang up.</p>
            </div>
            <div className="flex items-center gap-2 my-4 text-black">
              <FaHeart className="text-icon" />
              <p>Know why a stock is moving—not just that it is.</p>
            </div>
          </div>
          <div className="flex gap-2 items-center my-6 md:mt-4 hover:bg-slate-100 w-[fit-content] p-2 rounded-xl border-1 border-slate-100 text-sm transition duration-300">
            <CiCircleInfo />
            <span>Alpha Disclosures</span>
          </div>
        </div>
        <div className="key-moments text-center flex flex-col  hover:translate-y-2 duration-300  ">
          <div className="img mb-8">
            <img src={hero} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
      </div>

      {/* next section on Alpha */}

      <div className="img-alpha" style={{ width: "100%" }}>
        <img src={light} alt="" />
      </div>
    </div>
  );
};

export default Alpha;

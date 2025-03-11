import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import stock1 from "../../assets/images/guide-stock-1.png";
import stock2 from "../../assets/images/guide-stock-2.png";
import green from "../../assets/images/green-icon.png";

import project4 from "../../assets/images/project-4.jpg";
import project5 from "../../assets/images/project-5.jpg";
const Features = () => {
  return (
    <div className="my-20">
      <div className="leading text-center text-2xl md:4xl">
        <p className="text-black">Five nerdy features you will love.</p>
        <p>(Discover many more in the app.)</p>
      </div>
      <div className="blocks flex rounded-2xl overflow-hidden flex-col md:flex-row justify-around gap-4  my-16 ">
        <div className="key-moments text-center flex flex-col hover:translate-y-2 duration-300 bg-slate-100 ">
          <p className="text-black text-2xl md:3xl pt-4 ">Key Moments</p>
          <span className="w-[90%] mx-auto">
            Discover the reasons behind every major stock price movement with
            detailed, AI-generated summaries embedded right on the asset’s
            performance chart.
          </span>
          <div className="learn-more flex items-center justify-center text-primary  gap-2 p-2 hover:underline-offset-1">
            <span>Learn more</span>
            <FaArrowRight />
          </div>
          <div className="img mb-8">
            <img src={stock1} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
        <div className="key-moments text-center flex flex-col  hover:translate-y-2 duration-300 bg-slate-100 ">
          <p className="text-black text-2xl md:3xl mt-8 md:mt-0  pt-4">
            Income Hub
          </p>
          <span className="w-[90%] mx-auto">
            View a monthly breakdown of your earnings from every
            income-generating asset you own. Plus, see a forecast of your
            earnings for the year ahead.
          </span>
          <div className="learn-more flex items-center justify-center text-primary  gap-2 p-2 hover:underline-offset-1">
            <span>Learn more</span>
            <FaArrowRight />
          </div>
          <div className="img mb-8">
            <img src={project4} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
      </div>
      <div className="blocks flex rounded-2xl overflow-hidden flex-col md:flex-row justify-center  gap-4  my-16 ">
        <div className="key-moments text-center flex flex-col hover:translate-y-2 duration-300 bg-slate-100 w-full">
          <p className="text-black text-2xl md:3xl pt-4 ">Queue</p>
          <span className="w-[90%] mx-auto">
            Gain more investing control with a tool that lets you plan, edit,
            and execute multiple trades simultaneously, all with real-time price
            updates.
          </span>
          <div className="learn-more flex items-center justify-center text-primary  gap-2 p-2 hover:underline-offset-1">
            <span>Learn more</span>
            <FaArrowRight />
          </div>
          <div className="img mb-8">
            <img src={project5} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
      </div>
      <div className="blocks flex rounded-2xl overflow-hidden flex-col md:flex-row justify-around gap-4  my-16 ">
        <div className="key-moments text-center flex flex-col hover:translate-y-2 duration-300 bg-slate-100 ">
          <p className="text-black text-2xl md:3xl pt-4 ">Earnings Hub</p>
          <span className="w-[90%] mx-auto">
            Access AI-generated earnings recaps, company KPIs, investor
            presentations, and the actual audio of the earnings call—all without
            leaving Public.
          </span>
          <div className="learn-more flex items-center justify-center text-primary  gap-2 p-2 hover:underline-offset-1">
            <span>Learn more</span>
            <FaArrowRight />
          </div>
          <div className="img mb-8">
            <img src={stock1} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
        <div className="key-moments text-center flex flex-col  hover:translate-y-2 duration-300 bg-slate-100 ">
          <p className="text-black text-2xl md:3xl mt-8 md:mt-0  pt-4">
            Investment Plans
          </p>
          <span className="w-[90%] mx-auto">
            Schedule recurring investments into personalized Investment Plans
            with up to 20 stocks, ETFs, and cryptos, and grow your portfolio
            automatically.
          </span>
          <div className="learn-more flex items-center justify-center text-primary  gap-2 p-2 hover:underline-offset-1">
            <span>Learn more</span>
            <FaArrowRight />
          </div>
          <div className="img mb-8">
            <img src={stock2} alt="" className="w-1/2 mx-auto" />
          </div>
        </div>
      </div>

      {/* up to $250,000 */}
      <div className="leading text-center ">
        <img src={green} alt="" className="block mx-auto my-14" />
        <p className="text-black text-3xl md:6xl">And up to $250,000</p>
        <p className="text-2xl md:4xl">in instant buying power</p>
        <p className="text-black md:w-1/3 mx-auto my-4">
          Take advantage of every investment opportunity by making moves without
          waiting for funds to settle
        </p>
        <span className="my-12 text-sm"> Varies by account.</span>
      </div>
    </div>
  );
};

export default Features;

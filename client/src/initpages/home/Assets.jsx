import React from "react";
import assetbg from "../../assets/images/assetbg.jpg";
import { CiCircleInfo } from "react-icons/ci";
import project1 from "../../assets/images/project-1.jpg";
import project2 from "../../assets/images/project-2.jpg";
import project3 from "../../assets/images/project-3.jpg";

const Assets = () => {
  const disclosure = () => {
    return (
      <>
        <div className="flex gap-2 items-center my-6 md:mt-4 hover:bg-slate-100 w-[fit-content] p-2 rounded-xl border-1 border-slate-100 text-sm transition duration-300">
          <CiCircleInfo />
          <span>High-Yield Cash Account Disclosure</span>
        </div>
      </>
    );
  };
  return (
    <div>
      <p className="text-center">Explore our assets</p>
      <div className="flex flex-wrap items-center justify-center gap-4 my-8">
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Stocks
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Bonds
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Treasuries
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Options
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Crypto
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          ETfs
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Bond Account
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          High-Yield Cash Account
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Treasury Account
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          Investment Plans
          <span className="text-slate-300 ml-4">/</span>
        </div>
        <div className="p-8 sm:p-8 hover:bg-slate-100 text-2xl sm:text-4xl font-[500] text-black hover:bg-slide cursor-pointer">
          IRAs
          <span className="text-slate-300 ml-4">/</span>
        </div>
      </div>

      {/* assets with pictures */}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 ">
        <div className="leading  md:w-1/3">
          <span className="text-primary-very-light text-lg sm:xl py-8 font-semibold">
            Options Trading
          </span>
          <p className="text-black text-3xl sm:4xl pt-6">Trade Options.</p>
          <p className="text-black text-3xl sm:4xl pb-6">Earn rebates.</p>
          <span>
            Public is the only investing platform with options trading rebates.
            Earn $0.06–$0.18 per stock or ETF contract, based on your monthly
            trading volume.
          </span>
          {disclosure()}
        </div>
        <div className="img rounded-lg">
          <img src={project1} alt="" />
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 ">
        <div className="leading  md:w-1/3">
          <span className="text-primary-very-light text-lg sm:xl py-8 font-semibold">
            Bond Account
          </span>
          <p className="text-black text-3xl sm:4xl pt-6">Trade 6.5% yield.*</p>
          <p className="text-black text-3xl sm:4xl pb-6">Locked in.</p>
          <span>
            Now, you can lock in a 6.5% yield that won't change if the Fed cuts
            rates with a diversified portfolio of investment-grade and
            high-yield bonds.
          </span>
          {disclosure()}
        </div>
        <div className="img rounded-lg">
          <img src={project1} alt="" className="rounded-lg" />
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 ">
        <div className="leading  md:w-1/3">
          <span className="text-primary-very-light text-lg sm:xl py-8 font-semibold">
            Options Trading
          </span>
          <p className="text-black text-3xl sm:4xl pt-6">Trade Options.</p>
          <p className="text-black text-3xl sm:4xl pb-6">Earn rebates.</p>
          <span>
            Public is the only investing platform with options trading rebates.
            Earn $0.06–$0.18 per stock or ETF contract, based on your monthly
            trading volume.
          </span>
          {disclosure()}
        </div>
        <div className="img ">
          <img src={project2} alt="" className="rounded-lg" />
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 ">
        <div className="leading  md:w-1/3">
          <span className="text-primary-very-light text-lg sm:xl py-8 font-semibold">
            High-Yield Cash Account
          </span>
          <p className="text-black text-3xl sm:4xl pt-6">Earn 4.1% APY*</p>
          <p className="text-black text-3xl sm:4xl pb-6">on your cash</p>
          <span>
            Our High-Yield Cash Account offers an industry-leading 4.1% APY with
            no fees or balance requirements. Plus, you get up to $5M FDIC
            insurance.
          </span>
          {disclosure()}
        </div>

        <div className="img">
          <img src={project3} alt="" className="rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Assets;

import React from "react";
import hero from "../../assets/images/hero-stocks.png";
import { FaCheck } from "react-icons/fa6";

import stock2 from "../../assets/images/guide-stock-2.png";
import { FaArrowRight } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { RiPieChart2Fill } from "react-icons/ri";
import { TbArrowsUpLeft } from "react-icons/tb";
import star from "../../assets/images/star.png";
import light from "../../assets/images/light.png";
import { CiCircleInfo } from "react-icons/ci";
import sipc from "../../assets/images/SIPC-logo.png";
import fdic from "../../assets/images/FDIC-logo.png";
import finra from "../../assets/images/FINRA-logo.png";
import project6 from "../../assets/images/project-6.jpg";
import project7 from "../../assets/images/project-7.jpg";
import { TbAlpha } from "react-icons/tb";

const Alpha = () => {
  return (
    <div>
      <div className="blocks flex rounded-2xl flex-col md:flex-row justify-between gap-4 px-8  my-16 bg-slate-100 max-w-[1420px] mx-auto">
        <div className="key-moments flex flex-col hover:translate-y-2 duration-300 w-2/3 mx-auto ">
          <div className="flex gap-2 pt-4 items-center">
            <p className="flex w-8 h-8 bg-black rounded-sm items-center justify-center">
              <TbAlpha className="text-2xl text-[#E4F595]" />
            </p>
            <p className="text-black text-2xl md:3xl ">alpha</p>
          </div>
          <span className="text-4xl md:text-5xl  mt-4">AI for investors</span>
          <span className="text-4xl md:text-5xl text-black">
            Investment research and proactive insights
          </span>
          <div className="my-6">
            <div className="flex items-center gap-2 my-4 text-black">
              <RiPieChart2Fill className="text-black bg-[#E4F595] text-4xl p-2" />
              <p>Ask any question about any stock.</p>
            </div>
            <div className="flex items-center gap-2 my-4 text-black">
              <TbArrowsUpLeft className="text-black bg-[#E4F595] text-4xl p-2" />
              <p>Receive earnings call breakdowns the minute they hang up.</p>
            </div>
            <div className="flex items-center gap-2 my-4 text-black">
              <FaHeart className="text-black bg-[#E4F595] text-4xl p-2" />
              <p>Know why a stock is moving—not just that it is.</p>
            </div>
          </div>
          <div className="flex gap-2 items-center my-6 md:mt-4 hover:bg-slate-100 w-[fit-content] p-2 rounded-xl border-1 border-slate-100 text-sm transition duration-300">
            <CiCircleInfo />
            <span>Alpha Disclosures</span>
          </div>
        </div>
        <div className="key-moments text-center flex flex-col  hover:translate-y-2 duration-300 items-center justify-center">
          <div className="img mb-8">
            <img
              src={project6}
              alt=""
              className="mx-auto rounded-lg w-full h-full "
            />
          </div>
        </div>
      </div>

      {/* next section on Alpha */}

      <div className="relative img-alpha mb-0" style={{ width: "100%" }}>
        <div className="overlay-alpha absolute inset-0 bg-black opacity-50"></div>
        <img src={light} alt="" className="h-[400px] w-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:5xl font-semibold flex flex-col items-center justify-center text-center">
          <span className="text-4xl sm:text-6xl  mt-4">Secure by design.</span>
          <span className="text-4xl sm:text-6xl text-alpha">
            Transparent by choice.
          </span>
        </div>
      </div>
      <div className="bg-black">
        <div className="grid grid-cols-1  md:grid-cols-3 gap-4 mt-0 mb-0  pb-10 max-w-[1420px] mx-auto">
          <div className="flex flex-col justify-center p-4 border-t-1 border-b-1 border-slate-600 ">
            <p className="text-white text-lg sm:text-xl">Regulated in the US</p>
            <span className="my-4">
              Brokerage services for US-listed, registered securities are
              offered through Public Investing, Inc., a registered broker-dealer
              and FINRA/SIPC member.
            </span>
            <img src={finra} alt="" className="w-12 h-8 object-contain" />
          </div>
          <div className="flex flex-col justify-center p-4 md:border-t-1 border-b-1 border-slate-600">
            <p className="text-white text-lg sm:text-xl">Insurance coverage</p>
            <span className="my-4">
              SIPC protects the cash and securities in your portfolio up to
              $500,000. FDIC provides up to $5 million in protection for your
              High-Yield Cash Account.
            </span>
            <div className="flex gap-4">
              <img src={fdic} alt="" className="w-10 h-8 object-contain" />
              <img src={sipc} alt="" className="w-10 h-8 object-contain" />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 md:border-t-1 border-b-1 border-slate-600">
            <p className="text-white text-lg sm:text-xl">
              Financial-grade security
            </p>
            <span className="my-4">
              We secure your data on Public with AES 256-bit encryption and the
              latest TLS protocols, ensuring your information stays protected at
              all times.
            </span>
          </div>
          <div className="flex flex-col justify-center p-4  border-b-1 md:border-b-0 border-slate-600">
            <p className="text-white text-lg sm:text-xl">Order integrity</p>
            <span className="my-4">
              Unlike other brokerages, Public does not take payment for order
              flow from market makers on equity trades, supporting more
              transparent markets.
            </span>
            <div className="learn-more flex items-center  text-primary-very-light  gap-2 p-2 hover:underline-offset-1 text-sm">
              <span>Learn more</span>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4  border-b-1 md:border-b-0 border-slate-600">
            <p className="text-white text-lg sm:text-xl">Fee transparency</p>
            <span className="my-4">
              Our straightforward fee structure can help you understand exactly
              what things cost—and what are incentives are as a business.
            </span>
            <div className="learn-more flex items-center  text-primary-very-light  gap-2 p-2 hover:underline-offset-1 text-sm">
              <span>Learn about fees on public</span>
              <FaArrowRight />
            </div>
          </div>
          <div className="flex flex-col justify-center p-4   md:border-b-0 border-slate-600">
            <p className="text-white text-lg sm:text-xl">99.994% uptime</p>
            <span className="my-4">
              Our reliable platform achieves 99.994% uptime, keeping you
              connected to the markets whenever you need, so you never miss an
              opportunity to invest.
            </span>
            <span my-6>Based on calendar year 2024</span>
          </div>
        </div>
      </div>

      {/* account benefits */}
      <div className="bg-black ">
        <div className="mt-0 max-w-[1420px] mx-auto">
          <hr className="text-slate-400" />
          <div className="flex flex-col items-center justify-center mb-16 pt-40 pb-4 bg-black w-[90%] mx-auto">
            <span className="text-primary-very-light">ACCOUNT BENEFITS</span>
            <span className="text-4xl md:text-6xl text-white">
              As your account value grows,
            </span>
            <span className="text-4xl md:text-6xl">
              so does your experience on Public
            </span>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-3 md:w-4/5  mt-0 bg-black md:mx-auto mb-10 ">
            <div className="flex flex-col justify-center mx-auto  p-4 border-t-1 border-b-1 md:border-1 border-slate-800">
              <span className="text-primary-very-light text-2xl pt-4">
                Base
              </span>
              <div className="flex gap-2 items-center">
                <p className="text-white text-xl sm:text-2xl">$1+</p>
                <span className="text-white px-2 bg-slate-700 rounded-lg">
                  account value
                </span>
              </div>
              <div className="flex gap-2 items-center mt-4 mb-2">
                <FaCheck className="text-primary-very-light" />
                <span>Multi-asset investing</span>
              </div>
              <div className="flex gap-2 items-center my-2">
                <FaCheck className="text-primary-very-light" />
                <span>Industry-leading yields</span>
              </div>
              <div className="flex gap-2 items-center my-2">
                <FaCheck className="text-primary-very-light" />
                <span>AI-powered analysis</span>
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto p-4 border-t-1 border-b-1 md:border-1 border-slate-800">
              <span className="text-primary-very-light text-2xl pt-4">
                Premium
              </span>
              <div className="flex gap-2 items-center">
                <p className="text-white text-xl sm:text-2xl">$50,000+</p>
                <span className="text-white px-2 bg-slate-700 rounded-lg">
                  account value
                </span>
              </div>
              <div className="flex gap-2 items-center mt-4 mb-2">
                <FaCheck className="text-primary-very-light" />
                <span>Free extended-hours trading</span>
              </div>
              <div className="flex gap-2 items-center my-2">
                <FaCheck className="text-primary-very-light" />
                <span>Free Investment Plans</span>
              </div>
              <div className="flex gap-2 items-center my-2">
                <FaCheck className="text-primary-very-light" />
                <span>Priority support</span>
              </div>
            </div>
            <div className="flex flex-col justify-center mx-auto  p-4 border-t-1 border-b-1 md:border-1 border-slate-800">
              <span className="text-primary-very-light text-2xl pt-4">
                Concierge
              </span>
              <div className="flex gap-2 items-center">
                <p className="text-white text-xl sm:text-2xl">$250,000+</p>
                <span className="text-white px-2 bg-slate-700 rounded-lg">
                  account value
                </span>
              </div>
              <div className="flex gap-2 items-center mt-4 mb-2">
                <FaCheck className="text-primary-very-light" />
                <span>White-glove VIP support</span>
              </div>
              <div className="flex gap-2 items-center my-2">
                <FaCheck className="text-primary-very-light" />
                <span>Personalized offers</span>
              </div>
              <div className="flex gap-2 items-center my-2">
                <FaCheck className="text-primary-very-light" />
                <span>Exclusive invites</span>
              </div>
            </div>
            <div></div>
            <div className="flex items-center justify-center">
              <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] md:w-2xl text-lg md:text-xl font-semibold custom-shadow-dark">
                Sign Up
              </button>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alpha;

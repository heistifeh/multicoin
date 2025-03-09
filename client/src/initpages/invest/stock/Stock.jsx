import React from "react";
import Navbar from "../../../components/Navbar";
import heroStocks from "../images/hero-stocks.png";
import guideStock1 from "../images/guide-stock-1.png";
import guideStock2 from "../images/guide-stock-2.png";
import guideStock3 from "../images/guide-stocks-3.png";
import logoList1 from "../images/logo-list-01.png";
import logoList2 from "../images/logo-list-02.png";
import { FaArrowTrendUp } from "react-icons/fa6";
import { TiWorld } from "react-icons/ti";
import { IoStatsChartSharp } from "react-icons/io5";
import { WiStars } from "react-icons/wi";
import herobg from "../../../assets/images/herobg.png";
import { FaDollarSign } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import Footer from "../../home/Footer";

const Stock = () => {
  return (
    <div className="container-all">
      <header>
        <Navbar />
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-black my-2 text-4xl sm:text-7xl">
              Invest in stocks
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider">
              Build your portfolio with access to over 9,000 equities, and get
              the market insights you need to execute your investing strategies.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300">
                Sign Up
              </button>
              <button className="explore  border-1 border-slate-200 text-black p-2 w-36 rounded-4xl text-lg cursor-pointer hover:bg-primary hover:text-white transition duration-300">
                Explore stocks
              </button>
            </div>
          </div>
          <div className="invest-image sm:w-1/2">
            <img src={heroStocks} alt="" />
          </div>
        </div>

        {/* section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4 py-4 sm:py-10 sm:border-t-1 sm:border-b-1 border-slate-200">
          <div className="">
            <div>
              <FaArrowTrendUp className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Optimize how you buy and sell stocks
            </p>
            <span className="tracking-wider text-base sm:lg ">
              Our powerful suite of investing tools includes customizable
              recurring investments, built-in price alerts, and extended-hours
              trading.
            </span>
          </div>
          <div>
            <div>
              <WiStars className="text-primary text-2xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Learn why the markets are moving
            </p>
            <span className="tracking-wider text-base sm:lg ">
              We deliver advanced data and company-specific analysis to enhance
              your stock-trading strategies.
            </span>
          </div>
          <div>
            <div>
              <FaDollarSign className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Access the best price execution
            </p>
            <span className="tracking-wider text-base sm:lg">
              We don’t participate in payment for order flow, so you can get the
              best possible price for your trades.
            </span>
          </div>
        </div>
      </header>

      {/* access */}
      <div className="my-20">
        <span className="text-primary text-base font-semibold">
          Investing tools
        </span>
        <p className="sm:w-1/4 text-4xl sm:6xl text-black">
          Access powerful investing tools
        </p>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={guideStock1} alt="" className="w-1/2 mx-auto" />
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <h1 className=" my-2 text-xl sm:text-xl font-bold">
              Set price alerts for stocks
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider">
              Make timely investment decisions with price alerts for all the
              stocks you care about. Get notified when an asset falls above or
              below your set threshold.
            </span>
          </div>
        </div>
      </div>

      {/* informed */}
      <div className="my-20">
        <span className="text-primary text-base font-semibold">
          Market insights
        </span>
        <p className="sm:w-1/4 text-4xl sm:6xl text-black">
          Make informed investment decisions
        </p>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={guideStock3} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <h1 className=" my-2 text-xl sm:text-xl font-bold">
              Set price alerts for stocks
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider">
              Make timely investment decisions with price alerts for all the
              stocks you care about. Get notified when an asset falls above or
              below your set threshold.
            </span>
          </div>
        </div>
      </div>

      {/* logo-list */}

      <div className="bg-black py-10 h-300px">
        <div className="mt-20  text-white grid sm:grid-cols-2  w-[90%] mx-auto">
          <div>
            <span className="text-primary-very-light text-lg font-semibold">
              OTC stocks
            </span>
            <p className="text-2xl sm:6xl py-4">Trade select OTC stocks</p>
            <span className="py-6">
              Over 300 select over-the-counter (OTC) stocks are available on
              Public, focusing predominantly on large-cap international
              companies.
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 ">
              <div className="available flex gap-4">
                <TiWorld className="text-light-primary text-4xl bg-slate-800 p-2 rounded-sm" />
                <span>Over 300 select OTC stocks are now available</span>
              </div>
              <div className="available flex gap-4">
                <IoTrendingUp className="text-light-primary text-4xl bg-slate-800 p-2 rounded-sm" />
                <span>
                  Stock pages include additional research, data, and analysis
                </span>
              </div>
              <div className="available flex gap-4">
                <IoStatsChartSharp className="text-light-primary text-4xl bg-slate-800 p-2 rounded-sm" />
                <span>Additional companies will be added over time</span>
              </div>
              <div className="available flex gap-4">
                <IoStatsChartSharp className="text-light-primary text-4xl bg-slate-800 p-2 rounded-sm" />
                <span>
                  Available OTC offerings focus predominantly on large-cap
                  international companies
                </span>
              </div>
            </div>
          </div>
          <div className="images-list flex overflow-hidden gap-2 items-center justify-center my-8 sm:my-2">
            <img
              src={logoList1}
              alt=""
              className="w-fit h-[500px] object-contain overflow-hidden"
            />
            <img
              src={logoList2}
              alt=""
              className="w-fit h-[500px] object-contain overflow-hidden"
            />
          </div>
        </div>
      </div>

      {/* big image */}
      <div className="bg-black my-0">
        <hr className="text-slate-400" />
        <div className="flex flex-col items-center justify-center mb-0 pt-40 pb-4 bg-black w-[90%] mx-auto text-center">
          <span className="text-4xl md:text-6xl text-white">
            Build your portfolio with Public
          </span>
          <span className="text-4xl md:text-6xl text-primary-very-light"></span>
          <div className="flex items-center justify-center md:w-fit">
            <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <div className="relative img-alpha mt-0" style={{ width: "100%" }}>
        <img src={herobg} alt="" className="h-[400px] w-full" />
      </div>

      <Footer />
    </div>
  );
};

export default Stock;

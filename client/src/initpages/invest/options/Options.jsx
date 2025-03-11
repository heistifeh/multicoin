import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import bghero from "./images/bg-hero.webp";
import Navbar from "../../../components/Navbar";
import { IoSearch, IoStatsChartSharp, IoTrendingUp } from "react-icons/io5";
import poster from "./images/poster.jpg";
import Accordion from "../../../components/Accordion";
import herobg from "../../../assets/images/herobg.png";
import Footer from "../../../initpages/home/Footer.jsx";
const Options = () => {
  const disclosure = (title) => {
    return (
      <>
        <div className="flex gap-2 items-center my-6 md:mt-4 hover:bg-slate-100 w-[fit-content] px-2 rounded-2xl border-1 border-slate-600 text-sm transition duration-300">
          <CiCircleInfo />
          <span>{title}</span>
        </div>
      </>
    );
  };
  return (
    <div className="container-all">
      <Navbar />
      <div className="header bg-black p-8 rounded-t-lg">
        {/* assets with pictures */}
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 gap-4">
          <div className="leading  sm:w-5/6">
            <span className="text-primary-very-light text-lg sm:xl py-8 font-semibold">
              Options Trading
            </span>
            <p className="text-white text-4xl sm:text-7xl pt-6">
              Trade Options.
            </p>
            <p className="text-icon text-4xl sm:text-7xl pb-6">Earn rebates.</p>
            <span className="text-white font-bold text-lg">
              On Multicoin, you can earn a rebate of $0.06–$0.18 on stock and
              ETF option contracts, based on your monthly trading volume, with
              no commissions or per-contract fees.
            </span>
            <br />
            <button className="cursor-pointer text-white my-6 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold ">
              Get Started
            </button>
            {disclosure("Options Disclosures")}
          </div>
          <div className="img w-5/6 mx-auto">
            <img src={bghero} alt="" />
          </div>
        </div>
      </div>

      <div className="header bg-black p-8 rounded-b-lg">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 gap-4">
          <div className="grid grid-cols-1 gap-4 py-6 w-4/5 ">
            <div className="available flex gap-4 text-white">
              <IoSearch className="text-light-primary text-4xl bg-slate-800 p-2 rounded-sm" />
              <span className="font-bold">
                Uncover trading opportunities
                <br />
                <span className="font-light">
                  Explore the markets with a sophisticated suite of research and
                  technical analysis tools.
                </span>
              </span>
            </div>
            <div className="available flex gap-4 text-white">
              <IoStatsChartSharp className="text-light-primary text-4xl bg-slate-800 p-2 rounded-sm" />
              <span className="font-bold">
                Uncover trading opportunities
                <br />
                <span className="font-light">
                  Explore the markets with a sophisticated suite of research and
                  technical analysis tools.
                </span>
              </span>
            </div>
            <div className="available flex gap-4 text-white">
              <IoTrendingUp className="text-light-primary text-4xl bg-slate-800 p-2 rounded-sm" />
              <span className="font-bold">
                Uncover trading opportunities
                <br />
                <span className="font-light">
                  Explore the markets with a sophisticated suite of research and
                  technical analysis tools.
                </span>
              </span>
            </div>
          </div>
          <div>
            <img src={poster} alt="" className="w-2/3 mx-auto" />
          </div>
        </div>
        {/* informed */}
        <div className="mt-20 mb-5 text-center sm:w-4/5 sm:mx-auto">
          <span className="text-primary text-base font-semibold"></span>
          <p className=" text-4xl sm:9xl text-white text-center pb-4">
            We're the only investing platform that gives you a rebate on every
            options trade.
          </p>
        </div>
        {/* leading texts */}
        <div className="my-5 flex flex-col gap-6 text-sm text-center sm:w-2/5 mx-auto">
          <span>
            Our rebate means that each options contract costs less than zero.
            You actually earn money.
          </span>
        </div>
        {/* table */}
        <table className="px-4 sm:w-3/5 mx-auto text-white">
          <thead>
            <tr>
              <th></th>
              <th className=" border-1 border-slate-700 p-4">Rebate</th>
              <th className=" border-1 border-slate-700">Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr className=" border-1 border-slate-700 bg-[#000B33]">
              <td className=" text-center flex justify-center p-4">
                <img src="/logo.png" alt="" className="w-15 h-15 " />
              </td>
              <td className=" border-1 border-slate-700 p-4">
                Earn up to $0.18 per stock & ETF contract traded
              </td>
              <td className=" border-1 border-slate-700 p-4">
                $0.06 per stock & ETF contract traded
              </td>
            </tr>
            <tr>
              <td className=" border-1 border-slate-700 p-4"> Robinhood </td>
              <td className=" border-1 border-slate-700 p-4">None</td>
              <td className=" border-1 border-slate-700 p-4 text-[#FD4C93]">
                $0.04
              </td>
            </tr>
            <tr>
              <td className=" border-1 border-slate-700 p-4"> Fidelity </td>
              <td className=" border-1 border-slate-700 p-4">None</td>
              <td className=" border-1 border-slate-700 p-4 text-[#FD4C93]">
                $0.67–$0.69
              </td>
            </tr>
            <tr>
              <td className=" border-1 border-slate-700 p-4">
                {" "}
                TD Ameritrade{" "}
              </td>
              <td className=" border-1 border-slate-700 p-4">None</td>
              <td className=" border-1 border-slate-700 p-4 text-[#FD4C93]">
                $0.66
              </td>
            </tr>
          </tbody>
        </table>
        {/* leading texts */}
        <div className="my-5 flex flex-col gap-6 text-sm text-center sm:w-4/5 mx-auto">
          <span>
            Trading fees for competitors were taken from their website on
            4/19/2024, and are exclusive of promo rates. The trading fees above
            are an approximation, are subject to change, and may vary based on
            factors such as the total number of contracts and price per
            contract. See terms & conditions for enrolling in Multicoin's
            options rebates at Multicoin.com/disclosures/rebate-terms
          </span>
        </div>
        {/* informed */}
        <div className="mt-20 mb-5 text-center sm:w-4/5 sm:mx-auto">
          <span className="text-primary text-base font-semibold"></span>
          <p className=" text-4xl sm:9xl text-white text-center pb-4">
            Boost your Options trading rebate
          </p>
        </div>
        {/* leading texts */}
        <div className="my-5 flex flex-col gap-6 text-sm text-center sm:w-2/5 mx-auto">
          <span>
            Each month, you can boost your rebate based on your trading volume
            and keep that tier for the following month.
          </span>
        </div>
        {/* charts */}
        <div className="flex flex-col sm:flex-row mx-auto  sm:w-4/5  gap-4 mt-10">
          <div className="text-center flex flex-col gap-2 bg-[#131D40] w-[150px] text-white  border-1 border-primary-very-light rounded-lg ">
            <span className="block pt-6">$0.06</span>
            <span>up to 999 stock </span>
            <span>and ETF contracts</span>
            <span className="font-bold p-4 text-lg bg-primary-very-light text-white">
              Tier 1
            </span>
          </div>
          <div className="text-center flex flex-col gap-2 bg-[#131D40] w-[150px] text-white  border-1 border-primary-very-light rounded-lg ">
            <span className="block pt-6">$0.10</span>
            <span>1,000-4,999 stock</span>
            <span> and ETF contracts</span>
            <span className="font-bold p-4 text-lg bg-primary-very-light text-white">
              Tier 2
            </span>
          </div>
          <div className="text-center flex flex-col gap-2 bg-[#131D40] w-[150px] text-white  border-1 border-primary-very-light rounded-lg ">
            <span className="block pt-6">$0.14</span>
            <span>5,000-9,999 stock </span>
            <span>and ETF contracts</span>
            <span className="font-bold p-4 text-lg bg-primary-very-light text-white">
              Tier 3
            </span>
          </div>
          <div className="text-center flex flex-col gap-2 bg-[#131D40] w-[150px] text-white  border-1 border-primary-very-light rounded-lg ">
            <span className="block pt-6">$0.18</span>
            <span> 10,000+ stock</span>
            <span>and ETF contracts</span>
            <span className="font-bold p-4 text-lg bg-primary-very-light text-white">
              Tier 4
            </span>
          </div>
        </div>
        <div className="my-5 flex items-center flex-col gap-6 text-sm text-center sm:w-4/5 mx-auto">
          {disclosure("Options Disclosures")}
        </div>
      </div>
      {/* informed */}
      <div className="mt-20 mb-5 text-center sm:w-4/5 sm:mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl sm:9xl text-black text-center pb-4">
          Plan your trades with our strategy builder
        </p>
      </div>
      {/* leading texts */}
      <div className="my-5 flex flex-col gap-6 text-sm text-center sm:w-2/5 mx-auto">
        <span>
          With our options strategy builder, you can plan your trades based on
          your outlook on a stock and visualize your potential profit and loss
          outcomes. Learn more.
        </span>
      </div>
      <div className="my-5 flex items-center flex-col gap-6 text-sm text-center sm:w-4/5 mx-auto">
        {disclosure("Options Disclosures")}
      </div>
      {/* informed */}
      <div className="mt-20 mb-5 text-center sm:w-4/5 sm:mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl sm:9xl text-black text-center pb-4">
          Explore our options resource center
        </p>
      </div>
      {/* leading texts */}
      <div className="my-5 flex flex-col gap-6 text-sm text-center sm:w-2/5 mx-auto">
        <span>
          We have created a comprehensive library of guides to options trading
          strategies—from the fundamental building blocks to more advanced
          tactics.
        </span>
      </div>
      <div className="my-5 flex items-center flex-col gap-6 text-sm text-center sm:w-4/5 mx-auto">
        {disclosure("Options Disclosures")}
      </div>

      {/* section */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-4 py-4 sm:py-10 sm:border-t-1 sm:border-b-1 container-all container-inner border-slate-200">
        <div className="">
          <p className="text-black text-lg sm:text-xl py-2">Fundamentals</p>
          <span className="tracking-wide text-sm ">
            Buy or sell single-leg options strategies.
          </span>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#08A700] bg-[#C2E9BF] w-fit rounded-lg font-bold">
            Long call
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#FF0066] bg-[#FFB2D3] w-fit rounded-lg font-bold">
            Long Put
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#08A700] bg-[#C2E9BF] w-fit rounded-lg font-bold">
            Covered call
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#08A700] bg-[#C2E9BF] w-fit rounded-lg font-bold">
            Cash secured put
          </p>
        </div>
        <div>
          <p className="text-black text-lg py-2">Straddles and strangles</p>
          <span className="tracking-wide text-sm  ">
            Buy a call and a put with the same (straddle) or different
            (strangle) strike prices.
          </span>
          <p className="px-2 text-sm text-[#F3780C] bg-[#FCD6B5] w-fit rounded-lg font-bold">
            Long straddle
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#F3780C] bg-[#FCD6B5] w-fit rounded-lg font-bold">
            Long straddle
          </p>
        </div>
        <div>
          <p className="text-black text-lg sm:text-xl py-2">Vertical spreads</p>
          <span className="tracking-wide text-sm ">
            Buy and sell two options of the same type (calls or puts) with
            different strike prices.
          </span>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#08A700] bg-[#C2E9BF] w-fit rounded-lg font-bold">
            Call debit spread
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#FF0066] bg-[#FFB2D3] w-fit rounded-lg font-bold">
            Call credit spread
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#FF0066] bg-[#FFB2D3] w-fit rounded-lg font-bold">
            Put credit spread
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-[#08A700] bg-[#C2E9BF] w-fit rounded-lg font-bold">
            Put credit spread
          </p>

          <div className="my-2"></div>
        </div>
        <div>
          <p className="text-black text-lg sm:text-xl py-2">Calendar spreads</p>
          <span className="tracking-wide text-sm ">
            Buy and sell two options of the same type (calls or puts) with the
            same strike price but different expirations.
          </span>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-text  bg-slate-200 w-fit rounded-lg font-bold">
            Long call calendar spread
          </p>
          <div className="my-2"></div>
          <p className="px-2 text-sm text-text  bg-slate-200 w-fit rounded-lg font-bold">
            Long put calendar spread
          </p>
        </div>
      </div>
      {/* informed */}
      <div className="my-10 w-4/5 mx-auto  ">
        <p className=" text-4xl sm:9xl text-black pb-4">
          Have questions? Find answers.
        </p>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="w-4/5 mx-auto">
            <Accordion
              question="What is dollar-cost averaging?"
              answer="Instead of trying to time the markets, dollar-cost averaging is when you invest money at regular intervals, regardless of the investment’s price. This approach does not eliminate risk altogether, but it can mitigate the impact of market volatility on your overall investment."
              id={1}
            />
            <Accordion
              question="Can I choose my own asset allocation?"
              answer="Every Investment Plan in our catalog features a predefined asset allocation, informed by robust model portfolios. Upon selecting a Plan, you’re free to customize your asset allocation in 1% increments or opt for an even split of funds across assets. You can even remove assets altogether if you want. If you’re building your own Investment Plan from the ground up, the asset allocation is entirely in your hands."
              id={2}
            />
            <Accordion
              question="Are there fees for adding stocks or ETFs to an Investment Plan?"
              answer="Multicoin routes orders directly to exchanges and does not receive any payment for order flow revenue. However, placing trades in the stock market is not without cost. To cover the expenses associated with each transaction, we charge a nominal fee based on the number of assets in your Investment Plan. If you’re a Multicoin Premium member, you’re exempt from paying these fees. See our fee schedule."
              id={3}
            />
            <Accordion
              question="Are there fees for adding crypto to an Investment Plan?"
              answer="For Investment Plans containing crypto, Bakkt Crypto charges a fee to execute the recurring cryptocurrency purchases in your Plan. That fee is 1.25% of the total cryptocurrency order amount, which covers the costs associated with facilitating crypto transactions and storage. Multicoin Crypto, LLC (“Multicoin Crypto”) receives a portion of the revenue generated by Bakkt Crypto in exchange for licensing our software to Bakkt Crypto."
              id={3}
            />
          </div>
        </div>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center container-all">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={poster} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="w-1/2">
            <div className="invest  sm:w-2/3 mb-6 flex flex-col justify-center ">
              <h1 className=" my-2 font-bold text-lg  text-black">
                Have additional questions about Investment Plans on Multicoin??
              </h1>
              <span className="text-base tracking-wide text-slate-600">
                Our US-based customer experience team has FINRA-licensed
                specialists standing by to help.
              </span>
              <span className="text-primary text-base font-semibold pt-10">
                Contact our award-winning team
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* big image */}
      <div className="bg-black my-0">
        <hr className="text-slate-400" />
        <div className="flex flex-col items-center justify-center mb-0 pt-40 pb-4 bg-black w-[90%] mx-auto text-center">
          <span className="text-4xl md:text-6xl text-white">
            Simple. Sophisticated.
          </span>
          <span className="text-4xl md:text-6xl text-primary-very-light">
            Significantly cheaper.
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

export default Options;

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
import Accordion from "../../../components/Accordion";

const Etf = () => {
  return (
    <div className="container-all">
      <header>
        <Navbar />
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8 container-all">
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-black my-2 text-4xl sm:text-7xl">
              Invest in ETFs
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider">
              Broaden your market exposure with collections of securities that
              align with a specific industry, trend, or investment style.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300">
                Sign Up
              </button>
              <button className="explore  border-1 border-slate-200 text-black p-2 w-36 rounded-4xl text-lg cursor-pointer hover:bg-primary hover:text-white transition duration-300">
                Explore ETFs
              </button>
            </div>
          </div>
          <div className="invest-image sm:w-1/2">
            <img src={heroStocks} alt="" />
          </div>
        </div>

        {/* section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4 py-4 sm:py-10 sm:border-t-1 sm:border-b-1 border-slate-200 container-all">
          <div className="">
            <div>
              <FaArrowTrendUp className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Diversify with one trade
            </p>
            <span className="tracking-wider text-base sm:lg ">
              Instead of diversifying your portfolio with individual stocks, you
              can cover entire sectors with one ETF.
            </span>
          </div>
          <div>
            <div>
              <WiStars className="text-primary text-2xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Pay less than a mutual fund
            </p>
            <span className="tracking-wider text-base sm:lg ">
              The majority of ETFs are passively managed—which means they
              typically have lower operating expense ratios (OERs) than mutual
              funds.
            </span>
          </div>
          <div>
            <div>
              <FaDollarSign className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Invest with flexibility
            </p>
            <span className="tracking-wider text-base sm:lg">
              Unlike mutual funds, you can buy and sell ETFs during regular
              market hours and extended-hours trading. Or, automate your buys
              with recurring investments.
            </span>
          </div>
        </div>
      </header>

      {/* access */}
      <div className="my-20 container-all">
        <span className="text-primary text-base font-semibold">
          Investing tools
        </span>
        <p className="sm:w-1/4 text-4xl sm:6xl text-black">
          Access powerful investing tools
        </p>
      </div>

      {/* next */}
      <div className="container-all">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={guideStock1} alt="" className="w-1/2 mx-auto" />
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <div>
              <Accordion
                question="Set price alerts for ETFs"
                answer="Make timely investment decisions with price alerts for ETFs. Get notified when an asset falls above or below your set threshold."
                id={1}
              />
            </div>
            <div>
              <Accordion
                question="Get more time to react to market events"
                answer="With extended-hours trading, you get over 5 additional hours to buy and sell ETFs. Access pre-market trading from 8 AM to 9:30 AM ET and after-hours trading from 4 PM to 8 PM ET."
                id={2}
              />
            </div>
            <div>
              <Accordion
                question="Automatically reinvest your dividends"
                answer="If your ETFs pay dividends, you can automatically reinvest your dividends right back into the fund that paid them out."
                id={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* informed */}
      <div className="my-20 container-all">
        <span className="text-primary text-base font-semibold">
          Market insights
        </span>
        <p className="sm:w-1/4 text-4xl sm:6xl text-black">
          Make informed investment decisions
        </p>
      </div>

      {/* next */}
      <div className="container-all">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={guideStock3} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <div>
              <Accordion
                question="Take a closer look at any ETF"
                answer="Every ETF page on Public has helpful information about the fund and its performance, including key metrics, news, and recent activity from other investors."
                id={1}
              />
            </div>
            <div>
              <Accordion
                question="Get daily live analysis on the markets"
                answer="Each day, you can hear experts, analysts, and journalists discuss the day’s biggest market headlines—and what they mean for your portfolio—on Public Live."
                id={2}
              />
            </div>
            <div>
              <Accordion
                question="Upgrade your portfolio"
                answer="With Public Premium, you can unlock advanced data and analysis to help inform your ETF trading strategies even further."
                id={3}
              />
            </div>
          </div>
        </div>
      </div>
      {/* informed */}
      <div className="my-10 w-4/5 mx-auto  ">
        <p className=" text-4xl sm:9xl text-black pb-4">
          Have questions? Find answers.
        </p>
      </div>
      {/* next */}
      <div className="mb-10">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="w-4/5 mx-auto">
            <Accordion
              question="What is an ETF and how does it work?"
              answer="Also known as an ETF, an exchange-traded fund is multiple stocks or assets offered together as a bundle or package. "
              id={1}
            />
            <Accordion
              question="What is the difference between an ETF and a mutual fund?"
              answer="Mutual funds are priced once per day after market closes and ETF prices change during market hours as they are traded on an exchange throughout the day. "
              id={2}
            />
            <Accordion
              question="How do you choose an ETF to invest in?"
              answer="When choosing what ETF to invest in, you should determine if the fund’s investment objectives align with your investing goals. It is important to do your research, taking things like past performance and fund manager into consideration. Public offers a suite of diversified ETFs that helps your investment align with your goals."
              id={3}
            />
            <Accordion
              question="How can I invest in ETFs on Public?"
              answer="There are numerous ETFs that you can invest in on the Public platform. With one transaction, you can buy a diversified set of investments that align to your goals."
              id={4}
            />
          </div>
        </div>
      </div>

      {/* logo-list */}

      <div className="bg-black py-10 h-300px ">
        <div className="mt-20  text-white grid sm:grid-cols-2  w-[90%] mx-auto">
          <div>
            <span className="text-primary-very-light text-lg font-semibold">
              OTC stocks
            </span>
            <p className="text-2xl sm:6xl py-4">Trade select OTC stocks</p>
            <span className="py-6">
              Over 300 select over-the-counter (OTC) stocks are available on
              Multicoin, focusing predominantly on large-cap international
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
            Build your portfolio with Multicoin
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

export default Etf;

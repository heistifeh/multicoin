import React, { useState } from "react";
import bgfeature from "./images/bg-feature.png";
import bgfeature2 from "./images/bg-feature2.png";
import crypto from "./images/crypto.png";
import guide1 from "./images/guide-01.png";
import guide2 from "./images/guide-02.png";
import guide3 from "./images/guide-03.png";
import guide4 from "./images/guide-04.png";
import guide5 from "./images/guide-05.png";
import guide6 from "./images/guide-06.png";
import herocrypto from "./images/hero-crypto.png";
import herocrypto2 from "./images/hero-crypto2.png";

import Accordion from "../../../components/Accordion";
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
import "./crypto.css";
import { Link } from "react-router-dom";

import poster from "./images/poster.jpg";

const Crypto = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="">
      <header className="relative rounded-none">
        <div className="container mx-auto">
          <Navbar />
        </div>

        <div
          className="absolute top-0 bg-cover flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8    left-0 right-0"
          style={{
            backgroundImage: `url(${bgfeature})`,
            backgroundSize: "cover", // Example of adding another style
            backgroundPosition: "center", // Another property
          }}
        >
          <div className="invest  sm:w-1/2 px-4 flex flex-col justify-center mt-10">
            <h1 className="text-black my-2 text-4xl sm:text-7xl">
              Invest in crypto
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider text-black py-6">
              Open an account with Bakkt Crypto, automate your investment
              strategy, manage your portfolio – all on Multicoin.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300">
                Sign Up
              </button>
              <button className="explore  border-1 border-slate-400 text-black p-2 w-36 rounded-4xl text-lg cursor-pointer hover:bg-primary hover:text-white transition duration-300">
                Explore stocks
              </button>
            </div>
          </div>
          <div className="invest-image sm:w-1/2 mt-20">
            <img src={heroStocks} alt="" />
          </div>
        </div>
      </header>

      <div className="py-40"></div>
      <div className="py-40"></div>
      {/* leading texts */}
      <div className="my-10 flex flex-col gap-6 text-sm px-2 mx-auto container-inner container-all py-6">
        <span>
          Cryptocurrency services provided by Bakkt Crypto Solutions LLC (NMLS
          ID 1828849), a licensed virtual currency business by the New York Dept
          of Financial Services and a licensed money transmitter. Your
          cryptocurrency investments are held in your Bakkt Crypto account,
          which is separate from your brokerage account with Multicoin Investing.
          Multicoin Investing is a registered broker-dealer and FINRA member, and
          does not provide cryptocurrency trading or custodying services.
          Cryptocurrencies are not securities and are not FDIC insured or
          protected by SIPC. Cryptocurrency investing is speculative and
          involves significant risks, including loss of principal. Please review
          the Risk Disclosures before trading.
          <span className="text-sm text-primary-very-light">Learn more</span>
        </span>
      </div>

      {/* section */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-4 sm:py-10 sm:border-t-1 sm:border-b-1 border-slate-200 px-4 container-all">
        <div className="w-4/5">
          <div className="">
            <FaArrowTrendUp className="text-[#F37609] text-4xl bg-[#FEF1E6] p-2 rounded-lg" />
          </div>
          <p className="text-black text-lg sm:text-xl py-2">
            Buy, sell, and hold crypto
          </p>
          <span className="tracking-wider text-base sm:lg ">
            A streamlined investing experience includes Bitcoin, Ethereum, and
            more.
          </span>
        </div>
        <div className="w-4/5">
          <div>
            <WiStars className="text-[#F37609] text-4xl bg-[#FEF1E6] p-2 rounded-lg" />
          </div>
          <p className="text-black text-lg sm:text-xl py-2">
            Automate your investing strategy
          </p>
          <span className="tracking-wider text-base sm:lg ">
            Schedule recurring investments in one crypto or a combination of
            tokens.
          </span>
        </div>
        <div className="w-4/5">
          <div>
            <FaDollarSign className="text-[#F37609] text-4xl bg-[#FEF1E6] p-2 rounded-lg" />
          </div>
          <p className="text-black text-lg sm:text-xl py-2">
            Make informed crypto decisions
          </p>
          <span className="tracking-wider text-base sm:lg">
            Inform your crypto investing strategies with the insights and
            analysis that matters.
          </span>
        </div>
      </div>

      {/* access */}
      <div className="my-20 px-4 ">
        <span className="text-[#F37609] text-base font-semibold">
          Investing tools
        </span>
        <p className="sm:w-2/4 text-4xl sm:text-6xl text-black">
          Build your portfolio with crypto
        </p>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div
            className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6"
            style={{
              backgroundImage: `url(${bgfeature2})`,
              backgroundSize: "cover", // Example of adding another style
              backgroundPosition: "center", // Another property
            }}
          >
            <img
              onClick={() => console.log("hey")}
              src={
                activeId == 1
                  ? guide1
                  : activeId == 2
                  ? guide2
                  : activeId == 3
                  ? guide3
                  : null
              }
              alt=""
              className="w-4/5 mx-auto "
            />
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <div onClick={() => setActiveId(1)}>
              <Accordion
                question="Invest in crypto with US dollars"
                answer="Bakkt Crypto allows you to invest in a variety of crypto assets, including Bitcoin and Ethereum. You can buy and sell with US dollars, 24/7."
                id={1}
              />
            </div>
            <div onClick={() => setActiveId(2)}>
              <Accordion
                question="Manage your assets in one place"
                answer="
On Multicoin, you can see the crypto investments in your Bakkt Crypto account alongside the stocks and ETFs in your brokerage account."
                id={2}
              />
            </div>
            <div onClick={() => setActiveId(3)}>
              <Accordion
                question="Set timely crypto price alerts"
                answer="
Stay on top of market volatility with crypto price alerts. Get notified when there’s a significant upward or downward movement."
                id={3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20">
        <div className="sm:w-1/2 sm:mx-auto">
          <img src={crypto} alt="" />
        </div>
        <div className="sm:w-5/6 sm:mx-auto">
          <div className="my-20 px-4 ">
            <span className="text-[#F37609] text-base font-semibold">
              Automation
            </span>
            <p className=" text-4xl sm:text-6xl text-black my-4">
              Schedule recurring crypto investments
            </p>
            <span>
              Navigate volatile markets, manage risk, and build wealth over time
              with recurring investments. You can automatically invest in a
              single crypto or a personalized combination of crypto assets on a
              daily, weekly, biweekly, or monthly basis.
            </span>
          </div>
        </div>
      </div>

      {/* access */}
      <div className="my-20 px-4 ">
        <span className="text-[#F37609] text-base font-semibold">
          Crypto insights
        </span>
        <p className="sm:w-2/4 text-4xl sm:text-6xl text-black">
          Inform your crypto investing strategies
        </p>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div
            className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6"
            style={{
              backgroundImage: `url(${bgfeature2})`,
              backgroundSize: "cover", // Example of adding another style
              backgroundPosition: "center", // Another property
            }}
          >
            <img
              onClick={() => console.log("hey")}
              className="w-4/5 mx-auto"
              src={
                activeId == 1
                  ? guide4
                  : activeId == 2
                  ? guide5
                  : activeId == 3
                  ? guide6
                  : null
              }
              alt=""
            />
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <div onClick={() => setActiveId(1)}>
              <Accordion
                question="Access helpful crypto context"
                answer="
Every asset page on Multicoin has helpful information to guide your crypto investing journey—including stats, news, and more."
                id={1}
              />
            </div>
            <div onClick={() => setActiveId(2)}>
              <Accordion
                question="Tune in to live crypto analysis"
                answer="
Each week on Multicoin Live, journalists and experts break down the biggest headlines in the world of crypto. Tune in and get the latest crypto analysis."
                id={2}
              />
            </div>
            <div onClick={() => setActiveId(3)}>
              <Accordion
                question="Upgrade your portfolio"
                answer="

With Multicoin Premium, you can further customize your crypto price alerts and access advanced metrics to guide your crypto investing strategy."
                id={3}
              />
            </div>
          </div>
        </div>
      </div>

      {/* access */}
      <div className="my-20 px-4 mx-auto w-5/6 text-center">
        <span className="text-[#F37609] text-base font-semibold">
          Bakkt Crypto
        </span>
        <p className="text-4xl sm:text-6xl text-black">
          Your crypto is held 1:1
        </p>
        <p className="text-base sm:text-lg text-black py-8 ">
          Cryptocurrency services are provided by Bakkt Crypto, a licensed
          virtual currency business by the New York State Department of
          Financial Services and a licensed money transmitter. Your Bakkt Crypto
          account is separate from your brokerage account with Multicoin Investing,
          which holds your cash and your investments in US-listed stocks and
          ETFs. Multicoin Investing is a registered broker-dealer and FINRA member,
          and does not offer cryptocurrency trading or custodying services.
        </p>
        <p className="text-sm ">
          Cryptocurrencies offered by Bakkt Crypto are not securities and are
          not FDIC insured or protected by SIPC. Cryptocurrency investing is
          speculative and involves significant risks, including loss of
          principal. Please review the{" "}
          <Link className="text-primary">Risk Disclosures</Link> before trading.
          Assets Directory
        </p>
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
              question="Who is Bakkt Crypto?
"
              answer="
When you invest in cryptocurrency via Multicoin, you’re opening an account with Bakkt Crypto Solutions, LLC (NMLS ID 1828849). Bakkt Crypto is a licensed virtual currency business by the New York State Department of Financial Services and a licensed money transmitter. Bakkt Crypto is not a registered broker-dealer or a FINRA member. Learn more about Bakkt Crypto here.

Note that your Bakkt Crypto account is separate from your brokerage account with Multicoin Investing, which holds your investments in US-listed stocks and ETFs. Multicoin Investing is a registered broker-dealer and FINRA member."
              id={1}
            />
            <Accordion
              question="How do I get started with crypto?
"
              answer="Before you can invest in cryptocurrency via our platform, you’ll first need to open a cryptocurrency account directly with Bakkt Crypto Solutions, LLC. Your cryptocurrency trades will be executed by Bakkt Crypto, and your cryptocurrency assets will be held in your Bakkt Crypto account. Through the Multicoin platform, you will be able to review the crypto holdings in your Bakkt Crypto account, submit trade orders to Bakkt Crypto, and contact Bakkt Crypto for customer support."
              id={2}
            />
            <Accordion
              question="How much does Bakkt Crypto charge to trade crypto?

"
              answer="Bakkt Crypto charges a transaction fee based on the dollar value of your cryptocurrency trade. For details, see the Fee Schedule."
              id={3}
            />
            <Accordion
              question="Is there a limit to my crypto purchases through Bakkt Crypto?
"
              answer="
The minimum buy amount for crypto is $1 and maximum order size is $100k. The total outstanding order limit is $200k which means you cannot have multiple limit orders with a total exceeding $200k."
              id={3}
            />
            <Accordion
              question="Can I access my Bakkt Crypto account outside of Multicoin?
"
              answer="

You can access your Bakkt Crypto account and place trades directly with Bakkt Crypto by visiting this page. For trades made on this website, you’ll also be able to fund your purchases and transfer your sales proceeds directly to your bank of choice."
              id={4}
            />
            <Accordion
              question="What is crypto?
"
              answer="
Cryptocurrency is a digital store of value or medium of exchange that is recorded on a blockchain. Cryptocurrencies are not backed or supported by any government or central bank. Instead, their value is derived by market forces of supply and demand, which tends to make them more volatile than traditional fiat currencies. In addition, cryptocurrency markets and exchanges are not regulated in the same way as securities investing, and investors do not have the same protections as they do when they invest in equities, options or fixed income."
              id={5}
            />
          </div>
        </div>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={poster} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="w-1/2  px-4">
            <div className="invest  sm:w-2/3 mb-6 flex flex-col justify-center ">
              <h1 className=" my-2 font-bold text-lg  text-black">
                Have additional questions Stocks on Multicoin?
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

export default Crypto;

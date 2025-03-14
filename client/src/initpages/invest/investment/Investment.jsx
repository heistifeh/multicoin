import React from "react";
import Navbar from "../../../components/Navbar";
import plan1 from "./images/plan-01.png";
import plan2 from "./images/plan-02.png";
import slide1 from "./images/slide-01.png";
import slide2 from "./images/slide-02.png";
import poster from "./images/poster.png";
import bondaccount from "../..//invest/bond-account/images/bond-account.png";
import herobg from "../../../assets/images/herobg.png";
import cta from "./images/cta.webp";
import { Link } from "react-router-dom";
import { FaArrowTrendUp, FaDollarSign } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";
import { FaPencilAlt } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import Accordion from "../../../components/Accordion";
import Footer from "../../home/Footer";
const Investment = () => {
  return (
    <div className="container-all">
      <header>
        <Navbar />
        <div>
          <div className="my-20 text-center sm:w-4/5 sm:mx-auto max-w-[1420px] mx-auto ">
            <span className="text-primary text-base font-semibold"></span>
            <p className=" text-5xl sm:text-6xl text-black text-center pb-4 sm:w-3/5 mx-auto">
              Automate your investing strategy
            </p>
            <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold custom-shadow">
              Sign Up
            </button>

            <div className="invest-image  bg-slate-100  mx-auto py-6">
              <img src={poster} alt="" className=" mx-auto " />
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-[1420px] mx-auto ">
        {/* informed */}
        <div className="mt-20 text-center sm:w-4/5 sm:mx-auto">
          <span className="text-primary text-base font-semibold"></span>
          <p className=" text-4xl sm:text-6xl text-black text-center pb-4">
            What is an Investment Plan?
          </p>
        </div>

        {/* leading texts */}
        <div className="my-10 flex flex-col gap-6 text-sm w-4/5 mx-auto">
          <span>
            An Investment Plan is a collection of assets that you can
            automatically contribute to on a recurring basis. Choose from our
            catalog of Plans, covering a wide range of investing styles and risk
            tolerances. Or, create your own Investment Plan from scratch with up
            to 20 stocks, ETFs, and/or crypto.
            <span className="text-sm text-primary-very-light">Learn more</span>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4 py-4 sm:py-10 sm:border-t-1 sm:border-b-1 border-slate-100 container-all container-inner">
          <div className="w-4/5">
            <div>
              <FaPencilAlt className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Make it a habit, not a hassle
            </p>
            <span className="tracking-wider text-base sm:lg ">
              An Investment Plan can help you take the emotion out of investing
              and focus on your long-term financial goals.
            </span>
          </div>
          <div className="w-4/5">
            <div>
              <RiLeafFill className="text-primary text-2xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Personalize your Plan
            </p>
            <span className="tracking-wider text-base sm:lg ">
              You're in control of which assets go in your Plan, how much you
              invest, and how you allocate your funds.
            </span>
          </div>
          <div className="w-4/5">
            <div>
              <FaDollarSign className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Broaden your exposure in one click
            </p>
            <span className="tracking-wider text-base sm:lg">
              It’s never been easier to spread your investing strategy across
              asset classes, industries, regions, and more.
            </span>
          </div>
        </div>

        {/* informed */}
        <div className="my-20 text-center sm:w-4/5 sm:mx-auto">
          <span className="text-primary text-base font-semibold">
            Dollar-cost averaging
          </span>
          <p className=" text-4xl sm:9xl text-black text-center pb-4">
            Take the emotion out of investing
          </p>
          <span className="text-base tracking-wider text-black">
            An Investment Plan on Multicoin may help mitigate your risk of
            buying at a peak by spreading your investments over time. This
            strategy is known as dollar-cost averaging. Although it doesn't
            eliminate risk completely, dollar-cost averaging can help lessen the
            overall impact of market volatility.
          </span>
        </div>

        {/* informed */}
        <div className="my-20   ">
          <p className=" text-4xl sm:text-6xl text-black pb-4">
            Get started in 3 steps
          </p>
        </div>

        {/* next */}
        <div>
          <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
            <div className="invest-image w-1/2  bg-slate-50  mx-auto py-6">
              <img src={plan1} alt="" className="w-1/2  mx-auto " />
            </div>
            <div className="w-1/2">
              <Accordion
                question="Explore our catalog of Plans
"
                answer="Our catalog presents a diverse range of Investment Plans organized by theme, geographic region, industry, and more. Choose the Plan that’s right for you or design your own with up to 20 assets."
                id={1}
              />
              <Accordion
                question="Decide how much you want to invest
"
                answer="Once you've chosen your assets, you then decide how much and how frequently you want to contribute to your Investment Plan. Select from daily, weekly, biweekly, or monthly frequencies, aligning with your unique investing objectives."
                id={2}
              />
              <Accordion
                question="Fine-tune your asset allocation
"
                answer="The final step involves distributing your funds across the assets in your Investment Plan. Every Plan in our catalog comes with a data-backed asset allocation that you're free to adjust to your preferences."
                id={3}
              />
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
          <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center container-all container-inner">
            <div className="invest-image sm:w-1/2 bg-slate-50  mx-auto py-6">
              <img src={slide1} alt="" className="w-1/2 mx-auto " />
            </div>
            <div className="w-1/2">
              <div className="invest  sm:w-2/3 mb-6 flex flex-col justify-center ">
                <h1 className=" my-2 font-bold text-lg  text-black">
                  Have additional questions about Investment Plans on Multicoin?
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
      </main>
      {/* big image */}
      <div className="bg-black my-0">
        <hr className="text-slate-400" />
        <div className="flex flex-col items-center justify-center mb-0 pt-40 pb-4 bg-black w-[90%] mx-auto text-center">
          <span className="text-4xl md:text-6xl text-white">
            Build your portfolio with Multicoin
          </span>
          <span className="text-4xl md:text-6xl text-primary-very-light"></span>
          <div className="flex items-center justify-center md:w-fit">
            <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold custom-shadow-dark">
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

      <Footer />
    </div>
  );
};

export default Investment;

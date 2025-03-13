import React from "react";
import early from "./images/early.png";
import feature1 from "./images/feature1.png";
import feature2 from "./images/feature2.png";
import tree1 from "./images/tree1.png";
import tree2 from "./images/tree2.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import guranteed from "./images/guranteed.png";
import Navbar from "../../../components/Navbar";

import poster from "./images/poster.jpg";
import herobg from "../../../assets/images/herobg.png";
import Footer from "../../home/Footer";
import Accordion from "../../../components/Accordion";
const Treasuries = () => {
  return (
    <div>
      <header className="relative rounded-none ">
        <div className="container mx-auto">
          <Navbar megaOn="text-black" megaOff="text-white" />
        </div>

        <div className="absolute top-0 bg-cover flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8    left-0 right-0 bg-gradient-to-tr from-black to-[#000E43]">
          <div className="invest  sm:w-2/3 flex flex-col justify-center mt-12 px-8">
            <span className="text-sm text-white border-1 border-slate-600 w-fit rounded-lg px-[4px]  ">
              Treasury Account
            </span>
            <h1 className="text-white mb-2 text-4xl sm:text-7xl">
              Treasury ladders.
            </h1>
            <h2 className="text-primary mb-2 text-4xl sm:text-7xl">
              Simplified.
            </h2>
            <span className="text-lg leading-5 sm:text-xl tracking-wider text-white py-6">
              It’s never been easier to earn passive income with a customizable
              ladder of US Treasuries. Plus, your earnings are exempt from state
              and local taxes.*
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300">
                Sign up
              </button>
            </div>
          </div>
          <div className=" invest-image sm:w-4/6 mt-20 flex sm:justify-end ">
            <img src={tree1} alt="" className=" h-full mx-auto self-end" />
          </div>
        </div>
      </header>
      <div className="py-60"></div>
      <div className="py-20"></div>
      <div className="mt-20 mb-5 text-center sm:w-4/5 sm:mx-auto">
        <span className="text-primary-very-light text-base font-semibold mb-4 block">
          What is a Treasury Account?
        </span>
        <p className=" text-4xl sm:text-6xl text-black text-center pb-4 sm:w-4/5 mx-auto">
          Lock in a government-backed yield.
        </p>
      </div>
      {/* leading texts */}
      <div className="my-5 flex flex-col gap-6 text-sm text-center sm:w-4/5 mx-auto">
        <span>
          A Treasury Account lets you invest in a ladder of US Treasuries with
          maturities from 3 months to 30 years. Choose a pre-built ladder to
          match your timeline, or build your own. Then, enjoy steady income from
          what is widely considered one of the safest investments for your
          portfolio.
        </span>
      </div>
      {/* steps */}
      <div className="flex flex-col sm:flex-row justify-between my-10 sm:w-[80%] sm:mx-auto">
        <div className="flex gap-4">
          <div className=" text-black border-1 rounded-full w-10 h-6 text-center">
            1
          </div>
          <div>
            <p className="text-black">Pick or build your ladder</p>
            <span>
              We've tailored our ladder options to fit various time horizons, or
              you can create your own.
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" text-black border-1 rounded-full w-10 h-6 text-center">
            2
          </div>
          <div>
            <p className="text-black">Invest your cash</p>
            <span>
              You can get started with as little as $1,000. Future deposits have
              no minimum requirements.
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" text-black border-1 rounded-full w-10 h-6 text-center">
            3
          </div>
          <div>
            <p className="text-black"> Reinvest or cash out</p>
            <span>
              When your Treasuries reach maturity, you have the flexibility to
              reinvest or cash out.
            </span>
          </div>
        </div>

        <div></div>
      </div>
      <p className="pt-10 pb-6 sm:pb-20 sm:w-[80%] sm:mx-auto text-sm">
        *The average yield displayed for the ladder at the time of your
        investment is estimated and assumes that: (1) all Treasuries in the
        ladder are held until maturity; (2) all interest and maturity payments
        are reinvested into the longest duration Treasury in your ladder; and
        (3) any reinvestment will be at the same rate as today’s yields. Your
        actual yield may vary from this estimate due to factors such as
        reinvestment rates and sales prior to maturity. Interest earned from
        Treasuries is generally exempt from state and local taxes, but any
        capital gains from sale of Treasuries prior to maturity is not exempt.
      </p>
      <div className="border-1 border-slate-100"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20">
        <div className="sm:w-3/5 sm:mx-auto">
          <span className="text-base text-primary">Tax advantages</span>
          <p className=" text-2xl sm:text-4xl text-black  pb-4 ">
            Pay zero state and local taxes
          </p>
          <span className="">
            Interest from US Treasuries is exempt from state and local income
            taxes*—letting you keep more of your earnings, especially if you
            live in a high-tax area.
          </span>
        </div>
        <div className="sm:w-4/5 sm:mx-auto">
          <img src={image1} alt="" className="rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20">
        <div className="sm:w-3/5 sm:mx-auto">
          <span className="text-base text-primary">Lock in your yield</span>
          <p className=" text-2xl sm:text-4xl text-black  pb-4 ">
            Rates may fall. <br />
            Your yield won’t.
          </p>
          <span className="">
            A Treasury Account on Public allows you to lock in your yield at
            purchase*, so you know exactly what you'll earn—even if the Fed cuts
            interest rates.
          </span>
        </div>
        <div className="sm:w-4/5 sm:mx-auto">
          <img src={feature2} alt="" className="rounded-lg" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20">
        <div className="sm:w-3/5 sm:mx-auto">
          <span className="text-base text-primary">Liquidity</span>
          <p className=" text-2xl sm:text-4xl text-black  pb-4 ">
            Access your cash.
            <br />
            Anytime.
          </p>
          <span className="">
            US Treasuries are highly liquid, so you can sell early if needed.
            However, keep in mind that sales prior to maturity may incur costs
            and affect your realized yield.
          </span>
        </div>
        <div className="sm:w-4/5 sm:mx-auto">
          <img src={image2} alt="" className="rounded-lg" />
        </div>
      </div>
      <div
        style={{ backgroundImage: `url(${tree2})` }}
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] flex items-center justify-center"
      >
        <div className="absolute text-center">
          <span className="text-4xl sm:text-6xl text-white">Safe returns.</span>
          <p className="text-4xl sm:text-6xl text-primary pb-8">
            Backed by the US government.
          </p>
          <span className="block text-white tracking-wide bold w-3/4 mx-auto">
            US Treasuries are backed by the full faith and credit of the US
            government and are considered one of the safest investments for your
            portfolio.
          </span>
        </div>
      </div>{" "}
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
              question="What are Treasuries?
"
              answer="
US Treasuries are debt securities issued by the federal government. When you purchase one, you’re lending money to the government in exchange for either periodic interest payments or a guaranteed return at maturity. There are three main types: Treasury bills (T-bills), which mature in one year or less; Treasury notes (T-notes), with maturities between two and ten years; and Treasury bonds (T-bonds), which mature in 20 or 30 years."
              id={1}
            />
            <Accordion
              question="What is a Treasury Account?
"
              answer="
A Treasury Account lets you invest in a ladder of US Treasuries with staggered maturities. Think of it like spacing out your investments—when one Treasury matures, you can either reinvest the money or use it if you need it. This approach helps balance flexibility and long-term growth, giving you access to cash at regular intervals while still benefiting from the potential returns of longer-term Treasuries."
              id={2}
            />
            <Accordion
              question="How does a Treasury Account work?"
              answer="
It only takes a few minutes to get started with a Treasury Account on Public. You can choose from pre-built Treasury ladders designed for different time horizons or build your own from scratch. Then, with a minimum deposit of $1,000, you’ll start earning a government-backed yield. You also have the flexibility to cash out your investments early if you need to."
              id={3}
            />
            <Accordion
              question="Is earned interest from the Treasury Account taxable?"
              answer="
The interest you earn from a Treasury Account is taxable, but with a key advantage: it is exempt from state and local taxes. This means you get to keep more of your earnings, especially if you live in a high-tax area."
              id={4}
            />
            <Accordion
              question="What happens when my Treasuries mature?"
              answer="
When your Treasuries mature, you have two options: you can automatically reinvest the proceeds into a new Treasury with a maturity matching the longest term in your ladder, or you can withdraw the cash. The choice is yours."
              id={5}
            />
            <Accordion
              question="Why should I consider Treasuries for my portfolio?"
              answer="
US Treasuries are backed by the full faith and credit of the US government and are considered one of the safest investments for your portfolio. That’s why many investors turn to them as a reliable way to generate yield. Treasuries also tend to offer higher returns than traditional savings accounts, providing an easy way to put your cash to work while maintaining stability in your portfolio."
              id={6}
            />
            <Accordion
              question="Are there fees associated with the Treasury Account?"
              answer="
Yes, there are management fees associated with managing your Treasury Account and transaction fees associated with every trade. Management fees are tiered, starting at 0.29% and decreasing to 0.09% based on account size. Transaction markups are 0.10%-0.25% of par value, depending on duration. For more details, see Public Advisors’ Fee Schedule"
              id={7}
            />
          </div>
        </div>
      </div>
      {/* next */}
      <div>
        <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center container-inner container-all">
          <div className="invest-image sm:w-1/2 bg-slate-50  mx-auto py-6">
            <img src={tree1} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="w-1/2  px-4 ">
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
            Ready to build your custom ladder of
          </span>
          <span className="text-4xl md:text-6xl text-primary-very-light">
            US Treasuries?
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
      <div className="container-all">
        <Footer />
      </div>
    </div>
  );
};

export default Treasuries;

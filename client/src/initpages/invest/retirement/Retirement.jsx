import React from "react";
import Navbar from "../../../components/Navbar";
import heroStocks from "../images/hero-stocks.png";
import { FaArrowRight, FaArrowTrendUp } from "react-icons/fa6";
import { WiStars } from "react-icons/wi";
import { FaDollarSign } from "react-icons/fa";
import { IoTrendingUp } from "react-icons/io5";
import Footer from "../../home/Footer";
import Accordion from "../../../components/Accordion";
import allocation from "./images/allocation.png";
import hero from "./images/hero.png";
import image from "./images/image.jpg";
import image2 from "./images/image.png";
import icon from "./images/icon.svg";
import { CiCircleInfo } from "react-icons/ci";
import herobg from "../../../assets/images/herobg.png";
const Retirement = () => {
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
    <div>
      <Navbar />
      <header className="max-w-[1000px] mx-auto">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8 container-all">
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-black my-2 text-4xl sm:text-7xl">
              Invest for your retirement.
              <span className="text-text">With added tax benefits.</span>
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider">
              On Multicoin, you can open Traditional and Roth IRAs and plan for
              retirement alongside your other investments.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300 custom-shadow">
                Get started
              </button>
            </div>
          </div>
          <div className="invest-image sm:w-1/2">
            <img src={hero} alt="" />
          </div>
        </div>

        <div className="my-20 sm:my-30">
          <span className="text-4xl sm:text-6xl text-black block w-4/5 mx-auto text-center">
            What is an IRA?
          </span>
          <span className="text-lg sm:text-2xl text-text block w-4/5 mx-auto text-center">
            A Traditional or Roth IRA allows you to save for retirement with
            unique tax benefits—and you can open one alongside your
            employer-sponsored 401(k).
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 container-inner bg-slate-50">
            <div className="sm:w-4/5">
              <p className="text-black text-lg sm:text-2xl">Traditional IRA</p>
              <span className="text-sm sm:text-lg">
                ✔ Eligible contributions are tax-deductible
                <br />✔ Pay taxes later on withdrawals
              </span>
            </div>
            <div className="sm:w-4/5">
              <p className="text-black text-lg sm:text-2xl"> Roth IRA</p>
              <span className="text-sm sm:text-lg">
                ✔ Make after-tax contributions if eligible
                <br />✔ No taxes on qualified distributions or withdrawals
              </span>
            </div>
            {disclosure("More information")}
          </div>
        </div>
      </header>

      {/* access */}
      <div className="my-20 container-all max-w-[1000px] mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className="sm:w-2/4 text-4xl sm:text-6xl text-black">
          Invest for the retirement you want
        </p>
      </div>

      {/* next */}
      <div className="container-all max-w-[1000px] mx-auto">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={allocation} alt="" className="w-4/5 mx-auto" />
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <div>
              <Accordion
                question="Stocks, ETFs, and bonds"
                answer="With a self-directed IRA on Multicoin, you can access thousands of stocks, ETFs, and bonds to align your investing style with your retirement goals."
                id={1}
              />
            </div>
            <div>
              <Accordion
                question="Options trading"
                answer="
On Multicoin, you can trade options in your IRA—a feature many brokerages don't offer. Plus, you can earn rebates on your stock and ETF options trades."
                id={2}
              />
            </div>
            <div>
              <Accordion
                question="Investment Plans"
                answer="
Prefer to set it and forget it? You can schedule recurring contributions to a pre-made Investment Plan—or build your own with up to 20 assets."
                id={3}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 items-center max-w-[1000px] mx-auto">
        <div className="sm:w-4/5 sm:mx-auto">
          <p className="text-black text-4xl sm:text-5xl py-4">
            Earn up to $10,000 with each rollover or transfer
          </p>
          <span className="text-lg sm:text-2xl">
            If you roll over a 401(k) or transfer an IRA to Multicoin, you can
            earn a bonus of up to $10,000. We'll even cover any fees from your
            old brokerage.*
          </span>
          <div className="p-2 rounded-2xl border-1 border-slate-200 mt-4 w-fit flex gap-2 items-center">
            <button className="text-black text-lg ">Transfer an IRA</button>
          </div>
          <span className="block my-6">
            *Fees covered for transfers over $1,000, up to $100 per transfer.
            Additional terms apply.
          </span>
        </div>
        <div className=" sm:mx-auto">
          <img src={image2} alt="" className="rounded-lg " />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 items-center max-w-[1000px] mx-auto">
        <div className="sm:w-4/5 sm:mx-auto">
          <p className="text-black text-4xl sm:text-5xl py-4">
            Max out your IRA. Stress-free.
          </p>
          <span className="text-lg sm:text-2xl">
            With an IRA on Multicoin, you can set up recurring investments that
            stop once you hit the IRS limit, so you never have to worry about
            over-contributing.
          </span>
          <div className="p-2 rounded-2xl border-1 border-slate-200 mt-4 w-fit flex gap-2 items-center">
            <button className="text-black text-lg ">Transfer an IRA</button>
          </div>
          <span className="block my-6">
            *Fees covered for transfers over $1,000, up to $100 per transfer.
            Additional terms apply.
          </span>
        </div>
        <div className=" sm:mx-auto">
          <img src={image} alt="" className="rounded-lg " />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 items-center justify-center bg-slate-50 max-w-[1000px] mx-auto">
        <div className="sm:w-1/2 sm:mx-auto">
          <div>
            <img src={icon} alt="" />
          </div>
          <span className="text-black text-4xl sm:text-5xl py-4">
            Get built-in protections from SIPC
          </span>
        </div>
        <div className="sm:w-4/5 sm:mx-auto">
          <span>
            Our broker-dealer is a member of SIPC, which protects up to $500,000
            of the securities in your accounts, including $250,000 in claims for
            cash.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-4 py-4 sm:py-10 sm:border-t-1 sm:border-b-1 container-all container-inner border-slate-200 max-w-[1000px] mx-auto">
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
      <div className="my-10 w-4/5 max-w-[1000px] mx-auto ">
        <p className=" text-4xl sm:9xl text-black pb-4">
          Have questions? Find answers.
        </p>
      </div>

      {/* next */}
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="w-4/5 mx-auto">
            <Accordion
              question="Is the Multicoin app actually free?"
              answer="You can sign up for Multicoin and open a brokerage account with Open to the Multicoin Investing, Inc. with as little as $1. At Multicoin, our mission is to open the markets to all. Equity trades are commission-free, meaning $0 commission trading on self-directed individual cash brokerage accounts that trade U.S. listed securities placed online. We never charge any hidden service or convenience fees but other fees, such as wire transfer fees and paper statement fees, may apply. See Multicoin’s Disclosures to learn more. We believe everything you invest and earn should stay yours!"
              id={1}
            />
            <Accordion
              question="Do I earn a free slice of stock when I sign up for Multicoin?"
              answer="Let us help you get started! When you sign up for Multicoin, open an approved brokerage account and deposit funds into your account, you qualify to receive a free slice of stock. The value of the slice of stock you receive varies from $3 to $300 and the amount designated for each redemption is random. This offer is available to new users only. Visit Multicoin’s New User Free Stock Program to learn more about the terms and conditions"
              id={2}
            />
            <Accordion
              question="Can I share Multicoin with friends?"
              answer="Absolutely! When your friend uses your unique referral link to sign up for Multicoin, opens an approved brokerage account, and deposits funds into their account, then both you and your friend qualify for a free slice of stock. The value of the slice of stock varies from $3 to $300 and the amount designated for each redemption is random. Check out the Multicoin Referral Program to learn how you can earn free stock slices when you invite your friends to Multicoin and what terms and conditions apply."
              id={3}
            />
            <Accordion
              question="Is Multicoin Safe, Secure and Credible?"
              answer="Securities trading services are provided by Open to the Multicoin Investing, Inc., a wholly-owned subsidiary of Multicoin and a FINRA- and SEC-registered broker-dealer. Open to the Multicoin Investing, Inc. is also a Member of Securities Investor Protection Corporation (“SIPC”). SIPC protects securities customers of its members up to $500,000 (including $250,000 for claims for cash). More details, including an explanatory brochure upon request, are available at www.sipc.org. Multicoin is also fully backed by the investors behind Venmo and Facebook and we are located in New York City. If you ever have any questions or concerns, then please feel free to reach out to our friendly, knowledgeable, and fully Licensed & Registered Support Team"
              id={3}
            />
          </div>
        </div>
      </div>

      {/* next */}
      <div className="max-w-[1000px] mx-auto my-20">
        <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center container-all">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={hero} alt="" className="w-1/2 mx-auto " />
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
            Fund your account in
          </span>
          <span className="text-4xl md:text-6xl text-primary-very-light">
            5 minutes or less
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

export default Retirement;

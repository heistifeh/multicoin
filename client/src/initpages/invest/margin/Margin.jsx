import React from "react";
import illus from "./images/illus.webp";
import illus2 from "./images/illus2.webp";
import image from "./images/image.png";
import Navbar from "../../../components/Navbar";
import { FaDollarSign, FaPencilAlt } from "react-icons/fa";
import { RiLeafFill } from "react-icons/ri";
import { LuCylinder } from "react-icons/lu";
import { TbTrendingUp2 } from "react-icons/tb";
import { IoTrendingUpSharp } from "react-icons/io5";
import { CiCircleInfo } from "react-icons/ci";
import poster from "./images/poster.jpg";
import herobg from "../../../assets/images/herobg.png";
import Footer from "../../home/Footer";
import Accordion from "../../../components/Accordion";
const Margin = () => {
  const disclosure = (title) => {
    return (
      <>
        <div className="flex gap-2 items-center my-6 md:mt-4 hover:bg-slate-100 w-[fit-content] px-2 rounded-2xl border-1 border-slate-600 text-sm transition duration-300">
          <CiCircleInfo />
          <span className="hidden">{title}</span>
        </div>
      </>
    );
  };
  return (
    <div className="">
      <Navbar />
      <header className="relative rounded-none ">
        <div className="absolute top-0 bg-cover flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8    left-0 right-0 bg-gradient-to-tr from-black to-primary-dark ">
          <div className="invest md:w-4/5  sm:w-1/2 flex flex-col justify-center pt-20 px-8">
            <br />
            <br />
            <span className="text-sm text-icon font-bold pt-6 ">
              Now Available
            </span>
            <h1 className="text-white mb-2 text-4xl sm:text-7xl">
              Access industry-leading margin rates
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider text-white py-6">
              Increase your buying power on Multicoin with some of the
              industry’s lowest margin rates and more transparency at every
              step.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300 custom-shadow-dark">
                Get Started
              </button>
            </div>
          </div>
          <div className="relative invest-image md:w-4/5 sm:w-1/2 mt-20 ">
            <img src={illus} alt="" className="sm:w-4/6 h-[90%] mx-auto" />
            <div className="hidden lg:block absolute text-icon top-10  lg:left-120">
              ----- Buying power with margin
            </div>
            <div className="hidden lg:block absolute text-white top-80 lg:left-120">
              ----- Current Buying power
            </div>
          </div>
        </div>
      </header>

      <div className="py-60 lg:py-80"></div>
      <div className="py-20 lg:py-40"></div>

      <div className="container-all ">
        {/* leading texts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-2 my-10 sm:my-20 max-w-[1000px] mx-auto">
          <div className="sm:w-5/6 sm:mx-auto">
            <p className=" text-4xl sm:text-6xl text-black">
              More buying power. Lower rates.
            </p>
            <span className="block py-2">
              When you enable margin on Multicoin, you can amplify your
              investment potential with access to some of the lowest borrowing
              rates among US brokerages.
            </span>
          </div>
          <div className="sm:w-5/6 sm:mx-auto">
            {/* table */}
            <table className="px-4 sm:w-5/6 mx-auto text-text">
              <tbody className="w-5/6">
                <tr className="  bg-[#F0F3FF] border-1 border-primary">
                  <td className=" text-center flex justify-center  p-2">
                    <img src="/logo1.jpg" alt="" className="w-15 h-15 " />
                  </td>

                  <td className="border-primary border-1  p-2">5.50%</td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 border-t-primary p-4">
                    Interactive Brokers Lite
                  </td>
                  <td className=" border-1 border-slate-100 p-4 ">6.83%</td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4"> Fidelity</td>
                  <td className=" border-1 border-slate-100 p-4 ">8.25%</td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4">Vanguard</td>
                  <td className=" border-1 border-slate-100 p-4 ">10.75%</td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4">
                    Charles Schwab
                  </td>
                  <td className=" border-1 border-slate-100 p-4 ">11.825%</td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4">E*TRADE</td>
                  <td className=" border-1 border-slate-100 p-4 ">11.2%</td>
                </tr>
              </tbody>
            </table>
            <span className="block py-4 text-sm">
              Chart reflects margin rates shown on competitor websites as of
              11/11/24, exclusive of any special offers. Rates listed above are
              associated with each firm’s highest margin balance tier. Lower
              margin balances may be subject to higher rates. All rates above
              are subject to change without notice, and services vary by firm.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 bg-gradient-to-br from-black to-[#000E43] max-w-[1000px] mx-auto">
          <div className="relative invest-image sm:w-5/6 mt-20 h-full py-15 ">
            <img src={illus2} alt="" className="sm:w-5/6 h-full mx-auto" />
            <div className="hidden sm:block absolute text-icon top-0 left-16 text-center">
              starting rate <br />
              9.50%
            </div>
            <div className="hidden sm:block absolute text-icon bottom-55 left-95 text-center">
              Lowest rate <br />
              9.50%
            </div>
          </div>
          <div className="px-4 sm:w-5/6 mx-auto text-text">
            <p className="text-white text-3xl sm:text-5xl py-4">
              Our margin rates
            </p>
            {/* table */}
            <table className="px-4 sm:w-5/6  text-text">
              <tbody className="w-5/6">
                <tr>
                  <td className=" border-1 border-slate-100 p-4 text-white">
                    Margin Balance
                  </td>
                  <td className=" border-1 border-slate-100 text-white p-4 ">
                    Interest Rate
                  </td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4 text-white">
                    $250,000 or more
                  </td>
                  <td className=" border-1 border-slate-100 p-4 text-icon">
                    5.50%
                  </td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4 text-white">
                    $50,001 - $250,000
                  </td>
                  <td className=" border-1 border-slate-100 p-4 text-icon">
                    6.50%
                  </td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4 text-white">
                    $10,001 - $50,000
                  </td>
                  <td className=" border-1 border-slate-100 p-4 text-icon">
                    8.50%
                  </td>
                </tr>
                <tr>
                  <td className=" border-1 border-slate-100 p-4 text-white">
                    Up to $10,000{" "}
                  </td>
                  <td className=" border-1 border-slate-100 p-4 text-icon">
                    9.50%
                  </td>
                </tr>
              </tbody>
            </table>
            <span className="block pt-8 text-sm text-white">
              For margin balances above $1,000,000, email
              concierge@Multicoin.com to get the latest rates. .
            </span>
            <span className="text-sm text-white">
              *See Fee Schedule and margin rate disclosures below for additional
              details
            </span>
          </div>

          {/* leading texts
              <div className="my-5 flex flex-col gap-6 text-sm text-center sm:w-2/5 mx-auto">
                <span>
                  Each month, you can boost your rebate based on your trading volume
                  and keep that tier for the following month.
                </span>
              </div> */}
        </div>

        {/* informed */}
        <div className="my-20 sm:w-3/5 max-w-[1000px] mx-auto ">
          <span className="text-primary text-base font-semibold"></span>
          <p className=" text-4xl sm:text-6xl text-black pb-4">
            A more transparent margin experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-4 py-4 sm:py-10 sm:border-t-1 sm:border-b-1 border-slate-100 container-inner max-w-[1000px] mx-auto">
          <div className="sm:w-4/5">
            <div>
              <LuCylinder className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Easily check your margin balance
            </p>
            <span className="tracking-wider text-base sm:lg ">
              We keep you in the know about how much margin you have available,
              helping you avoid unexpected surprises and reduce the risk of a
              margin call.
            </span>
          </div>
          <div className="sm:w-4/5">
            <div>
              <TbTrendingUp2 className="text-primary text-2xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Know when you’re investing on margin
            </p>
            <span className="tracking-wider text-base sm:lg ">
              We’ll alert you when a trade moves you into a margin balance,
              helping you make informed decisions on every order and avoid
              unintended borrowing.
            </span>
          </div>
          <div className="sm:w-4/5">
            <div>
              <IoTrendingUpSharp className="text-primary text-xl" />
            </div>
            <p className="text-black text-lg sm:text-xl py-2">
              Monitor your margin risk factors
            </p>
            <span className="tracking-wider text-base sm:lg">
              From your margin management page, you track your margin status and
              risk levels with actionable insights to help you stay ahead of
              potential issues.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 max-w-[1000px] mx-auto">
          <div className="relative invest-image sm:w-5/6 mt-20 h-full py-15 bg-slate-50 ">
            <img src={image} alt="" className="sm:w-5/6 h-full mx-auto" />
          </div>
          <div className="px-4  mx-auto text-text flex flex-col justify-center">
            <p className="text-black text-3xl sm:text-5xl py-4">
              Expand your options trading playbook with margin
            </p>

            <span className="block pt-8 text-sm">
              Level 3+ options traders with margin investing enabled can access
              advanced strategies, including credit spreads, butterfly spreads,
              and iron condors.
            </span>
            {disclosure("Options Disclosures")}
          </div>
        </div>
        {/* informed */}
        <div className="my-10 w-4/5 max-w-[1000px] mx-auto  ">
          <p className=" text-4xl sm:9xl text-black pb-4">
            Frequently asked questions
          </p>
        </div>

        {/* next */}
        <div className="max-w-[1000px] mx-auto">
          <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
            <div className="w-4/5 mx-auto">
              <Accordion
                question="
What is margin investing?
"
                answer="
Margin investing on Multicoin enables you to increase your buying power by leveraging the stocks and bonds in your portfolio as collateral for a loan. When you invest on margin, you can capitalize on market opportunities and acquire more assets than with cash alone, potentially amplifying your gains."
                id={1}
              />
              <Accordion
                question="How do margin interest rates work on Multicoin?
"
                answer="
When you enable margin investing on Multicoin, we charge an interest rate that varies depending on your margin/debit balance and the upper limit of the Federal Funds Target Range. Rates are calculated using a set formula, which may change over time to reflect market conditions and regulatory updates."
                id={2}
              />
              <Accordion
                question="What are the requirements to qualify for margin investing?

"
                answer="
To qualify for margin investing on Multicoin, we consider several factors, including your trade history and brokerage account balance. It only takes a few minutes to apply."
                id={3}
              />
              <Accordion
                question="How do I get started with margin investing on Multicoin?
"
                answer="
If you’re already a Multicoin member, you can apply to start margin investing by navigating to your Settings and Privacy and selecting Margin Account. If you’re new to Multicoin, it only takes a few minutes to begin your account application. You can apply for margin investing once your account is active."
                id={4}
              />
            </div>
          </div>
        </div>

        {/* next */}
        <div className="max-w-[1000px] mx-auto my-20">
          <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center container-all container-inner">
            <div className="invest-image sm:w-1/2 bg-slate-50  mx-auto py-6">
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
        <div className="bg-black ">
          <div className="my-0 max-w-[1000px] mx-auto MY-40">
            <hr className="text-slate-400" />
            <div className="flex flex-col items-center justify-center mb-0 pt-40 pb-4 bg-black w-[90%] mx-auto text-center">
              <span className="text-4xl md:text-6xl text-white">
                Enable Margin Investing on Multicoin
              </span>
              <span className="text-4xl md:text-6xl text-primary-very-light"></span>
              <span className="text-4xl md:text-6xl text-primary-very-light"></span>
              <div className="flex items-center justify-center md:w-fit">
                <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold custom-shadow-dark">
                  Get started
                </button>
              </div>
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
    </div>
  );
};

export default Margin;

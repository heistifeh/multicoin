import React from "react";
import banner1 from "./images/banner-1.png";
import banner2 from "./images/banner-2.png";
import bond from "./images/bond.png";
import bondaccount from "./images/bond-account.png";
import treasuries from "./images/treasuries.png";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import { FaCheck } from "react-icons/fa6";
import herobg from "../../../assets/images/herobg.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import poster from "./images/poster.jpg";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import Accordion from "../../../components/Accordion";
import Footer from "../../../initpages/home/Footer.jsx";
// import { IoShieldCheckmarkOutline } from "react-icons/io5";

const Hyca = () => {
  return (
    <div className="container-all">
      <Navbar />
      <div className="">
        <div className="py-20 flex flex-col justify-center items-center sm:w-2/3 sm:mx-auto">
          <span className="text-black text-4xl text-center sm:text-6xl my-6">
            Earn an industry-leading
          </span>
          <div className="flex border-1 border-primary p-2 rounded-lg">
            <h1 className="text-9xl text-primary">4.1</h1>
            <div className="text-8xl text-primary">%</div>
            <span className=" p-0 m-0 text-2xl text-primary">APY*</span>
          </div>

          <span className="text-sm text-primary-very-light font-bold py-4">
            Zero fees. No subscription.
          </span>
          <span className="block sm:w-4/5 py-5 sm:mx-auto text-center ">
            Make your savings work harder with a high-yield cash account on
            Public. Right now, you can earn 4.1% APY*—one of the highest rates
            in the market.
          </span>
          <button className="cursor-pointer text-white  bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold custom-shadow">
            Sign up
          </button>
          <span className="text-center text-black py-8">
            *Rate subject to change.
            <Link className="text-primary-very-light ml-2">
            
            </Link>
          </span>
        </div>
      </div>

      {/* banner */}
      {/*  */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 py-30 gap-4 bg-gradient-to-tr from-[#000F41] to-primary sm:h-fit ">
        <div className="sm:w-2/3 sm:mx-auto flex flex-col justify-center items-center">
          <p className="text-primary-very-light text-3xl sm:text-5xl">
            All of the Interest.
          </p>
          <p className="text-white text-3xl sm:text-5xl">None of the fees.</p>
        </div>
        <div className="sm:w-6/6 sm:mx-auto z-10">
          <ul className="text-white">
            <li className="flex gap-2 items-center my-6 md:mt-4">
              <FaCheck className="text-primary-very-light" />
              <span>No fees</span>
            </li>
            <li className="flex gap-2 items-center my-6 md:mt-4">
              <FaCheck className="text-primary-very-light" />
              <span>No subscription</span>
            </li>
            <li className="flex gap-2 items-center my-6 md:mt-4">
              <FaCheck className="text-primary-very-light" />
              <span>No minimum balance requirements</span>
            </li>
            <li className="flex gap-2 items-center my-6 md:mt-4">
              <FaCheck className="text-primary-very-light" />
              <span>No maximum balance limits</span>
            </li>
            <li className="flex gap-2 items-center my-6 md:mt-4">
              <FaCheck className="text-primary-very-light" />
              <span>Unlimited transfers and withdrawals</span>
            </li>
          </ul>
        </div>
        <img
          src={banner1}
          alt=""
          className="absolute inset-0 w-full h-full bottom-0 left-0  object-center"
        />
      </div>

      {/* access your cash whenever */}
      <div className="grid grid-cols-1 sm:grid-cols-2 py-30 gap-4 bg-slate-50 my-10 sm:my-20 max-w-[1000px] mx-auto">
        <div className="sm:w-2/3 sm:mx-auto">
          <BsFillLightningChargeFill className="bg-slate-200 text-primary text-2xl my-4" />
          <p className="text-black text-3xl sm:text-5xl">
            Access your cash. Whenever.
          </p>
        </div>
        <div className="  sm:mx-auto flex items-center">
          Withdrawing from your high-yield cash account is as easy as making a
          deposit. There are no fees or limits to how often you can access your
          cash.
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 bg-slate-50 my-10 sm:my-20 max-w-[1000px] mx-auto">
        <div className="sm:w-4/5 sm:mx-auto">
          <IoShieldCheckmarkOutline className="bg-slate-200 text-primary text-2xl my-4" />
          <p className="text-black text-3xl sm:text-5xl">
            Get <span className="text-primary">20x</span> the standard <br />{" "}
            FDIC coverage <sup className="m-0 p-0">3</sup>
          </p>
        </div>
        <div className=" sm:mx-auto flex items-center">
          Withdrawing from your high-yield cash account is as easy as making a
          deposit. There are no fees or limits to how often you can access your
          cash.
        </div>
      </div>

      {/* Discover our suite */}
      <div className="my-20 text-center sm:w-2/5 sm:mx-auto max-w-[1000px] mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl  text-black text-center pb-4">
          Looking for more ways to generate yield?
        </p>
        <p className=" text-lg text-center pb-4">
          Discover more yield-generating assets on Public.
        </p>
      </div>

      {/* next */}
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col-reverse mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-2/3 bg-slate-50  mx-auto py-6">
            <img src={bond} alt="" className="w-4/5 mx-auto " />
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                Bonds
                <span className="text-primary text-base font-semibold ml-2"></span>
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                Discover the modern way to find, evaluate, and buy corporate,
                Treasury, and municipal bonds with an investing experience
                designed this century.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image sm:w-2/3 bg-slate-50  mx-auto py-6">
            <img src={bondaccount} alt="" className="w-4/5 mx-auto " />
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                Bond Account
                <span className="text-primary text-base font-semibold ml-2"></span>
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                Maximize your return with a diversified portfolio of corporate
                bonds that generate a 6.7% yield.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image sm:w-2/3 bg-slate-50  mx-auto py-6">
            <img src={treasuries} alt="" className="w-4/5 mx-auto " />
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                Bond Account
                <span className="text-primary text-base font-semibold ml-2">
                  6.6%
                </span>
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                Balance risk and return with a diversified portfolio of
                corporate bonds that generate a 6.6%*** yield.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
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
              question="What is better than a high-yield savings account?
"
              answer="A High-Yield Cash Account on Public can outpace most high-yield savings accounts with its industry-leading 4.1% APY.* Plus you get 20x the standard FDIC insurance."
              id={1}
            />
            <Accordion
              question="Is it worth putting money into a high-yield savings account?"
              answer="When you move your money into a High-Yield Cash Account on Public, you can secure an industry-leading 4.1% APY* with no subscription required."
              id={2}
            />
            <Accordion
              question="Do you pay taxes on a high-yield savings account?
"
              answer="The income you generate from a High-Yield Cash Account is taxed at a federal and state level—just like a traditional savings account."
              id={3}
            />
            <Accordion
              question="Is there a downside to a high-yield savings account?
"
              answer="Beyond its industry-leading 4.1% APY*, a High-Yield Cash Account on Public also has zero fees and 20x the standard FDIC insurance."
              id={3}
            />
            <Accordion
              question="How much will $10,000 make in a high-yield savings account?
"
              answer="
A high-yield cash account on Public generates an industry-leading 4.1% APY*. With a $10,000 investment, you could earn $522** over 12 months."
              id={4}
            />
          </div>
        </div>
      </div>

      {/* next */}
      <div className="max-w-[1000px] mx-auto my-20">
        <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center">
          <div className="invest-image sm:w-1/2 bg-slate-50  mx-auto py-6">
            <img src={poster} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="w-1/2">
            <div className="invest  sm:w-2/3 mb-6 flex flex-col justify-center ">
              <h1 className=" my-2 font-bold text-lg  text-black">
                Have additional questions Stocks on Public?
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
            Build Your Portfolio with Multicoin
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

export default Hyca;

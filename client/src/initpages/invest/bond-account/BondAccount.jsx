import React from "react";
import Navbar from "../../../components/Navbar";
import bondaccount from "../bond-account/images/bond-account.png";
import step1 from "../bond-account/images/step-1.png";
import step2 from "../bond-account/images/step-2.png";
import acc1 from "../bond-account/images/acc-1.png";
import acc2 from "../bond-account/images/acc-2.png";
import acc3 from "../bond-account/images/acc-3.png";
import rateRaise from "../bond-account/images/rate-raise-1.png";
import rateCut from "../bond-account/images/rate-cut-1.png";
import yieldAcc from "../bond-account/images/yield.png";
import herobg from "../../../assets/images/herobg.png";
import { FaCheck } from "react-icons/fa6";
import { IoIosHeart } from "react-icons/io";
import { FaFlagUsa } from "react-icons/fa";
import AccordionBond from "../../../components/AccordionBond";
import { Link } from "react-router-dom";

import Footer from "../../home/Footer.jsx";
const BondAccount = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black">
        <div className="py-20 flex flex-col justify-center items-center sm:w-1/3 sm:mx-auto">
          <span className="text-white">New Bond Account</span>
          <div className="flex">
            <h1 className="text-9xl text-white">6.6</h1>
            <div className="h-full">
              <div className="text-8xl  text-icon">%</div>
              <div className="text-icon p-0 m-0 text-2xl">yield</div>
            </div>
          </div>
          <span className="text-3xl text-white">Locked in.</span>
          <span className="text-center text-white py-8">
            Discover a new way to invest in bonds and earn a 6.6%* yield with
            regular interest payments.
          </span>
          <button className="cursor-pointer text-white  bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold ">
            Lock in your yield
          </button>
        </div>
        <span className="block sm:w-4/5 py-5 sm:mx-auto ">
          *This yield is the current average, annualized yield to worst (YTW)
          across all ten bonds in the Bond Account, before fees. Because the YTW
          of each bond is a function of that bond’s market price, which can
          fluctuate, your yield at time of purchase may be different from the
          yield shown here and YTW is not “locked in” until the time of
          purchase. A bond’s YTW is not guaranteed; you can earn less than that
          YTW if you do not hold the bonds to maturity or the issuer defaults.
          <Link to={"/"}>
            <span className="underline">Learn more.</span>
          </Link>
        </span>
      </div>
      {/* what is Bond account */}
      {/* informed */}
      <div className="my-20 text-center sm:w-2/5 sm:mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl sm:9xl text-black text-center pb-4">
          What is a Bond Account?
        </p>
        <span className="text-base tracking-wider">
          Now, you can invest in a diversified portfolio of investment-grade and
          high-yield corporate bonds that earn yield over an extended period of
          time.
        </span>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col-reverse mt-10 sm:mt-0 sm:flex-row-reverse justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={bondaccount} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="w-1/2">
            <div className="invest  sm:w-1/2 mb-6 flex flex-col justify-center">
              <h1 className=" my-2 font-bold text-xl sm:text-xl  text-black">
                Lock in your yield
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                Unlike a High-Yield Cash Account, the yield of a Bond Account is
                locked in at the time of purchase. That means you’ll receive
                that yield until the first of the ten bonds matures or is
                called. 1
              </span>
            </div>
            <div className="invest  sm:w-1/2 mb-6 flex flex-col justify-center">
              <h1 className=" my-2 font-bold text-xl sm:text-xl  text-black">
                Skip the sky-high minimums
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                With a minimum initial $1,000 deposit, you can invest in a
                portfolio of ten bonds. Many bonds on other platforms are only
                available in investment sizes of $10k or more.
              </span>
            </div>
            <div className="invest  sm:w-1/2 mb-6 flex flex-col justify-center">
              <h1 className=" my-2 font-bold text-xl sm:text-xl  text-black">
                Receive regular interest payments
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                While you are invested in a Bond Account, you’ll receive 20
                interest payments throughout the year from your diversified
                portfolio of ten corporate bonds.2
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 flex flex-col gap-6 text-sm">
        <span>
          A Bond Account is a self-directed brokerage account with Public
          Investing, member FINRA/SIPC. Deposits into this account are used to
          purchase 10 fractional investment-grade and high-yield bonds in equal
          par value allocations. All bond investments are subject to risk,
          including risk of default. High-yield bonds carry greater risk of
          default than higher rated bonds.
          <span className="text-sm text-primary-very-light">Learn more</span>
        </span>
        <span>
          1. Your YTW is not “locked in” until the time of purchase. A bond’s
          YTW is not guaranteed; you can earn less than that YTW if you do not
          hold the bonds to maturity or the issuer defaults. When a bond in the
          bond account matures, is called, or defaults, the YTW of the remaining
          bonds in your Bond Account will adjust accordingly. Please refer to
          your portfolio for specific details.
        </span>
        <span>
          2. As of today, the ten bonds in the Bond Account each pay interest
          semi-annually, and each bond has a different payment schedule.
          Assuming the issuers do not miss payments or otherwise default, if you
          hold all ten bonds, you will receive 20 interest payments a year.
          Interest payments will not be evenly distributed.
        </span>
      </div>
      {/* informed */}
      <div className="my-20 text-center sm:w-2/5 sm:mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl sm:9xl text-black text-center pb-4">
          Lock in your 6.6%* yield in two steps
        </p>
        <span className="text-base tracking-wider">
          Now, you can invest in a diversified portfolio of investment-grade and
          high-yield corporate bonds that earn yield over an extended period of
          time.
        </span>
      </div>
      {/* next */}
      <div>
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8 bg-slate-100 items-center">
          <div className="invest-image sm:w-1/2   mx-auto py-6">
            <img src={step1} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="invest-image sm:w-1/2   mx-auto py-6">
            <img src={step2} alt="" className="w-1/2 mx-auto " />
          </div>
        </div>
      </div>
      {/* steps */}
      <div className="flex flex-col sm:flex-row justify-between my-10">
        <div className="flex gap-4">
          <div className=" text-black border-1 rounded-full w-10 h-8 text-center">
            1
          </div>
          <div>
            <p className="text-black">Deposit cash</p>
            <span>
              Your deposits are allocated to a portfolio of ten investment-grade
              and high-yield corporate bonds.
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className=" text-black border-1 rounded-full w-10 h-8 text-center">
            2
          </div>
          <div>
            <p className="text-black">Get regular payments</p>
            <span>
              You'll receive 20 regular payments throughout the year.1 Once your
              income reaches ~$100, it is reinvested at the then-current yield.
            </span>
          </div>
        </div>

        <div></div>
      </div>
      <div className="my-10 flex flex-col gap-6 text-sm">
        <span>
          *This yield is the current average, annualized yield to worst (YTW)
          across all ten bonds in the Bond Account, before fees. YTW is not
          “locked in” until the time of purchase. A bond’s YTW is not
          guaranteed; you can earn less than that YTW if you do not hold the
          bonds to maturity or the issuer defaults.
          <span className="text-sm text-primary-very-light">Learn more</span>
        </span>
        <span>
          1. As of today, the ten bonds in the Bond Account each pay interest
          semi-annually, and each bond has a different payment schedule.
          Assuming the issuers do not miss payments or otherwise default, if you
          hold all ten bonds, you will receive 20 interest payments a year.
          Interest payments will not be evenly distributed.
        </span>
      </div>
      <div>
        <div className="w-[98%] mx-auto flex flex-col md:flex-row justify-between items-center my-16 ">
          <div className="leading  md:w-2/3 flex flex-col justify-center text-center md:text-left md:justify-start">
            <span className="text-4xl md:text-6xl text-black">
              We’re here to help.
            </span>
            <span className="text-4xl md:text-6xl">Not upsell.</span>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center my-4 md:justify-start">
              <div className="flex flex-col gap-2 justify-center my-4">
                <FaFlagUsa className="text-black mx-auto" />
                <span className="text-black">US-BASED</span>
              </div>
              <div className="flex flex-col gap-2 justify-center my-4">
                <FaCheck className="text-black mx-auto" />
                <span className="text-black">REGISTERED</span>
              </div>
              <div className="flex flex-col gap-2 justify-center my-4">
                <IoIosHeart className="text-red-500 mx-auto" />
                <span className="text-black">ACTUALLY CARES</span>
              </div>
            </div>

            <span className="text-lg  my-4 w-2/3 md:w-full mx-auto text-center md:text-left md:mx-0">
              Our <span className="text-black font-bold">award-winning</span>
              customer support team of financial representatives is here to help
              you with everything from transferring a portfolio to understanding
              your account features.
            </span>
          </div>
        </div>

        {/* big image */}

        {/* <div className="relative img-alpha mt-0" style={{ width: "100%" }}>
          <img src={herobg} alt="" className="h-[400px] w-full" />
        </div> */}
      </div>
      {/* big image footer */}
      <div className="bg-black">
        <div className="py-20 flex flex-col justify-center items-center sm:w-2/3 sm:mx-auto">
          <span className="text-white">New Bond Account</span>
          <div className="flex">
            <span className="text-4xl sm:text-5xl lg:text-9xl text-white">
              Earn
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-9xl text-white ml-4">
              6.6
            </h1>
            <div className="h-full">
              <div className="text-4xl sm:text-5xl lg:text-8xl text-icon">
                %
              </div>
              <div className="text-icon p-0 m-0 text-2xl invisible">yield</div>
            </div>
          </div>
          <span className=" text-text text-4xl sm:text-6xl text-center">
            even if the Fed cuts rates.
          </span>
          <span className="text-left py-8 text-white px-4">
            The Fed has signaled potential rate cuts this year, and market
            expectations are for cuts of 1% or more by year-end. Plus, the
            market has priced in additional cuts in 2025. That means bond yields
            could go down. Soon.
          </span>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <div>
              <img src={rateCut} alt="" className="h-1/2 mb-4" />
              <p className="text-center text-white">
                Bond prices could rise and yields may fall. Investors may opt to
                lock in higher yields by buying bonds before an anticipated rate
                cut.
              </p>
            </div>
            <div>
              <img src={rateRaise} alt="" className="h-1/2 mb-6" />
              <p className="text-center text-white p-4">
                Bond prices could fall and yields may rise. Investors may choose
                to wait until rates increase before purchasing bonds.
              </p>
            </div>
          </div>
          <p className="text-white text-center my-4">
            The good news? With a Bond Account on Public, you can lock in the
            yield from 10 bonds until they mature. The first maturity in the
            account is in 2028—giving you four years of 6.6%* yield from your
            initial investment.
          </p>

          <p className="text-white text-4xl my-6 font-semibold px-4">
            Protect your earnings from rate cuts
          </p>
          <p className="text-white px-4">
            Locking in your 6.6%* yield before the Fed's potential rate cuts can
            have a significant impact on the earnings you generate over the next
            4–5 years.
          </p>
          <button className="cursor-pointer text-white  bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold  mt-6">
            Lock in your yield
          </button>
        </div>
        <span className="block sm:w-4/5 py-5 sm:mx-auto px-4">
          *This yield is the current average, annualized yield to worst (YTW)
          across all ten bonds in the Bond Account, before fees. Because the YTW
          of each bond is a function of that bond’s market price, which can
          fluctuate, your yield at time of purchase may be different from the
          yield shown here and YTW is not “locked in” until the time of
          purchase. A bond’s YTW is not guaranteed; you can earn less than that
          YTW if you do not hold the bonds to maturity or the issuer defaults.
          <Link to={"/"}>
            <span className="underline">Learn more.</span>
          </Link>
        </span>
        <span className="block sm:w-4/5 py-5 sm:mx-auto px-4 ">
          While corporate bond yields should fall in reaction to a Federal
          Reserve rate cut, we cannot know whether that will be true of the
          bonds in the Bond Account, how quickly bond yields will respond, or
          how much they will decline.
        </span>
      </div>
      {/* explore the keys stats */}
      {/* what is Bond account */}
      {/* informed */}
      <div className="w-[80%] mx-auto">
        <div className="my-20 text-center sm:w-2/5 sm:mx-auto">
          <span className="text-primary text-base font-semibold"></span>
          <p className=" text-4xl sm:9xl text-black text-center pb-4">
            Explore the key stats
          </p>
          <span className="text-base tracking-wider text-black">
            Investing in a portfolio of corporate bonds from various industries
            and with different credit ratings can help balance risk and return.
          </span>
        </div>
        <div className="w-4/5 mx-auto sm:w-[90%] border-1 border-slate-200 rounded-lg">
          <div className="bg-slate-100 py-4 mb-2 px-4">
            <span className="text-base">
              Bond Account
              <span className="text-primary-very-light ml-4">6.6% Yield*</span>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 px-4 ">
            <div className="my-4 sm:my-0">
              <p className="text-sm">Yield</p>
              <p className="text-black text-lg">6.6%*</p>
            </div>
            <div className="my-4 sm:my-0">
              <p className="text-sm">Avg Coupon</p>
              <p className="text-black text-lg">6.07%</p>
            </div>
            <div className="my-4 sm:my-0">
              <p className="text-sm">Avg Rating</p>
              <p className="text-black text-lg">BBB/BBB-</p>
            </div>
            <div className="my-4 sm:my-0">
              <p className="text-sm">Avg Duration</p>
              <p className="text-black text-lg">4.33</p>
            </div>
            <div className="my-4 sm:my-0">
              <p className="text-sm">Ann. income</p>
              <p className="text-black text-lg">$60.68</p>
            </div>
          </div>
        </div>
        {/* next */}

        {/* leading texts */}
        <div className="my-10 flex flex-col gap-6 text-sm">
          <span>
            The yields shown below correspond to each individual bond’s current
            yield. The Bond Account’s overall yield equals the current average,
            annualized yield to worst (YTW) across all ten individual bonds in
            the Bond Account, before fees. Your set of 10 bonds will be
            established at the time you submit your Bond Account purchase and
            may be different from what is shown here. The Bond Account is not a
            recommendation of its overall set of bonds, or its individual
            holdings or default allocations. You are solely responsible for
            determining whether to purchase or sell the bonds in the Account.
            <span className="text-sm text-primary-very-light">Learn more</span>
          </span>
        </div>
        <div className="mx-auto">
          <AccordionBond />
        </div>
      </div>

      {/* next */}
      <div className="mt-10 sm:mt-20">
        <div className="flex flex-col-reverse mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={yieldAcc} alt="" className="w-2/3 mx-auto " />
          </div>
          <div className="w-1/2">
            <div className="invest  sm:w-2/3 mb-6 flex flex-col justify-center  mx-auto">
              <span className="text-primary text-base font-semibold">
                Income Hub
              </span>
              <h1 className=" my-2 font-bold text-xl sm:text-5xl  text-black">
                Chart your income journey
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                It's easy to monitor your income sources on Public with our
                monthly breakdown of your earnings from each asset class,
                including your Bond Account.
              </span>
              <div className="mt-6">
                <div className="flex gap-4">
                  <FaCheck className="text-primary-very-light text-2xl" />
                  <span>
                    View a monthly breakdown of all your income sources.
                  </span>
                </div>
                <div className="flex gap-4">
                  <FaCheck className="text-primary-very-light text-2xl" />
                  <span>
                    Icon Check Blue Refine your view by filtering by asset
                    class.
                  </span>
                </div>
                <div className="flex gap-4">
                  <FaCheck className="text-primary-very-light text-2xl" />
                  <span>
                    Icon Check Blue See your estimated earnings for the next 12
                    months.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover our suite */}
      <div className="my-20 text-center sm:w-2/5 sm:mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl sm:9xl text-black text-center pb-4">
          Discover our suite of yield accounts
        </p>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col-reverse mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="invest-image sm:w-2/3 bg-slate-100  mx-auto py-6">
            <img src={acc1} alt="" className="w-4/5 mx-auto " />
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                High-Yield Cash Account
                <span className="text-primary text-base font-semibold ml-2">
                  4.1%
                </span>
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                Earn an industry-leading 4.1% APY* on your cash with no fees.
                Plus, get up to $5M FDIC insurance.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image sm:w-2/3 bg-slate-100  mx-auto py-6">
            <img src={acc2} alt="" className="w-4/5 mx-auto " />
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                Treasury Account
                <span className="text-primary text-base font-semibold ml-2">
                  4.24%
                </span>
              </h1>
              <span className="text-basesm:text-xl tracking-wide text-slate-600">
                Invest in US Treasury bills with a 4.24%** yield, and pay no
                state or local taxes on your earnings.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image sm:w-2/3 bg-slate-100  mx-auto py-6">
            <img src={acc3} alt="" className="w-4/5 mx-auto " />
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

      {/* leading texts */}
      <div className="my-10 flex flex-col gap-6 text-sm">
        <span>
          *Rate as of 9/19/2024. APY is variable and subject to change **Yield
          is an annualized 26-week T-bill rate (as of 8/12/2024) when held to
          maturity. Rate is gross of fees and is subject to change ***This yield
          is the current average, annualized yield to worst (YTW) across all ten
          bonds in the Bond Account, before fees. Because the YTW of each bond
          is a function of that bond’s market price, which can fluctuate, your
          yield at time of purchase may be different from the yield shown here
          and your YTW is not “locked in” until the time of purchase. A bond’s
          YTW is not guaranteed; you can earn less than that YTW if you do not
          hold the bonds to maturity or the issuer defaults.
          <span className="text-sm text-primary-very-light">Learn more</span>
        </span>
      </div>

      {/* informed */}
      <div className="my-20 text-center sm:w-2/5 sm:mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl sm:9xl text-black text-center pb-4">
          What else do I need to know?
        </p>
      </div>

      {/* next */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-3 mt-10 sm:mt-0 justify-between gap-4">
          <div className="invest-image  bg-slate-100  mx-auto py-6">
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                How do I invest in a Bond Account on Public?
              </h1>
              <span className="text-sm tracking-wide text-slate-600">
                You can find the Bond Account alongside other yield accounts
                (Treasury and High Yield Cash) on the Public app or on the web.
                You can fund the account from your existing buying power or from
                an external account with an investment of $1,000 or more. Each
                investment of $1,000 will be used to purchase a portfolio of ten
                fractional investment-grade and high-yield bonds in equal par
                value allocations. You may make a one-time investment into the
                Bond Account or schedule recurring investments on a weekly or
                monthly basis.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image  bg-slate-100  mx-auto py-6">
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                What are the benefits and risks of investing in a Bond Account?
              </h1>
              <span className="text-sm tracking-wide text-slate-600">
                One key benefit of a Bond Account is locking in your yield at
                time of purchase. Unlike a savings account or other variable
                rate account, your yield for each bond is fixed at the time of
                purchase, though the return may be affected if you do not hold a
                bond to maturity, or if the issuer defaults or calls the bond.
                Other benefits include the ability to invest in ten bonds for
                $1,000, where typically individual bonds have minimums of
                $1,000+. However, fractional bonds carry some risks, which can
                be found here. Other risks include the risk of default,
                liquidity risk, and inflation risk (if inflation outpaces the
                fixed income from a bond, this may reduce the real return on
                investment.)
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image  bg-slate-100  mx-auto py-6">
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                How does the Bond Account compare to other yield accounts?
              </h1>
              <span className="text-sm tracking-wide text-slate-600">
                Compared to Public’s High Yield Cash Account and Treasury
                Account, a Bond Account generates a higher yield, but comes with
                higher risk of default and illiquidity. Like a Treasury Account
                on Public, the Bond Account reinvests interest at the current
                rate automatically once it hits a minimum threshold (in this
                case ~$100). Similar to other yield accounts on Public, cash in
                a Bond Account may be withdrawn at any time, but there is a
                small fee if bonds need to be sold to do so ($0.50 per $100).
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image  bg-slate-100  mx-auto py-6">
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                What happens to my investment if interest rates change?
              </h1>
              <span className="text-sm tracking-wide text-slate-600">
                Once you are invested in a Bond Account, your yield on that
                investment is locked in unless a bond in the account defaults,
                is called, or is sold. That means that even if interest rates
                fall (i.e. the Federal Reserve cuts rates), your Bond Account
                yield for deposits already made will not change. Note that the
                Bond Account yield will fluctuate daily and subsequent deposits
                into the account may be at different yields than your original
                deposit.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image  bg-slate-100  mx-auto py-6">
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                Are there any fees for the Bond Account?
              </h1>
              <span className="text-sm tracking-wide text-slate-600">
                Once you are invested in a Bond Account, your yield on that
                investment is locked in unless a bond in the account defaults,
                is called, or is sold. That means that even if interest rates
                fall (i.e. the Federal Reserve cuts rates), your Bond Account
                yield for deposits already made will not change. Note that the
                Bond Account yield will fluctuate daily and subsequent deposits
                into the account may be at different yields than your original
                deposit.
              </span>
              <Link>
                <span className="text-sm text-primary-very-light mt-4">
                  Learn more
                </span>
              </Link>
            </div>
          </div>
          <div className="invest-image  bg-slate-100  mx-auto py-6">
            <div className="invest  p-4 flex flex-col justify-center mx-auto">
              <h1 className=" my-2 font-bold text-xl sm:text-lg  text-black">
                How is my Bond Account protected?
              </h1>
              <span className="text-sm tracking-wide text-slate-600">
                A Bond Account at Public is a separate account from your
                brokerage account but cash and securities are combined for SIPC
                coverage limits. SIPC coverage protects assets up to a total of
                $500,000, of which $250,000 applies for cash. There are
                additional terms and limits on SIPC coverage that aren’t
                discussed here. For full details, please refer to www.SIPC.org
                and read more on our SIPC FAQ.
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
      <div className="my-20 text-center sm:w-2/5 sm:mx-auto">
        <span className="text-primary text-base font-semibold"></span>
        <p className=" text-4xl sm:9xl text-black text-center pb-4">
          Need help? Reach out.
        </p>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col-reverse mt-10 sm:mt-0 sm:flex-row-reverse justify-between gap-8">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={bondaccount} alt="" className="w-1/2 mx-auto " />
          </div>
          <div className="w-1/2">
            <div className="invest  sm:w-1/2 mb-6 flex flex-col justify-center">
              <h1 className=" my-2 font-bold text-base sm:text-base  text-black">
                Have additional questions about Bond Account on Public?
              </h1>
              <span className="text-sm sm:text-base tracking-wide text-slate-600">
                Our US-based customer experience team has FINRA-licensed
                specialists standing by to help.
              </span>
              <Link>
                <span className="block text-base text-primary-very-light mt-8">
                  Contact our award-winning team
                </span>
              </Link>
            </div>
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

export default BondAccount;

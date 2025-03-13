import React from "react";
import Navbar from "../../../components/Navbar";
import position from "./images/position.png";
import book from "./images/book.png";
import sp from "./images/sp.png";
import alpha from "./images/alpha.png";
import balance from "./images/balance.png";
import bonds from "./images/bonds-more.png";
import Accordion from "../../../components/Accordion";
import { FaArrowRight } from "react-icons/fa";
import Footer from "../../home/Footer";
import herobg from "../../../assets/images/herobg.png";
const Bonds = () => {
  return (
    <div>
      <Navbar />
      <div className="sm:w-7/8 mx-auto text-center">
        <h1 className="text-4xl sm:text-7xl  mt-12 mb-4 text-black ">
          Find, evaluate, and buy bonds.
        </h1>
        <h2 className="text-4xl sm:text-7xl  my-6 text-primary ">
          Designed this century.
        </h2>
        <span className="text-sm sm:text-2xl">
          Buy corporate, Treasury, and municipal bonds on the investing platform
          that brings fixed income into the 21st century.
        </span>
        <div>
          <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold ">
            Sign Up
          </button>

          <div className="mt-6 mb-2">
            <img src={position} className="w-full rounded-lg" alt="" />
          </div>
        </div>
      </div>

      <div className="container-inner my-20">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8">
          <div className="sm:w-2/3 text-4xl sm:text-6xl text-black">
            <h2>Thousands of unique bonds. More ways to invest.</h2>
          </div>
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <div className="mb-10">
              <Accordion
                question="Corporate bonds"
                answer="Lend money to the companies you believe in with corporate bonds, which typically offer higher interest rates in return for taking on additional risk."
                id={1}
              />
            </div>
            <div>
              <Accordion
                question="Treasury bonds"
                answer="Support public spending with Treasury bonds, which are backed by the full faith and credit of the US government and may offer tax advantages, too."
                id={2}
              />
            </div>
            <div>
              <Accordion
                question="Fractional bonds"
                answer="Only Public offers a selection of 100+ bonds available to invest for as little as $100, and in any dollar increment."
                id={3}
              />
            </div>
            <div className="relative">
              <div className="absolute text-primary md:left-90 hidden ">
                New
              </div>
              <Accordion
                question="Bond Account"
                answer="
Lock in 6.9% yield* with a diversified set of investment grade and high-yield corporate bonds."
                id={4}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 container-inner">
        <span className="text-5xl sm:text-8xl text-black">
          We took everything you thought you knew about fixed income.
        </span>
        <span className="block my-4 text-5xl sm:text-9xl text-primary">
          And fixed it.
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 container-inner">
        <div className="sm:w-3/4 sm:mx-auto bg-slate-50">
          <img src={book} alt="" />
        </div>
        <div className="sm:w-5/6 sm:mx-auto">
          <p className="text-4xl sm:text-5xl text-black pb-6">
            Buy bonds for any dollar amount. Exclusively on Multicoin.
          </p>
          <span className="text-sm sm:text-2xl">
            Bonds typically have high minimum purchase prices, up to $50,000.
            Only Public lets you corporate and Treasury bonds for as little as
            $100 and in any increment.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 container-inner">
        <div className="sm:w-3/4 sm:mx-auto bg-slate-50">
          <img src={sp} alt="" />
        </div>
        <div className="sm:w-5/6 sm:mx-auto">
          <p className="text-4xl sm:text-5xl text-black pb-6">
            Discover a modern bond screening experience
          </p>
          <span className="text-sm sm:text-2xl">
            Our sophisticated screener lets you narrow down 40,000+ bonds to
            match your investment goals with the right yield, risk level, time
            horizon, and more.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 container-inner">
        <div className="sm:w-3/4 sm:mx-auto bg-slate-50">
          <img src={alpha} alt="" />
        </div>
        <div className="sm:w-5/6 sm:mx-auto">
          <p className="text-4xl sm:text-5xl text-black pb-6">
            Have a question about a bond? Just ask.
          </p>
          <span className="text-sm sm:text-2xl">
            We've built Alpha, our proprietary layer of artificial intelligence,
            right into the bond-screening experience. Go ahead: Ask any question
            about any bond.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 container-inner">
        <div className="sm:w-3/4 mx-auto bg-slate-50">
          <img src={balance} alt="" />
        </div>
        <div className="sm:w-5/6 sm:mx-auto">
          <p className="text-4xl sm:text-5xl text-black pb-6">
            See a live snapshot of any company’s financials
          </p>
          <span className="text-sm sm:text-2xl">
            It's never been easier to evaluate corporate bonds with a live
            snapshot of any company's financials, including debt-to-equity ratio
            and balance sheet data.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 bg-slate-50 items-center container-inner">
        <div className="sm:w-3/4 sm:mx-auto">
          <span className="text-sm text-primary">New</span>
          <p className="text-4xl sm:text-5xl text-black my-2 ">Bond Account</p>
          <span className="text-sm sm:text-xl">
            Looking to build a portfolio of bonds? With a Bond Account, you can
            invest in a diversified set of 10 bonds with every deposit. It’s a
            new way to invest in corporate bonds designed for a more streamlined
            experience.
          </span>
          <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold ">
            Learn more
          </button>
        </div>
        <div className="sm:w-5/6 sm:mx-auto">
          <img src={bonds} alt="" />
        </div>
      </div>

      <div className="">
        <span className="text-4xl sm:text-6xl text-black block w-4/5 mx-auto text-center">
          Get additional tax advantages with government bonds
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-20 gap-4 my-10 sm:my-20 container-inner bg-slate-50">
          <div className="sm:w-4/5">
            <p className="text-black text-lg sm:text-2xl">Treasury bonds</p>
            <span className="text-sm sm:text-lg">
              Interest earned from Treasury bonds is taxed at the federal level,
              but is exempt from both state and local taxes.
            </span>
            <div className="p-2 rounded-2xl border-1 border-slate-200 mt-4 w-fit flex gap-2 items-center">
              <button className="text-black text-lg ">Explore Bonds</button>
              <FaArrowRight />
            </div>
          </div>
          <div className="sm:w-4/5">
            <p className="text-black text-lg sm:text-2xl"> Municipal bonds</p>
            <span className="text-sm sm:text-lg">
              Coming soon Usually exempt from federal taxes and exempt from
              state taxes if bought in the state where you file taxes.
            </span>
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
              question="Why do companies issue corporate bonds?"
              answer="Companies issue corporate bonds to raise capital for various purposes, such as funding expansion, investing in new projects, or refinancing debt. Unlike selling company shares, issuing bonds allows them to secure funds without diluting ownership or ceding control. Bondholders receive periodic interest payments and the promise of repayment at maturity. Corporate bonds also offer tax advantages for companies compared to other forms of financing. Investors, in turn, seek to receive a steady income stream and a relatively secure investment, as bonds are backed by the company’s assets and repayment promise."
              id={1}
            />
            <Accordion
              question="How often do companies issue new corporate bonds?"
              answer="Companies issue new corporate bonds as needed to raise capital for specific projects, debt refinancing, or other financial requirements. It can range from several times a year to less often, depending on the company’s financial strategies and market conditions. Factors such as interest rates, economic conditions, and the company’s financial health influence when and how often they issue bonds."
              id={2}
            />
            <Accordion
              question="What is the difference between buying a corporate bond vs. buying stock in the same company?"
              answer="When you buy a corporate bond, you’re lending money to the company and become a creditor. In return, you receive regular interest payments and the promise of repayment at maturity, making it a relatively low-risk investment, though all investments involve risk. On the other hand, buying company stock means you own a portion of the company, which comes with the potential for capital gains but also greater risk as stock prices can fluctuate significantly. Investors turn to corporate bonds when seeking out predictable income, and stocks for ownership and potential for higher returns, which comes with greater volatility."
              id={3}
            />
            <Accordion
              question="Why do some investors use bonds within their portfolio strategies?"
              answer="Investors use bonds in their portfolio strategies for diversification, income, and risk management. Bonds provide a stable source of income through periodic interest payments. They can also act as a counterbalance to the volatility of stocks, enhancing portfolio stability. Diversifying with bonds can reduce overall risk as they often move differently than stocks in response to economic conditions. Additionally, bonds are crucial for preserving capital and meeting financial goals, making them a valuable component of a well-rounded investment portfolio. Retail investors use bonds as a way to balance the potential for higher returns from stocks while maintaining a safety net of steady income and reduced risk."
              id={3}
            />
            <Accordion
              question="What is the relationship between bond prices and bond yields?"
              answer="Bond prices and bond yields have an inverse relationship. When bond prices rise, bond yields fall, and vice versa. This inverse relationship is due to the fixed-interest payments bonds provide. If you buy a bond with a fixed coupon rate, and market interest rates drop, your bond becomes more attractive to investors, causing its price to rise. On the other hand, if market rates rise, your fixed-rate bond’s interest payments become less competitive, resulting in a lower price. This dynamic is crucial for investors, as it impacts the value of their bond holdings and the attractiveness of new bond purchases in changing interest rate environments."
              id={4}
            />
            <Accordion
              question="What is the yield curve and what does it signal about the bond market overall?"
              answer="The yield curve is a graphical representation of interest rates for bonds with different maturities. It typically slopes upward, with short-term rates lower than long-term rates. The shape of the yield curve conveys vital information about the bond market and the economy. A normal yield curve, with the long end showing higher yields, suggests a healthy economy. An inverted curve, with short-term rates higher than long-term rates, can indicate economic uncertainty or potential recession. A flat curve may signal an economic transition."
              id={5}
            />
            <Accordion
              question="What are bond ratings and why do they matter?"
              answer="Bond ratings are assessments of a bond’s creditworthiness and risk issued by rating agencies like Moody’s and S&P, and they can help investors gauge the safety and reliability of a bond investment. Ratings range from high (e.g., AAA) for the lowest risk to lower ratings (e.g., BB or below) indicating higher risk. Investors use these ratings to make informed decisions, balancing risk and return. Lower-rated bonds offer higher potential returns but come with increased risk, including the possibility of default. Bond ratings provide a valuable reference point for investors to align their risk tolerance and investment goals with the appropriate bonds in their portfolios."
              id={6}
            />
            <Accordion
              question="What is the difference between bonds with fixed-rate corporate bonds vs. variable-rate corporate bonds"
              answer="Fixed-rate bonds offer a set interest rate throughout the bond’s term, providing predictability but potentially lower returns if market rates rise. In contrast, variable-rate bonds have interest rates that adjust periodically. This adjustment makes them more responsive to changing market rates, offering the potential for higher returns if rates increase. Investors choosing between them should consider their risk tolerance and the prevailing interest rate environment, as fixed-rate bonds provide stability, while variable-rate bonds offer flexibility and the chance for greater income in rising-rate environments."
              id={7}
            />
            <Accordion
              question="What is the difference between Treasury bonds and Treasury bills?"
              answer="
The key difference between Treasury bonds and Treasury bills is their maturity. Treasury bonds have longer maturities, typically ranging from 10 to 30 years, making them ideal for long-term investors seeking a steady income stream and a safe haven for capital. In contrast, Treasury bills, often referred to as T-bills, have short-term maturities, typically less than one year, making them a preferred choice for investors looking for a secure, short-term parking place for their money. Both are considered extremely low-risk as they are backed by the full faith and credit of U.S. government."
              id={8}
            />
            <Accordion
              question="What happens if you sell a bond before its maturity date?"
              answer="If you sell a bond before its maturity date, you’ll encounter the bond’s market price, which may be higher or lower than its face value. The price fluctuates due to changes in interest rates, credit risk, and market demand. Selling a bond before maturity can result in capital gains if you sell it at a price higher than you paid, or capital losses if you sell it for less. It provides flexibility but also exposes you to potential gains or losses, influenced by the prevailing interest rate environment and the bond’s creditworthiness. Consider these factors when deciding to sell a bond before its maturity."
              id={9}
            />
            <Accordion
              question="How are bond yields taxed?"
              answer="
The tax implications of bond yields vary across different types of bonds:

Corporate Bonds: Interest income from corporate bonds is subject to federal and often state income taxes, impacting the after-tax yield. Higher-income individuals may face higher tax rates.
Treasury Bonds: Interest from U.S. Treasury bonds is taxable at the federal level but exempt from state and local taxes. This tax advantage can enhance the after-tax return for investors.
Municipal Bonds: Interest from municipal bonds is typically exempt from federal taxes and, if the bond is issued in your state, may also be exempt from state and local taxes, offering tax-efficient income, especially for investors in high tax brackets and in-state residents.
Understanding these tax implications is essential for making informed investment decisions aligned with your tax situation and financial goals."
              id={9}
            />
          </div>
        </div>
      </div>

      {/* next */}
      <div>
        <div className="flex flex-col-reverse mt-10 sm:mt-10 sm:flex-row-reverse justify-between gap-8 items-center">
          <div className="invest-image sm:w-1/2 bg-slate-100  mx-auto py-6">
            <img src={bonds} alt="" className="w-1/2 mx-auto " />
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

export default Bonds;

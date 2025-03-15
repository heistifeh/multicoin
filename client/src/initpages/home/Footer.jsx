import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FaMedium } from "react-icons/fa6";
import google from "../../assets/images/google-badge.svg";
import apple from "../../assets/images/apple-badge.svg";
const Footer = () => {
  return (
    <footer className="">
      <div className="container-inner max-w-[1420px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 my-20">
          <div className="flex flex-col gap-4">
            <span className=" hover:text-primary-very-light cursor-pointer  text-lg font-bold text-black">
              Products
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Stocks
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              ETFs
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Crypto
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Options
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Margin
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Bonds
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Treasuries
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              High-Yield Cash Account
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Premium
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Alpha
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-lg font-bold ">
              Resources
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              About Us
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Learn
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Careers
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Multicoin’s Fee Schedule
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base font-bold ">
              Quick Links
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Investment Themes
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Investing Glossary
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Fixed Income Glossary
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Options Trading Glossary
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Transfer your Portfolio
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Treasury Yield Curve
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              High Yield Savings Calculator
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base font-bold ">
              Contact Us
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              Help
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              FAQ
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              support@Multicoin.com
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              press@Multicoin.com
            </span>
            <div className="gap-4 flex my-2 ">
              <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
                <RiTwitterXLine className="text-2xl" />
              </span>
              <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
                <IoLogoInstagram className="text-2xl" />
              </span>
              <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
                <FaFacebookF className="text-2xl" />
              </span>
            </div>
            <div className="gap-4 flex my-2 ">
              <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
                <FaLinkedinIn className="text-2xl" />
              </span>
              <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
                <RiTiktokFill className="text-2xl" />
              </span>
              <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
                <FaMedium className="text-2xl" />
              </span>
            </div>

            <span className=" my-2">
              <img src={google} alt="" className="w-40 object-cover" />
            </span>
            <span className=" my-2">
              <img src={apple} alt="" className="w-40 object-cover" />
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 hover:text-primary-very-light cursor-pointer text-black text-base font-bold ">
              <img src="./logo1.jpg" alt="" className="rounded-xl" />
              <span className="text-2xl">Multicoin</span>
            </p>
            <span className=" cursor-pointer text-black text-base">
              Check the background of this firm on{" "}
              <span className="text-primary-very-light hover:underline text-sm">
                FINRA’s BrokerCheck.
              </span>
            </span>
            <span className=" text-primary-very-light cursor-pointer hover:underline text-sm">
              Open to the Multicoin Investing, Inc. Customer Relationship
              Summary.
            </span>
          </div>
        </div>
      </div>

      {/* second footer */}
      <div className="bg-slate-100 m-0 p-0">
        <div className="second-footer w-[90%] py-8 rounded-lg max-w-[1420px] mx-auto ">
          <div className="flex flex-wrap w-[97%] mx-auto mb-8">
            <span className="p-2 text-sm">Disclosures</span>
            <span className="p-2 text-sm">Privacy Policy</span>
            <span className="p-2 text-sm">Your Privacy Choices</span>
            <span className="p-2 text-sm">Terms of Service</span>
            <span className="p-2 text-sm">Fractional Shares Disclosure</span>
            <span className="p-2 text-sm">Markets</span>
            <span className="p-2 text-sm">Stocks Directory</span>
            <span className="p-2 text-sm"> ETFs Directory</span>
            <span className="p-2 text-sm">Options Chain</span>
            <span className="p-2 text-sm"> Bitcoin ETP Options</span>
            <span className="p-2 text-sm">How to buy Crypto</span>
            <span className="p-2 text-sm"> Buy T-bills</span>
          </div>
          <div className="w-[97%] mx-auto flex flex-col">
            <span className="text-sm py-4">
              © Copyright 2025 Multicoin Holdings, Inc. All Rights Reserved.
            </span>
            <span className="text-sm py-4">
              Market data powered by
              <span className="text-primary-very-light hover:underline">
                Xignite.
              </span>
            </span>
            <span className="text-sm py-4">
              <span className="font-bold">All investments</span> involve the
              risk of loss and the past performance of a security or a financial
              product does not guarantee future results or returns. You should
              consult your legal, tax, or financial advisors before making any
              financial decisions. This material is not intended as a
              recommendation, offer, or solicitation to purchase or sell
              securities, open a brokerage account, or engage in any investment
              strategy.
            </span>
            <span className="text-sm py-2 font-bold uppercase">
              Multicoin ADVISORS LLC
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Treasury Accounts.</span>
              Investment advisory services for Treasury Accounts are provided by
              Multicoin Advisors LLC (“Multicoin Advisors”), an SEC-registered
              investment adviser. Brokerage services are provided by Multicoin
              Investing (see below). Multicoin Advisors and Multicoin Investing
              are wholly-owned subsidiaries of Multicoin Holdings, Inc.
              (“Multicoin Holdings”), and both subsidiaries charge a fee for
              their respective Treasury Account services. Before investing,
              consider your investment objectives, all fees and expenses, and
              any potential conflicts of interest. For more details, see
              Multicoin Advisors’ Form CRS, Form ADV Part 2A, Fee Schedule, and
              other disclosures. Past performance is no guarantee of future
              results. Any historical returns, expected returns, or probability
              projections are provided for informational and illustrative
              purposes, and may not reflect actual future performance.
              <br />
              <br />
              <br />
              Investing in U.S. Treasuries securities (“Treasuries”) involves
              risks, including but not limited to, interest rate risk, credit
              risk, and market risk. Although Treasuries are considered safer
              than many other financial instruments, you can still lose all or
              part of your investment. Early withdrawal or sale prior to
              maturity of Treasuries may result in a loss of principal or impact
              returns. Reinvestment into new Treasuries is subject to market
              conditions and may result in different yields. As a general rule,
              the price of Treasuries moves inversely to changes in interest
              rates. Before investing, you should consider your tolerance for
              these risks and your overall investment objectives. For more
              details, see Multicoin Advisors’ Form ADV Part 2A.
            </span>
            <span className="text-sm py-2 font-bold uppercase">
              OPEN TO THE Multicoin INVESTING, INC.
            </span>
            <span className="text-sm py-2 font-bold ">
              Securities, Options, and Bonds.
            </span>
            <span className="text-sm py-4">
              Self-directed brokerage accounts and brokerage services for
              US-listed, registered securities, options, and bonds (except for
              Treasuries offered through your Jiko Account) are offered to
              self-directed customers by Open to the Multicoin Investing, Inc.
              (“Multicoin Investing”), a registered broker-dealer and member of
              FINRA & SIPC. Additional information about your broker can be
              found by clicking here. Multicoin Investing is a wholly-owned
              subsidiary of Multicoin Holdings. This is not an offer,
              solicitation of an offer, or advice to buy or sell securities or
              open a brokerage account in any jurisdiction where Multicoin
              Investing is not registered. Securities products offered by
              Multicoin Investing are not FDIC insured. Apex Clearing
              Corporation, our clearing firm, has additional insurance coverage
              in excess of the regular SIPC limits. Additional information about
              SIPC can be found here.
            </span>

            <span className="text-sm py-2 font-bold ">
              Unlocking Financial Freedom with Multicoin Capital: A Leader in
              Digital Asset Investments
            </span>
            <span className="text-sm py-4">
              In today’s fast-evolving financial landscape, innovative
              investment firms like Multicoin Capital are transforming how
              individuals and businesses grow wealth. As a forward-thinking firm
              specializing in digital assets and financial opportunities,
              Multicoin Capital is redefining how people invest, trade, and
              achieve long-term financial success.
            </span>

            <span className="text-sm py-2 font-bold ">
              Who is Multicoin Capital?
            </span>
            <span className="text-sm py-4">
              Multicoin Capital is a trusted name in the digital asset
              investment space, dedicated to helping clients navigate the
              complexities of cryptocurrency, blockchain technology, and other
              modern financial instruments. Known for its transparency,
              expertise, and personalized approach, the firm empowers clients to
              achieve financial independence by leveraging the potential of
              digital assets and other high-yield investment strategies. The
              firm’s mission is clear: to make financial success accessible to
              everyone, whether you’re an experienced investor or just starting
              your journey. With a team of highly skilled consultants, traders,
              and analysts, Multicoin Capital ensures every client receives
              tailored advice and opportunities aligned with their goals.
            </span>
            <span className="text-sm py-2 font-bold ">
              What Makes Multicoin Capital Unique?
            </span>
            <span className="text-sm py-4">
              1. Diverse Investment Portfolio: Multicoin Capital provides access
              to a broad range of investment options, including
              cryptocurrencies, decentralized finance (DeFi) projects, and
              tokenized assets. This diverse portfolio enables clients to
              explore multiple streams of income while minimizing risk. <br />
              2. Cutting-Edge Technology: The firm leverages state-of-the-art
              tools and analytics to help clients make informed decisions. By
              staying ahead of market trends and utilizing innovative trading
              strategies, Multicoin Capital delivers exceptional returns. <br />
              3. Focus on Generational Wealth: Beyond short-term gains,
              Multicoin Capital prioritizes helping clients build generational
              wealth. Their investment strategies are designed to create
              sustainable, long-term financial growth, ensuring families and
              businesses can secure their financial futures. <br /> 4.
              Educational Support: Multicoin Capital believes in empowering its
              clients with knowledge. The firm offers resources, workshops, and
              one-on-one consultations to help investors understand the
              intricacies of digital assets and the stock market.
            </span>
            <span className="text-sm py-2 font-bold ">
              Why Choose Multicoin Capital?
            </span>
            <span className="text-sm py-4">
              Multicoin Capital stands out as a reputable firm dedicated to
              integrity, professionalism, and client success. Whether you’re
              looking to generate passive income from home, diversify your
              investment portfolio, or gain expert guidance on navigating the
              digital economy, Multicoin Capital provides the tools and
              expertise needed to make it happen. The firm’s personalized
              approach ensures every investor feels supported, making it an
              ideal choice for those seeking reliable and innovative financial
              solutions.
            </span>
            <span className="text-sm py-2 font-bold ">
              Join the Multicoin Capital Movement
            </span>
            <span className="text-sm py-4">
              Multicoin Capital is more than an investment firm. it’s a partner
              in your journey to financial freedom. If you’re ready to take
              control of your financial future, explore the opportunities with
              Multicoin Capital. Start your journey today and let them guide you
              in building generational wealth with ease.
            </span>

            <span className="text-sm text-primary-very-light hover:underline">
              View Full Disclosures
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

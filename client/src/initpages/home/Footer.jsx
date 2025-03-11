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
      <div className="container-inner">
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
              Public’s Fee Schedule
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
              support@public.com
            </span>
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base">
              press@public.com
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
            <span className=" hover:text-primary-very-light cursor-pointer text-black text-base font-bold ">
              <img src="./logo1.jpg" alt="" className="rounded-xl" />
            </span>
            <span className=" cursor-pointer text-black text-base">
              Check the background of this firm on{" "}
              <span className="text-primary-very-light hover:underline text-sm">
                FINRA’s BrokerCheck.
              </span>
            </span>
            <span className=" text-primary-very-light cursor-pointer hover:underline text-sm">
              Open to the Public Investing, Inc. Customer Relationship Summary.
            </span>
          </div>
        </div>
      </div>

      {/* second footer */}
      <div className="bg-slate-100 m-0 p-0">
        <div className="second-footer w-[90%] mx-auto py-8 rounded-lg ">
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
              PUBLIC ADVISORS LLC
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Treasury Accounts.</span>
              Investment advisory services for Treasury Accounts are provided by
              Public Advisors LLC (“Public Advisors”), an SEC-registered
              investment adviser. Brokerage services are provided by Public
              Investing (see below). Public Advisors and Public Investing are
              wholly-owned subsidiaries of Public Holdings, Inc. (“Public
              Holdings”), and both subsidiaries charge a fee for their
              respective Treasury Account services. Before investing, consider
              your investment objectives, all fees and expenses, and any
              potential conflicts of interest. For more details, see Public
              Advisors’ Form CRS, Form ADV Part 2A, Fee Schedule, and other
              disclosures. Past performance is no guarantee of future results.
              Any historical returns, expected returns, or probability
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
              details, see Public Advisors’ Form ADV Part 2A.
            </span>
            <span className="text-sm py-2 font-bold uppercase">
              OPEN TO THE PUBLIC INVESTING, INC.
            </span>
            <span className="text-sm py-2 font-bold ">
              Securities, Options, and Bonds.
            </span>
            <span className="text-sm py-4">
              Self-directed brokerage accounts and brokerage services for
              US-listed, registered securities, options, and bonds (except for
              Treasuries offered through your Jiko Account) are offered to
              self-directed customers by Open to the Public Investing, Inc.
              (“Public Investing”), a registered broker-dealer and member of
              FINRA & SIPC. Additional information about your broker can be
              found by clicking here. Public Investing is a wholly-owned
              subsidiary of Public Holdings. This is not an offer, solicitation
              of an offer, or advice to buy or sell securities or open a
              brokerage account in any jurisdiction where Public Investing is
              not registered. Securities products offered by Public Investing
              are not FDIC insured. Apex Clearing Corporation, our clearing
              firm, has additional insurance coverage in excess of the regular
              SIPC limits. Additional information about SIPC can be found here.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Options.</span> Options trading
              entails significant risk and is not suitable for all investors.
              Options investors can rapidly lose the value of their investment
              in a short period of time and incur permanent loss by expiration
              date. Certain complex options strategies carry additional risk and
              costs. Investors must read and understand the Characteristics and
              Risks of Standardized Options before considering any options
              transaction. Index options have special features and fees that
              should be carefully considered, including settlement, exercise,
              expiration, tax, and cost characteristics. See Fee Schedule for
              all options trading fees. Supporting documentation for any claims
              will be furnished upon request. To learn more about options
              rebates, see terms of the Options Rebate Program. Rebate rates
              vary monthly from $0.06-$0.18 and depend on your current and prior
              month’s options trading volume. Rates are subject to change at any
              time.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">ETFs & ETPs.</span> Before
              investing in an ETF, you should read the prospectus carefully,
              which provides detailed information on the fund’s investment
              objectives, risks, charges, and expenses and unique risk profile.
              Prospectuses can be found on the ETF issuer's website. All
              investments involve risks, including the loss of principal.
              Performance data represents past performance and is no guarantee
              of future results. Investment returns and principal value will
              fluctuate such that an investment, when redeemed, may be worth
              more or less than the original cost.
              <br />
              <br />
              <br />A spot bitcoin exchange-traded product (“ETP”) is not an
              investment company registered under the Investment Company Act of
              1940 (the “1940 Act”) and is not subject to regulation under the
              Commodity Exchange Act of 1936 (the “CEA”). As a result,
              shareholders do not have the protections associated with ownership
              of shares in an investment company registered under the 1940 Act
              or the protections afforded by the CEA. The performance of a spot
              bitcoin ETP will not reflect the specific return an investor would
              realize if the investor actually purchased bitcoin. Investors will
              not have any rights that bitcoin holders have and will not have
              the right to receive any redemption proceeds in bitcoin. Digital
              assets like Bitcoin are highly speculative and may be subject to
              increased risk of price volatility, illiquidity, market
              manipulation, and loss, including loss of your entire investment.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold">Margin Accounts.</span> Margin
              investing increases your level of risk and has the potential to
              magnify your losses, including loss of more than your initial
              investment. Please assess your investment objectives, risk
              tolerance, and financial circumstances to determine whether margin
              is appropriate for you. You must repay your margin debt regardless
              of the underlying value of the securities you purchased. Public
              Investing can change its maintenance margin requirements at any
              time without prior notice. If the equity in your margin account
              falls below the minimum maintenance requirements, you may be
              required to deposit additional cash or securities. If you are
              unable to do so, Public Investing may sell some or all of your
              securities, without prior approval or notice. You are not entitled
              to an extension of time on a margin call. For more information
              please see Public Investing’s{" "}
              <span className="text-primary-very-light hover:underline">
                Margin Disclosure Statement, Margin Agreement,{" "}
                <span className="text-text">and </span>
                Fee Schedule.
              </span>
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">High-Yield Cash Account.</span>A
              High-Yield Cash Account is a secondary brokerage account with
              Public Investing. Funds in your High-Yield Cash Account are
              automatically deposited into partner banks (“Partner Banks”),
              where that cash earns interest and is eligible for FDIC insurance.
              See here for a list of current Partner Banks. Your Annual
              Percentage Yield is variable and may change at the discretion of
              the Partner Banks or Public Investing. Apex Clearing and Public
              Investing receive administrative fees for operating this program,
              which reduce the amount of interest paid on swept cash. Neither
              Public Investing nor any of its affiliates is a bank. Learn more.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">
                Individual Retirement Accounts
              </span>
              Self-directed individual retirement accounts are offered by Public
              Investing, a registered broker-dealer and member of FINRA & SIPC.
              Information about retirement accounts on Public is for educational
              purposes only and is not tax or investment advice. Consult your
              tax advisor for individual considerations. Visit the IRS website
              for more information on the limitations and tax benefits of
              Traditional and Roth IRAs. All investing involves risk.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Bonds.</span>
              “Bonds” shall refer to corporate debt securities and U.S.
              government securities offered on the Public platform through a
              self-directed brokerage account held at Public Investing and
              custodied at Apex Clearing. For purposes of this section, Bonds
              exclude treasury securities held in your Jiko Account, as
              explained under the “Jiko Account” section.
            </span>
            <span className="text-sm py-4">
              Investments in Bonds are subject to various risks including risks
              related to interest rates, credit quality, market valuations,
              liquidity, prepayments, early redemption, corporate events, tax
              ramifications and other factors. The value of Bonds fluctuate and
              any investments sold prior to maturity may result in gain or loss
              of principal. In general, when interest rates go up, Bond prices
              typically drop, and vice versa. Bonds with higher yields or
              offered by issuers with lower credit ratings generally carry a
              higher degree of risk. All fixed income securities are subject to
              price change and availability, and yield is subject to change.
              Bond ratings, if provided, are third party opinions on the overall
              bond's credit worthiness at the time the rating is assigned.
              Ratings are not recommendations to purchase, hold, or sell
              securities, and they do not address the market value of securities
              or their suitability for investment purposes.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Bond Accounts</span>
              A Bond Account is a self-directed brokerage account with Public
              Investing. Deposits into this account are used to purchase 10
              investment-grade and high-yield bonds. The Bond Account’s yield is
              the average, annualized yield to worst (YTW) across all ten bonds
              in the Bond Account, before fees. A bond’s yield is a function of
              its market price, which can fluctuate; therefore a bond’s YTW is
              not “locked in” until the bond is purchased, and your yield at
              time of purchase may be different from the yield shown here. The
              “locked in” YTW is not guaranteed; you may receive less than the
              YTW of the bonds in the Bond Account if you sell any of the bonds
              before maturity or if the issuer defaults on the bond. Public
              Investing charges a markup on each bond trade. See our Fee
              Schedule.
              <br />
              <br />
              Bond Accounts are not recommendations of individual bonds or
              default allocations. The bonds in the Bond Account have not been
              selected based on your needs or risk profile. You should evaluate
              each bond before investing in a Bond Account. The bonds in your
              Bond Account will not be rebalanced and allocations will not be
              updated, except for Corporate Actions.
              <br />
              <br />
              Fractional Bonds also carry additional risks including that they
              are only available on Public and cannot be transferred to other
              brokerages. Read more about the risks associated with fixed income
              and fractional bonds. See
              <span className="text-primary-very-light hover:underline">
                Bond Account Disclosures
              </span>
              to learn more.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Trading Commissions</span>
              Commission-free trading refers to $0 commissions charged on trades
              of US listed registered securities placed during the U.S. Markets
              Regular Trading Hours in self-directed brokerage accounts offered
              by Public Investing. Keep in mind that other fees such as
              regulatory fees, Premium subscription fees, commissions on trades
              during extended trading hours, wire transfer fees, and paper
              statement fees may apply to your brokerage account. Please see Fee
              Schedule to learn more.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Fractional Shares</span>
              Fractional shares are illiquid outside of Public and not
              transferable. For a complete explanation of conditions,
              restrictions and limitations associated with fractional shares,
              see our Fractional Share Disclosure to learn more.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Investment Plans</span>
              Investment Plans (“Plans”) shown in our marketplace are for
              informational purposes only and are meant as helpful starting
              points as you discover, research and create a Plan that meets your
              specific investing needs. Plans are self-directed purchases of
              individually-selected assets, which may include stocks, ETFs and
              cryptocurrency. Plans are not recommendations of a Plan overall or
              its individual holdings or default allocations. Plans are created
              using defined, objective criteria based on generally accepted
              investment theory; they are not based on your needs or risk
              profile. You are responsible for establishing and maintaining
              allocations among assets within your Plan. Plans involve
              continuous investments, regardless of market conditions.
              Diversification does not eliminate risk. See our Investment Plans
              Terms and Conditions and Sponsored Content and Conflicts of
              Interest Disclosure.
            </span>
            <span className="text-sm py-2 font-bold uppercase">
              PUBLIC HOLDINGS, INC.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Alpha.</span>
              Alpha is an experiment brought to you by Public Holdings, Inc.
              (“Public”). Alpha is an AI research tool powered by GPT-4, a
              generative large language model. Alpha is experimental technology
              and may give inaccurate or inappropriate responses. Output from
              Alpha should not be construed as investment research or
              recommendations, and should not serve as the basis for any
              investment decision. All Alpha output is provided “as is.” Public
              makes no representations or warranties with respect to the
              accuracy, completeness, quality, timeliness, or any other
              characteristic of such output. Your use of Alpha output is at your
              sole risk. Please independently evaluate and verify the accuracy
              of any such output for your own use case.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Market Data.</span>
              Quotes and other market data for Public’s product offerings are
              obtained from third party sources believed to be reliable, but
              Public Holdings and its affiliates make no representation or
              warranty regarding the quality, accuracy, timeliness, and/or
              completeness of this information. Such information is time
              sensitive and subject to change based on market conditions and
              other factors. You assume full responsibility for any trading
              decisions you make based upon the market data provided, and Public
              is not liable for any loss caused directly or indirectly by your
              use of such information. Market data is provided solely for
              informational and/or educational purposes only. It is not intended
              as a recommendation and does not represent a solicitation or an
              offer to buy or sell any particular security.
            </span>
            <span className="text-sm py-2 font-bold uppercase">
              BAKKT CRYPTO SOLUTIONS, LLC
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Cryptocurrency.</span>
              Cryptocurrency trading, execution, and custody services are
              provided by Bakkt Crypto Solutions, LLC (NMLS ID 1828849)
              (“Bakkt”). Cryptocurrency is highly speculative, involves a high
              degree of risk, and has the potential for loss of the entire
              amount of an investment. Cryptocurrencies offered by Bakkt are not
              securities and are not FDIC insured or protected by SIPC. Your
              cryptocurrency assets are held in your Bakkt Crypto account. Bakkt
              is a licensed virtual currency business by the New York State
              Department of Financial Services and a licensed money transmitter,
              but is not a registered broker-dealer or a FINRA member. Your
              Bakkt Crypto account is separate from your brokerage account with
              Public Investing, which holds US-listed stocks and ETFs. Please
              review the Risk Disclosures before trading.
            </span>
            <span className="text-sm py-2 font-bold uppercase">
              JIKO SECURITIES, INC.
            </span>
            <span className="text-sm py-4">
              <span className="font-bold block">Jiko Accounts.</span>
              Jiko Securities, Inc. (“JSI”), a registered broker-dealer and
              member of FINRA & SIPC, provides accounts (“Jiko Accounts”)
              offering 6-month US Treasury Bills (“T-bills”). See JSI’s FINRA
              BrokerCheck and Form CRS for further information. For the
              avoidance of doubt, a Jiko Account is different and separate from
              the Treasury Account offered by Public Investing and advised by
              Public Advisors (see “Treasury Accounts” section above).
              <br />
              <br />
              JSI uses funds from your Jiko Account to purchase T-bills in
              increments of $100 “par value” (the T-bill’s value at maturity).
              T-bills are purchased at a discount to the par value and the
              T-bill’s yield represents the difference in price between the “par
              value” and the “discount price.” Aggregate funds in your Jiko
              Account in excess of the T-bill purchases will remain in your Jiko
              Account as cash. The value of T-bills fluctuate and investors may
              receive more or less than their original investments if sold prior
              to maturity. T-bills are subject to price change and availability
              - yield is subject to change. Past performance is not indicative
              of future performance. Investments in T-bills involve a variety of
              risks, including credit risk, interest rate risk, and liquidity
              risk. As a general rule, the price of a T-bills moves inversely to
              changes in interest rates. Although T-bills are considered safer
              than many other financial instruments, you could lose all or a
              part of your investment. See Jiko U.S. Treasuries Risk Disclosures
              for further details.
            </span>
            <span className="text-sm py-2 font-bold ">
              Investments in T-bills: Not FDIC Insured; No Bank Guarantee; May
              Lose Value.
            </span>

            <span className="text-sm py-4">
              Banking services and bank accounts are offered by Jiko Bank, a
              division of Mid-Central National Bank. JSI and Jiko Bank are not
              affiliated with Public Holdings or any of its subsidiaries. None
              of these entities provide legal, tax, or accounting advice. You
              should consult your legal, tax, or financial advisors before
              making any financial decisions. This material is not intended as a
              recommendation, offer, or solicitation to purchase or sell
              securities, open a brokerage account, or engage in any investment
              strategy.
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

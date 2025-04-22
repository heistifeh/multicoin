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
import bitcoin from "./images/bitcoin.jpg";
const Crypto = () => {
  const [activeId, setActiveId] = useState(1);
  return (
    <div className="">
      <header className="relative rounded-none mb-10">
        <Navbar />

        <div
          className="relative bg-cover flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8"
          style={{
            backgroundImage: `url(${bgfeature})`,
            backgroundSize: "cover", // Example of adding another style
            backgroundPosition: "center", // Another property
          }}
        >
          <div className="invest  sm:w-1/2 px-4 flex flex-col justify-center mt-10 max-w-[1000px] mx-auto">
            <h1 className="text-black my-2 text-4xl sm:text-7xl">
              Invest in crypto
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider text-black py-6">
              Open an account with Bakkt Crypto, automate your investment
              strategy, manage your portfolio – all on Multicoin.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <Link to={"/sign-up"} className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300 custom-shadow text-center">
                Sign Up
              </Link>
              {/* <button className="explore  border-1 border-slate-400 text-black p-2 w-36 rounded-4xl text-lg cursor-pointer hover:bg-primary hover:text-white transition duration-300 custom-shadow">
                Explore stocks
              </button> */}
            </div>
          </div>
          <div className="invest-image sm:w-2/3 pt-10">
            <img src={bitcoin} alt="" className="rounded-2xl h-full " />
          </div>
        </div>
      </header>

      
      

      {/* leading texts */}
      <div className=" container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
            Cryptocurrency Investments – Navigating the Digital Asset Revolution
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-center">
            At Multicoin Capital, we specialize in investing in transformative
            blockchain technologies and digital assets that are reshaping the
            global financial landscape. With a deep understanding of the crypto
            economy, we deploy capital across a broad spectrum of opportunities,
            from established cryptocurrencies to emerging decentralized
            networks.
          </p>
        </section>

        {/* Why Invest Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Why Invest in Crypto with Us?
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Institutional-Grade Research – Data-driven insights and
                fundamental analysis of top-performing digital assets.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Diversified Portfolio – Exposure to Layer 1 and Layer 2
                blockchains, DeFi, Web3, NFTs, and AI-powered crypto projects.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Active Portfolio Management – Hands-on governance participation,
                liquidity provisioning, and risk mitigation strategies.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Secure &amp; Compliant Investments – Adherence to best practices
                in security, custody, and regulatory compliance.
              </span>
            </li>
          </ul>
        </section>

        {/* Crypto Investment Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Crypto Investment Strategies
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Core Holdings</strong> – Long-term investments in
                high-value networks like Bitcoin (BTC) and Ethereum (ETH).
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>DeFi &amp; Web3</strong> – Strategic allocations in
                decentralized finance protocols and Web3 infrastructure.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Early-Stage Tokens</strong> – Investing in innovative
                projects before they achieve mass adoption.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Staking &amp; Yield Farming</strong> – Maximizing
                returns through network participation and liquidity incentives.
              </span>
            </li>
          </ul>
        </section>

        {/* Stay Ahead Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Stay Ahead in the Crypto Space
          </h2>
          <p className="text-gray-700">
            With the rapid evolution of blockchain technology, staying informed
            is key. Multicoin Capital provides market-leading research,
            real-time insights, and expert strategies to help investors navigate
            the volatility of the digital asset market.
          </p>
        </section>

        {/* Call-to-Action Section */}
        <section className="mb-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="https://multicoin.capital/portfolio/?utm_source=chatgpt.com"
              target="_blank"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-text transition"
            >
              🚀 Explore Crypto Opportunities
            </a>
            <a
              href="https://multicoin.capital/writing/?utm_source=chatgpt.com"
              target="_blank"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-text transition"
            >
              📊 View Market Insights and Get Expert Recommendations
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Crypto;

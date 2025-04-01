import React from "react";
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
import Accordion from "../../../components/Accordion";
import "./stock.css";
import stockImage from "../images/stock-image.jpg";

const Stock = () => {
  return (
    <div className="container-all">
      <header>
        <Navbar />
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8 container-all  max-w-[1420px] mx-auto">
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-black my-2 text-4xl sm:text-7xl">
              Invest in stocks
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider">
              Build your portfolio with access to over 9,000 equities, and get
              the market insights you need to execute your investing strategies.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300 custom-shadow">
                Sign Up
              </button>
              {/* <button className="explore  border-1 border-slate-200 text-black p-2 w-36 rounded-4xl text-lg cursor-pointer hover:bg-primary hover:text-white transition duration-300 custom-shadow">
                Explore stocks
              </button> */}
            </div>
          </div>
          <div className="invest-image sm:w-1/2 overflow-hidden">
            <img
              src={stockImage}
              alt="Stock"
              className="rounded-lg w-full max-h-[600px] object-cover"
            />
          </div>
        </div>
      </header>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
            Stock Investments – Navigate the Markets with Confidence
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-center">
            At Multicoin Capital, we provide data-driven insights and expert
            analysis to help investors make informed stock market decisions. Our
            stock investment strategies focus on high-growth opportunities,
            long-term value creation, and risk-adjusted returns.
          </p>
        </section>

        {/* Why Invest Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Why Invest in Stocks with Us?
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Comprehensive Market Research – Leverage our deep industry
                expertise and proprietary research to identify promising stocks.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Diversified Portfolio – We invest across multiple sectors,
                including technology, finance, healthcare, and emerging
                industries.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Smart Trading Strategies – AI-driven analytics, algorithmic
                trading models, and expert-led portfolio management to optimize
                returns.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Risk Management & Hedging – Advanced risk assessment techniques
                to protect your capital in volatile markets.
              </span>
            </li>
          </ul>
        </section>

        {/* Investment Strategies Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            Our Stock Investment Strategies
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Growth Stocks</strong> – Investing in high-potential
                companies with strong future earnings.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Value Investing</strong> – Identifying undervalued
                stocks poised for long-term growth.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Dividend Stocks</strong> – Stable, income-generating
                investments with consistent returns.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Sector Rotation</strong> – Allocating capital
                dynamically to capitalize on economic trends.
              </span>
            </li>
          </ul>
        </section>

        {/* Stay Ahead Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Stay Ahead of the Market
          </h2>
          <p className="text-gray-700">
            With real-time market data, expert research reports, and
            personalized investment solutions, we empower investors to build
            resilient portfolios. Whether you're an experienced trader or new to
            stock investing, our insights and tools will help you navigate the
            market with confidence.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-text transition"
            >
              🚀 Explore Stocks Now Portfolio
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-text transition"
            >
              📊 View Market Insights and Get Expert Recommendations
            </a>
          </div>
        </section>
      </div>

      {/* big image */}
      <div className="bg-black my-0">
        <hr className="text-slate-400" />
        <div className="flex flex-col items-center justify-center mb-0 pt-40 pb-4 bg-black w-[90%] mx-auto text-center">
          <span className="text-4xl md:text-6xl text-white">
            Build your portfolio with Multicoin
          </span>
          <span className="text-4xl md:text-6xl text-primary-very-light"></span>
          <div className="flex items-center justify-center md:w-fit">
            <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold custom-shadow-dark ">
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

export default Stock;

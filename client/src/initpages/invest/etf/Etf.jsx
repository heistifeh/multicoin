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
import nft from "./images/nft.jpg";
const Etf = () => {
  return (
    <div className="container-all">
      <Navbar />
      <header className=" max-w-[1000px] mx-auto">
        <div className="flex flex-col mt-10 sm:mt-0 sm:flex-row justify-between gap-8 container-all">
          <div className="invest  sm:w-1/2 flex flex-col justify-center">
            <h1 className="text-black my-2 text-4xl sm:text-7xl">
              Invest in NFTs
            </h1>
            <span className="text-lg leading-5 sm:text-xl tracking-wider">
              Broaden your market exposure with collections of securities that
              align with a specific industry, trend, or investment style.
            </span>
            <div className="flex my-8 gap-4 sm:gap-8">
              <button className="sign-up bg-primary text-white p-2 w-30 rounded-4xl text-xl cursor-pointer hover:bg-primary-dark transition duration-300 custom-shadow">
                Sign Up
              </button>
              <button className="explore  border-1 border-slate-200 text-black p-2 w-36 rounded-4xl text-lg cursor-pointer hover:bg-primary hover:text-white transition duration-300 custom-shadow">
                Explore NFTs
              </button>
            </div>
          </div>
          <div className="invest-image sm:w-1/2">
            <img src={nft} alt="" className="rounded-xl h-[600px]" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800">
            NFT Investments – Unlocking the Future of Digital Ownership
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-center">
            At Multicoin Capital, we recognize that Non-Fungible Tokens (NFTs)
            are revolutionizing digital ownership, art, gaming, and
            decentralized economies. As blockchain technology reshapes how value
            is stored and transferred, NFTs stand at the forefront of
            innovation, offering unique investment opportunities.
          </p>
        </section>

        {/* Why Invest Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center">
            Why Invest in NFTs with Us?
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Institutional-Grade Research – In-depth analysis of the NFT
                market, emerging trends, and high-value digital assets.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Diverse Portfolio Exposure – Investments in blue-chip NFTs,
                metaverse assets, gaming ecosystems, and digital collectibles.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Blockchain-Backed Ownership – Secure, verifiable, and immutable
                ownership through decentralized networks.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">✅</span>
              <span>
                Strategic Market Positioning – Identifying undervalued NFTs,
                early-stage projects, and new digital asset use cases.
              </span>
            </li>
          </ul>
        </section>

        {/* NFT Investment Strategies Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
            Our NFT Investment Strategies
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Blue-Chip NFTs</strong> – Holdings in top-tier
                collections like CryptoPunks, Bored Ape Yacht Club, and
                generative art.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Metaverse &amp; Virtual Real Estate</strong> – Investing
                in digital land on platforms like Decentraland and The Sandbox.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>Gaming &amp; Play-to-Earn</strong> – Exposure to
                NFT-based gaming economies and blockchain-powered in-game
                assets.
              </span>
            </li>
            <li className="flex items-center">
              <span className="mr-2">📌</span>
              <span>
                <strong>NFT Infrastructure &amp; Marketplaces</strong> –
                Investments in platforms that power NFT creation, trading, and
                utility.
              </span>
            </li>
          </ul>
        </section>

        {/* Shape the Future Section */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Shape the Future of Digital Collectibles
          </h2>
          <p className="text-gray-700">
            The NFT space is rapidly evolving, and staying ahead requires
            insight, research, and strategic capital deployment. Whether you're
            an investor, creator, or enthusiast, Multicoin Capital provides the
            expertise and resources to help you navigate the NFT revolution.
          </p>
        </section>

        {/* Call-to-Action Section */}
        <section className="mb-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-text transition"
            >
              🚀 Explore NFT Opportunities
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-text transition"
            >
              🎨 View Market Insights and Discover Emerging NFT Trends
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-gray-500">
          © 2017 - 2025 Multicoin Capital Management, LLC. All Rights Reserved.
        </footer>
      </div>
      {/* big image */}
      <div className="bg-black ">
        <div className="my-0">
          <hr className="text-slate-400" />
          <div className="flex flex-col items-center justify-center mb-0 pt-40 pb-4 bg-black w-[90%] mx-auto text-center">
            <span className="text-4xl md:text-6xl text-white">
              Build your portfolio with Multicoin
            </span>
            <span className="text-4xl md:text-6xl text-primary-very-light"></span>
            <div className="flex items-center justify-center md:w-fit">
              <button className="cursor-pointer text-white my-10 md:my-20 bg-primary py-4 rounded-4xl hover:bg-primary-very-light transition duration-300 w-[200px] text-lg md:text-xl font-semibold ">
                Sign Up
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
  );
};

export default Etf;

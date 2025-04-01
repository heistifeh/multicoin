import React from "react";
import Navbar from "../../components/Navbar";
import star from "../../assets/images/star.png";
import herobg from "../../assets/images/herobg.png";
import { MdArrowOutward } from "react-icons/md";
import { BiSolidPieChart } from "react-icons/bi";
import { TbArrowsUp } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import "../../components/animate.css";
const Header = () => {
  return (
    <div className="">
      <div className="container-inner max-w-[1420px] mx-auto">
        <div className="flex  h-60 items-center justify-center font-semi-bold text-4xl md:text-7xl text-black text-center">
          <h1 className="lg:w-2/3">
            Investing for those who take it seriously
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:flex justify-between ">
          <div className="flex flex-col md:flex-row gap-4 md:pb-8 lg:pb-0 pb-4">
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <BiSolidPieChart className="text-primary" />
              <span className="text-black"> Multi-asset investing</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <TbArrowsUp className="text-primary" />
              <span className="text-black"> Industry-leading yields</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <FaHeart className="text-primary" />
              <span className="text-black"> Trusted by millions</span>
            </div>
          </div>
          <div className="relative group cursor-pointer rounded-2xl overflow-hidden w-45">
            <div
              className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary 
                  animate-gradient"
            ></div>
            <div className="flex items-center relative z-10 text-white px-5 py-2 transition-all duration-500 justify-center gap-2">
              <span>Get Started</span>
              <MdArrowOutward />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="my-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semi-bold text-center text-gray-800">
            Welcome to Multicoin Capital – Redefining the Future of Digital
            Asset Investments
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 text-center">
            Founded in 2017, Multicoin Capital is a pioneering investment firm
            that specializes in cryptocurrency, blockchain technologies, and
            decentralized finance (DeFi). As a research-driven and
            thesis-oriented firm, we navigate the evolving digital asset
            landscape with a rigorous approach, leveraging deep market insights
            and institutional-grade strategies to deliver long-term value.
          </p>
        </section>

        {/* Trust Statement */}
        <section className="mb-12">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Trust Statement
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="mr-2">✅</span>
                <span>
                  Trusted by leading investors and institutions worldwide.
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">✅</span>
                <span>
                  Backed by a global network of investors and industry leaders.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Our Approach
          </h2>
          <p className="mb-4 text-gray-700">
            At Multicoin Capital, we believe the blockchain economy represents a
            fundamental paradigm shift in global finance, computing, and
            governance. Our investment framework is built upon:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">🔹</span>
              <strong>Strategic Asset Allocation</strong> – A diversified
              portfolio covering Layer 1 and Layer 2 blockchains, DeFi
              protocols, Web3 infrastructure, and next-generation computing
              models.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              <strong>Data-Driven Insights</strong> – Proprietary market
              analytics, on-chain data assessments, and AI-driven research to
              identify high-growth opportunities.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              <strong>Active Portfolio Management</strong> – A hands-on approach
              to governance participation, liquidity provisioning, and protocol
              development.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              <strong>Institutional-Grade Risk Management</strong> –
              Cutting-edge security protocols, risk hedging strategies, and
              compliance with evolving regulatory frameworks.
            </li>
          </ul>
        </section>

        {/* Investment Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Investment Strategies
          </h2>
          <p className="mb-4 text-gray-700">
            We deploy capital across a broad spectrum of opportunities,
            including:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">✔</span>
              <strong>Venture Investments</strong> – Funding early-stage
              blockchain startups and protocols.
            </li>
            <li>
              <span className="mr-2">✔</span>
              <strong>Liquid Hedge Fund</strong> – Actively managing a dynamic
              portfolio of liquid crypto assets.
            </li>
            <li>
              <span className="mr-2">✔</span>
              <strong>Thematic Investments</strong> – Targeting high-impact
              trends such as DePIN (Decentralized Physical Infrastructure
              Networks), AI + Crypto, and real-world asset tokenization.
            </li>
          </ul>
        </section>

        {/* Digital Asset Revolution */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Join the Digital Asset Revolution
          </h2>
          <p className="mb-6 text-gray-700">
            As blockchain adoption accelerates, Multicoin Capital remains
            committed to identifying and investing in the most transformative
            technologies shaping the decentralized future. Whether you are an
            institutional investor, high-net-worth individual, or
            forward-thinking enterprise, we provide access to industry-leading
            insights, innovative strategies, and unparalleled market expertise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-blue-700 transition"
            >
              Explore Our Funds Portfolio
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-green-700 transition"
            >
              Read Our Research
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-primary text-white rounded hover:bg-purple-700 transition"
            >
              Start Investing Today
            </a>
          </div>
        </section>

        {/* Our Vision & Commitment */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="mb-4 text-gray-700">
            At Multicoin Capital, we envision a world where decentralized
            technologies drive global financial inclusion, innovation, and
            efficiency. By investing in groundbreaking blockchain
            infrastructure, we aim to accelerate the adoption of Web3 and
            empower the next generation of digital finance.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Commitment to Innovation
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <span className="mr-2">✅</span>
              <strong>Long-Term Perspective</strong> – We identify technologies
              with the potential to disrupt traditional industries and deliver
              sustained value over time.
            </li>
            <li>
              <span className="mr-2">✅</span>
              <strong>Active Engagement</strong> – Beyond investing, we actively
              participate in governance, liquidity provisioning, and protocol
              development to support the projects we believe in.
            </li>
            <li>
              <span className="mr-2">✅</span>
              <strong>Security & Risk Management</strong> – Our team employs
              institutional-grade security protocols and risk mitigation
              strategies to protect investor assets in an evolving regulatory
              landscape.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            The Multicoin Advantage
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">🔹</span>
              Global Network & Partnerships – We collaborate with top-tier
              developers, entrepreneurs, and institutions shaping the blockchain
              ecosystem.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Proprietary Market Research – Our team conducts in-depth market
              analysis, leveraging AI-driven insights and on-chain data to
              uncover high-growth opportunities.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Tailored Investment Solutions – Whether you’re looking for venture
              exposure, actively managed crypto assets, or thematic investments,
              we offer a diversified range of strategies.
            </li>
          </ul>
        </section>

        {/* Thought Leadership */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Beyond Investment – Thought Leadership & Research
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">📊</span>
              Deep-Dive Research Reports – In-depth analysis of blockchain
              protocols, tokenomics, and DeFi models.
            </li>
            <li>
              <span className="mr-2">📉</span>
              Market Intelligence – Real-time insights into market cycles, macro
              trends, and institutional adoption.
            </li>
            <li>
              <span className="mr-2">🎙</span>
              Podcasts & Webinars – Engaging discussions with industry experts
              and thought leaders.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Join Us in Shaping the Future
          </h2>
          <p className="text-gray-700">
            Whether you are an institutional investor, high-net-worth
            individual, or enterprise exploring blockchain opportunities, we
            provide the tools, expertise, and strategies to help you succeed in
            this transformative era.
          </p>
        </section>

        <hr className="my-12" />

        {/* Empowering Future of Decentralized Finance */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Empowering the Future of Decentralized Finance
          </h2>
          <p className="mb-4 text-gray-700">
            At Multicoin Capital, we go beyond traditional investment strategies
            by actively shaping the blockchain economy. Our approach combines
            deep market intelligence, hands-on portfolio management, and a
            commitment to fostering innovation in the Web3, DeFi, and digital
            asset space.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            What Sets Us Apart?
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">🔹</span>
              Visionary Leadership & Expertise – Our team comprises seasoned
              investors, blockchain pioneers, and technology experts with
              decades of combined experience.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Unparalleled Market Access – Privileged access to exclusive
              opportunities, early-stage blockchain projects, and emerging
              trends.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Proactive Regulatory Navigation – Collaborating with legal experts
              to ensure full regulatory compliance and risk mitigation.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Community-Driven Engagement – Actively contributing to the Web3
              ecosystem through open-source development and governance.
            </li>
          </ul>
        </section>

        {/* Exploring the Blockchain Frontier */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Exploring the Blockchain Frontier
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">✅</span>
              Smart Contract Platforms & Layer 1/Layer 2 Scaling – Investing in
              foundational blockchain networks that enable secure and scalable
              decentralized applications.
            </li>
            <li>
              <span className="mr-2">✅</span>
              DeFi & Tokenized Finance – Supporting decentralized lending,
              automated market makers, synthetic assets, and tokenized
              real-world assets.
            </li>
            <li>
              <span className="mr-2">✅</span>
              Web3 Infrastructure & Decentralized Data – Backing projects that
              power the metaverse, decentralized cloud computing, and data
              privacy solutions.
            </li>
            <li>
              <span className="mr-2">✅</span>
              AI & Crypto Synergy – Exploring the intersection of AI and
              blockchain for decentralized autonomous systems.
            </li>
            <li>
              <span className="mr-2">✅</span>
              Decentralized Physical Infrastructure (DePIN) – Investing in
              real-world decentralized networks for energy, telecommunications,
              and smart cities.
            </li>
          </ul>
        </section>

        {/* Building a Future-Proof Investment Portfolio */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Building a Future-Proof Investment Portfolio
          </h2>
          <p className="mb-4 text-gray-700">
            At Multicoin Capital, we curate an institutional-grade portfolio
            designed to withstand market volatility and maximize long-term
            value. Our investment vehicles include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">💡</span>
              Early-Stage Venture Capital – Funding promising blockchain
              startups and protocols at their inception.
            </li>
            <li>
              <span className="mr-2">📊</span>
              Liquid Crypto Asset Management – Actively managing a portfolio of
              high-growth digital assets, DeFi tokens, and strategic holdings.
            </li>
            <li>
              <span className="mr-2">🔍</span>
              Thematic Investment Strategies – Capitalizing on disruptive trends
              in AI, DeFi, and decentralized economies.
            </li>
            <li>
              <span className="mr-2">🚀</span>
              Staking, Yield Farming & Governance Participation – Engaging in
              the blockchain ecosystem through protocol governance, validator
              operations, and liquidity provisioning.
            </li>
          </ul>
        </section>

        {/* A Trusted Partner */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            A Trusted Partner in the Digital Asset Space
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">🔹</span>
              Recognized by Institutional Investors – Backed by leading hedge
              funds, venture capital firms, and high-net-worth individuals.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Exclusive Research & Market Insights – Gain access to data-driven
              reports, trend analysis, and expert perspectives.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Commitment to Security & Compliance – Implementing
              institutional-grade risk management, robust custody solutions, and
              strict protocols.
            </li>
          </ul>
        </section>

        {/* Final Call to Action */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Join Us in Shaping the Future of Finance
          </h2>
          <p className="text-gray-700">
            The blockchain economy is rapidly evolving, and Multicoin Capital is
            committed to supporting the most transformative opportunities.
            Whether you're an institutional investor, family office, or
            forward-thinking enterprise, our expertise and strategic insights
            can help you navigate the future of decentralized finance.
          </p>
        </section>

        {/* Pioneering the Next Era */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Pioneering the Next Era of Digital Asset Investments
          </h2>
          <p className="mb-4 text-gray-700">
            At Multicoin Capital, we don’t just invest in the future—we help
            build it. We are at the forefront of the blockchain, cryptocurrency,
            and Web3 revolution, shaping the next generation of decentralized
            technologies through strategic investments, deep industry expertise,
            and active ecosystem participation.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Core Investment Philosophy
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li>
              <span className="mr-2">🔹</span>
              Conviction & Long-Term Vision – Focusing on breakthroughs and
              trends that will redefine finance, computing, and governance.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Fundamental & On-Chain Research – Leveraging data-driven analysis
              and on-chain intelligence to uncover high-growth opportunities.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Active Value Creation – Collaborating with founders, engaging in
              governance, and contributing to ecosystem growth.
            </li>
          </ul>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Our Edge: Why Investors Trust Multicoin Capital
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">🔹</span>
              Market Leadership & Proven Track Record – Years of experience and
              industry-defining investments.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Early Access to Exclusive Opportunities – Privileged access to
              early-stage investments and institutional-grade crypto strategies.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Adaptive Investment Strategies – Continuously refining our
              approach to stay ahead of market trends.
            </li>
            <li>
              <span className="mr-2">🔹</span>
              Security, Compliance & Institutional Standards – Implementing
              best-in-class security protocols and risk management.
            </li>
          </ul>
        </section>

        {/* Thought Leadership & Ecosystem */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Beyond Investing: Thought Leadership & Ecosystem Development
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <span className="mr-2">🎙</span>
              Speaking at Global Conferences – Sharing insights on trends,
              regulatory developments, and strategies.
            </li>
            <li>
              <span className="mr-2">📖</span>
              Publishing In-Depth Research Reports – High-quality research on
              market cycles, tokenomics, and emerging blockchain technologies.
            </li>
            <li>
              <span className="mr-2">🤝</span>
              Strategic Partnerships & Ecosystem Support – Collaborating with
              founders and developers to build sustainable blockchain solutions.
            </li>
            <li>
              <span className="mr-2">🌎</span>
              Driving Institutional Adoption – Bridging the gap between
              traditional finance and the decentralized economy.
            </li>
          </ul>
        </section>

        {/* The Future */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            The Future of Blockchain & Web3 is Now
          </h2>
          <p className="mb-4 text-gray-700">
            Blockchain is no longer just an experimental technology—it’s a
            fundamental shift in global systems. We are investing in the
            infrastructure, protocols, and applications that will power the
            decentralized world of tomorrow.
          </p>
          <p className="mt-4 text-center text-lg font-semibold text-gray-800">
            🚀 The question is: Are you ready to be part of the future?
          </p>
        </section>

        {/* Footer / Final Call */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Partner with Multicoin Capital Today
          </h2>
          <p className="text-gray-700">
            Whether you are an institutional investor, high-net-worth
            individual, family office, or enterprise looking to navigate the
            digital asset space, we provide the insights, expertise, and
            strategic positioning you need to thrive in this rapidly evolving
            industry.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Header;

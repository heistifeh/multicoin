import React, { useState } from "react";
import { FaArrowDown, FaCoins, FaHeart } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import Accordion from "./Accordion";

const AccordionBond = () => {
  const [accordionOpen, setAccordionOpen] = useState({
    state: false,
    name: "",
  });
  const toggleAccordion = (name) => {
    setAccordionOpen((prevState) => ({
      state: prevState.name === name ? !prevState.state : true, // Toggle state if same name, open if new name
      name: name,
    }));
  };
  return (
    <div className="mx-auto w-[97%]">
      <div>
        <span className="block font-bold text-black mb-4">
          Explore the Bond Account Portfolio
        </span>
        <div className="grid grid-cols-1">
          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("1")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Concentrix corporation</p>
                    <span>ONXC 6.6% 08/02/2028</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "1" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">5.17%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">CNXC</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("2")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Ford Motor Company</p>
                    <span>F 7.45% 07/16/2031</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "2" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">6.05%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">F</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("3")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Icahn Enterprises</p>
                    <span>IEP 4.375% 02/01/2029</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "3" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">8.80%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">IEP</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("4")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Main Street Capital</p>
                    <span>MAIN 6.95% 03/01/2029</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "4" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">5.47%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">MAIN</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("5")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">
                      Piedmont Office Realty Trust
                    </p>
                    <span>PDM 3.15% 08/15/2030</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "5" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">5.83%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">PDM</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("6")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Petroleos Mexicanos</p>
                    <span>PEMEX 6.5% 01/23/2029</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "6" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">8.41%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">PEMEX</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("7")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Service Properties Trust</p>
                    <span></span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "7" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">8.41%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">PEMEX</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("8")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Prospect Capital</p>
                    <span>PSEC 3.437% 10/15/2028</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "8" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">6.95%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">PSEC</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("9")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">V.F.</p>
                    <span>VFC 2.95% 04/23/2030</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "9" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">5.86%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">VFC</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex-col">
            <div>
              <div
                className={`flex justify-between border-t-1 border-slate-200 items-center `}
                onClick={() => toggleAccordion("10")}
              >
                <div className="first-side flex gap-2 items-center py-2">
                  <FaCoins className="text-3xl text-slate-700" />
                  <div>
                    <p className="text-slate-700">Vornado Realty Trust</p>
                    <span>VNO 3.4% 06/01/2031</span>
                  </div>
                </div>

                <div className="second-side">
                  <IoIosArrowDown />
                  {/* <IoIosArrowUp /> */}
                </div>
              </div>
            </div>

            {/* dropdown */}
            <div
              className={` ${
                accordionOpen.name === "10" && accordionOpen.state
                  ? "opacity-100 transition-all duration-700 ease-in-out max-h-screen visible "
                  : "opacity-0 h-0 invisible"
              }`}
            >
              <div className={`grid grid-cols-3 px-4 overflow-hidden`}>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Yield</p>
                  <p className="text-black text-lg">6.21%</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm">Issuer</p>
                  <p className="text-black text-lg">VNO</p>
                </div>
                <div className="my-4 sm:my-0">
                  <p className="text-sm"> SP Rating</p>
                  <p className="text-primary-very-light text-lg ">
                    Login to see rating
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionBond;

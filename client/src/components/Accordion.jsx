import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
const Accordion = ({ question, answer, id }) => {
  const [openAccordion, setOpenAccordion] = useState(false);
  return (
    <div key={id}>
      <div className="">
        <div
          className={`text-base sm:text-xl p-2 overflow-hidden flex justify-between ${
            openAccordion
              ? " text-black  "
              : "text-text border-b-1 border-slate-200 py-6"
          }`}
          onClick={() => setOpenAccordion(!openAccordion)}
        >
          <p>{question}</p>
          {openAccordion ? (
            <MdKeyboardArrowDown />
          ) : (
            <MdOutlineKeyboardArrowUp />
          )}
        </div>

        <div
          className={`${
            openAccordion
              ? "block tracking-wide text-sm sm:lg  p-2 transition duration-400  ease-in-out"
              : "opacity-0   max-h-0"
          }`}
        >
          <div className="overflow-hidden">{answer}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

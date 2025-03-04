import React from "react";
import star from "../../assets/images/star.png";
const Nerdwallet = () => {
  return (
    <div className="my-10">
      <div className="flex gap-4 items-center justify-center py-4">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <div className="flex-col flex items-center justify-center">
        <p className="text-2xl lg:text-4xl lg:w-2/3 text-center pb-10">
          “Public earns high marks for ease-of-use and investment selection.”
        </p>
        <img src={star} alt="" className="py-4" />
        <p>
          see <span className="underline">public.com/disclosures</span> for more
          info
        </p>
      </div>
    </div>
  );
};

export default Nerdwallet;

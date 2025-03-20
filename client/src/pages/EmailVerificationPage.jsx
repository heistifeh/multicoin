import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { TbArrowsUp } from "react-icons/tb";
import { BiSolidPieChart } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import {
  verifyEmailStart,
  verifyEmailSuccess,
  verifyEmailFailure,
} from "../redux/user/userSlice.js";
import toast from "react-hot-toast";

const EmailVerificationPage = ({ email }) => {
  const [other, setOther] = useState(false);
  const [inputCode, setInputCode] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const inputRefs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const asset = (assetName, other) => {
    return (
      <div className="flex items-center bg-slate-800 w-fit  rounded-lg p-[6px]">
        <FaCheck className="text-base text-white" />
        <span className="text-white px-2 text-xl ">{assetName}</span>

        {other && assetName === "Bond Account" && (
          <span className="ml-2 text-white bg-gradient-to-r from-primary to-primary-very-light px-2 rounded-lg">
            {other}
          </span>
        )}
        {other && assetName === "High-yield" && (
          <span className="ml-2 text-white bg-gradient-to-r from-primary to-primary-very-light px-2 rounded-lg">
            {other}
          </span>
        )}
      </div>
    );
  };
  useEffect(() => {
    // Enable `other` when High-yield Cash Account is rendered
    setOther(true);
  }, []);

  // Handle Change
  const handleChange = (e) => {
    setInputCode({
      ...inputCode,
      [e.target.id]: e.target.value,
    });
  };
  console.log(inputCode);

  // Improved Auto-Submit Logic

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(verifyEmailStart());
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputCode),
      });
      // handling errors from failed responses
      if (!res.ok) {
        const errorData = await res.json();
        toast.error("Email verification failed");

        return dispatch(verifyEmailFailure(errorData.message));
      }

      const data = await res.json();
      if (data.success === false) {
        return dispatch(verifyEmailFailure(data.message));
      }
      navigate("/");
      toast.success("Email verified successfully");
      //   toast.success("Email verified successfully");
    } catch (error) {
      return dispatch(verifyEmailFailure(error.message));
    }
  };

  // Auto submit when all fields are filled
  //   useEffect(() => {
  //     if (inputCode.length === 6) {
  //       handleSubmit(new Event("submit"));
  //     }
  //   }, [inputCode]);

  return (
    <div className=" max-w-lg sm:max-w-lvw mx-auto">
      <div className=" grid sm:grid-cols-2 justify-between gap-4 h-screen ">
        {/* sidebar */}
        <div className=" hidden sm:flex flex-col bg-gradient-to-tr from-black to-[#000E43]  px-6">
          <div className=" top-4 flex gap-2 items-center ">
            <div>
              <img src="./logo.png" alt="" />
            </div>

            <span className="text-white text-3xl font-bold">Multicoin</span>
          </div>
          <div
            className="
          mt-15"
          >
            <h1 className="text-4xl text-white">Investing for those </h1>
            <span className="text-4xl text-primary-very-light">
              who take it seriously
            </span>
          </div>

          <div className="flex flex-col gap-4 mt-15 ">
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <BiSolidPieChart className="text-primary-very-light bg-slate-700 text-3xl p-[4px]" />
              <span className="text-white"> Multi-asset investing</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <TbArrowsUp className="text-primary-very-light bg-slate-700 text-3xl p-[4px]" />
              <span className="text-white"> Industry-leading yields</span>
            </div>
            <div className="flex gap-2 items-center text-base lg:text-lg">
              <FaHeart className="text-primary-very-light bg-slate-700 text-3xl p-[4px]" />
              <span className="text-white"> Trusted by millions</span>
            </div>
          </div>

          {/* assets */}
          <div className="my-10 flex flex-wrap gap-4">
            {asset("Stocks")}
            {asset("Options Trading")}
            {asset("Treasuries")}
            {asset("Bonds")}

            {asset("High-yield", "4.1% APY")}
            {asset("Bond Account", "6.95% yield")}
          </div>
        </div>

        {/* form */}
        <div className="flex flex-col my-20 max-w-sm mx-auto sm:mx-0 sm:max-w-lg px-8">
          <h1 className="text-xl sm:text-2xl font-bold text-black">
            Enter the one-time code we texted to your email.
          </h1>
          <span className="text-sm sm:text-lg">
            This is to help verify your identity.
          </span>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              id="code"
              onChange={handleChange}
              placeholder="code"
              maxLength={5}
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />

            <div disable={loading} className="flex w-full mt-5">
              <button className="mx-auto bg-primary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer w-full">
                {loading ? "Verifying email..." : "Verify email"}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};
export default EmailVerificationPage;

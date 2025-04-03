import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { TbArrowsUp } from "react-icons/tb";
import { BiSolidPieChart } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [other, setOther] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
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
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        toast.error(data.message);
        setError(data.message);
        return;
      }
      const token = data.resetToken;

      setError(null);
      setLoading(false);
      toast.success("Please proceed to reset your password");
      setSubmitted(true);
    } catch (error) {
      setError(error);

      setLoading(false);
    }
  };
  return (
    <div className=" max-w-lg sm:max-w-lvw mx-auto">
      <div className=" grid sm:grid-cols-2 justify-between gap-4 h-screen ">
        {/* sidebar */}
        <div className=" hidden sm:flex flex-col bg-gradient-to-tr from-black to-primary-dark  px-6">
          <div className=" top-4 flex gap-2 items-center ">
            <div>
              <img src="./logo.png" alt="" />
            </div>

            <span className="text-white text-3xl font-bold">Multicoin Capital</span>
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

         
        </div>

        {/* form */}
        {!submitted ? (
          <div className="flex flex-col my-20 max-w-sm mx-auto sm:mx-0 sm:max-w-lg px-8 justify-center">
            <h1 className="text-xl sm:text-4xl font-bold text-black my-4">
              Forgot Password
            </h1>
            <span className="text-sm sm:text-lg">
              Enter your email and we will send you a link to reset your
              password.
            </span>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                id="email"
                onChange={handleChange}
                placeholder="email"
                className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
              />

              <div disable={loading} className="flex w-full mt-5">
                <button className="mx-auto bg-primary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer w-[150px]">
                  {loading ? "Sending..." : "Send Reset Link"}
                </button>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        ) : (
          <div className="flex flex-col my-20 max-w-sm mx-auto sm:mx-0 sm:max-w-lg px-8 justify-center">
            <h1 className="text-xl sm:text-4xl font-bold text-black my-4">
              Forgot Password
            </h1>
            <span className="text-sm sm:text-lg">
              If an account exists for <span className="font-bold">{formData.email} </span>we will send you a link
              to reset your password shortly.
            </span>
            <div disable={loading} className="flex w-full mt-5">
              <Link
                to={"/sign-in"}
                className="mx-auto bg-primary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer w-full text-center"
              >
                Back to Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

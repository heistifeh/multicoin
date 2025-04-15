import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { TbArrowsUp } from "react-icons/tb";
import { BiSolidPieChart } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [other, setOther] = useState(false);
  //   password states

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const { token } = useParams();
  console.log(token, "token");

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
  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.id]: e.target.value,
  //     });
  //     if()
  //   };
  console.log(password, confirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/auth/reset-password/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (data.success === false) {
        setLoading(false);
        return setError(data.message);
      }
      setError(null);
      setLoading(false);
      toast.success("Password reset succesful, redirecting to login page...");
      setTimeout(() => {
        navigate("/sign-in");
      }, 2000);
    } catch (error) {
      toast.error(error || "reset password failed.");
      setError(error);
    } finally {
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
        <div className="flex flex-col my-20 max-w-sm mx-auto sm:mx-0 sm:max-w-lg px-8 justify-center">
          <h1 className="text-xl sm:text-4xl font-bold text-black my-4">
            Reset Password
          </h1>
          <span className="text-sm sm:text-lg">
            Please Input Your Email to Find your Account.
          </span>
          <form onSubmit={handleSubmit}>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="new password"
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
            <input
              type="password"
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="confirm password"
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />

            <div disable={loading} className="flex w-full mt-5">
              <button className="mx-auto bg-primary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer w-full">
                {loading ? "setting..." : "Set New Password"}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

import React, { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { TbArrowsUp } from "react-icons/tb";
import { BiSolidPieChart } from "react-icons/bi";
import { FaCheck } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  signUpStart,
  signUpSuccess,
  signUpFailure,
} from "../redux/user/userSlice.js";
const Signup = () => {
  const [other, setOther] = useState(false);
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);

  // initialize dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // other with assest
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

  // handlechange function
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUpStart());
    try {
      const res = await fetch(
        "https://multicoin-xdbp.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signUpFailure(data.message));
      }
      dispatch(signUpSuccess(data));
      navigate("/verify-email");
    } catch (error) {
      dispatch(signUpFailure(error.message));
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

            <span className="text-white text-3xl font-bold">
              Multicoin Capital
            </span>
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
        <div className="flex flex-col justify-center max-w-sm mx-auto sm:mx-0 sm:max-w-lg px-8">
          <h1 className="text-xl sm:text-2xl font-bold text-black">
            Start Investing in 5 minutes or less.
          </h1>
          <span className="text-sm sm:text-lg">
            Already have an account?
            <Link className="text-primary font-bold ml-2" to={"/sign-in"}>
              {`Log in >`}
            </Link>
          </span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="firstName"
              placeholder="Legal first name"
              onChange={handleChange}
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
            <input
              type="text"
              id="lastName"
              placeholder="Legal last name"
              onChange={handleChange}
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
            <input
              type="password"
              id="password"
              onChange={handleChange}
              min={8}
              placeholder="Password (min. 8 characters)"
              className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
            />
            <div className="flex items-center border-1 border-slate-200 rounded-lg mt-4 w-full overflow-hidden">
              <span className="px-3 text-sm font-bold text-slate-500 ">
                +1
              </span>
              <input
                type="text"
                id="phone"
                onChange={handleChange}
                placeholder="Phone number"
                className=" py-2 w-full placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
              />
            </div>

            <p
              className="
            text-sm my-8"
            >
              Your data is securely stored with encryption on US servers, we
              won’t spam you, and we will never sell your personal information.
              By clicking Create account, you agree to our terms and acknowledge
              that we process your personal information in accordance with our
              Privacy Policy.
            </p>
            <div disable={loading} className="flex w-full">
              <button className="mx-auto  bg-primary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer w-full">
                {loading ? "Creating account..." : "Create account"}
              </button>
            </div>
          </form>
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signup;

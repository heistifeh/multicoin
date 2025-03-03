import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signup() {
  // const navigate = useNavigate();
  return (
    <div className="w-2/3 mx-auto text-center my-6 max-w-lg">
      <h1 className="text-2xl sm:text-3xl text-white text-center my-2">
        Sign up
      </h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          className="border-1 border-primary p-2 rounded-lg focus:outline-none text-white"
          placeholder="username "
        />
        <input
          type="email"
          className="border-1 border-primary p-2 rounded-lg focus:outline-none  text-white"
          placeholder="email "
        />
        <input
          type="password"
          className="border-1 border-primary p-2 rounded-lg focus:outline-none  text-white"
          placeholder="password "
        />
        <button className="bg-secondary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer">
          SIGN UP
        </button>
        <button className="bg-orange-700 text-white p-2 rounded-lg hover:opacity-85 cursor-pointer">
          SIGN UP WITH GOOGLE
        </button>
      </form>
      <div className="my-2">
        <span>{`already have an account?`} </span>{" "}
        <span className="underline text-white">
          {" "}
          <Link to={"/sign-in"}> sign in</Link>{" "}
        </span>
      </div>
    </div>
  );
}

export default Signup;

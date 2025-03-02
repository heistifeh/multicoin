import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Signin() {
  // const navigate = useNavigate();
  return (
    <div className="w-2/3 mx-auto text-center my-6 max-w-lg">
      <h1 className="text-2xl sm:text-3xl text-white text-center my-2">
        Sign in
      </h1>
      <form className="flex flex-col gap-4">
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
          SIGN IN
        </button>
      </form>
      <div className="my-2">
        <span>{`Don't have an account?`} </span>{" "}
        <span className="underline text-white hover:text-secondary">
          {" "}
          <Link to={"/sign-up"}> sign up</Link>{" "}
        </span>
      </div>
    </div>
  );
}

export default Signin;

import React, { useState } from "react";
// import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Occupationinfo from "../components/Occupationinfo";
import Personalinfo from "../components/Personalinfo";
import Maritalinfo from "../components/Maritalinfo";
function Signin() {
  const [page, setPage] = useState(0);
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const title = ["personal info", "Marital info", "Occupational info"];

  const FormPage = () => {
    if (title[page] === "personal info") {
      return <Personalinfo formData={formData} handleChange={handleChange} />;
    }

    if (title[page] === "Marital info") {
      return <Maritalinfo formData={formData} handleChange={handleChange} />;
    }

    if (title[page] === "Occupational info") {
      return <Occupationinfo formData={formData} handleChange={handleChange} />;
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("submitted");
  };

  return (
    <div className="w-2/3 mx-auto text-center my-6 max-w-lg">
      <div className="w-full bg-red-600 h-2">
        <div
          className={`${
            page == 0
              ? "w-1/3"
              : page == 1
              ? "w-2/3"
              : page === 2
              ? "w-full"
              : ""
          } bg-green-500 h-2`}
        ></div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="header">
          <h1 className="text-2xl sm:text-3xl text-black text-center my-2">
            {title[page]}
          </h1>
        </div>
        <div className="body">{FormPage()}</div>

        <div className="buttons flex justify-between">
          <button
            type="button"
            disabled={page == 0}
            onClick={() => setPage((currPage) => currPage - 1)}
            className="bg-secondary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer"
          >
            prev
          </button>

          {page === title.length - 1 ? (
            <button
              type="submit"
              className="bg-secondary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer"
            >
              submit
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setPage((currPage) => currPage + 1)}
              className="bg-secondary text-white p-2 rounded-lg hover:opacity-85 cursor-pointer"
              disabled={!formData.username}
            >
              next
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default Signin;

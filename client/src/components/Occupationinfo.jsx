import React from "react";

const Occupationinfo = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={formData.occupation}
        placeholder="occupation"
        id="occupation"
        className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
      />
    </div>
  );
};

export default Occupationinfo;

import React from "react";

const Maritalinfo = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        onChange={handleChange}
        value={formData.married}
        className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
        type="text"
        placeholder="married?"
        id="married"
      />
    </div>
  );
};

export default Maritalinfo;

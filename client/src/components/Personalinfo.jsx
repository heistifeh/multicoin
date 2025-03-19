import React from "react";

const Personalinfo = ({ formData, handleChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="username"
        id="username"
        value={formData.username}
        onChange={handleChange}
        className="px-4 border-1 border-slate-200 rounded-lg mt-4 w-full py-2 placeholder:text-sm placeholder:text-slate-400 placeholder:font-bold outline-none"
      />
    </div>
  );
};

export default Personalinfo;

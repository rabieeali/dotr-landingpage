import { useState } from "react";

const Select = ({ options, name, onChange }) => {
  return (
    <>
      <select
        onChange={onChange}
        className="rtl border-0 pr-1 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        name={name}
      >
        {options.map((option, index) => (
          <option key={index} className=" " value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

import { useState } from "react";

const Select = ({ options, name, onChange }) => {
  // const [value, setValue] = useState("");
  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  return (
    <>
      <select
        onChange={onChange}
        className="rtl-select rtl ml-auto border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        name={name}
      >
        {options.map((option, index) => (
          <option key={index} className="ml-auto " value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;

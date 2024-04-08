import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="relative h-10 w-full min-w-[200px]">
      <input
        onChange={handleChange}
        className="peer h-full w-full rounded-[7px] border border-gray-600 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-gray-800 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-gray-600 placeholder-shown:border-t-gray-600 focus:border-2 focus:border-gray-600 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-gray-50"
        placeholder=" "
        {...otherProps}
      />
      <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-gray-800 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-gray-600 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-gray-800 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-800 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-800 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-600 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-600 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-800">
        {label}
      </label>
    </div>
  );
};

export default FormInput;

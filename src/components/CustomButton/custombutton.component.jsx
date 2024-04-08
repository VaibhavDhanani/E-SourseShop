import React, { Children } from "react";

const CustomButton = ({ children, color, ...otherProps }) => {
  return (
    <button
      className={`
    hover:bg-transparent 
    ${color ? "bg-blue-600" : "bg-gray-700"} 
    ${color ? "hover:text-blue-600" : "hover:text-gray-700"} 
    font-semibold text-white py-2 px-4 border 
    ${color ? "hover:border-blue-600" : "hover:border-gray-700"} 
    rounded
  `}  
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;

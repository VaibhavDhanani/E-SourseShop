import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  return (
    <div className="menu-item p-4 relative">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          transitionTimingFunction: "cubic-bezier(0.25, 0.45, 0.45, 0.95)",
        }}
        className="absolute inset-0 flex justify-center items-end p-4 rounded-lg bg-cover bg-center hover:scale-[1.05] duration-300 hover:transition-transform"
      >
        <div
          className="overlay w-full h-full"
          style={{ pointerEvents: "none" }}
        ></div>
        <div className="content absolute inset-0 flex flex-col justify-end mb-4 items-center text-center">
          <Link to={linkUrl} >
          <p className="text-black bg-white bg-opacity-30 rounded-lg px-4 py-2 ease-in-out duration-300 hover:bg-slate-400 hover:text-white hover:text-xl overflow-auto">
            {title.toUpperCase()}
          </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

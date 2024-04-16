import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/Cart/cart.action";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <>
      <div className="w-full max-w-sm mx-auto rounded-md shadow-xl overflow-hidden">
        <div className="relative group">
          <div className="absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity"></div>
          <div
            className="flex items-end justify-end h-56 w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          >
            <button
              className=" z-[1] p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-red-500 focus:outline-none"
              title="Add to Cart"
              onClick={() => addItem(item)}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="px-5 py-3 flex justify-between">
          <span className="text-gray-700 uppercase mt-2">{name}</span>
          <span className="text-gray-800 font-medium mt-2">&#8377;{price}</span>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from "react";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => {
  return (
    <div className="w-full flex h-[120px] mb-[15px]" >
      <img className="w-[40%]" src={imageUrl} alt="item" />
      <div className="w-[60%] flex flex-col items-start justify-center py-[10px] px-[20px] ">
        <span>{name}</span>
        <span>
          {" "}
          {quantity} X {price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;

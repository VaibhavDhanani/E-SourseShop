import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/custombutton.component";
import CartItem from "./cart-item.component";

const CartDropdown = ({ cartItems }) => (
  <div className="absolute w-96 max-h-80 flex flex-col p-5 border-2 border-black border-solid bg-white top-20 right-0 z-30">
    <div className="max-h-60 flex flex-col overflow-y-scroll">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);

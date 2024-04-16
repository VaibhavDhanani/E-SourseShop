import React from "react";
import { useNavigate } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/custombutton.component";
import CartItem from "./cart-item.component";
import { selectCartHidden, selectCartItems } from "../../redux/Cart/cart.selector";
import { toggleCartHidden } from "../../redux/Cart/cart.action";

const CartDropdown = ({ cartItems,dispatch }) => {
  const navigate = useNavigate();
  // console.log(other)
  return(
    <div className="absolute w-96 max-h-80 flex flex-col p-5 border-2 border-black border-solid bg-white top-20 right-0 z-30">
      <div className="max-h-60 flex flex-col overflow-y-scroll">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="text-center capitalize text-teal-800 font-bold text-xl mb-2">
            Cart is Empty
          </span>
        )}
      </div>
      {cartItems.length ? (
        <CustomButton onClick={() => {
          dispatch(toggleCartHidden())
          navigate("/checkout")
          }}>
          GO TO CHECKOUT
        </CustomButton>
      ) : (
        <span></span>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);

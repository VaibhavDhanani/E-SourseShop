import React from "react";
import { connect } from "react-redux";
import { ReactComponent as CartIcon } from "../../assets/cart1.svg";
import { toggleCartHidden } from "../../redux/Cart/cart.action";

const ShoppingCartIcon = ({toggleCartHidden}) => (
  <div onClick={toggleCartHidden} >
    <span className="cart-icon">0</span>
    <CartIcon />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null,mapDispatchToProps)(ShoppingCartIcon);

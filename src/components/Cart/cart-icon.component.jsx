import React from "react";
import {createStructuredSelector} from "reselect"
import { connect } from "react-redux";
import CartIcon  from "../../assets/carticon";
import { toggleCartHidden } from "../../redux/Cart/cart.action";
import { selectCartItemCount } from "../../redux/Cart/cart.selector";

const ShoppingCartIcon = ({ toggleCartHidden,itemCount }) => (
  <div onClick={toggleCartHidden}>
    <CartIcon itemCount={itemCount} />
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartIcon);

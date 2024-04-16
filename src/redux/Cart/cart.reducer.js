import CartActionTypes from "./cart.types";
import {addItemToCart, decreaseQuantity, increaseQuantity, removeFromCart} from "./cart.utils"

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    
      case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems,action.payload)
      };

      case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeFromCart(state.cartItems,action.payload.id)
      };

      case CartActionTypes.INCREASE_ITEM:
      return {
        ...state,
        cartItems: increaseQuantity(state.cartItems,action.payload.id)
      };
      
      case CartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseQuantity(state.cartItems,action.payload.id)
      };
    default:
      return state;
  }
};

export default cartReducer;

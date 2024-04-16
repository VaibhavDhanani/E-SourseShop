import SHOP_DATA from "./shop-data";

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    default:
      return state;
  }
};

export default shopReducer;

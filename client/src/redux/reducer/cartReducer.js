import { GET_ALL_CART } from "../actions/constants.js";

const initialState = {
  allCart: [],
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CART: {
      return {
        ...state,
        allCart: action.payload,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;

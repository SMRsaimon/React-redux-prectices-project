import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

const initState = {
  cart: [],
};

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const id = action.id;
      const newCart = [...state.cart, id];
      return { cart: newCart };
    case REMOVE_FROM_CART:
      const remainningCart = state.cart.filter((x) => x !== action.id);
      return { cart: remainningCart };

    default:
      return state;
  }
};

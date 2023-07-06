import React, { createContext, useReducer } from "react";
import cartReducer from "./cart.reducer";

const initalState = {
  items: [],
  quantity: 0,
  amount: 0,
};

export const cartContext = createContext(initalState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);
  //actions...
  function removeCartitem(id) {
    dispatch({
      type: "DELETE_CART_ITEM",
      payload: id,
    });
  }
  function addCartitem(item) {
    dispatch({
      type: "ADD_CART_ITEM",
      payload: item,
    });
  }
  function decreaseCartitem(id) {
    dispatch({
      type: "DECREASE_CART_ITEM",
      payload: id,
    });
  }
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
    });
  }

  return (
    <cartContext.Provider
      value={{
        items: state.items,
        quantity: state.quantity,
        amount: state.amount,
        removeCartitem,
        addCartitem,
        decreaseCartitem,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

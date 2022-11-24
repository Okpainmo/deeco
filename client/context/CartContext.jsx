import React, { createContext } from 'react';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const number = 12;

  return <CartContext.Provider value={number}>{children}</CartContext.Provider>;
}

export default CartContextProvider;

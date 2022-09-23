import React, { useState } from "react";
export const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addItemToCart = (item) => {
    setCartItem((prev) => [...prev, { ...item }]);
  };
  return (
    <CartContext.Provider value={{ cartItem, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};

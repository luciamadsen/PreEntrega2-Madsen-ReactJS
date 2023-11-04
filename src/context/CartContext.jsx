import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, qty) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, qty: prod.qty + qty }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, { ...item, qty }]);
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItem = (item) => {
    setCart(cart.filter((prod) => prod.id !== item.id));
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const totCartQty = cart.reduce((total, product) => total + product.qty, 0);
  const totAmount = cart.reduce(
    (total, product) => total + product.qty * product.price,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addItem, clearCart, removeItem, totCartQty, totAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};
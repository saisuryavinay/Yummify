import React, { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(p => p.name === item.name);

      if (existing) {
        return prev.map(p =>
          p.name === item.name
            ? { ...p, qty: p.qty + qty }
            : p
        );
      }

      return [...prev, { ...item, qty }];
    });
  };

  const increaseQty = (name) => {
    setCart(prev =>
      prev.map(item =>
        item.name === name
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (name) => {
    setCart(prev =>
      prev
        .map(item =>
          item.name === name
            ? { ...item, qty: item.qty - 1 }
            : item
        )
        .filter(item => item.qty > 0)
    );
  };

  const removeItem = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const totalAmount = cart.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/[^\d]/g, ""));
    return sum + price * item.qty;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeItem,
        clearCart,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

"use client";

import React, { createContext, useContext, useState } from "react";

interface Product {
  title: string;
  description: string;
  price: number;
}

interface CartItem {
  product: Product;
  count: number;
}

interface Cart {
  cartItems: CartItem[];
}

const initialState: Cart = {
  cartItems: [
    {
      product: {
        title: "Example Product",
        description: "This is an example product description.",
        price: 10.99,
      },
      count: 2,
    },
  ],
};

const CartContext = createContext<{
  cart: Cart;
  addToCart: (product: Product, count: number) => void;
  removeFromCart: (productTitle: string) => void;
}>({
  cart: initialState,
  addToCart: () => {},
  removeFromCart: () => {},
});

type CartProviderProps = {
  children: React.ReactNode;
};

// Create a provider component
export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart>({ cartItems: [] });

  const addToCart = (product: Product, count: number) => {
    setCart((prevCart) => {
      const existingCartItemIndex = prevCart.cartItems.findIndex(
        (item) => item.product.title === product.title
      );

      let newCartItems = [...prevCart.cartItems];

      if (existingCartItemIndex > -1) {
        newCartItems[existingCartItemIndex] = {
          ...newCartItems[existingCartItemIndex],
          count: newCartItems[existingCartItemIndex].count + count,
        };
      } else {
        newCartItems.push({ product, count });
      }

      return { cartItems: newCartItems };
    });
  };

  const removeFromCart = (productTitle: string) => {
    setCart((prevCart) => {
      const newCartItems = prevCart.cartItems.filter(
        (item) => item.product.title !== productTitle
      );

      return { cartItems: newCartItems };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

import { createContext, useEffect, useState } from "react";
import commerce from "../lib/commerce";

const CartContext = createContext();

export function CartProvider(props) {
  const [cartState, setCartState] = useState();

  const refreshCart = () => {
    commerce.cart.retrieve().then(cart => setCartState(cart));
  }

  const addToCart = (productToAdd, quantity, callback) => {
    commerce.cart.add(productToAdd, quantity).then(response => callback(response));
  }

  const removeItem = (itemToRemove, callback) => {
    commerce.cart.remove(itemToRemove).then(response => callback(response));
  }

  useEffect(() => {
    commerce.cart.retrieve().then(cart => setCartState(cart));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartState,
        refreshCart,
        addToCart,
        removeItem,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;

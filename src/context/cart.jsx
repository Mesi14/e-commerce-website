import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems])

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if(cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, [])

  const addItemToCart = item => {
    const alreadyIn = cartItems.find(cartItem => cartItem.id === item.id); 

    if (alreadyIn) {
      setCartItems(cartItems.map((prod) => prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod));
    } else {
    setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (item) => {
    const alreadyIn = cartItems.find(cartItem => cartItem.id === item.id);
  
    if (alreadyIn.quantity === 1) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const emptyCart = () => {
    setCartItems([]);
  }

  const calcTotalValue = () => {
    return cartItems.reduce((total, currItem) => total + currItem.price * currItem.quantity, 0);
  }
  
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        emptyCart,
        calcTotalValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

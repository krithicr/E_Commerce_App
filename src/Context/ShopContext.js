import React, { createContext, useState } from "react";
import Data from "../ClothsData.json";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const getDefaultCart = () => {
    let cart = {};

    for (let i = 0; i < Data.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartProducts, setCartProducts] = useState(getDefaultCart());
  const [itemSize, setItemSize] = React.useState();

  const addSize = (value, itemId) => {
    Data.find((product) => {
      if (product.id === itemId) {
        product.size = value;
        // setItemSize((prev) => ({ ...prev, value }));
      }
    });
  };

  const addToCart = (itemId) => {
    setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartProducts((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const manuallyEditCount = (newCount, id) => {
    setCartProducts((prev) => ({ ...prev, [id]: newCount }));
  };
  const cartTotalAmount = () => {
    let totalAmount = 0;
    for (let item in cartProducts) {
      if (cartProducts[item] > 0) {
        let cartInfo = Data.find((product) => product.id === Number(item));
        totalAmount += cartProducts[item] * cartInfo.productPrice;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    addToCart,
    removeFromCart,
    cartProducts,
    itemSize,
    manuallyEditCount,
    addSize,
    cartTotalAmount,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

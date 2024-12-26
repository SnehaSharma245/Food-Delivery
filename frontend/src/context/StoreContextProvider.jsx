import React, { createContext, useContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);
import { food_list } from "../assets/assets";
function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  // isme cartItems mein key hai item ki id aur uski value hai quantity of that item
  const addToCart = (itemId) => {
    //if there is no quantity associated with the item corresponding to that itemId -> cartItems[itemId]
    if (!cartItems[itemId]) {
      //returns a new object and set it to cartItems , jisme pura cartItems as it is hoga aur sirf us key ki value change hogi jo itemId variable mein hai -> [itemId]
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}
export const useStoreContext = () => {
  return useContext(StoreContext);
};

export default StoreContextProvider;

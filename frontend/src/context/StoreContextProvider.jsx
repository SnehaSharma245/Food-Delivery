import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
const StoreContext = createContext(null);

function StoreContextProvider({ children }) {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const url = "http://localhost:4000";
  // isme cartItems mein key hai item ki id aur uski value hai quantity of that item
  const addToCart = async (itemId) => {
    //if there is no quantity associated with the item corresponding to that itemId -> cartItems[itemId]
    if (!cartItems[itemId]) {
      //returns a new object and set it to cartItems , jisme pura cartItems as it is hoga aur sirf us key ki value change hogi jo itemId variable mein hai -> [itemId]
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };
  const removeFromCart = async (itemId) => {
    // setCartItems((prev) => ({ ...prev, [itemId]: 0 }));
    setCartItems((prev) => {
      const updatedCart = { ...prev };
      delete updatedCart[itemId];
      return updatedCart;
    });
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };
  const reduceQuantity = async (itemId) => {
    setCartItems((prev) => {
      if (prev[itemId] > 1) {
        return { ...prev, [itemId]: prev[itemId] - 1 };
      } else {
        const updatedObject = { ...prev };
        delete updatedObject[itemId];
        return updatedObject;
      }
    });
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      //if ki zarurat hi nhi hai cartITems mein sirf voh hai jinki koi quantity hai
      // if (cartItems[item]) {
      //   let itemInfo = food_list.find((product) => product._id === item);
      //   totalAmount += itemInfo.price * cartItems[item];
      // }

      let itemInfo = food_list.find((product) => product._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    }
    return totalAmount;
  };
  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  };
  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
  const loadCartData = async (token) => {
    const response = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  };
  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    reduceQuantity,
    getTotalCartAmount,
    url,
    token,
    setToken,
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

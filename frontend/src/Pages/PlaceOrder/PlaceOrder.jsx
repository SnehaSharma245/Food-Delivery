import React, { useEffect, useState } from "react";
import "./PlaceOrder.css";
import { useStoreContext } from "../../context/StoreContextProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useStoreContext();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const placeOrder = async (e) => {
    e.preventDefault();
    //Ek empty array banaya gaya hai jo final order items store karega. Isme sirf woh items add honge jinki quantity user ke cart me greater than 0 hai.
    let orderItems = [];
    // food_list ek array hai (ho sakta hai backend se fetched ho),
    food_list.map((item) => {
      //cartItems ek object hai jo cart me items ki quantities ko represent karta hai.item._id se identify kiya ja raha hai ki specific item ki cart me quantity greater than 0 hai ya nahi.
      if (cartItems[item._id] > 0) {
        //Current item ka ek reference banaya gaya hai (itemInfo), jo modify kiya ja sakta hai.
        let itemInfo = item;
        //itemInfo object me ek new property quantity add ki gayi hai.Is property me cart me us item ki quantity set ki gayi hai.
        itemInfo["quantity"] = cartItems[item._id];
        //Agar item ki quantity > 0 hai, toh uska information orderItems array me push kar diya jata hai.
        orderItems.push(itemInfo);
      }
    });
    // console.log(orderItems);
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error ");
    }
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      navigate("/cart");
    }
  });
  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            type="text"
            required
            placeholder="First Name"
            onChange={onChangeHandler}
            name="firstName"
            value={data.firstName}
          />
          <input
            type="text"
            required
            placeholder="Last Name"
            onChange={onChangeHandler}
            name="lastName"
            value={data.lastName}
          />
        </div>
        <input
          type="email"
          required
          placeholder="Email address"
          onChange={onChangeHandler}
          name="email"
          value={data.email}
        />
        <input
          type="text"
          required
          placeholder="Street"
          onChange={onChangeHandler}
          name="street"
          value={data.street}
        />
        <div className="multi-fields">
          <input
            type="text"
            required
            placeholder="City"
            onChange={onChangeHandler}
            name="city"
            value={data.city}
          />
          <input
            type="text"
            required
            placeholder="State"
            onChange={onChangeHandler}
            name="state"
            value={data.state}
          />
        </div>
        <div className="multi-fields">
          <input
            type="text"
            required
            placeholder="Zip code"
            onChange={onChangeHandler}
            name="zipcode"
            value={data.zipcode}
          />
          <input
            type="text"
            required
            placeholder="Country"
            onChange={onChangeHandler}
            name="country"
            value={data.country}
          />
        </div>
        <input
          type="text"
          required
          placeholder="Phone"
          onChange={onChangeHandler}
          name="phone"
          value={data.phone}
        />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button type="submit">PROCCED TO PAYMENT</button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;

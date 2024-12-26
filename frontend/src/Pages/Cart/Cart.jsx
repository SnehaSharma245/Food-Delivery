import React from "react";
import "./Cart.css";
import { useStoreContext } from "../../context/StoreContextProvider";
import { assets } from "../../assets/assets";
function Cart() {
  const {
    cartItems,
    food_list,
    removeFromCart,
    addToCart,
    reduceQuantity,
    getTotalCartAmount,
  } = useStoreContext();
  // console.log(cartItems);
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id]) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <div className="cart-item-quantity">
                    <img
                      src={assets.add_icon_green}
                      alt=""
                      onClick={() => addToCart(item._id)}
                    />
                    <p>{cartItems[item._id]}</p>
                    <img
                      src={assets.remove_icon_red}
                      alt=""
                      onClick={() => reduceQuantity(item._id)}
                    />
                  </div>

                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
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
              <p>{2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>PROCCED TO CHECKOUT</button>
        </div>
        <div className="cart-promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { useStoreContext } from "../../context/StoreContextProvider";
function FoodItem({ id, name, price, description, image }) {
  // const [itemCount, setItemCount] = useState(0);
  const { cartItems, addToCart, reduceQuantity } = useStoreContext();
  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img src={image} className="food-item-image" alt="" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            className="add"
            alt=" "
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt=""
              onClick={() => reduceQuantity(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;

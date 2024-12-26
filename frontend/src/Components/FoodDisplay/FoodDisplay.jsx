import React from "react";
import "./FoodDisplay.css";
import { useStoreContext } from "../../context/StoreContextProvider";
import FoodItem from "../FoodItem/FoodItem";
function FoodDisplay({ category }) {
  const { food_list } = useStoreContext();

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === item.category || category === "All") {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;

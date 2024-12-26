import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Satisfy your cravings with our wide range of delicious meals, freshly
          prepared and delivered straight to your doorstep—quick, convenient,
          and made with love!
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
}

export default Header;

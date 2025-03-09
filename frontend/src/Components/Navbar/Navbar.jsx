import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useStoreContext } from "../../context/StoreContextProvider";
function Navbar({ setShowLogin }) {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("home");
  const [searchShow, setSearchShow] = useState(false);
  const { cartItems, getTotalCartAmount, token, setToken } = useStoreContext();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    const navigate = useNavigate();
  };
  const searchRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      // searchRef.current exists (matlab ref element mount ho chuka hai).
      //       !searchRef.current.contains(event.target):
      // Ye check karta hai ki click search field ke andar nahi hua.
      // Agar click field ke bahar hota hai, to contains false return karega
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        console.log(searchRef);
        console.log(searchRef.current);

        setSearchShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    // Ye cleanup function hai jo component unmount hone par chalega.
    // Iska kaam hai event listener ko remove karna.
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      {searchShow ? (
        <div className="search-field" ref={searchRef}>
          <div className="search-bar">
            <input type="text" placeholder="Search Here...." />
          </div>
        </div>
      ) : (
        <div className="navbar">
          <Link to="/">
            {" "}
            <img src={assets.logo} alt="" className="logo" />
          </Link>

          <ul className="navbar-menu">
            <Link
              to="/"
              onClick={() => setMenu("home")}
              className={menu === "home" ? "active" : ""}
            >
              Home
            </Link>
            <a
              href="#explore-menu"
              onClick={() => setMenu("menu")}
              className={menu === "menu" ? "active" : ""}
            >
              Menu
            </a>
            <a
              href="#app-download"
              onClick={() => setMenu("mobile-app")}
              className={menu === "mobile-app" ? "active" : ""}
            >
              mobile-app
            </a>
            <a
              href="#footer"
              onClick={() => setMenu("contact-us")}
              className={menu === "contact-us" ? "active" : ""}
            >
              contact us
            </a>
          </ul>
          <div className="navbar-right">
            <img
              src={assets.search_icon}
              alt=""
              onClick={() => {
                setSearchShow(true);
              }}
            />
            <div className="navbar-search-icon">
              <Link to="/cart">
                <img src={assets.basket_icon} alt="" />
              </Link>
              {/* {!(Object.keys(cartItems).length === 0) && (

          <div className="dot"></div>
        )} */}
              {<div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>}
            </div>
            {!token ? (
              <button onClick={() => setShowLogin(true)}>Sign In</button>
            ) : (
              <div className="navbar-profile">
                <img src={assets.profile_icon} alt="" />
                <ul className="nav-profile-dropdown">
                  <li onClick={() => navigate("/myorders")}>
                    <img src={assets.bag_icon} alt="" className="bag-icon" />
                    <p>Orders</p>
                  </li>
                  <hr />
                  <li onClick={logout}>
                    <img src={assets.logout_icon} alt="" />
                    <p>Logout</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;

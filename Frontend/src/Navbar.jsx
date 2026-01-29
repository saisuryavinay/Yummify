import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import cartIcon from "./Food-imgs/cart.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "./index.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const notify = () => {
    toast.warn("Please login first!", {
      position: "top-right",
      autoClose: 2000,
      transition: Bounce,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <>
      <header>
        <div className="logo">YummiFy</div>

        <nav>
          <NavLink to="/" end style={{ fontSize: 18 }}>
            Home
          </NavLink>
          <NavLink to="/Recipes" style={{ fontSize: 18 }}>
            Recipes
          </NavLink>
          <NavLink to="/Categories" style={{ fontSize: 18 }}>
            Categories
          </NavLink>
          <NavLink to="/Contact" style={{ fontSize: 18 }}>
            Contact
          </NavLink>
        </nav>

        <div className="header-right">
          <div className="cart">
            {isLoggedIn ? (
              <Link to="/Cart">
                <img src={cartIcon} alt="Cart" />
              </Link>
            ) : (
              <img src={cartIcon} alt="Cart" onClick={notify} />
            )}
          </div>

          {/* LOGIN / LOGOUT BUTTON */}
          {isLoggedIn ? (
            <button
              className="btn-login"
              style={{ fontSize: 16 }}
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link to="/">
              <button className="btn-login" style={{ fontSize: 16 }}>
                Login
              </button>
            </Link>
          )}

          <ToastContainer />
        </div>
      </header>
    </>
  );
}

export default Navbar;

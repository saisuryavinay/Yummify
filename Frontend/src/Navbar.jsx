import React, { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import cartIcon from "./Food-imgs/cart.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import user from './Food-imgs/user.png';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // true if token exists
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <>
      <header>
        <div className="logo">YummiFy</div>
        
        {/* Hamburger Menu Button */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar open' : 'bar'}></span>
        </div>

        <nav className={isMenuOpen ? 'nav-active' : ''}>
          <NavLink to="/" end style={{ fontSize: 18 }} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/Recipes" style={{ fontSize: 18 }} onClick={closeMenu}>
            Recipes
          </NavLink>
          <NavLink to="/Categories" style={{ fontSize: 18 }} onClick={closeMenu}>
            Categories
          </NavLink>
          <NavLink to="/Contact" style={{ fontSize: 18 }} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        <div className="header-right">
          <div className="cart">
            {isLoggedIn ? (
              <Link to="/Cart" onClick={closeMenu}>
                <img src={cartIcon} alt="Cart" />
              </Link>
            ) : 
            (
              <img src={cartIcon} alt="Cart" />
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
          ) : 
          (
            <Link to="/login" onClick={closeMenu}>
              <button className="btn-login" style={{ fontSize: 16 }}>
                Login
              </button>
            </Link>
          )}
            {/* <img src={user} alt="" style={{width:"100px",height:"40px"}}/> */}
        </div>
      </header>
    </>
  );
}

export default Navbar;

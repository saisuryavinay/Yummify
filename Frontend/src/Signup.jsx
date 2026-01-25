// Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

import burger from "./Food-imgs/vegpulao.webp";
import leaf from "./Food-imgs/leaf.png";
import eggchilli from "./Food-imgs/eggchilli.jpg";
import redtom from "./Food-imgs/redtom.png";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3000/auth/register", {
        username,
        email,
        password,
      });

      alert("Registered successfully!");
      navigate("/"); // go to login page
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="page-bg">
      <div className="signup-card">
        <div className="top-curve">
          <Link to={"/"} className="loback" style={{ textDecoration: "none" }}>
            <span className="arrow">
              <svg width="12" height="12" viewBox="0 0 24 24">
                <path
                  d="M15 6L9 12L15 18"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="loback-text">Back to Login</span>
          </Link>

          <div className="header-text">
            <span className="line1">Create a free</span>
            <span className="line2">account</span>
          </div>
        </div>

        <img src={leaf} alt="leaf" className="dec dec-leaf" />
        <img src={leaf} alt="leaf" className="leaf1" />

        <div className="hero-wrap">
          <img src={burger} className="hero" alt="" />
          <img src={eggchilli} className="hero1" alt="" />
          <img src={redtom} className="redtom" alt="" />
        </div>

        <div className="name1">
          <p>Please create an account!</p>
        </div>

        {/* ONLY CHANGE: onSubmit + onChange */}
        <form className="form-body" onSubmit={handleSignup}>
          <label className="lbl">Username</label>
          <input
            className="input"
            type="text"
            placeholder="Enter your Email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="lbl">Email</label>
          <input
            className="input"
            type="email"
            placeholder="Enter your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="lbl">Password</label>
          <input
            className="input"
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="action-area">
            <button className="register-btn" type="submit">
              <span className="btn-label">Register</span>
            </button>
          </div>
        </form>

        <div className="footer-pill">
          Already have an account?
          <Link to={"/"} className="login-link">
            Log in!
          </Link>
        </div>
      </div>
    </div>
  );
}

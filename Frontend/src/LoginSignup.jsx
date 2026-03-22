// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Login.css";

import greenchilli from "./Food-imgs/greenchilli.png";
import redtom from "./Food-imgs/redtom.png";
import yellowtom from "./Food-imgs/yellowtom.png";
import leaf1 from "./Food-imgs/leaf1.png";
import chicken65 from "./Food-imgs/chicken65.webp";
import go from "./Food-imgs/go.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://yummifyy.onrender.com/auth/login",
        { email, password }
      );
      localStorage.setItem("token", res.data.token);
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="page-bg-modal">
      <div className="login-card">
        <div className="top-curve">
          <div className="name">
            <div className="hurray">
              <img src={go} className="go" alt="" />
              <div className="namee">Hurry! Let's Go</div>
            </div>
            <h2 className="title">
              <span className="line1">Welcome to</span>
              <span className="line2">Login page</span>
            </h2>
          </div>
        </div>

        <div className="welcome-back">Welcome back..!!</div>

        <div className="hero-wrap">
          <img src={greenchilli} className="greenchili" alt="" />
          <img src={redtom} className="redtom1" alt="" />
          <img src={yellowtom} className="yellowtom1" alt="" />
          <img src={leaf1} className="leaff" alt="" />
          <img src={chicken65} className="chi65" alt="" />
        </div>

        <form className="form-body" onSubmit={handleLogin}>
          <label className="lbl">Your email</label>
          <input
            className="input"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="lbl">Your password</label>
          <input
            className="input"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="action-area">
            <button className="login-btn" type="submit">
              Log in
            </button>
          </div>
        </form>

        <div className="footer-pill">
          Don’t have an account?
          <Link to="/Signup" className="register-link">
            Register!
          </Link>
        </div>
      </div>
    </div>
  );
}

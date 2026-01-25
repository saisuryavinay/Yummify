import React from "react";
import page from "./Food-imgs/pgnotfound.png";
import { Link } from "react-router-dom";
import "./Recipes.css";

function PageNOTFOUND() {
  return (
    <>
      <div className="notfound">
        <img src={page} alt="Page Not Found" />
        {/* <h2>Oops! Page Not Found 😢</h2>
      <p>The page you are looking for doesn’t exist or was moved.</p> */}
      </div>
      <Link to="/" className="back1">
        <svg
          className="back-icon"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M15 6L9 12L15 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>HOME</span>
      </Link>
    </>
  );
}

export default PageNOTFOUND;

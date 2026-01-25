import React, { useEffect, useRef } from "react";
import "./Recipes.css";

import breakfast from "./Food-imgs/breakfast.webp";
import Noodles from "./Food-imgs/noodles.webp";
import Veggstart from "./Food-imgs/Veg-Starters.png";
import nonvegmain from './Food-imgs/nonvegmain.avif';
import NonVegg from "./Food-imgs/Non-Veg-Starters.png";
import MainCo from "./Food-imgs/Main-Course.png";
import seaFood from "./Food-imgs/sea-food.png";
import IceCream from "./Food-imgs/Desserts.png";
import Soups from "./Food-imgs/Soups.png";
import Salad from "./Food-imgs/Salads.png";
import mandhi from "./Food-imgs/non-vegg.jpg";
import Drinks from './Food-imgs/Drinks.jpg';
import vegThali from "./Food-imgs/thali.jpg";
import { Link } from "react-router-dom";

function Recipes() {
  const alertShown = useRef(false);

  useEffect(() => {
    if (!alertShown.current) {
      alert("🍴 Order your food now!");
      alertShown.current = true;
    }
  }, []);

  const menuItems = [
    { title: "Breakfast", img: breakfast, filter: "breakfast"},
    { title: "Soups", img: Soups, filter: "all" },
    { title: "Non-Veg Starters", img: NonVegg, filter: "nonveg" },
    { title: "Veg Starters", img: Veggstart, filter: "veg" },
    { title: "Fish & Sea Food", img: seaFood, filter: "nonveg" },
    { title: "Veg Main Course", img: MainCo, filter: "veg" },
    { title: "Non Veg Main Course", img: nonvegmain, filter: "nonveg" },
    { title: "Mixed Thali", img: vegThali, filter: "mandies" },
    { title: "Noodles", img: Noodles, filter: "Mixed" },
    { title: "Fruits", img: Salad, filter: "fruits" },
    { title: "Desserts", img: IceCream, filter: "Treats" },
    { title: "Drinks", img: Drinks, filter:"Treats"}
  ];

  return (
    <section className="menu-section">
      <h1 className="menu-title">Explore Our Menu</h1>

      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-card">
            <img src={item.img} alt={item.title} className="menu-image" />
            <h2 className="menu-item-title">{item.title}</h2>
            <Link
              to="/categories"
              state={{ filterType: item.filter }}
              style={{
                color: "#F0A04B",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              View All
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recipes;
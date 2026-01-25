import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Recipes.css";
import { ToastContainer, toast, Bounce, Slide } from "react-toastify";

import nonvegicon from "./Food-imgs/non-vegIcon.png";
import vegicon from "./Food-imgs/veg-icon.png";
import Treats from "./Food-imgs/Treats.png";
import Allitems from "./Food-imgs/Allitems.png";
import searchIcon from "./Food-imgs/searchIcon.png";
import closeIcon from "./Food-imgs/closeIcon.png";

/* FIXED CATEGORY ORDER */
const CATEGORY_ORDER = [
  "Breakfast",
  "Veg Starters",
  "Non-Veg Starters",
  "Veg Main Course",
  "Non-Veg Main Course",
  "Veg & Non-Veg Thalis",
  "Noodles",
  "Fruits",
  "Drinks",
  "Desserts",
];

function Categories() {
  const { addToCart } = useCart();
  const location = useLocation();

  const [allCategories, setAllCategories] = useState([]);
  const [filterType, setFilterType] = useState(
    location.state?.filterType ?? "all"
  );
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState("");

  /* FETCH ITEMS (JWT PROTECTED) */
  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("https://yummifyy.onrender.com/items", {
      headers: {
        Authorization: `Bearer ${token}`, // 🔥 THIS IS THE KEY
      },
    })
      .then((res) => {
        if (res.status === 401) {
          alert("Session expired. Please login again.");
          localStorage.removeItem("token");
          window.location.href = "/";
        }
        return res.json();
      })
      .then((data) => {
        const grouped = {};

        data.forEach((item) => {
          if (!grouped[item.title]) {
            grouped[item.title] = {
              title: item.title,
              type: item.type,
              items: [],
            };
          }

          grouped[item.title].items.push({
            img: `https://yummifyy.onrender.com/${item.image}`,
            name: item.name,
            price: `₹${item.price}`,
            qty: 1,
          });
        });

        setAllCategories(Object.values(grouped));
      })
      .catch((err) => console.log(err));
  }, []);

  /* FILTER TOAST */
  useEffect(() => {
    if (location.state?.filterType) {
      toast.info("Filter applied", {
        position: "top-center",
        autoClose: 600,
      });
    }
  }, []);

  const notifyAdd = () => {
    toast.success("Item added to cart!", {
      position: "top-center",
      autoClose: 500,
      transition: Bounce,
    });
  };

  const notifyFilter = () => {
    toast.info("Filter applied", {
      position: "top-right",
      autoClose: 1200,
      transition: Slide,
    });
  };

  /* FILTER + SORT */
  const filtered = allCategories
    .filter((cat) => {
      if (filterType === "all") return true;
      return cat.type === filterType;
    })
    .sort((a, b) => {
      const aIndex = CATEGORY_ORDER.indexOf(a.title);
      const bIndex = CATEGORY_ORDER.indexOf(b.title);

      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;

      return aIndex - bIndex;
    });

  /* SEARCH */
  const searched = filtered
    .map((cat) => ({
      ...cat,
      items: cat.items.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      ),
    }))
    .filter((cat) => cat.items.length > 0);

  return (
    <div className="all-caties">
      {!showSearch && (
        <div className="icon-row">
          <div
            className="icon-box"
            onClick={() => {
              setFilterType("veg");
              notifyFilter();
            }}
          >
            <img src={vegicon} className="vegicon" />
            <p className="icon-label-veg">Veg</p>
          </div>

          <div
            className="icon-box"
            onClick={() => {
              setFilterType("nonveg");
              notifyFilter();
            }}
          >
            <img src={nonvegicon} className="nonvegicon" />
            <p className="icon-label-non">NonVeg</p>
          </div>

          <div
            className="icon-box"
            onClick={() => {
              setFilterType("Treats");
              notifyFilter();
            }}
          >
            <img src={Treats} className="nonvegicon" />
            <p className="icon-label-trt">Treats</p>
          </div>

          <div
            className="icon-box"
            onClick={() => {
              setFilterType("all");
              notifyFilter();
            }}
          >
            <img src={Allitems} className="Allitems" />
            <p className="icon-label-all">Menu</p>
          </div>

          <div
            className="icon-box search-box"
            onClick={() => setShowSearch(true)}
          >
            <img src={searchIcon} className="search-icon" />
          </div>
        </div>
      )}

      {showSearch && (
        <div className="search-bar-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Search food..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img
            src={closeIcon}
            className="close-icon"
            onClick={() => {
              setShowSearch(false);
              setSearchText("");
            }}
          />
        </div>
      )}

      {searched.map((cat, index) => (
        <div key={index} className="category-section">
          <div className="categories">
            <h2>{cat.title}</h2>
          </div>

          <div className="items">
            {cat.items.map((item, i) => (
              <div className="item-card" key={i}>
                <img
                  src={item.img}
                  className="item-img"
                  onError={(e) =>
                    (e.target.src =
                      "http://localhost:3000/uploads/commingsoon.jpg")
                  }
                />

                <h3 className="item-name">{item.name}</h3>

                <div className="price-qty-row">
                  <p className="item-price">{item.price}</p>
                  <select
                    className="qty-dropdown"
                    defaultValue={1}
                    onChange={(e) =>
                      (item.qty = Number(e.target.value))
                    }
                  >
                    {[...Array(10)].map((_, n) => (
                      <option key={n} value={n + 1}>
                        {n + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="item-buttons">
                  <button
                    className="btn buy"
                    onClick={() => {
                      addToCart(item, item.qty || 1);
                      notifyAdd();
                    }}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <ToastContainer style={{ marginTop: "8vh" }} />
    </div>
  );
}

export default Categories;

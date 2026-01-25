import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./index.css";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeItem,
    totalAmount,
    clearCart,
  } = useCart();

  function handleToast() {
    toast.success("Delivery Accepted ✅");

    setTimeout(() => {
      clearCart();              // ✅ clear cart
      window.location.reload(); // ✅ refresh page
    }, 1000);
  }

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <p>🛒 Your cart is empty</p>

        <Link to="/Categories" className="back">
          <svg
            className="back-icon"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
          <span>Go to Categories</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-layout">
      <Toaster />

      {/* LEFT ITEMS */}
      <div className="cart-left">
        <h2>Your Items</h2>

        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.img} alt={item.name} className="cart-img" />

            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.name)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.name)}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.name)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT BILL */}
      <div className="cart-right">
        <h3>Bill Summary</h3>

        <div className="bill-row">
          <span>Items Total</span>
          <span>₹{totalAmount}</span>
        </div>

        <div className="bill-row">
          <span>Delivery Fee</span>
          <span>₹12</span>
        </div>

        <div className="bill-row">
          <span>Tax</span>
          <span>₹{Math.round(totalAmount * 0.05)}</span>
        </div>

        <hr />

        <div className="bill-total">
          <span>Total Payable</span>
          <span>
            ₹{totalAmount + 12 + Math.round(totalAmount * 0.05)}
          </span>
        </div>

        <form className="payment-options">
          <label>
            <input type="radio" name="payment" /> Cash on Delivery
          </label>
          <br />
          <label>
            <input type="radio" name="payment" /> UPI / Card
          </label>
        </form>

        <button className="checkout-btn" onClick={handleToast}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;

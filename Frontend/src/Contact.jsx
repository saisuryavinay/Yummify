import React from "react";
import "./Recipes.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Our Contact Information</h2>
      <div className="divider"></div>

      <div className="contact-container">
        {/* Left Side - Map & Form */}
        <div className="left-side">
          <div className="map-box">
            <iframe
              title="location-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15274.01740212222!2d82.15909833497241!3d16.850927479650686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a378bd364a19d55%3A0x49e6484a1756a200!2sGollapalem%2C%20Andhra%20Pradesh%20533468!5e0!3m2!1sen!2sin!4v1761152407057!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="map-label">
              <p>Our Location</p>
              <span>Gollapalem, Kakinada</span>
            </div>
          </div>

          <form className="contact-form">
            <h3>Send Us a Message</h3>
            <div className="input-row">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <textarea placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
     
    </section>
  );
}

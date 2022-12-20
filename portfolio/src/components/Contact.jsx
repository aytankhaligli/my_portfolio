import React from "react";
import Header from "./Header";

export default function Contact() {
  return (
    <div className="contact-section-container">
      <div className="contact-section">
        <div>
          <h1>Contact</h1>
          <p>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>
        <form>
          <input type="text" placeholder="name" />
          <input type="text" placeholder="email" />
          <textarea placeholder="message" />
          <button>Send Message</button>
        </form>
      </div>
      <Header />
    </div>
  );
}

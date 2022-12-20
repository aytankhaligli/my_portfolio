import React from "react";

export default function Hero() {
  return (
    <div className="hero-section">
      <h1>Nice to meet you!</h1>
      <h1>
        I'm <span>Aytan Khaligli.</span>
      </h1>
      <p>
        I am a frontend developer passionate about building accessible web apps
        that users love.
      </p>
      <a href="tel:775229026" className="contact">
        Contact me
      </a>

      <img src="../public/profile.jpg" />
    </div>
  );
}

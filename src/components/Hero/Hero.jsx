import React from "react";
import "./Hero.css";
import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero section-padding">
      <div className="hero-text">
        <h1 className="h1-text">
          Coffee. <br /> Comfort. <br /> Crema.
        </h1>
        <p className="p-text">
          Your daily dose of exceptional coffee and serene vibes awaits. Step in
          and discover your new favorite spot.
        </p>
        <div className="hero-text-buttons">
          <Link to="/menu">
            <button className="button-primary">See our menu</button>
          </Link>
          <Link to="/contact">
            <button className="button-secondary">Get directions</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

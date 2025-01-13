import React from "react";
import coffee2 from "../../assets/coffee2.jpg";
import "./AboutCTA.css";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <div className="aboutcta section-padding flex-center">
      <div className="aboutcta-image flex-center">
        <img src={coffee2} alt="coffee" />
      </div>
      <div className="aboutcta-text">
        <h3 className="h3-text">About Crema</h3>
        <p className="p-text">
          At Crema, we believe coffee is more than a drink—it’s a moment, a
          ritual, a connection. Nestled in the heart of the city, our café
          offers artisan brews and freshly baked treats, all crafted with love
          and care. Whether you're here for a quiet morning or a lively
          catch-up, Crema is your cozy home away from home.
        </p>
        <Link to="/about">
          <button className="button-primary">Learn more</button>
        </Link>
      </div>
    </div>
  );
};

export default AboutCTA;

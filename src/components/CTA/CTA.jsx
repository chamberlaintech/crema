import React from "react";
import "./CTA.css";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <div className="cta">
      <div className="cta-content flex-center">
        <h3 className="h3-text">Your Coffee Moment Awaits</h3>
        <p className="p-text">
          Stop by today to experience the finest brews and freshly baked
          delights.
        </p>
        <Link to="/contact">
          <button className="button-white">plan your visit</button>
        </Link>
      </div>
    </div>
  );
};

export default CTA;

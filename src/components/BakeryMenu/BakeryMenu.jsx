import React from "react";
import "./BakeryMenu.css";

const BakeryMenu = ({ title, price, desc }) => {
  return (
    <div className="bakerymenu">
      <div className="bakerymenu-header">
        <div className="bakerymenu-header-name">
          <p className="menu-heading">{title}</p>
        </div>
        <div className="bakerymenu-header-price">
          <p className="menu-heading">{price}</p>
        </div>
      </div>
      <div className="bakerymenu-desc">
        <p className="p-text">{desc}</p>
      </div>
    </div>
  );
};

export default BakeryMenu;

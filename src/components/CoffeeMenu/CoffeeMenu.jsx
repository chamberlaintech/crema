import React from "react";
import "./CoffeeMenu.css";

const CoffeeMenu = ({ title, price, desc }) => {
  return (
    <div className="coffeemenu">
      <div className="coffeemenu-header">
        <div className="coffeemenu-header-name">
          <p className="menu-heading">{title}</p>
        </div>
        <div className="coffeemenu-header-price">
          <p className="menu-heading">{price}</p>
        </div>
      </div>
      <div className="coffeemenu-desc">
        <p className="p-text">{desc}</p>
      </div>
    </div>
  );
};

export default CoffeeMenu;

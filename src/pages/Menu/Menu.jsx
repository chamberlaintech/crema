import React from "react";
import "./Menu.css";
import CoffeeMenu from "../../components/CoffeeMenu/CoffeeMenu";
import BakeryMenu from "../../components/BakeryMenu/BakeryMenu";
import { coffee, bakeries } from "../../constants/data";

const Menu = () => {
  return (
    <div className="section-padding flex-center menu">
      <div className="menu-header">
        <h2 className="h2-text">Discover Your Favorites</h2>
        <p className="p-text">
          Delight in your favorites or discover something new.
        </p>
      </div>
      <h3 className="h3-text">Coffee</h3>
      <div className="menu-coffee">
        <div className="menu-coffee-basic">
          <h4 className="h4-text">Everyday Favorites</h4>
          {coffee[0].basic.map((coffee, index) => {
            return (
              <CoffeeMenu
                key={index}
                title={coffee.title}
                price={coffee.price}
                desc={coffee.desc}
              />
            );
          })}
        </div>
        <div className="menu-coffee-spec">
          <h4 className="h4-text">Signature Creations</h4>
          {coffee[0].specialties.map((coffee, index) => {
            return (
              <CoffeeMenu
                key={index}
                title={coffee.title}
                price={coffee.price}
                desc={coffee.desc}
              />
            );
          })}
        </div>
      </div>
      <h3 className="h3-text">Bakery</h3>
      <div className="menu-bakery">
        <div className="menu-bakery-basic">
          <h4 className="h4-text">The Basics</h4>
          {bakeries[0].basic.map((bakery, index) => {
            return (
              <BakeryMenu
                key={index}
                title={bakery.title}
                price={bakery.price}
                desc={bakery.desc}
              />
            );
          })}
        </div>
        <div className="menu-bakery-spec">
          <h4 className="h4-text">Crema´s Best</h4>
          {bakeries[0].specialties.map((bakery, index) => {
            return (
              <BakeryMenu
                key={index}
                title={bakery.title}
                price={bakery.price}
                desc={bakery.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Menu;

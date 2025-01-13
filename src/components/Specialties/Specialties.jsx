import React from "react";
import "./Specialties.css";
import coffee1 from "../../assets/coffee1.jpg";
import bakery from "../../assets/bakery.jpg";
import { coffee, bakeries } from "../../constants/data";
import CoffeeMenu from "../CoffeeMenu/CoffeeMenu";
import BakeryMenu from "../BakeryMenu/BakeryMenu";
import { Link } from "react-router-dom";

const Specialties = () => {
  return (
    <div className="specialties section-padding flex-center">
      <h2 className="h2-text">Our Specialties</h2>
      <div className="specialties-coffee">
        <div className="specialties-coffee-image flex-center">
          <img src={coffee1} alt="coffee" />
        </div>
        <div className="specialties-coffee-text flex-center">
          <h4 className="h4-text">Coffee</h4>
          {coffee[0].specialties.slice(0, 3).map((coffee, index) => {
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
      <div className="specialties-bakery">
        <div className="specialties-bakery-image flex-center">
          <img src={bakery} alt="bakeries" />
        </div>
        <div className="specialties-bakery-text flex-center">
          <h4 className="h4-text">Bakery</h4>
          {bakeries[0].specialties.slice(0, 3).map((bakery, index) => {
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
      <div className="specialties-button">
        <Link to="/menu">
          <button className="button-primary">view full menu</button>
        </Link>
      </div>
    </div>
  );
};

export default Specialties;

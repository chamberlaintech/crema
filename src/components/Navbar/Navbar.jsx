import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiThMenuOutline } from "react-icons/ti";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <p>crema</p>
        </Link>
      </div>
      <ul className="nav-links">
        <li className="nav-text">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-text">
          <Link to="menu">Menu</Link>
        </li>
        <li className="nav-text">
          <Link to="about">About Us</Link>
        </li>
        <li className="nav-text">
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <div className="nav-smallscreen">
        <TiThMenuOutline
          fontSize={28}
          className="overlay-open"
          onClick={() => setOpenMenu(true)}
        />
      </div>

      {openMenu && (
        <div
          className={`nav-smallscreen-overlay flex-center ${
            openMenu ? "slide-bottom" : ""
          }`}
        >
          <MdOutlineRestaurantMenu
            fontSize={28}
            className="overlay-close"
            onClick={() => setOpenMenu(false)}
          />
          <ul className="nav-smallscreen-links">
            <li className="nav-text">
              <Link to="/" onClick={() => setOpenMenu(false)}>
                Home
              </Link>
            </li>
            <li className="nav-text">
              <Link to="menu" onClick={() => setOpenMenu(false)}>
                Menu
              </Link>
            </li>
            <li className="nav-text">
              <Link to="about" onClick={() => setOpenMenu(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-text">
              <Link to="contact" onClick={() => setOpenMenu(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

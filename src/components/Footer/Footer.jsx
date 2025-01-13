import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer section-padding">
        <div className="footer-content">
          <div className="footer-logo">
            <Link to="/">
              <p>crema</p>
            </Link>
          </div>
          <div className="footer-info">
            <h4 className="footer-heading">explore</h4>
            <Link to="/">
              <p className="footer-text">Home</p>
            </Link>
            <Link to="/menu">
              <p className="footer-text">Menu</p>
            </Link>
            <Link to="/about">
              <p className="footer-text">About Us</p>
            </Link>
            <Link to="/contact">
              <p className="footer-text">Contact</p>
            </Link>
          </div>
          <div className="footer-info">
            <h4 className="footer-heading">reach out</h4>
            <h6 className="footer-subheading">Email</h6>
            <p className="footer-text">hello@cremacafe.com</p>
            <h6 className="footer-subheading">Phone</h6>
            <p className="footer-text">+1 (555) 123-4567</p>
            <h6 className="footer-subheading">Address</h6>
            <p className="footer-text">123 Brew Street, Coffeeville, USA</p>
          </div>
          <div className="footer-info">
            <h4 className="footer-heading">our hours</h4>
            <h6 className="footer-subheading">Monday - Friday</h6>
            <p className="footer-text">7:00 AM - 8:00 PM</p>
            <h6 className="footer-subheading">Saturday - Sunday</h6>
            <p className="footer-text">8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright flex-center">
        <p>© 2024 Crema. All rights reserved. Made with 🤍 by ChamWebTech.</p>
      </div>
    </>
  );
};

export default Footer;

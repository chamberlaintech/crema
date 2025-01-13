import React from "react";
import "./TestimonialCard.css";

const TestimonialCard = ({ name, text, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-card-text">
        <p className="p-text">{text}</p>
        <p className="menu-heading">- {name}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

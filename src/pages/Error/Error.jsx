import React from "react";
import "./Error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="section-padding flex-center error">
      <h2 className="h2-text">Something went wrong</h2>
      <Link to="/" className="button-primary">
        Back home
      </Link>
    </div>
  );
};

export default Error;

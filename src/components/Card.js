import React from "react";
import logo from "../logo192.png";

const Card = () => (
  <div className="card-container">
    <div>
      <img className="img-slug" src={logo} alt="Article Image" />
    </div>
    <div>
      <h3>Title</h3>
      <p>This is a description...</p>
    </div>
  </div>
);

export default Card;

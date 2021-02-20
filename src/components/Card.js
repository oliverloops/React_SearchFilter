import React from "react";
import logo from "../logo192.png";

const Card = ({ title, desc }) => {
  console.log(title);

  return (
    <div className="card-container">
      <div>
        <img className="img-slug" src={logo} alt="Article Image" />
      </div>
      <div className="text-content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;

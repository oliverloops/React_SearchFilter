import React from "react";
import logo from "../../public/logo192.png";

console.log(logo);

const Card = () => (
  <div>
    <div>
      <img src={logo} alt="Article Image" />
    </div>
    <div>
      <h3>Title</h3>
      <p>This is a description...</p>
    </div>
  </div>
);

export default Card;

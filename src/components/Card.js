import React from "react";

const Card = ({ image, title, desc }) => {
  return (
    <div className="card-container">
      <div>
        <img className="img-slug" src={image} alt="Article Image" />
      </div>
      <div className="text-content">
        <h3>{title.slice(0, 31)}</h3>
        <p>{desc.slice(0, 60).concat("...")}</p>
      </div>
    </div>
  );
};

export default Card;

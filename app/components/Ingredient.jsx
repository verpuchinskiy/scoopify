import "./Ingredient.scss";
import React from "react";

export const Ingredient = ({ name, backgroundColor, image, description }) => {
  return (
    <div className="ingredient" style={{ backgroundColor }}>
      <img src={image} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

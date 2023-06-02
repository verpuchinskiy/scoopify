import "./Hero.scss";
import React from "react";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="left">Experience the joy of handmade ice cream!</div>
      <div className="right">
        <img src="/ice-cream.png" alt="" />
      </div>
    </div>
  );
};

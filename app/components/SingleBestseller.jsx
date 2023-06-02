import "./SingleBestseller.scss";
import React from "react";
import Link from "next/link";

export const SingleBestseller = ({ name, img, description, id }) => {
  return (
    <div className="singleBestseller">
      <Link href={`products/${id}`}>
        <img src={img} alt="" />
        <h3>{name}</h3>
      </Link>
      <p>{description}</p>
    </div>
  );
};

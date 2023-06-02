"use client";

import React, { useContext } from "react";
import "./ProductInfo.scss";
import { ProductsContext } from "./ProductsContext";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";

export const ProductInfo = ({ product }) => {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const router = useRouter();

  const handleClick = () => {
    setSelectedProducts((prev) => [...prev, product._id]);
  };

  const returnBack = () => {
    router.back();
  };

  return (
    <div className="product">
      <div className="backSection" onClick={returnBack}>
        <ArrowBackIosNewIcon className="backArrow" />
        &nbsp; Back
      </div>
      <div className="top">
        <div className="image">
          <img src={product.img}></img>
        </div>
        <div className="info">
          <h3>{product.name}</h3>
          <p className="price">{product.price} €</p>
          <p className="volume">{product.volume} oz</p>
          <p className="ingredients">Ingredients: {product.ingredients}</p>
          <button className="addToCartBtn" onClick={handleClick}>
            Add to cart
          </button>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h4>About</h4>
          {product.description.split("\\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="right">
          <div className="infoSection">
            <h4>Allergens information</h4>
            <p>Contains milk and eggs. May contain traces of nuts.</p>
          </div>
          <div className="infoSection">
            <h4>Preparation instructions</h4>
            <p>
              Allow the ice cream to sit at room temperature for 5-10 minutes
              before scooping.
            </p>
          </div>
          <div className="infoSection">
            <h4>Storage instructions</h4>
            <p>Keep frozen at -18°C (0°F) or below.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

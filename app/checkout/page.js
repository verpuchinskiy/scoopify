"use client";
import "./Checkout.scss";

import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../components/ProductsContext";

export default function Checkout() {
  const { selectedProducts, setSelectedProducts } = useContext(ProductsContext);
  const [productsInfo, setProductsInfo] = useState([]);

  useEffect(() => {
    const uniqueProducts = [...new Set(selectedProducts)];
    fetch("/api/products?ids=" + uniqueProducts.join(","))
      .then((response) => response.json())
      .then((json) => setProductsInfo(json));
  }, [selectedProducts]);

  const addProduct = (id) => {
    setSelectedProducts((prev) => [...prev, id]);
  };

  const removeProduct = (id) => {
    const position = selectedProducts.indexOf(id);
    if (position !== -1) {
      setSelectedProducts((prev) => {
        return prev.filter((value, index) => index !== position);
      });
    }
  };

  let total = 0;
  if (selectedProducts?.length) {
    for (let id of selectedProducts) {
      const product = productsInfo.find((p) => p._id === id);
      if (product) {
        total += product.price;
      }
    }
  }

  return (
    <div className="checkout">
      <h2>Your Shopping Cart</h2>
      {!productsInfo.length && (
        <p style={{ textAlign: "center", marginTop: "60px" }}>
          Your Shopping Cart is empty.
        </p>
      )}
      {productsInfo.length > 0 &&
        productsInfo.map((productInfo) => (
          <div className="productData">
            <div className="image">
              <img src={productInfo.img} />
            </div>
            <div className="name">{productInfo.name}</div>
            <div className="quantity">
              <button onClick={() => removeProduct(productInfo._id)}>-</button>
              {selectedProducts.filter((id) => id === productInfo._id).length}
              <button onClick={() => addProduct(productInfo._id)}>+</button>
              <p>x</p>
              <span className="itemPrice">{productInfo.price} €</span>
            </div>
          </div>
        ))}
      {productsInfo.length && (
        <>
          <div className="total">
            <h3>Total:</h3>
            <h3>{total} €</h3>
          </div>
          <button className="payBtn">Pay {total} €</button>
        </>
      )}
    </div>
  );
}

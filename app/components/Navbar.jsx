"use client";

import "./Navbar.scss";
import React, { useContext, useState } from "react";
import Link from "next/link";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { ProductsContext } from "./ProductsContext";

export const Navbar = () => {
  const { selectedProducts } = useContext(ProductsContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link href="/">
          <img src="/logo.png" alt="" />
        </Link>
      </div>
      <div className={`center ${menuOpen ? "open" : ""}`}>
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>
          <li>Delivery</li>
          <li>Contacts</li>
          <li>Career</li>
        </ul>
      </div>
      <div className="right">
        <Link href="/products">
          <button>Shop now</button>
        </Link>
        <div className="shoppingCartBlock">
          <Link href="/checkout">
            <ShoppingBasketIcon className="shoppingCart" />
            {selectedProducts.length > 0 && (
              <span className="itemsNumber">{selectedProducts.length}</span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

import { initMongoose } from "@/lib/mongoose";
import { findAllProducts } from "@/pages/api/products";
import Link from "next/link";
import React from "react";
import "./Products.scss";

// const products = [
//   {
//     id: "strawberry",
//     name: "Strawberry Dream",
//     img: "/IceCream-Strawberry.png",
//     description:
//       "Rich and velvety, with a texture that's so smooth, it practically melts in your mouth. It's made with fresh milk and cream, which gives it a creamy, dreamy consistency that's a delight to eat.",
//     url: "/products/strawberry",
//   },
//   {
//     id: "banana",
//     name: "Classic Banana",
//     img: "/IceCream-Banana.png",
//     description:
//       "This classic flavor is sure to please everyone. Perfect balance of sweet and creamy.",
//     url: "/products/banana",
//   },
//   {
//     id: "almond",
//     name: "Almond Perfection",
//     img: "/IceCream-Almond.png",
//     description:
//       "Creamy and nutty treat that's sure to satisfy your sweet cravings. Made with the finest roasted almonds and high-quality ingredients, every scoop is bursting with flavor.",
//     url: "/products/almond",
//   },
//   {
//     id: "orange",
//     name: "Orange Sensation",
//     img: "/IceCream-Orange.png",
//     description:
//       "Get ready for a flavor explosion! Our velvety smooth orange ice cream is a sweet and a little sour masterpiece.",
//     url: "/products/orange",
//   },
//   {
//     id: "blueberry",
//     name: "Blueberry and cream",
//     img: "/IceCream-Blueberry.png",
//     description:
//       "Indulge in the creamy delight. Experience the perfect blend of luscious blueberries and velvety smoothness. Delight your taste buds with this refreshing and flavorful frozen treat. Treat yourself to a burst of summer.",
//     url: "/products/blueberry",
//   },
//   {
//     id: "blackberry",
//     name: "Blackberry Frostbite",
//     img: "/IceCream-Blackberry.png",
//     description:
//       "Indulge in the frozen sensation that combines the richness of blackberries with the refreshing chill of ice cream. Experience the captivating flavor and embark on a delightful frozen adventure that will leave your taste buds craving for more.",
//     url: "/products/blackberry",
//   },
// ];

async function fetchProducts() {
  await initMongoose();
  const products = await findAllProducts();

  return JSON.parse(JSON.stringify(products));
}

export default async function Products() {
  const products = await fetchProducts();

  return (
    <div className="products">
      <h2>Our tasty delights</h2>
      <div className="list">
        {products.map((item) => (
          <div className="product">
            <Link href={`products/${item._id}`} className="link">
              <img src={item.img}></img>
              <h3>{item.name}</h3>
            </Link>
            <p>{item.shortDesc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

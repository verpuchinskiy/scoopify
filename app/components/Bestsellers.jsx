import "./Bestsellers.scss";
import React from "react";
import { SingleBestseller } from "./SingleBestseller";
import Link from "next/link";
import { initMongoose } from "@/lib/mongoose";
import { findAllProducts } from "@/pages/api/products";

// const bestsellers = [
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
// ];

async function fetchProducts() {
    await initMongoose();
    const products = await findAllProducts();

  return JSON.parse(JSON.stringify(products));
}

export async function Bestsellers() {
//   const [bestsellers, setBestsellers] = useState([]);

  const products = await fetchProducts();
  const bestsellers = products.slice(0, 3);


  //   useEffect(() => {
  //     const fetchProducts = async () => {
  //       try {
  //         const response = await fetch("/api/products");
  //         const json = await response.json();
  //         const rawProducts = json;
  //         const newArray = rawProducts.slice(0, 3);
  //         setBestsellers(newArray);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchProducts();
  //   }, []);

  return (
    <div className="bestsellers">
      <h2>Our Bestsellers</h2>
      <div className="list">
        {bestsellers.map((item) => (
          <SingleBestseller
            key={item._id}
            name={item.name}
            img={item.img}
            description={item.shortDesc}
            id={item._id}
          />
        ))}
      </div>
      <div className="showMore">
        <Link href="/products">
          <button>Show more</button>
        </Link>
      </div>
    </div>
  );
}

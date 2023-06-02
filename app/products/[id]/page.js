import { ProductInfo } from "@/app/components/ProductInfo";
import { initMongoose } from "@/lib/mongoose";
import { findAllProducts } from "@/pages/api/products";
import React from "react";

// const products = [
//   {
//     id: "strawberry",
//     name: "Strawberry Dream",
//     img: "/IceCream-Strawberry.png",
//     description:
//       "This creamy dessert is bursting with the sweet and tangy flavor of ripe, juicy strawberries. Made with the freshest ingredients, our ice cream is a delightful treat that's perfect for any occasion.\nOur Strawberry Dream is made with fresh milk and cream, and contains chunks of real strawberries that add texture and flavor to every spoonful.\nIt's free from artificial colors and preservatives, making it a wholesome treat that you can feel good about indulging in.",
//     url: "/products/strawberry",
//     price: 8,
//     volume: 16,
//     ingredients:
//       "Strawberries, cream, sugar, whole milk, vanilla extract, salt, egg yolks",
//   },
//   {
//     id: "banana",
//     name: "Classic Banana",
//     img: "/IceCream-Banana.png",
//     description:
//       "Indulge in the smooth and luscious delight of our Classic Banana ice cream. This creamy frozen treat is a true crowd-pleaser, offering a perfect balance of sweet and creamy flavors that will satisfy your cravings.\n Crafted with care using only the finest ingredients, our Banana ice cream is made with fresh bananas that lend their natural sweetness and a hint of tropical goodness to every scoop. The velvety texture and rich taste will transport your taste buds to a blissful tropical paradise.\n With no artificial colors or preservatives, our Banana ice cream is a wholesome choice for your dessert cravings. Whether enjoyed on its own, in a sundae, or as a complement to your favorite desserts, our Classic Banana ice cream is a delightful treat that will bring a smile to your face.",
//     url: "/products/banana",
//     price: 7,
//     volume: 16,
//     ingredients:
//       "Bananas, cream, whole milk, sugar, vanilla extract, salt, egg yolks",
//   },
//   {
//     id: "almond",
//     name: "Almond Perfection",
//     img: "/IceCream-Almond.png",
//     description:
//       "Indulge in the velvety smoothness of our Almond Perfection ice cream, a creamy and nutty treat that will satisfy your sweet cravings. Made with the finest roasted almonds and high-quality ingredients, every scoop is bursting with flavor.\n Our Almond Perfection ice cream is a true delight for your taste buds. The rich and creamy texture, combined with the nutty goodness of roasted almonds, creates a heavenly combination that will leave you wanting more.\n Crafted with care, this frozen masterpiece is free from artificial colors and preservatives. We believe in using only the freshest and most wholesome ingredients to create a truly exceptional dessert experience.",
//     url: "/products/almond",
//     price: 11,
//     volume: 16,
//     ingredients:
//       "Almonds, cream, whole milk, sugar, vanilla extract, salt, egg yolks",
//   },
//   {
//     id: "orange",
//     name: "Orange Sensation",
//     img: "/IceCream-Orange.png",
//     description:
//       "A frozen masterpiece that will leave your taste buds craving for more. This delightful treat combines the perfect balance of sweet and a little sour, offering a flavor explosion that's sure to awaken your senses.\n Handcrafted with the freshest ingredients, our Orange Sensation ice cream is made with care and precision. Each scoop is bursting with the vibrant and refreshing taste of ripe, juicy oranges. The creamy texture of this frozen delight creates a truly satisfying experience that you'll savor with every spoonful.\n At our ice cream parlor, we take pride in using only the finest quality ingredients. Our Orange Sensation ice cream is crafted with fresh milk and cream, ensuring a rich and luxurious consistency that practically melts in your mouth. And to enhance your enjoyment, we've added real orange zest to infuse every bite with a bright citrus essence.",
//     url: "/products/orange",
//     price: 8,
//     volume: 16,
//     ingredients:
//       "Oranges, orange juice, cream, whole milk, sugar, vanilla extract, salt, egg yolks",
//   },
//   {
//     id: "blueberry",
//     name: "Blueberry and Cream",
//     img: "/IceCream-Blueberry.png",
//     description:
//       "This delectable frozen treat is a perfect balance of luscious blueberries and velvety smoothness. Each spoonful is a burst of flavor that will delight your taste buds.\n Using only the finest and freshest ingredients, our Blueberry and Cream ice cream is crafted to perfection. We source ripe, juicy blueberries to ensure that every bite is filled with their sweet and tangy essence. The creamy base is made with fresh milk and cream, creating a luxurious texture that practically melts in your mouth.\n To enhance the experience, we've included generous portions of real blueberry chunks throughout the ice cream. These bursts of fruity goodness add both texture and an intensified flavor that will leave you craving more.",
//     url: "/products/blueberry",
//     price: 9,
//     volume: 16,
//     ingredients:
//       "Blueberries, cream, whole milk, sugar, vanilla extract, lemon, salt, egg yolks",
//   },
//   {
//     id: "blackberry",
//     name: "Blackberry Frostbite",
//     img: "/IceCream-Blackberry.png",
//     description:
//       " This luscious treat combines the richness of blackberries with the refreshing chill of ice cream, creating a delightful frozen adventure for your taste buds.\n Made with the finest and freshest blackberries, our Blackberry Frostbite ice cream is bursting with the sweet and tangy flavor of ripe, juicy blackberries. Each scoop is a perfect balance of creamy smoothness and bold blackberry goodness.\n We take pride in using only the highest quality ingredients in our ice cream. Our recipe starts with fresh milk and cream, ensuring a rich and velvety texture that melts in your mouth. The inclusion of real blackberries adds delightful bursts of flavor and texture to every spoonful.",
//     url: "/products/blackberry",
//     price: 10,
//     volume: 16,
//     ingredients:
//       "Blackberries, cream, whole milk, sugar, vanilla extract, salt",
//   },
// ];

async function fetchProducts() {
  await initMongoose();
  const products = await findAllProducts();

  return JSON.parse(JSON.stringify(products));
}

export default async function Product({ params }) {
  const id = params["id"];
  const products = await fetchProducts();
  const product = products.find((product) => product._id === id);

  return (
    <ProductInfo product={product} />
  );
}

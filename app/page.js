// "use client";

import { Hero } from "./components/Hero";
import { Ingredient } from "./components/Ingredient";
import "./Home.scss";
import "./globals.scss";
import { Bestsellers } from "./components/Bestsellers";
import Head from "next/head";

const ingredients = [
  {
    name: "Kiwi",
    backgroundColor: "#c0ecc2",
    image: "/kiwi.png",
    description:
      "Kiwis are high in Vitamin C  and dietary fiber and provide a variety of health benefits. This tart fruit can support heart health, digestive health, and immunity. ",
  },
  {
    name: "Peach",
    backgroundColor: "#f6c1a1",
    image: "/peach.png",
    description:
      "Peaches are a good source of vitamins A, C, and E, which are important for supporting healthy skin, eyes, and immune system.",
  },
  {
    name: "Banana",
    backgroundColor: "#f7e46b",
    image: "/banana.png",
    description:
      "Bananas are a great source of potassium, which is important for maintaining healthy blood pressure, nerve function, and heart health.",
  },
  {
    name: "Strawberry",
    backgroundColor: "#f7e5e7",
    image: "/strawberry.png",
    description:
      "Strawberries are low in calories and high in fiber, which can help regulate digestion, promote feelings of fullness, and support healthy blood sugar levels.",
  },
];

export default function Home() {
  return (
    <div className="home">
      <Head>
        <link href="https://fonts.cdnfonts.com/css/aquino" rel="stylesheet" />
      </Head>
      <Hero />
      <h2>We use only natural ingredients</h2>
      <div className="ingredients">
        {ingredients.map((ingredient) => (
          <Ingredient
            key={ingredient.name}
            name={ingredient.name}
            backgroundColor={ingredient.backgroundColor}
            image={ingredient.image}
            description={ingredient.description}
          />
        ))}
      </div>
      <Bestsellers />
    </div>
  );
}

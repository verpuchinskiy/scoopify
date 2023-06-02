import { model, models, Schema } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  img: String,
  description: String,
  shortDesc: String,
  url: String,
  price: Number,
  volume: Number,
  ingredients: String,
});

const Product = models?.Product || model("Product", ProductSchema);

export default Product;
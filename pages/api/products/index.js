import { initMongoose } from "@/lib/mongoose";
import Product from "@/models/Product";

export async function findAllProducts() {
  return Product.find().exec();
}

export default async function handle(req, res) {
  await initMongoose();
  const { ids } = req.query;

  if (ids) {
    res.json(await Product.find({ _id: { $in: ids.split(",") } }).exec());
  } else {
    // res.json(await findAllProducts());
    return res.status(400).json({ error: "No product Ids provided" });
  }
}

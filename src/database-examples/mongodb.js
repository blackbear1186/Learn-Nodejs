import { MongoClient } from "mongodb";
import fsBase from "fs";
const fs = fsBase.promises;
import path from "path";

// wrap await MongoClient in aysnc function to connect to mongodb
const execute = async () => {
  const client = await MongoClient.connect("mongodb://localhost:27017", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  const db = client.db("node-course-db");

  // read the file using fs
  const newProductString = await fs.readFile(
    path.join(__dirname, "new-products.txt"),
    "utf8"
  );

  // split the string in new-products.txt into an array
  const productNames = newProductString.split(",");

  for (let name of productNames) {
    await db.collection("products").insertOne({
      name,
    });
  }

  const products = await db.collection('products').find({}).toArray();
  console.log(products)
  console.log("Done importing products!");

  // close
  client.close();
};

execute();

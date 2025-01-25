import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Transaction from "./models/Transaction.js";

dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.send({ body: "tesing successfull" });
});

app.post("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const { name, description, datetime, price } = req.body;
  const transaction = await Transaction.create({
    name,
    description,
    datetime,
    price,
  });

  res.json(transaction);
});

app.get("/api/transaction", async (req, res) => {
  await mongoose.connect(process.env.MONGO_URL);
  const transactions = await Transaction.find();
  res.json(transactions);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

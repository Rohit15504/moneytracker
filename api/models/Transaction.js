import mongoose from "mongoose";

const { Schema, model } = mongoose;

const TransactionSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  datetime: { type: Date, default: Date.now }, // Set default value for datetime
});

const Transaction = model("Transaction", TransactionSchema);

export default Transaction; // Export the model as default

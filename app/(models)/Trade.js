import mongoose, { Schema, model, models } from "mongoose";

const TradeSchema = new Schema({
  symbol: {
    type: String,
    required: true,
  },
  profitPercent: {
    type: Number,
  },
  lossPercent: {
    type: Number,
  },
  actionableSignal: {
    type: String,
    required: true,
  },
  news: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

const Trade = models.Trade || model("trade", TradeSchema);

export default Trade;

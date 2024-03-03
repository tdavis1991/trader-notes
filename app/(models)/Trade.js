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
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Trade = models.Trade || model("Trade", TradeSchema);

export default Trade;

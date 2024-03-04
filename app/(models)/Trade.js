import mongoose, { Schema, model, models } from "mongoose";

const TradeSchema = new Schema({
  symbol: {
    type: String,
    required: true,
  },
  profitOrLostPercent: {
    type: Number,
  },
  profitOrLost: {
    type: String,
    required: true,
  },
  actionableSignal: {
    type: String,
  },
  ftfc: {
    type: Boolean,
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

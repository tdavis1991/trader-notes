import mongoose, { Schema, model, models } from "mongoose";

const WatchlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  watchlistType: {
    type: String,
    required: true
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

const Watchlist = models.Watchlist || model("User", WatchlistSchema);

export default Watchlist;

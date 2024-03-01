import mongoose, { Schema, model, models } from "mongoose";
import Trade from "./Trade";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["admin", "moderator", "user"],
    default: "user",
  },
  avatar: {
    type: String,
  },
  trades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Trade",
    },
  ],
});

const User = models.User || model("User", UserSchema);

export default User;

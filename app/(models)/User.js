import mongoose, { Schema, model, models } from "mongoose";

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
});

const User = models.User || model("User", UserSchema);

export default User;

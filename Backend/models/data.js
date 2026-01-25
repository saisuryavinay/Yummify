import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String } // new field
});

const Data = mongoose.model("Food", userSchema);
export default Data;

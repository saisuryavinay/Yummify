import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import path from "path";
import foodRoutes from "./routes/foodRoutes.js";
import menuRoutes from './routes/menuRoutes.js';
import productRoutes from "./routes/productRoute.js"; 
import authRoutes from './routes/authRoutes.js'
import dotenv from "dotenv";
dotenv.config();


const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected 🚀"))
  .catch((err) => console.log(err));

app.use("/auth", authRoutes);
app.use("/items", foodRoutes);
app.use("/items", productRoutes);
app.use('/item',menuRoutes)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ☠️`);
});

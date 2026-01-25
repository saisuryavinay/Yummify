import express from "express";
import multer from "multer";
import Product from "../models/Food.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const { name, title, type, price } = req.body;

    const product = new Product({
      name,
      title,
      type,
      price,
      image: req.file.originalname,
    });

    await product.save();
    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to create product" });
  }
});

export default router;

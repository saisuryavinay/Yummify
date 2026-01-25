import express from "express";
import upload from "../middleware/upload.js";
import { getdata, deletedata, updateData } from "../Controller/adminController.js";
import Product from "./Models/data.js";

const router = express.Router();

router.post(
  "/add",
  upload.single("image"),
  async (req, res) => {
    try {
      const { title, type, name, price } = req.body;

      const product = new Product({
        title,
        type,
        name,
        price,
        image: req.file.originalname,
      });

      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

router.get("/", getdata);
router.delete("/del/:id", deletedata);
router.patch("/update/:id", updateData);

export default router;

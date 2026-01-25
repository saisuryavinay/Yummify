import express from "express";
import {
  getFoods,
  addFoods,
  addFood1,
  deleteFood
} from "../controllers/foodController.js";
import { protect } from '../middleware/authmiddleware.js';

const router = express.Router();

router.get("/",protect, getFoods);
router.post("/add-one",addFood1);

router.post("/add", addFoods);      
router.delete("/del/:id", deleteFood); 

export default router;

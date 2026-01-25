import express from "express";
import {
  getMenu,
  addMenu,
  addMenus,
  deleteMenu
} from "../controllers/menuController.js";

const router = express.Router();

router.get("/", getMenu);
router.post("/addmenu-one",addMenu);
router.post("/addMenu", addMenus);      
router.delete("/del/:id", deleteMenu); 

export default router;

import express from "express";
import itemController from "../../Controllers/itemController";
const router = express.Router();
const {addItem, getItems} = itemController;

//add item
router.post('/', addItem);
router.get('/', getItems);


export default router;
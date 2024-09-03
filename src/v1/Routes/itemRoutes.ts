import express from "express";
import itemController from "../../Controllers/itemController";
const router = express.Router();
const {addItem, getItems, updateItem, deleteItem} = itemController;

//add item
router.post('/', addItem);
//get all items
router.get('/', getItems);
//update item
router.patch('/:id', updateItem);
//delete item
router.delete('/:id', deleteItem);


export default router;
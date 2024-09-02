import express from "express";
import categoryController from "../../Controllers/categoryController";
const {createCategory, getCategories} = categoryController;

const router = express.Router();
//create category
router.post('/', createCategory);
//get all categories
router.get('/', getCategories);

export default router;
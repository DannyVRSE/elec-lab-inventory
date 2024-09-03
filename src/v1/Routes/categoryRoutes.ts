import express from "express";
import categoryController from "../../Controllers/categoryController";
const {createCategory, getCategories,updateCategory, deleteCategory} = categoryController;

const router = express.Router();
//create category
router.post('/', createCategory);
//get all categories
router.get('/', getCategories);
//update category
router.patch('/:id', updateCategory);
//delete category
router.delete('/:id', deleteCategory);

export default router;
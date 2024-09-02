import Category from "../Models/CategoryModel";
import { Request, Response } from 'express';

//create category
const createCategory = async (req: Request, res: Response) => {
    const {categoryName, description} = req.body;

    //find if category exists
    const categoryId = await Category.findOne({
        attributes: ['id'],
        where: { name: categoryName }
    });

    console.log(categoryId, "categoryId");

    if (categoryId) {
        return res.status(400).json({ message: `Category already exists with ID: ${categoryId.id} !` });
    }

    //save category
    try {
        const category = await Category.create({ name: categoryName, description: description });
        return res.status(200).json({ message: `Category created with auto-generated ID: ${category.id}` })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: `${err}` })
    }
}

//get all categories
const getCategories = async (_req: Request, res: Response) => {
    try{
        const categories = await Category.findAll();
        return res.status(200).json(categories);
    }catch(err){
        console.log(err);
        return res.status(400).json({ message: `${err}` })
    }}

export default { createCategory, getCategories }
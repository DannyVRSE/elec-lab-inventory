import Category from "../Models/CategoryModel";
import { Request, Response } from 'express';
import Joi from "joi";

//create category
const createCategory = async (req: Request, res: Response) => {
    const { categoryName, description } = req.body;

    //validate category details
    const schema = Joi.object({
        categoryName: Joi.string().required(),
        description: Joi.string().required()
    });

    try {
        const value = await schema.validateAsync({ categoryName, description });
        console.log(value);
    } catch (err) {
        return res.status(400).json({ message: `${err}` });
    }

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
    try {
        const categories = await Category.findAll();
        return res.status(200).json(categories);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: `${err}` })
    }
}

//update category
const updateCategory = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const { categoryName, description } = req.body;

    //validate category details
    const categoryDetails = {
        ...(categoryName && { name: categoryName }),
        ...(description && { description: description })
    }

    //find category

    const category = await Category.findOne({
        where: { id: categoryId }
    });

    if (!category) {
        return res.status(404).json({ message: `Category ${categoryId} doesn't exist!` });
    }

    try {
        await Category.update(categoryDetails, {
            where: { id: categoryId }
        });

        return res.status(200).json({ message: `Category ${categoryId} updated!` });
    } catch (err) {
        return res.status(400).json({ message: `${err}` });
    }
};

//delete category
const deleteCategory = async (req: Request, res: Response) => {
    const categoryId = req.params.id;

    //validate category details
    const schema = Joi.object({
        categoryId: Joi.number().required()
    });

    try {
        const value = await schema.validateAsync({ categoryId });
        console.log(value);
    } catch (err) {
        return res.status(400).json({ message: `${err}` });
    }

    const category = await Category.findOne({
        where: { id: categoryId }
    });

    if (!category) {
        return res.status(404).json({ message: `Category ${categoryId} doesn't exist!` });
    }

    try {
        await Category.destroy({
            where: { id: categoryId }
        });

        return res.status(200).json({ message: `Category ${categoryId} deleted!` });
    } catch (err) {
        return res.status(400).json({ message: `${err}` });
    }
};

export default { createCategory, getCategories, updateCategory, deleteCategory }
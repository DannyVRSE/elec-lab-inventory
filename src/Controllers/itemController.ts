import Item from "../Models/ItemModel"
import Category from "../Models/CategoryModel"
import Joi from "joi";

//add item to inventory
import { Request, Response } from 'express';

const addItem = async (req: Request, res: Response) => {
    const { manufacturer, model, lab_serial, manufacturer_serial, condition, category } = req.body;

    console.log(req.body, "req.body");

    //Get category Id
    const categoryId = await Category.findOne({
        attributes: ['id'],
        where: { id: category }
    });

    if (!categoryId) {
        return res.status(404).json({ message: `category ${category} doesn't exist!` })
    }

    //save item
    try {
        const item = await Item.create({ manufacturer: manufacturer, model: model, manufacturer_serial: manufacturer_serial, lab_serial: lab_serial, condition: condition, categoryId: categoryId.id });
        return res.status(200).json({ message: `Item added with auto-generated ID: ${item.id}` })

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: `${err}` })
    }
};

//get all items
const getItems = async (_req: Request, res: Response) => {
    try {
        const items = await Item.findAll();
        return res.status(200).json(items);

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: `${err}` })
    }
};

//update itams
const updateItem = async (req: Request, res: Response) => {
    const { manufacturer, model, lab_serial, manufacturer_serial, condition, category } = req.body;
    const itemId = req.params.id;

    const itemDetails = {
        ...(manufacturer && { manufacturer: manufacturer }),
        ...(model && { model: model }),
        ...(lab_serial && { lab_serial: lab_serial }),
        ...(manufacturer_serial && { manufacturer_serial: manufacturer_serial }),
        ...(condition && { condition: condition }),
        ...(category && { categoryId: category })
    }

    const schema = Joi.object({
        manufacturer: Joi.string(),
        model: Joi.string(),
        lab_serial: Joi.string(),
        manufacturer_serial: Joi.string(),
        condition: Joi.string(),
        category: Joi.number()
    });

    try{
        const value = await schema.validateAsync(itemDetails);
        console.log(value);
    }catch(err){
        return res.status(400).json({ message: `${err}` })
    }

    //update item
    try {
        const item = await Item.update(itemDetails, { where: { id: itemId } });
        return res.status(200).json({ message: `Item updated with ID: ${itemId}, affected ${item[0]} rows` })

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: `${err}` })
    }
};

//delete item
const deleteItem = async (req: Request, res: Response) => {
    const itemId = req.params.id;

    const schema = Joi.object({
        id: Joi.number().required()
    });

    try{
        const value = await schema.validateAsync({id: itemId});
        console.log(value);
    }catch(err){
        return res.status(400).json({ message: `${err}` })
    }

    try {
        const item = await Item.destroy({ where: { id: itemId } });
        return res.status(200).json({ message: `Item deleted with ID: ${itemId}, affected = ${item}` })

    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: `${err}` })
    }
};



export default { addItem, getItems, updateItem, deleteItem }

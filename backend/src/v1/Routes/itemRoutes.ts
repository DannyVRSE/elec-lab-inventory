import express from "express";
import itemController from "../../Controllers/itemController";
const router = express.Router();
const {addItem, getItems, updateItem, deleteItem} = itemController;

/**
* @openapi
* /api/v1/items:
*   post:
*     summary: Add a new item
*     tags:
*       - Items
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               manufacturer:
*                 type: string
*               model:
*                 type: string
*               lab_serial:
*                 type: string
*               manufacturer_serial:
*                 type: string
*               condition:
*                 type: string
*               category:
*                 type: integer
*     responses:
*       200:
*         description: Item successfully added
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*       400:
*         description: Bad request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*       404:
*         description: Category not found
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*/
router.post('/', addItem);

/**
* @openapi
* /api/v1/items:
*   get:
*     summary: Get all items
*     tags:
*       - Items
*     responses:
*       200:
*         description: A list of all items
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object
*                 properties:
*                   id:
*                     type: integer
*                   manufacturer:
*                     type: string
*                   model:
*                     type: string
*                   lab_serial:
*                     type: string
*                   manufacturer_serial:
*                     type: string
*                   condition:
*                     type: string
*                   categoryId:
*                     type: integer
*       400:
*         description: Bad request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*/
router.get('/', getItems);

/**
* @openapi
* /api/v1/items/{id}:
*   patch:
*     summary: Update an existing item
*     tags:
*       - Items
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*         description: The ID of the item to update
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               manufacturer:
*                 type: string
*               model:
*                 type: string
*               lab_serial:
*                 type: string
*               manufacturer_serial:
*                 type: string
*               condition:
*                 type: string
*               category:
*                 type: integer
*     responses:
*       200:
*         description: Item successfully updated
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*       400:
*         description: Bad request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*/
router.patch('/:id', updateItem);

/**
* @openapi
* /api/v1/items/{id}:
*   delete:
*     summary: Delete an item
*     tags:
*       - Items
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*         description: The ID of the item to delete
*     responses:
*       200:
*         description: Item successfully deleted
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*       400:
*         description: Bad request
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 message:
*                   type: string
*/
router.delete('/:id', deleteItem);



export default router;
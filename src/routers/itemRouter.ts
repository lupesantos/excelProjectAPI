import { Router } from 'express';
import { createItem, editItem, checkItem, deleteItem, readItemsByUserId } from '../controllers/itemController.js';
const itemRouter = Router();
import postItemMiddleware from '../middlewares/postItemMiddleware.js';

itemRouter.post('/create-item', postItemMiddleware, createItem);
itemRouter.put('/edit-item', editItem);
itemRouter.put('/check-item', checkItem);
itemRouter.delete('/delete-item', deleteItem);
itemRouter.get('/get-item', readItemsByUserId);

export default itemRouter;
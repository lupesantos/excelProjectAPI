import { Router } from 'express';
import { readExcelItems } from '../controllers/excelItemController.js';
const excelItemRouter = Router();

import postItemMiddleware from '../middlewares/postItemMiddleware.js';

excelItemRouter.get('/get-excel-item', readExcelItems);


export default excelItemRouter;
import { getExcelItems } from '../repositories/excelItemRepositorie.js';
import   httpStatus           from 'http-status';
import { Request, Response}   from 'express';


async function readExcelItems (req: Request, res: Response){


  try {
      const items = await getExcelItems();
      res.send(items.rows).status(200);
      
  } catch (error) {
      console.log(error)
  }
}

export {
 readExcelItems
}
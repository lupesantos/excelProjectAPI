import { insertItem,
         updateItemDescription, 
         updateItemStatus, 
         excludeItem, 
         getItems }           from '../repositories/itemRpositorie.js';
import { findSessionByToken } from '../repositories/userRepositorie.js';
import   httpStatus           from 'http-status';
import { Request, Response}   from 'express';

async function createItem (req: Request, res: Response){
    const { authorization } = req.headers;
    const { description   } = req.body;
    const   token           = authorization?.replace('Bearer ', '');

    try {
        if(!token) return res.sendStatus(httpStatus.UNAUTHORIZED);
        const session = await findSessionByToken(token);
        await insertItem({userId:session.userId, description} );
        res.sendStatus(httpStatus.OK)
    } catch (error) {
        if (error.name === "UnauthorizedError") 
            return res.sendStatus(httpStatus.UNAUTHORIZED);
            return res.sendStatus(httpStatus.BAD_REQUEST);
    }   
}

async function editItem (req: Request, res: Response){
    const {id, description} = req.body;
    
    try {
        await updateItemDescription({id,description});
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
    }
}

async function checkItem (req: Request, res: Response){
    const {id, status} = req.body;

    try {
        await updateItemStatus({id, status});
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
    }
}

async function deleteItem (req: Request, res: Response){
    const {id} = req.body;
    console.log(id)
    
    try {
        await excludeItem({id});
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
    }
}

async function readItemsByUserId (req: Request, res: Response){

    const userId = 8;
    //fazer a parte do id depois
    try {
        const items = await getItems({userId});
        res.send(items.rows).status(200);
        
    } catch (error) {
        console.log(error)
    }
}



export {
    createItem, editItem, checkItem, deleteItem, readItemsByUserId
}
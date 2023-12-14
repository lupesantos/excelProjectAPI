import connection from '../postgres/postgres.js';
import { QueryResult } from 'pg';


type Item = {
	id?: number;
	userId?: number;
	description?: string;
	status?: string;
};

async function insertItem ({userId, description}:Item):Promise<QueryResult>{

    return await connection.query('INSERT INTO todoitem ("userId", description) VALUES ($1, $2)',[userId, description]);

}

async function updateItemDescription ({id, description}:Item):Promise<QueryResult>{

    return await connection.query('UPDATE todoitem SET description = $1 WHERE id = $2',[description, id]);
}

async function updateItemStatus ({id, status}:Item):Promise<QueryResult>{
    if(status == 'notCheck'){

        return await connection.query('UPDATE todoitem SET status = $1 WHERE id = $2',['check',id]);
    }

    return await connection.query('UPDATE todoitem SET status = $1 WHERE id = $2',['notCheck',id]);    
}

async function excludeItem ({id}:Item):Promise<QueryResult>{
    return await connection.query('DELETE FROM todoitem WHERE id = $1',[id]);
}

async function getItems ({userId}:Item):Promise<QueryResult>{
    return await connection.query('SELECT * FROM todoitem WHERE "userId" = $1 ORDER BY id',[userId]);
}




export { insertItem, updateItemDescription, updateItemStatus, excludeItem, getItems };
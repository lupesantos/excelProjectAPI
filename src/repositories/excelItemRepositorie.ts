import connection from '../postgres/postgres.js';
import { QueryResult } from 'pg';

type ExcelItem = {
	id?: number;
	vendas?:number;
	ano?:number;
};

async function getExcelItems ():Promise<QueryResult>{
  return await connection.query('SELECT * FROM excel');
}


export { getExcelItems };
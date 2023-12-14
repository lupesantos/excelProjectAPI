import connection from '../postgres/postgres.js';
import { QueryResult } from 'pg';
import { unauthorizedError } from '../errors/unauthorizedError.js';

type User = {
	id?: number;
	name: string;
	hash: string;
	email: string;
};

type Session = {
	id?: number;
	userId: number;
	token: string;
};

async function insertUser ({name, hash, email}:User):Promise<QueryResult>{

    return await connection.query('INSERT INTO users (name, password, email) VALUES ($1, $2, $3)',[name, hash, email]);

}

async function insertSession ({userId, token}:Session):Promise<QueryResult>{

    const sessionRep = await connection.query('INSERT INTO session ("userId", token) VALUES ($1, $2)',[userId, token]);

	console.log(sessionRep)

	return (sessionRep)

}

async function findUser(email:string){
	const user = await connection.query('SELECT * FROM users WHERE email = ($1)',[email]);
	return user.rows[0];
}

async function findSessionByToken(token:string):Promise<Session>{
	const session = await connection.query('SELECT * FROM session WHERE token = ($1)',[token]);
	if(session.rows[0] == undefined) 
		throw unauthorizedError();
	return session.rows[0];
}

export { insertUser, findUser, insertSession, findSessionByToken };
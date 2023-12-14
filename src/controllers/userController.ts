import { insertUser, findUser, insertSession } from '../repositories/userRepositorie.js';
import      { usersSchema } from '../schemas/usersSchema.js';
import           connection from '../postgres/postgres.js';
import { Request, Response} from 'express';
import               bcrypt from 'bcrypt';
import       { v4 as uuid } from 'uuid';

async function getUsers (req: Request, res: Response){
    
    try {
        const query2 = await connection.query('SELECT * FROM users');
        res.send(query2.rows)
        
    } catch (error) {
        console.log(error)
    }
}

async function signUp (req:Request, res: Response){

    const { name, password, email } = req.body;
    const { error } = usersSchema.validate({
		name,
		password,
		email,
	});

	if (error) {
		return res.status(400).send({
			message: error.message,
		});
	}

    const hash = bcrypt.hashSync(password, 10)

    try {
        insertUser({name, hash, email})
        return res.sendStatus(201);      
    } catch (error) {
        console.log(error);
    }
}

async function signIn (req:Request, res: Response){
    const {email, password} = req.body;

    try {
        const user = await findUser(email)
            
        if(user && bcrypt.compareSync(password, user.password)){
            const token = uuid();
            await insertSession({
                userId: user.id,
                token
            })
            return res.status(200).send({token: token, name:user.name})
        }
        else{
            res.status(401).send('Usuário ou senha inválido');
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}
export {
    getUsers, signUp, signIn
};
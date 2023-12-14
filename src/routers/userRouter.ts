import { Router } from 'express';
import { getUsers, signUp, signIn } from '../controllers/userController.js';

const userRouter = Router();

userRouter.get('/users', getUsers);
userRouter.post('/sign-up', signUp);
userRouter.post('/sign-in', signIn);

export default userRouter;


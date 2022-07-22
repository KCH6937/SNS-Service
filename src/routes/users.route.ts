import { Router } from 'express';
import usersController from '../controllers/users.controller';
export const usersRouter = Router();

usersRouter.post('/signup', usersController.signUp);
usersRouter.post('/signin', usersController.signIn);
usersRouter.get('/signout', usersController.signOut);

import { Router } from 'express';
import usersController from '../controllers/users.controller';
import authJWT from '../middlewares/auth.middlewares';

export const usersRouter = Router();

usersRouter.post('/signup', usersController.signUp); // 회원가입

usersRouter.post('/signin', usersController.signIn); // 로그인

usersRouter.post('/signout', authJWT, usersController.signOut); // 로그아웃

usersRouter.patch('/edit', authJWT, usersController.signIn); // 회원정보 수정

usersRouter.delete('/withdraw', authJWT, usersController.withdraw); // 회원탈퇴

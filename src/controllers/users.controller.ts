import { Request, Response } from 'express';
import userService from '../services/users.service';

const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const [statusCode, result] = await userService.signUp(email, password);
  return res.status(statusCode as number).send(result);
};

const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const [statusCode, result] = await userService.signIn(email, password);
  return res.status(statusCode as number).send(result);
};

const signOut = async (req: Request, res: Response) => {
  return res.status(500);
};

const withdraw = async (req: Request, res: Response) => {
  const { userId } = req.body;
  const [statusCode, result] = await userService.withdraw(userId as number);
  return res.status(statusCode as number).send(result);
};

export default {
  signUp,
  signIn,
  signOut,
  withdraw,
};

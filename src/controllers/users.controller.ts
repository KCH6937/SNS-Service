import { Request, Response } from 'express';
import userService from '../services/users.service';

const signUp = async (req: Request, res: Response) => {
  return res.status(500);
};

const signIn = async (req: Request, res: Response) => {
  return res.status(500);
};

const signOut = async (req: Request, res: Response) => {
  return res.status(500);
};

const withdraw = async (req: Request, res: Response) => {
  return res.status(500);
};

export default {
  signUp,
  signIn,
  signOut,
  withdraw,
};

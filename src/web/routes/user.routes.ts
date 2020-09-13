import { Router } from 'express';
import UserController from '@controller/adapter/userController';
import { container } from 'tsyringe';

const userRouter = Router();
const userController = container.resolve<UserController>('userController');

userRouter.get('/', userController.findAll);

export default userRouter;

import { Router } from 'express';
import UserController from '@controller/userController';
import UserServiceImpl from '@service/userServiceImpl';
import UserRepositoryImpl from '@repository/userRepositoryImpl';

const userRouter = Router();
const userRepository = new UserRepositoryImpl();
const userService = new UserServiceImpl(userRepository);
const userController = new UserController(userService);

userRouter.get('/', userController.findAll);

export default userRouter;

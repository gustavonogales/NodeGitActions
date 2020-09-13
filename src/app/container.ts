import { container } from 'tsyringe';

import UserService from '@service/adapter/userService';
import UserServiceImpl from '@service/userServiceImpl';

import userRepository from '@repository/adapter/userRepository';
import userRepositoryImpl from '@repository/userRepositoryImpl';

import userController from '@controller/adapter/userController';
import userControllerImpl from '@controller/userControllerImpl';

container.registerSingleton<UserService>('UserService', UserServiceImpl);
container.registerSingleton<userRepository>(
  'userRepository',
  userRepositoryImpl,
);
container.registerSingleton<userController>(
  'userController',
  userControllerImpl,
);

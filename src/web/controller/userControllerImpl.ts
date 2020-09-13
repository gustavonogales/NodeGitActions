import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import UserService from '@service/adapter/userService';
import UserController from './adapter/userController';

@injectable()
export default class UserControllerImpl implements UserController {
  constructor(
    @inject('UserService')
    private userService: UserService,
  ) { }

  findAll = async (request: Request, response: Response): Promise<Response> => {
    const users = await this.userService.findAll();

    return response.json(users);
  };
}

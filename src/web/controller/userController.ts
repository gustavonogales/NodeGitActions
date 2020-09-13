import { Request, Response } from 'express';
import UserService from '../../service/adapter/userService';

export default class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  findAll = async (request: Request, response: Response): Promise<Response> => {
    const users = await this.userService.findAll();

    return response.json(users);
  };
}

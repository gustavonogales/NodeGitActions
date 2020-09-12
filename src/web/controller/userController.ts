import { Request, Response } from 'express';
import UserService from '../../service/adapter/userService';

export default class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async findAll(request: Request, response: Response): Promise<Response> {
    const users = await this.userService.findAll().catch(() => {
      console.log('KKK');
    });

    return response.json(users);
    // return response.json({ teu: 'cu' });
  }
}

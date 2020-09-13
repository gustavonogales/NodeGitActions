import { Request, Response } from 'express';

export default interface UserController {
  findAll(request: Request, response: Response): Promise<Response>;
}

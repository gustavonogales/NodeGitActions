/* eslint-disable prettier/prettier */
import { injectable, inject } from 'tsyringe';
import User from '@entity/user';
import UserRepository from '@repository/adapter/userRepository';
import UserService from './adapter/userService';

@injectable()
export default class UserServiceImpl implements UserService {
  constructor(
    @inject('userRepository')
    private userRepository: UserRepository,
  ) { }

  findAll = async (): Promise<Array<User>> => {
    const users = await this.userRepository.findAll();
    return users;
  };
}

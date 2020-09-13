import User from '@entity/user';
import UserRepository from '@repository/adapter/userRepository';
import UserService from './adapter/userService';

export default class UserServiceImpl implements UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  findAll = async (): Promise<Array<User>> => {
    const users = await this.userRepository.findAll();
    return users;
  };
}

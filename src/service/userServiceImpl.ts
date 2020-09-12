import User from '../entity/user';
import UserService from './adapter/userService';
import UserRepository from '../repository/adapter/userRepository';

export default class UserServiceImpl implements UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async findAll(): Promise<Array<User>> {
    const users = await this.userRepository.findAll();
    return users;
  }
}

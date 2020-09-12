import User from '../entity/user';
import UserRepository from './adapter/userRepository';

export default class UserRepositoryImpl implements UserRepository {
  private users: User[] = [];

  async findAll(): Promise<Array<User>> {
    return this.users;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }
}

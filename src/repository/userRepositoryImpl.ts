import User from '../entity/user';
import UserRepository from './adapter/userRepository';

export default class UserRepositoryImpl implements UserRepository {
  private users: Array<User> = new Array<User>();

  findAll = async (): Promise<Array<User>> => {
    return this.users;
  };

  create = async (user: User): Promise<User> => {
    this.users.push(user);

    return user;
  };
}

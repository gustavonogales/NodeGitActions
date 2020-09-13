import User from '@entity/user';

export default interface UserService {
  findAll(): Promise<Array<User>>;
}

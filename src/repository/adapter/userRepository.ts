import User from '../../entity/user';

export default interface UserRepository {
  findAll(): Promise<Array<User>>;
  create(data: User): Promise<User>;
}

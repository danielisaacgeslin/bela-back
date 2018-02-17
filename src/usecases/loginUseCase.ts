import { ProvideSingleton, inject } from '../ioc';
import { ExchangeModel, Rates } from '../models';
import { ApiError } from '../config/ErrorHandler';
import { UserRepository } from '../repositories';

@ProvideSingleton(LoginUseCase)
export class LoginUseCase {

  constructor( @inject(UserRepository) private userRepository: UserRepository) { }

  public async login(username: string, password: string = ''): Promise<{ jwt: string }> {
    const res = await this.userRepository.findOne({ username, password });
    if (res) return { jwt: 'todo' };
    else throw new ApiError('UserNotFound', 401, 'user not found');
  }
}

import { Route, Controller, Post, Body } from 'tsoa';

import { ApiError } from '../config/ErrorHandler';
import { ProvideSingleton, inject } from '../ioc';
import { UserModel } from '../models';
import { UserRepository } from '../repositories';
// import { GetExchangeUseCase } from '../usecases';

@Route('login')
@ProvideSingleton(LoginController)
export class LoginController extends Controller {

  constructor( @inject(UserRepository) private userRepository: UserRepository) {
    super();
  }

  @Post()
  public async exchange( @Body() body: { username: string; password: string; }): Promise<{ jwt: string }> {
    const { username, password } = body;
    const res = await this.userRepository.findOne({ username, password });
    if (res) return { jwt: 'todo' };
    else throw new ApiError('UserNotFound', 401, 'user not found');
  }
}

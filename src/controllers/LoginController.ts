import { Route, Controller, Post, Body } from 'tsoa';

import { ProvideSingleton, inject } from '../ioc';
import { LoginUseCase } from '../usecases';

@Route('login')
@ProvideSingleton(LoginController)
export class LoginController extends Controller {

  constructor( @inject(LoginUseCase) private loginUseCase: LoginUseCase) {
    super();
  }

  @Post()
  public async exchange( @Body() body: { username: string; password: string; }): Promise<{ jwt: string }> {
    const { username, password } = body;
    return this.loginUseCase.login(username, password);
  }
}

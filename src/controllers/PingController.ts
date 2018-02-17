import { Route, Controller, Get } from 'tsoa';

import { ExchangeModel } from '../models';
import { ProvideSingleton } from '../ioc';

@Route('ping')
@ProvideSingleton(PingController)
export class PingController extends Controller {
  @Get()
  public async ping(): Promise<string> {
    return 'pong';
  }
}

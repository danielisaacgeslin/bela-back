import { Route, Controller, Get } from 'tsoa';

@Route('ping')
export class PingController extends Controller {
  @Get()
  public async ping (): Promise<string> {
    return 'pong';
  }
}

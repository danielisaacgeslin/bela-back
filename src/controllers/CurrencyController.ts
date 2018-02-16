import { Route, Controller, Get, Put, Security, Query, Body } from 'tsoa';

import { ProvideSingleton, inject } from '../ioc';
import { ExchangeModel, Rates } from '../models';
import { GetExchangeUseCase } from '../usecases';

@Route('currency')
@ProvideSingleton(CurrencyController)
export class CurrencyController extends Controller {

  constructor(@inject(GetExchangeUseCase) private getExchangeUseCase: GetExchangeUseCase) {
    super();
  }

  @Get()
  @Security('baseUser')
  public async exchange(@Query('base') base: string, @Query('symbols') symbols?: string): Promise<ExchangeModel> {
    return this.getExchangeUseCase.exchange(base, symbols);
  }
}

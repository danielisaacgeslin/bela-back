import { Route, Controller, Get, Put, Security, Query, Body } from 'tsoa';

import { ExchangeModel } from '../models';

@Route('currency')
export class CurrencyController extends Controller {

  @Get()
  @Security('baseUser')
  public async exchange(@Query('base') base: string, @Query('symbols') symbols?: string): Promise<ExchangeModel> {
    const exchange: ExchangeModel = new ExchangeModel({
      base,
      date: new Date().toLocaleDateString(),
      rates: {
        [base]: 123
      }
    });
    return exchange;
  }
}

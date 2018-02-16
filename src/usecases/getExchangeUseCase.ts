import { ProvideSingleton, inject } from '../ioc';
import { ExchangeModel, Rates } from '../models';
import { CurrenciesRepository } from '../repositories';

@ProvideSingleton(GetExchangeUseCase)
export class GetExchangeUseCase {

  constructor(@inject(CurrenciesRepository) private currenciesRepository: CurrenciesRepository) { }

  public async exchange(base: string, symbols: string = ''): Promise<ExchangeModel> {
    const symbolArray: string[] = symbols.split(',').filter(Boolean);
    const rates: Rates = await this.currenciesRepository.getRates(base, symbolArray);
    const exchange: ExchangeModel = new ExchangeModel({
      base,
      date: new Date().toLocaleDateString(),
      rates
    });
    return exchange;
  }
}

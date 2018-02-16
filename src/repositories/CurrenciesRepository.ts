import { Rates } from '../models';
import { currencyCodes } from '../constants';

const createFakeRate = () => Number((Math.random() * 100).toFixed(4));

export class CurrenciesRepository {
  public async getRates(base: string, symbols: string[] = currencyCodes): Promise<Rates> {
    const rates: Rates = {};
    symbols.forEach(symbol => rates[symbol] = createFakeRate())
    return Promise.resolve(rates);
  }
}

import { ProvideSingleton } from '../ioc';
import { Rates } from '../models';
import { currencyCodes } from '../config/constants';

const createFakeRate = () => Number((Math.random() * 100).toFixed(4));

@ProvideSingleton(CurrenciesRepository)
export class CurrenciesRepository {
  public async getRates(base: string, symbols: string[] = []): Promise<Rates> {
    const rates: Rates = {};
    if (!symbols.length) symbols = currencyCodes;
    else symbols = symbols.filter(this.isValidSymbol);
    symbols.forEach(symbol => rates[symbol] = createFakeRate())
    return Promise.resolve(rates);
  }

  public isValidSymbol(symbol: string): boolean {
    return !!currencyCodes.find(s => symbol === s);
  }
}

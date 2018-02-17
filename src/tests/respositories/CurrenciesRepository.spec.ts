import { expect } from 'chai';

import { CurrenciesRepository } from '../../repositories';

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('CurrenciesRepository', () => {
  let currenciesRepository: CurrenciesRepository;
  beforeEach(() => {
    currenciesRepository = new CurrenciesRepository();
  });

  it('should validate a symbol', () => {
    expect(currenciesRepository.isValidSymbol('lala')).to.equal(false);
    expect(currenciesRepository.isValidSymbol('EUR')).to.equal(true);
  });

  it('should getRates', async () => {
    const rates = await currenciesRepository.getRates('EUR', ['USD']);
    expect(rates.USD).to.be.a('number');
  });
});

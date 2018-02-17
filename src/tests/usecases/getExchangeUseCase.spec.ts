import { expect } from 'chai';

import { CurrenciesRepository } from '../../repositories';
import { GetExchangeUseCase } from '../../usecases';

// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('GetExchangeUseCase', () => {
  let getExchangeUseCase: GetExchangeUseCase;
  beforeEach(() => {
    getExchangeUseCase = new GetExchangeUseCase(new CurrenciesRepository());
  });

  it('should exchange', async () => {
    const exchange = await getExchangeUseCase.exchange('USD');
    expect(exchange.base).to.equal('USD');
    expect(exchange.date).to.be.a('string');
    expect(Object.keys(exchange.rates)).to.have.lengthOf.above(0);
  });
});

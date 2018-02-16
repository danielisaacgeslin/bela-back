export type Rates = { [key: string]: number };

export class ExchangeModel {
  public base: string = '';
  public date: string = '';
  public rates: Rates = {};

  constructor(args: ExchangeModel) {
    if (!args) throw new Error('ExchangeModel args are missing');
    Object.assign(this, args);
  }
}

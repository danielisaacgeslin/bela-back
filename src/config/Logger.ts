import { ProvideSingleton } from '../ioc';

@ProvideSingleton(Logger)
export class Logger {
  public log(...args): void {
    console.log(...args);
  }
  public warn(...args): void {
    console.warn(...args);
  }

  public error(...args): void {
    console.error(...args);
  }
}

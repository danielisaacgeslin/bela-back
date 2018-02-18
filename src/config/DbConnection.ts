import * as mongoose from 'mongoose';

import { ProvideSingleton, inject } from '../ioc';

@ProvideSingleton(DbConnection)
export class DbConnection {
  public db: mongoose.Connection
  private connectionString: string = 'mongodb://user:password@ds237868.mlab.com:37868/bela';

  constructor() {
    this.db = mongoose.createConnection(this.connectionString);
  }
}

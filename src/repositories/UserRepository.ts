import { Query, Mongoose, Schema, Model, Document } from 'mongoose';

import { ProvideSingleton, inject } from '../ioc';
import { DbConnection } from '../config/DbConnection';
import { UserModel } from '../models';

@ProvideSingleton(UserRepository)
export class UserRepository {
  public userSchema: Schema = new Schema({
    username: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true }
  });
  public model: Model<Document> = this.dbConnection.db.model('users', this.userSchema);

  constructor( @inject(DbConnection) private dbConnection: DbConnection) { }

  public async find(query: any): Promise<Document[]> {
    return this.model.find(query);
  }

  public async findOne(query: any): Promise<Document> {
    return this.model.findOne(query);
  }
}

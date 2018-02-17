export class UserModel {
  public username: string = '';
  public password: string = '';

  constructor(args?: UserModel) {
    if (args) Object.assign(this, args);
  }
}

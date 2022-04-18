export class User {
  constructor(
    private email: string,
    private token: string,
    private userId: string,
    private expirationDate: Date
  ) {}

  get expireDate() {
    return this.expirationDate;
  }
}

class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  // getters
  getBalance(): number {
    // logic to convert the int to string, return the string
    return this.balance;
  }
}

const account = new BankAccount(100000);

let bal = account.getBalance();

console.log(bal);

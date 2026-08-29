// class BankAccount {
//   public balance: number;

//   constructor(balance: number) {
//     this.balance = balance;
//   }
// }

// const account = new BankAccount(50000);

// account.balance = -1000000;

// console.log(account.balance);

class BankAccount {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }
}

const account = new BankAccount(50000);

console.log(account.balance);

class BankAccount {
  #balance;

  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`${this.owner} nạp ${amount}. Số dư mới: ${this.#balance}`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`${this.owner} rút ${amount}. Số dư mới: ${this.#balance}`);
    } else {
      console.log("Rút thất bại, số dư không đủ!");
    }
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount("Huy", 1000);
acc.deposit(500);
acc.withdraw(300);
console.log(acc.getBalance());

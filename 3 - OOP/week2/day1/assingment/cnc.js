// STEP 1
// let balance = 500.0;

// class Withdrawal {
//   constructor(amount) {
//     this.amount = amount;
//   }

//   commit() {
//     balance -= this.amount;
//   }
// }
// class Deposit {
//     constructor(amount){
//         this.amount = amount;
//     }

//     commit(){
//         balance += this.amount;
//     }
// }


// STEP 2
// class Account {
//   constructor(username) {
//     this.username = username;
//     this.balance = 0.0;
//   }
// }

// STEP 3
// class Withdrawal {
//   constructor(account, amount) {
//     this.account = account;
//     this.amount = amount;
//   }

//   commit() {
//     this.account.balance -= this.amount;
//   }
// }

// class Deposit {
//   constructor(account, amount) {
//     this.account = account;
//     this.amount = amount;
//   }

//   commit() {
//     this.account.balance += this.amount;
//   }
// }

// // STEP 4

// class Transaction {
    // constructor(account, amount){
    //     this.account = account;
    //     this.amount = amount
    // }

//     commit() {
//         // 
//     }
// }

// STEP 5

// class Account {
//     constructor(username) {
//       this.username = username;
//       this.balance = 0.0;
//     }
// }

// class Transaction {
//     constructor(account, amount){
//         this.account = account;
//         this.amount = amount
//     }

//     commit() {
//         this.account.balance += this.value;
//     }
// }

// class Deposit extends Transaction{
//     get value() {
//         return this.amount;
//     }
// }

// class Withdrawal extends Transaction{
//     get value() {
//         return -this.amount;
//     }
// }

// STEP 6

// class Account {
//     constructor(username) {
//       this.username = username;
//       this.transactions = [];
//     }

//     get balance() {
//         let balance = 0.0;
//         for(const transation of this.transactions){
//             balance += transation.value;
//         }
//         return balance;
//     }

//     addTransaction(transaction) {
//         this.transactions.push(transaction)
//     }
// }

// class Transaction {
//     constructor(account, amount){
//         this.account = account;
//         this.amount = amount
//     }

//     commit() {
//         this.account.addTransaction(this)
//     }
// }

// class Deposit extends Transaction{
//     get value() {
//         return this.amount;
//     }
// }

// class Withdrawal extends Transaction{
//     get value() {
//         return -this.amount;
//     }
// }

// STEP 7
class Account {
    constructor(username) {
      this.username = username;
      this.transactions = [];
    }

    get balance() {
        let balance = 0.0;
        for(const transation of this.transactions){
            balance += transation.value;
        }
        return balance;
    }

    addTransaction(transaction) {
        this.transactions.push(transaction)
    }
}

class Transaction {
    constructor(account, amount){
        this.account = account;
        this.amount = amount
    }

    isAllowed(){
        return true;
    }

    commit() {
        if(this.isAllowed()){
            this.account.addTransaction(this);
            return true;
        }
        return false;
    }
}

class Deposit extends Transaction{
    get value() {
        return this.amount;
    }
}

class Withdrawal extends Transaction{
    get value() {
        return -this.amount;
    }

    isAllowed() {
        return this.account.balance - this.amount >= 0;
    }
}

// DRIVER CODE & TEST CODE

const myAccount = new Account("snow-patrol");

t1 = new Withdrawal(myAccount, 50.25);
t1.commit();

console.log("Transaction 1:", t1);

t2 = new Withdrawal(myAccount, 9.99);
t2.commit();

console.log("Transaction 2:", t2);

t3 = new Deposit(myAccount, 120.0);
t3.commit();

console.log("Transaction 3:", t3);

t4 = new Deposit(myAccount, 60.0);
t4.commit();

console.log("Transaction 4:", t4);

t5 = new Withdrawal(myAccount, 9.99);
t5.commit();

console.log("Transaction 5:", t5);

console.log("Balance:", myAccount.balance);

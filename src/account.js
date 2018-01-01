(function(exports){

  class Account {
    constructor(statement = Statement, transaction = Transaction){
      this.statement = new statement;
      this.transaction = transaction;
      this._balance = 0;
    }

    balance(){
      return this._balance;
    }

    deposit(amount){
      this._balance += amount;
      this.statement.add(new this.transaction(amount, this._balance));
    }

    withdraw(amount){
      if (amount < this._balance) {
        this._balance -= amount;
        this.statement.add(new this.transaction(-amount, this._balance));
      } else {
        throw("Insufficent funds");
      }
    }

    printStatement(){
      this.statement.print();
    }
  }
  exports.Account = Account;

})(this);

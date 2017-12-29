(function(exports){

  function Account(statement = Statement, transaction = Transaction){
    this.statement = new statement;
    this.transaction = transaction;
    this._balance = 0;
  }

  Account.prototype = {

    balance: function(){
      return this._balance;
    },

    deposit: function(amount){
      this._balance += amount;
      this.statement.add(new this.transaction(amount, this._balance))
    },

    withdraw: function(amount){
      this._balance -= amount;
      this.statement.add(new this.transaction(amount, this._balance))
    },

    printStatement: function(){
      this.statement.print()
    }
  }
  exports.Account = Account;

})(this);

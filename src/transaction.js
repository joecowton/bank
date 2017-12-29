(function(exports){

  class Transaction {
    constructor(amount, balance) {
      this._amount > 0 ? this.credit = amount : this.debit = amount;
      this._balance = balance;
      this._date = new Date().toLocaleDateString();
    }

    toString() {
      return `${this._date} || £${this.amountString(this.credit)}|| £${this.amountString(this.debit)} || £${this.amountString(this._balance)}`
    }

    amountString(amount = 0) {
     return `${amount.toFixed(2)}`
    }
  }

  exports.Transaction = Transaction;

})(this);

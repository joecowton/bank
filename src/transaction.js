(function(exports){

  class Transaction {
    constructor(amount, balance, date = new Date().toLocaleDateString()) {
      amount > 0 ? this.credit = amount : this.debit = -amount;
      this._balance = balance;
      this._date = date;
    }

    toString() {
      return `${this._date} || ${this.amountString(this.credit)} || ${this.amountString(this.debit)} || £${this._balance.toFixed(2)}`;
    }

    amountString(amount = 0) {
      return amount != 0 ? `£${amount.toFixed(2)}` : "";
    }
  }

  exports.Transaction = Transaction;

})(this);

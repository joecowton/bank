(function(exports){

  class Transaction {
    constructor(amount, balance) {
      amount > 0 ? this.credit = amount : this.debit = -amount;
      this._balance = balance;
      this._date = new Date().toLocaleDateString();
    }

    toString() {
      return `${this._date} || ${this.amountString(this.credit)} || ${this.amountString(this.debit)} || £${this._balance.toFixed(2)}`
    }

    amountString(amount = 0) {
      if (amount != 0) {
        return `£${amount.toFixed(2)}`
      }
      else {
        return ""
      }
    }
  }

  exports.Transaction = Transaction;

})(this);

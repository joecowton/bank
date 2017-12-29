(function(exports){

  function Transaction(amount, balance){
    this._amount > 0 ? this.credit = amount : this.debit = amount;
    this._balance = balance;
    this._date = new Date().toLocaleDateString();
  }

  Transaction.prototype = {

    toString: function () {
      return `${this._date} || £${this.amountString(this.credit)}|| £${this.amountString(this.debit)} || £${this.amountString(this._balance)}`
    },

    amountString: function(amount = 0) {
     return `${amount.toFixed(2)}`
    }
  }

  exports.Transaction = Transaction;

})(this);

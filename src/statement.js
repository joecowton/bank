(function(exports){

  class Statement {
    constructor(){
      this.transactions = [];
    }

    add(transaction){
      this.transactions.push(transaction);
    }

    print(){
      console.log('date || credit || debit || balance');
      this.transactions.forEach ((transaction, index) => {
        console.log(transaction.toString());
      })
    }
  }

  exports.Statement = Statement;

})(this);

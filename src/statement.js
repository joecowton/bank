(function(exports){

  function Statement(){
    this.transactions = [];
  }

  Statement.prototype = {

    add(transaction){
      this.transactions.push(transaction);
    },

    print(){
      console.log('date || credit || debit || balance');
      this.transactions.forEach (function(transaction, index){
        console.log(transaction.toString());
      })
    }
  }

  exports.Statement = Statement;

})(this);

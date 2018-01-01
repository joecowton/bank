describe("Transaction", function() {

  beforeEach(function(){
    transaction = new Transaction(10, 0);
  });

  describe('toString', function(){
    it('should return account balance in correct format', function(){
      var result = '01/01/2018 || £10.00 ||  || £0.00';
      expect(transaction.toString()).toEqual(result);
    });
  });

  describe('amountString', function(){
    it('should convert number to string and add £ sign', function(){
      expect(transaction.amountString(20.00468)).toEqual('£20.00');
    });
  });
});

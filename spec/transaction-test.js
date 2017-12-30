describe("Transaction", function() {

  beforeEach(function(){
    transaction = new Transaction(10, 0, 30/12/2017);
  });

  describe('toString', function(){
    it('should return account balance', function(){
      expect(transaction.toString()).toEqual('30/12/2017 || £0.00 || £10.00 || £0.00');
    });
  });

  describe('amountString', function(){
    it('should convert number to string and add £ sign', function(){
      expect(transaction.amountString(20.00468)).toEqual('£20.00');
    });
  });
});

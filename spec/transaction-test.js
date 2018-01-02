describe("Transaction", function() {

  beforeEach(function(){
    transaction = new Transaction(10, 0, '01/01/2018' );
  });

  describe('constructor', function() {
    it('should initialize with a date', function() {
      expect(transaction._date).toEqual('01/01/2018')
    });

    it('should initialize with a date', function() {
      expect(transaction._balance).toEqual(0)
    });

    it('should determine transaction type as credit if positive', function() {
      expect(transaction.credit).toEqual(10)
    });

    it('should not determine transaction type as credit if negative', function() {
      transaction = new Transaction(-10, 0, '01/01/2018' );
      expect(transaction.credit).toEqual(undefined)
    });

    it('should determine transaction type as debit if negative', function() {
      transaction = new Transaction(-10, 0, '01/01/2018' );
      expect(transaction.debit).toEqual(10)
    });

    it('should not determine transaction type as debit if positive', function() {
      transaction = new Transaction(10, 0, '01/01/2018' );
      expect(transaction.debit).toEqual(undefined)
    });
  });

  describe('toString', function(){
    it('should return account balance in correct format', function(){
      var result = '01/01/2018 || £10.00 ||  || £0.00';
      expect(transaction.toString()).toEqual(result);
    });
  });

  describe('amountString', function(){
    it('should convert number to string and add £ sign if > 0', function(){
      expect(transaction.amountString(20.00468)).toEqual('£20.00');
    });

    it('should return empty string if < 0', function(){
      expect(transaction.amountString(0)).toEqual('');
    });
  });
});

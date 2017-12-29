describe("Account", function(){

  var account;
  beforeEach(function(){
    account = new Account();
  });

  describe('balance', function(){
    it('should return account balance', function(){
      expect(account.balance()).toEqual(0);
    });
  });

  describe('deposit', function(){
    it('should add amount to balance', function(){
      account.deposit(10)
      expect(account.balance()).toEqual(10);
    });
  });

  describe('withdraw', function(){
    it('should withraw amount from to balance', function(){
      account.withdraw(10)
      expect(account.balance()).toEqual(-10);
    });
  });



});

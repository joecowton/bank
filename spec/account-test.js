describe("Account", function(){

  var account;
  var mockDeposit = new Transaction(10, 10)
  var mockWithraw = new Transaction(-10, 10)

  beforeEach(function(){
    account = new Account();
  });

  describe('constructor', function (){
    it('should initialize with empty transactions array', function (){
      expect(account.statement.transactions.length).toEqual(0)
    });

    it('should initialize with balance of zero', function (){
      expect(account._balance).toEqual(0)
    });
  })

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

    it('should add transaction to statement', function(){
      account.deposit(10)
      expect(account.statement.transactions[0]).toEqual(jasmine.objectContaining(mockDeposit));
    });
  });

  describe('withdraw', function(){
    it('should withdraw amount from to balance', function(){
      account._balance = 20;
      account.withdraw(10)
      expect(account.balance()).toEqual(10);
    });

    it('should add transaction to statement', function() {
      account._balance = 20;
      account.withdraw(10)
      expect(account.statement.transactions[0]).toEqual(jasmine.objectContaining(mockWithraw));
    })

    it('should throw error if insucfficent funds', function(){
      expect(function(){ account.withdraw(11) }).toThrow('Insufficent funds')
    });
  });
});

describe("Statement", function() {

  var transactionOne = '30/12/2017 ||  || £10.00 || £0.00'
  var transactionTwo = '30/12/2017 || £10.00 ||  || £0.00'

  beforeEach(function(){
    statement = new Statement();
  });

  describe('constructor', function (){
    it('should initialize with empty array', function(){
      expect(statement.transactions).toEqual([]);
    })
  })

  describe('add', function (){
    it('should add transactions to array', function(){
      statement.add(transactionOne)
      statement.add(transactionTwo)
      expect(statement.transactions).toEqual([transactionOne, transactionTwo]);
    });
  });
});

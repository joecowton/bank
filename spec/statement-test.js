describe("Statement", function() {

  var account;
  beforeEach(function(){
    statement = new Statement();
  });

  describe('add', function (){
    it('should add transactions to array', function(){
      statement.add("this")
      statement.add("that")
      expect(statement.transactions).toEqual(["this","that"]);
    });
  });

  describe('print', function (){
    it('should console log headings', function(){
      statement.add("this")
      statement.add("that")
      expect(statement.transactions).toEqual(["this","that"]);
    });
  });
});

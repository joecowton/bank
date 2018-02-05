# Bank Tech Test

https://github.com/makersacademy/course/blob/master/individual_challenges/bank_tech_test.md

A JavaScript command-line bank account simulation with deposit, withdraw and print statement functionality via account, statement and transaction objects.

Each new account object is constructed with an empty statement object which holds transaction objects in an array. Transaction objects are constructed each time a deposit or withdrawal is made. The transaction object determines whether the transaction has been credit or debit based on whether the value passed from the account object is negative or positive. These are added to the statement object's array when a deposit or withdrawal is made.

When printStatement is called, the statement object's print function console.logs the statement headers followed by the statement object's transactions in reverse order.  

### Commands

#### deposit(amount)

Changes balance by amount passed as an argument and creates new transaction object, adding it to the statement.

Raises 'Insufficent funds' error if amount to withdraw is greater than available balance.

#### withdraw(amount)

Changes balance by the amount passed as an argument and creates new transaction object, adding it to the statement.

#### printStatement()

Prints formatted statement of transactions complete with headers.

![App](/img/img_2.png)

![App](/img/img.png)

### To run
```
$ git clone: https://github.com/joecowton/bank.git
$ open index.html
-> enter console and create account
```

### To test
```
$ open specRunner.html
```

/* 
Create an object called personAccount. 
It has firstname, lastname, incomes, expenses properties
and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

*/

localStorage.clear()

const personAcc = {
    firstName: 'Ji-min',
    lastName: 'Yu',
    incomes: [{income: 'Job', amount: 10000}, {income: 'Overtime', amount: 5000}],
    expenses: [{expense: 'Food', amount: 10000}],
    addIncome(income, amount){
        this.incomes.push({income, amount})
    },
    addExpense(expense, amount){
        this.expenses.push({expense, amount})
    },
    totalIncomes(){
      return this.incomes.reduce((acc, curr) => acc + curr.amount, 0)
    },
    totalExpenses(){
      return this.expenses.reduce((acc, curr) => acc + curr.amount, 0)
    },
    accountBalance(){
      return this.totalIncomes() - this.totalExpenses()
    },
    accountInfo(){
        return `Account Info: ${this.firstName + ' ' + this.lastName} ` + '\n' +
        `Total Income: ${this.totalIncomes()}` + '\n' + 
        `Total Expense: ${this.totalExpenses()}` + '\n' + 
        `Account Balance: ${this.accountBalance()}` + '\n' 
    }
    

}
personAcc.addIncome('Giveaway', 25000)
personAcc.addExpense('Netflix', 1500)

const userData = {
    personAccount: personAcc.firstName + ' ' + personAcc.lastName,
    totalIncome:  personAcc.totalIncomes(),
    totalExpense:  personAcc.totalExpenses(),
    accountBalance:  personAcc.accountBalance(),
    accountInfo:  personAcc.accountInfo(),
}

const userAccJSON = JSON.stringify(userData, undefined, 4)
localStorage.setItem('userAcc', userAccJSON)
console.log(localStorage)


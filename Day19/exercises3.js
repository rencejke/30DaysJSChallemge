//Exercises: Level 3

/* 
#3 Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. 
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/


const personAccount = () =>
{
    let firstName = 'Clarence Jake'
    let lastName = 'Bonilla'
    let incomes = [{type: 'Job', amount: 20000}]
    let expenses = [{type: 'Food', amount: 5000}]

    const addIncome = (type, amount) => {
         incomes.push({type, amount})
    }

    const addExpense = (type, amount) => {
         expenses.push({type, amount})
    }

    const totalIncome = () => {
        const amountsIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0)
        return amountsIncome
    }

    const totalExpense = () => {
        const amountsExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0)
        return amountsExpense
    }

    const accountBalance = () => {
        return totalIncome() - totalExpense()
    } 

        const accountInfo = () => {
        return `Account Info:` + '\n\n' +
        `Name: ${firstName + ' ' + lastName}` + '\n' +
        `Balance: ${accountBalance()}` 
    }


    //return the functions
    //instead of totalIncome() it should be totalIncome

    // totalIncome() --- runs now and stores the current result
    // totalIncome --- gives us the function so we can run it later
    return {
        personTotalIncome: totalIncome,
        personTotalExpense: totalExpense,
        personAccountInfo: accountInfo,
        personAddIncome: addIncome,
        personAddExpense: addExpense,
        personAccountBalance: accountBalance,
    }
}


const personFunctions = personAccount()

personFunctions.personAddIncome('Overtime', 7000)
personFunctions.personAddExpense('Concert Ticket', 16530)
// console.log(personFunctions.personTotalIncome())
// console.log(personFunctions.personTotalExpense())
// console.log(personFunctions.personAccountBalance())
console.log(personFunctions.personAccountInfo())








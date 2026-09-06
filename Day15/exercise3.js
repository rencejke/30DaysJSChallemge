class Statistics{
    constructor(age){
        this.age = age
    }
    count(){
        return this.age.length
    }
    sum(){
        return this.age.reduce((acc, curr) => acc + curr)
    }
    min(){
        return this.age.reduce((acc, curr) => {
            if(curr <= acc)   
            {
                return curr
            }else{
                return acc
            }
        })
    }
    max(){
         return this.age.reduce((acc, curr) => {
            if(curr >= acc)   
            {
                return curr
            }else{
                return acc
            }
        })
    }
    range(){
        return this.max() - this.min()
    }
    mean(){
        return this.sum() / this.count()
    }
    median(){
        const sortedAgeAsc = this.age.sort((a, b) =>  a - b)
        return sortedAgeAsc[Math.floor(this.count() / 2)]
    }
    mode(){
        const setsAge = new Set(this.age)
        
        let count = []
        for (const ages of setsAge) {
             const filterAge = this.age.filter(filAge => filAge === ages)
             count.push({Mode: ages, count: filterAge.length})

        }

        let finalOutput = count.sort((a, b) => {
            if(a.count > b.count) return -1
            if(b.count < a.count) return  1
            else 0
        })[0]

        return finalOutput
    }
    variance(){
        return this.age.reduce((acc, curr) =>
        {

              // subtract eagh age to mean
              // squared each result
             // add each squared difference to the accumulator
            // divide each squared difference by the count

            const variance = Math.pow(curr - this.mean(), 2)
            return acc + variance / this.count()

        }, 0)        
    }
    standardDeviaiton(){
        return Math.sqrt(this.variance())
    }
     frequencyDistribution()
    {
            const setsAge = new Set(this.age)
        
        let count = []
        for (const ages of setsAge) {
             const filterAge = this.age.filter(filAge => filAge === ages)
             count.push('(' + (filterAge.length / this.count() * 100).toFixed(1) + ', '  + ages + ')')
        }

        return count
    }
    describe(){
        
        return `Count: ${this.count()}` + '\n' + 
        `Sum: ${this.sum()}` + '\n' + 
        `Min: ${this.min()}` + '\n' +
        `Max: ${this.max()}` + '\n' +
        `Range: ${this.range()}` + '\n' +
        `Mean: ${this.mean()}` + '\n' +
        `Median: ${this.median()}` + '\n' +
        `Mode: ${'(' + this.mode().Mode + ', ' + this.mode().count + ')'}` + '\n' + 
        `Variance: ${this.variance()}` + '\n' +
        `Standard Deviation: ${this.variance()}` + '\n' +
        `Frequency Distribution: ${'[' + this.frequencyDistribution().map((format) => format)  + ']'}` 

    }
}

const stats = new Statistics([31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26])
// console.log(stats.count())
// console.log(stats.sum())
// console.log(stats.min())
// console.log(stats.max())
// console.log(stats.mean())
// console.log(stats.median())
//console.log(stats.mode())
// console.log(stats.variance())
// console.log(stats.standardDeviaiton())
console.log(stats.describe())

//2
class PersonAccount{
    constructor(firstname, lastname, incomes, expenses){
    
    this.firstname = firstname
    this.lastname = lastname
    this.incomes = incomes
    this.expenses = expenses
}
totalIncome(){
    return this.incomes.reduce((acc, curr) => 
    {
        return acc+=curr.amount

    }, 0) 
}
totalExpense(){
  return this.expenses.reduce((acc, curr) => 
    {
        return acc+=curr.amount

    }, 0) 
}
addIncome(type, amount){

    this.incomes.push({type, amount})

    //return this.incomes
}
addExpense(type, amount){

    this.expenses.push({type, amount})

    //return this.expenses
}
accountBalance(){
    return this.totalIncome() - this.totalExpense()
}
accountInfo(){
   return `Account Name: ${this.firstname} ${this.lastname}` + '\n' +
   `Total Income: ${this.totalIncome()}` + '\n' +
   `Total Expense: ${this.totalExpense()}` + '\n' +
   `Account Balance: ${this.accountBalance()}`
}
}

const person = new PersonAccount('Clarence Jake', 'Bonilla', [{type: 'Job', amount: 20000}],
[{type: 'food', amount: 4000}])

person.addIncome('Overtime', 10000)
person.addExpense('Concert', 16530)
console.log(person.accountInfo())

/*

Account Name: Clarence Jake Bonilla
Total Income: 30000
Total Expense: 20530
Account Balance: 9470

*/





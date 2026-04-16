/*
-Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
-Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
-If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
-Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

*/



//Exercises: Level 1


//1
let age = Number(prompt('Enter your age'))
let legalAge = 18

console.log(`Enter your age ${age}`)

if(age >= legalAge){
    console.log('You are old enough to drive')
} else {
    console.log(`You are left with ${legalAge - age} years to drive.`)
} 

//2
let userAge = Number(prompt('Enter your age'))
let myAge = 25

console.log(`Enter your age ${userAge}`)

if(userAge > myAge){
    console.log(`You are ${userAge - myAge} years older than me.`)
} else {
    console.log(`I am ${myAge - userAge} years older than you.`)
} 

//3

let a = 3
let b = 4

if(a > b) {
    console.log('a is greater than b')
} else {
    console.log('a is less than b')
}

a > b ? console.log('a is greater than b') :  console.log('a is less than b')

//4

let inputNum = Number(prompt('Enter a number'))
let computeOddOrEven = inputNum % 2

if(computeOddOrEven === 0){
    console.log(`${inputNum} is an even number`)
} else{
    console.log(`${inputNum} is an odd number`)
}

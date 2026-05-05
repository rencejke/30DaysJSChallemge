//1. function declaration

//declaring a function without a parameter
function functionName() {
    //code here
}

functionName() //calling function by its name and with parenthesis


//2. Function without a parameter and return

//Function can be declared without a parameter.

//Example:

function square()
{
    let num = 2;
    let sq = num * num
    
    console.log(sq)
}

square() //4

function addTwoNumbers()
{
    let numOne = 10
    let numTwo = 20
    
    let sum = numOne + numTwo
    
    console.log(sum)
}

addTwoNumbers() //30 function has to be called by its name to be executed 


function printFullName()
{
    let firstName = 'Clarence Jake'
    let lastName = 'Bonilla'
    
    let space = ' '
    
    let fullName = firstName + space + lastName
    
    console.log(fullName)
}

printFullName()


//3 function returning a value

//Function can also return values, if a function does not return values the value of the function is undefined.

function printFullName()
{
    let firstName = 'Clarence Jake'
    let lastName = 'Bonilla'
    let space = ' '
    
    let fullName = firstName + space + lastName
    
    return fullName
}
console.log(printFullName())

function addTwoNumbers() {
      let numOne = 2
      let numTwo = 3
      let total = numOne + numTwo
      return total

  }

console.log(addTwoNumbers())


//4 Function with a parameter

//function with 1 parameter

function functionName(param1) {
        //code here
}


function areaOfACircle(r)
{
    let area = Math.PI * r * r
    
    return area
}
console.log(areaOfACircle(10)) // should be called with one argument


function square(number)
{
    return number * number
}
console.log(square(10))

//5. Function with two parameters

// function with two parameters
function functionName(parm1, parm2) {
  //code goes here
}
functionName(parm1, parm2) // during calling or invoking two arguments needed

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum) //without this nothing shows because function doesn’t return anything it only calculates internally.
}
sumTwoNumbers(10, 20)

function sunTwoNumbers(numOne, numTwo)
{
    let sum = numOne + numTwo
    return sum;
}

console.log(sunTwoNumbers(10, 20))

function fullName(firstName, lastName)
{
    return `${firstName} ${lastName}`
}

console.log(fullName('Clarence Jake', 'Bonilla'))

//6. function with many parameters

/* function functionName(parm1, parm2, parm3,...){
  code goes here
}
functionName(parm1,parm2,parm3,...) // during calling or invoking three arguments needed */

// this function takes array as a parameter and sum up the numbers in the array

function sumArrayValue(arr)
{
    let sum = 0;
    for(let i = 0; i < arr.length; i++)
    {
        sum+=arr[i]
    }
    
    return sum
    
}
const numbers = [1, 2, 3, 4, 5];

console.log(sumArrayValue(numbers))

//arrow function

const areaOfCircle = (radius) => {
    let area = Math.PI * radius * radius;
    
    return area;
}

console.log(areaOfCircle(10))

//7 function with unlimited parameters

// Sometimes we do not know how many arguments the user going to pass. Therefore, 
// we should know how to write a function which can take unlimited 
// number of arguments. 

// When you pass values into a function, they are stored in something called arguments, and you can use it inside the function.
// it behave like array. ican access this by indexes

//  access the arguments object
​
function sumAllNums() {
 console.log(arguments)
}

sumAllNums(1, 2, 3, 4) //[Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }


function sumAllNum(){
    let sum = 0
    
    for(let i = 0; i < arguments.length; i++)
    {
        sum+=arguments[i]
    }
    
    return sum
}

console.log(sumAllNum(1, 3, 4, 5, 6, 7, 8, 9, 10)) //53
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


//UNLIMITED NUMBER OF PARAMETERS IN ARROW FUNCTION

//function declaration

// Let us access the arguments object

const sumAllNums = (...args) =>{
    let sum = 0;
    
    for(const element of args)
    {
        sum+=element
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


const sumAllNums = (...args) =>{
    let sum = 0;
    
    for(let i = 0; i < args.length; i++)
    {
        sum+=args[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4)) // 10
console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173


//8 Anonymous Function

//Anonymous function or without name

const anonymousFun = function() {
    console.log('I am an anonymous function and my value is stored in anonymousFun')
}

anonymousFun()

//9. Expression Function

//Express functions are anonymous functions. After we create a function without a name and we assign it to a variable. 
//To return a value from the function we should call the variable.

const square = function(n) {
    return n * n
}

console.log(square(10))

//10. Self Invoiking Functions

//Self invoking functions are anonymous functions which do not need to be called to return a value

(function(n){
    console.log(n * n)
})(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

let square = (function(n){
    return n * n
})(10)

console.log(square) //100


//11. Arrow Functions

//Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
//Arrow function uses arrow instead of the keyword function to declare a function

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function

function square(n) {
  return n * n
}
console.log(square(10))

const square = n => { // parenthesis is optional if a single parameter

return n * n    
}
console.log(square(10))

const square = (n) =>{ //optional

return n * n    
}
console.log(square(10))

// if we have only one line in the code block, it can be written as follows, explicit return
const square = n => n * n 

console.log(square(10))  // -> 4

//arrow function to change array to uppercase 
const changeToUpperCase = arr =>
{
    let newArr = []
    
    for(const element of arr)
    {
        newArr.push(element.toUpperCase())
    }
    
    return newArr
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
console.log(changeToUpperCase(countries)) // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

const fullName = (firstName, lastName) =>{ //used parenthesis because i used more than one parameter
    return `${firstName}, ${lastName}`
}

console.log(fullName('Clarence Jake', 'Bonilla'))

//The above function has only the return statement, therefore, we can explicitly return it as follows.

const printFullName = (firstName, lastName) => `${firstName} ${lastName}` 
//if inside the function is only the return value then we can use this one line function

console.log(printFullName('Clarence Jake', 'Bonilla'))


//12. Functions with default parameters

//If you don’t pass a value when calling the function, it will use the default instead.

function functionName(param = value){
 //code
}

// Calling function
functionName()
functionName(arg)

//example

function greetings(name = 'Clarence'){
    let message = `${name}, welcome to 30 days of JavaScript`
    return message
}

console.log(greetings()) //defvault value if no argument - > Clarence, welcome to 30 days of JavaScript
console.log(greetings('Peter')) //Peter, welcome to 30 days of JavaScript

function generateFullName (firstName = 'Clarence Jake', lastName = 'Bonilla')
{
    let space = ' '
    let fullName = firstName + space + lastName
    
    return fullName
}

console.log(generateFullName()) //Clarence Jake Bonilla
console.log(generateFullName('Peter', 'Pan')) //Peter Pan


function calculateAge(birthYear, currentyear = 2026) {

    let age = currentyear - birthYear

    return age 
}

console.log('Age:', calculateAge(2002)) //24


const weightOfObject = (mass, gravity = 9.81) => {

    let weight = mass * gravity + ' N'  // the value has to be changed to string first

    return weight;
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62))  // gravity at surface of Moon



















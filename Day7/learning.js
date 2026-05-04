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

//Expression Function














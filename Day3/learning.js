let isLightOn = true
let isRaining = false
let isHungry = false
let isMarried = true
let truValue = 4 > 3    // true
let falseValue = 4 < 3  // false

/*  
Truthy values

All numbers(positive and negative) are truthy except zero
All strings are truthy except an empty string ('')
The boolean true

*/

/*
Falsy values
0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string

*/


//undefined
let firstName
console.log(firstName) //not defined, no assigned value

let empty = null
console.log(empty) //null, no value

/*
1. 
Operator: = 
example: x = y
description: y is stored in x

2.
Operator: += 
example: x = x + y
description: x + y result is stored in x

3.
Operator: -= 
example: x = x - y
description: x - y result is stored in x

4.
Operator: *= 
example: x = x * y
description: x * y result is stored in x

5.
Operator: /= 
example: x = x / y
description: x / y result is stored in x

6.
Operator: %= 
example: x = x % y
description: x % y result is stored in x

7.
Operator: **= 
example: x = x ** y
description: x ** y result is stored in x

*/

// Arithmetic Operators - Math Operators

// Addition(+): a + b
// Subtraction(-): a - b
// Multiplication(*): a * b
// Division(/): a / b
// Modulus(%): a % b
// Exponential(**): a ** b


let numOne = 4
let numTwo = 3
let sum = numOne + numTwo
let diff = numOne - numTwo
let mult = numOne  * numTwo
let div = numOne / numTwo
let remainder = numOne % numTwo
let powerOf = numOne ** numTwo

console.log(sum, diff, mult, div, remainder, powerOf) //7 1 12 1.3333333333333333 1 64

const PI = 3.14
let radius = 100 // kength ib meter

//area of a circle
const areaOfCircle = PI * radius * radius
console.log(areaOfCircle) //31400m

const gravity = 9.81      // in m/s2
let mass = 72             // in Kilogram

//weight of an object
const weight = mass * gravity
console.log(weight) //706.32

const boilingPoint = 100  // temperature in oC, boiling point of water
const bodyTemp = 37       // body temperature in oC

console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m / s2.`
)

/*

The boiling point of water is 100 oC.
Human body temperature is 37 oC.
The gravity of earth is 9.81 m / s2.

*/

//comparison operators

/*

== equal in value 
ex: x == y

=== equal in value and data type (exactly equal) 
ex: x === y

> greater than
ex: x > y

< less than
ex: x < y

>= greater than or equal
ex: x >= y 

<= less than or equal to
ex: x <= y

*/

console.log(3 > 2) //true, 3 is greater than 2
console.log(3 >= 2) //true, 3 is greater than 2
console.log(3 < 2) //false,  3 is greater than 2
console.log(2 < 3)  //true, 2 is less than 3
console.log(2 <= 3)  //true, 2 is less than 3
console.log(3 == 2) // false, not equal value
console.log(3 != 2) // true, 3 is not equal to 2
console.log(3 == '3') //true, equal value only
console.log(3 === '3') //false, not exactly equal. One is number and other one is string
console.log(3 != '3') //false, it compares only value. Same 3
console.log(3 !== '3') //true, compare both value and data type
console.log(3 !== 3) //false, both value and data type are equal
console.log(0 == false) //true, 0 is falsy value
console.log(0 === false) //false, not exactly equal
console.log(0 == '')  //true, equaivalent
console.log(0 == ' ') //true, equaivalent
console.log(0 === '') //not exactly equal
console.log(1 == true) // true, equivalent
console.log(1 === true) //false, not exactly equal
console.log(undefined == null) //true, both falsy value
console.log(undefined === null) //false, not eaxctly equal 
console.log(NaN == NaN)         // false, not equal
console.log(NaN === NaN)        // false
//NaN has a special rule in js that it's not equal to anything, even to itself
console.log(typeof NaN)         // number

console.log('mango'.length == 'avocado'.length)  // false, 5 == 7
console.log('mango'.length != 'avocado'.length)  // true, 5 != 7
console.log('mango'.length < 'avocado'.length)   //true,  5 < 7
console.log('milk'.length == 'meat'.length)  //true, 4 == 4
console.log('milk'.length === 'meat'.length)  //true
console.log('milk'.length != 'meat'.length)      // false, 4 == 4
console.log('tomato'.length == 'potato'.length)  // true, 6 == 6 
console.log('python'.length > 'dragon'.length)   // false, 6 > 5

//2. logical operators

// && ampersand operator example (AND)

const check = 4 > 3 && 10 > 5         // true && true -> true
const check2 = 4 > 3 && 10 < 5         // true && false -> false
const check3 = 4 < 3 && 10 < 5         // false && false -> false


// || pipe or operator, example (OR)

const check4 = 4 > 3 || 10 > 5         // true  || true -> true
const check5 = 4 > 3 || 10 < 5         // true  || false -> true
const check6 = 4 < 3 || 10 < 5         // false || false -> false

/*/! Negation examples */

// by adding ! it makes the opposite of the value

let check7 = 4 > 3                     // true
let check8 = !(4 > 3)                  // false
let isLightOn2 = true
let isLightOff = !isLightOn2           // false
let isMarried2 = !false                // true


//3. Increment Operator

// Pre Increment
//Increase first, then use the value
let count = 0
console.log(++count) // 1
console.log(count)   // 1
console.log(++count) // 2
console.log(count)   // 2

// Post Increment
//Use the current value first, then increase it after

let count2 = 0
console.log(count2++) // 0
console.log(count2) //1
console.log(count2++) // 1
console.log(count2) //2

//5. DECREMENT OPERATORS

// Pre-decrement
let countD = 0
//Subtract 1 first, then use the value
console.log(--countD) // -1
console.log(countD)  // -1


// Post-decrement
//Use the value first, then subtract 1
let countD2 = 0
console.log(countD2--) // 0
console.log(countD2)   // -1

//6. TERNARY OPERATORS

let isRaining2 = true

isRaining2
  ? console.log('You need a rain coat.') //output
  : console.log('No need for a rain coat.')

isRaining2 = false

isRaining2
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.') //output


let number = 5
  
number > 0
? console.log(`${number} is a positive number`) //output
: console.log(`${number} is a negative number`)

number = Number(-5)

number > 0
? console.log(`${number} is a positive number`)
: console.log(`${number} is a negative number`) //output

//7. Operator Precedence

//Precedence decides which operation happens first.

//From higher → lower:

/* *, / (multiplication, division)
+, - (addition, subtraction) 

let a = 5, b = 3, c = 2;

console.log(a + b - c);

5 + 3 = 8
8 - 2 = 6

final answer is 6

*/

let result = 2 + 3 * 4

/* * has higher precedence than +, so 

3 * 4 = 12
1 + 12 = 14

Final answer = 14

*/

//Associativity (direction of execution)

let result2 = 10 - 5 - 2;

//Same operator (-), so go left → right:

/* 

LEFT TO RIGHT

10 - 5 = 5
5 - 2 = 3

Final answer is 3

*/


let result3 = 2 ** 3 ** 2;


/*

RIGHT TO LEFT

3 ** 2 = 9
2 ** 9 = 512

Final answer: 512

Why right to left? because exponents are special


let x = - -5;

Most operators → left to right
Right to left → mainly:
** (exponent)
= (assignment)

*/
  
//8. windows function

//alert
// alert() method displays an alert box with a specified message and an OK button

alert('message')

//do not use alert too much because its annoying

//Window prompt() method

prompt('requiredtext', 'optional')

let number2 = prompt('Enter number', 'Input number here')
console.log(number2)

//confirm() method

/* confirm() shows a popup with a message and OK and Cancel buttons.

Click OK → returns true
Click Cancel → returns false

*/

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box

//8 DATE OBJECT

/*

- getFullYear()
  Get the full year as a four digit number (yyyy)
  ex: 2000

- getMonth()
  Get the month as a number (0-11)
  ex: 0 (january)

- getDate()
  Get the day as a number (1-31)
  ex: 4

- getHours()
  Get the hour (0-23)
  ex: 0  (12:00AM)
      23 (11:00PM)

- getMinutes()
  Get the minute (0-59)
  ex: 56

- getSeconds()
  Get the second (0 - 59)
  ex: 41

- getMilliseconds()
  Get the millisecond (0-999)
  ex: 341

- getTime()
  Get the time (milliseconds since January 1, 1970)
  ex: 1578092201341

- getDay()
  Get the weekday as a number (0-6)
  ex: 0 (Sunday)
      6 (Saturday)

*/

//creating a time object

const now = new Date()
console.log(now) //2026-04-11T09:23:20.755Z

//now we have created a time object, we can now access any date time information uising the get method above

//Getting full year
console.log(now.getFullYear()) //2026

//Getting month
console.log(now.getMonth()) //3 (April)

//Getting date
console.log(now.getDate()) //11 (April)

//Getting day
console.log(now.getDay()) //6 (Saturday)

//Getting hours
console.log(now.getHours()) //9, this function think my curent time is 9AM

//Getting minutes
console.log(now.getMinutes()) //36, because the time is 05:36:41

//Getting seconds
console.log(now.getSeconds()) // 41, because the time is 05:36:41

//Getting time
console.log(now.getTime()) //1775885921000, this is the number of seconds passed from January 1, 1970 to April 11, 2026 05:38:41


//Both methods return the same type of value (milliseconds since 1970)
const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds == timeInSeconds) //false, They’re just captured at slightly different times.

//to make it true, store it once

const dateNow = Date.now()
const a = dateNow
const b = new Date().getTime()

console.log(a === b) //true

//readable format dates

const todayDate = new Date()
const year = todayDate.getFullYear() // return year
const month = todayDate.getMonth() + 1 // return month(0 - 11)
const date = todayDate.getDate() // return date (1 - 31)
const hours = todayDate.getHours() // return number (0 - 23)
const minutes = todayDate.getMinutes() // return number (0 -59)

console.log(`${month}/${date}/${year}  ${hours}:${minutes}`) // 4/11/2026  9:54
















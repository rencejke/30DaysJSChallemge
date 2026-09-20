/*
Writing clean code
JavaScript Style Guide
A JavaScript style guide is a set of standards that tells how JavaScript code should be written and organized. In this section, we will talk about JavaScript guides and how to write a clean code.

JavaScript is a programming language and like human language it has syntax. The syntax of JavaScript has to be written following a certain style guideline for sake of convince and simplicity.

Why we need style guide
You have been coding alone for so long but now it seems to work in a team. It does not matter in anyway you write you code as long as it running, however when you work in team of 10 or 20 or more developer on one project and on the same code base, the code will be messy and hard to manage if there is no any guidelines to follow.

You can develop your own guidelines and conventions or you can also adapt well developed guidelines. Let us the most common know guidelines. Most common JavaScript Style Guides

-Airbnb JavaScript Style Guide
-JavaScript Standard Style Guide
-Google JavaScript Style Guide

*JAVASCRIPT STYLE GUIDE*

*AIRBNB JAVASCRIPT STYLE GUIDE*

One of the most popular JavaScript style guides. 
It covers many parts of JavaScript and is used by many developers and companies.

*STANDARD JAVASCRIPT STYLE GUIDE*

Another JavaScript style guide. One notable rule is that it does not use semicolons.

*GOOGLE JAVASCRIPT STYLE GUIDE*

A style guide created by Google.
It provides rules and recommendations for writing consistent JavaScript code.

JavaScript Coding Conventions

Coding conventions are rules for writing code consistently. 
They can be created by an individual, team, or company.

They help to:

    -Write clean code
    -Improve readability
    -Make code easier to reuse and maintain

Coding conventions include:
    -Naming variables and functions
    -Declaring variables and functions
    -Using spaces and indentation
    -Writing comments
    -Following good programming practices

*Conventions Used in 30 Days of JavaScript*

The course follows common JavaScript conventions, with some personal preferences:

    -Use camelCase for variables and functions.
    -Variable names should start with a letter.
    -Prefer const when the variable is not reassigned.
    -Use single quotes ' ' or backticks ` ` instead of double quotes.
    -Semicolons are omitted.
    -Add spaces around operators and after commas.
    -Prefer arrow functions when appropriate.
    -Use explicit return for one-line functions when preferred.
    -Don't add a trailing comma to the last item.
    -Use shortcuts like +=, -=, *=, /=, and **= instead of longer forms.
    -When using console.log(), add a label to make the output easier to identify.  

*/

//Variables
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'

const PI = Math.PI
const gravity = 9.81

/*
Arrays
We chose to make array names plural

names
numbers
countries
languages
skills
fruits
vegetables

*/

// arrays
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const languages = ['Amharic', 'Arabic', 'English', 'French', 'Spanish']
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Python']
const fruits = ['banana', 'orange', 'mango', 'lemon']
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']

/*
*Functions*

You already know different types of functions:

    -Function declaration
    -Function expression
    -Arrow function
    -Anonymous function

-In this challenge, we mostly use arrow functions.
-But arrow functions are not a replacement for other types of functions. 
-They work differently in some situations.
-You should learn when to use arrow functions and when not to use them.
-For one-line arrow functions, the guide recommends using explicit return instead of implicit return.

*/

// Implicit return
const add = (a, b) => a + b

// Explicit return
const add = (a, b) => {
    return a + b
}

// function which return full name of a person
const printFullName = (firstName, lastName) => firstName + ' ' + lastName

// function which calculates a square of a number
const square = (n) => n * n

// a function which generate random hexa colors
const hexaColor = () => {
  const str = '0123456789abcdef'
  let hexa = '#'
  let index
  for (let i = 0; i < 6; i++) {
    index = Math.floor(Math.random() * str.length)
    hexa += str[index]
  }
  return hexa
}

// a function which shows date and time
const showDateTime = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const date = now.getDate()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  if (hours < 10) {
    hours = '0' + hours
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }

  const dateMonthYear = date + '.' + month + '.' + year
  const time = hours + ':' + minutes
  const fullTime = dateMonthYear + ' ' + time
  return fullTime
}

//toLocaleString() converts a Date object into a readable date + time string, based on a locale.

const date = new Date()

console.log(date.toLocaleString('en-US'))
console.log(date.toLocaleString('en-GB'))

//en-PH' → English formatting for the Philippines
//'Asia/Manila' → Philippine timezone (UTC+8)
console.log(date.toLocaleString('en-PH', {timeZone: 'Asia/Manila'}))

/*
In JavaScript, we learned several types of loops:

*for loop* — repeats code a specific number of times.
*while loop* — repeats while a condition is true.
*do...while loop* — runs at least once, then repeats while a condition is true.
*for...of loop* — loops through the values of an iterable, like an array.
*forEach()* — runs a function for each item in an array.
*for...in loop* — loops through the keys/properties of an object.

*/

for (let i = 0; i < n; i++){
    console.log()
}

// declaring an array variable
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// iterating an array using regular for loop
let len = names.length;
for(let i = 0; i < len; i++){
    console.log(names[i].toUpperCase())
}


// iterating an array using for of
for( const name of names) {
    console.log(name.toUpperCase())
}

// iterating array using forEach 
names.forEach((name) => name.toUpperCase())


const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
for(const key in person) {
    console.log(key)
}

/*
Objects
We declare object literal with const.
*/

// declaring object literal
const persons = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: ['HTML','CSS','JavaScript','TypeScript', 'React','Node','MongoDB','Python','D3.js'],
  isMarried: true
}
// iterating through object keys
for(const key in persons) {
    console.log(key, persons[key])
}

//Conditional
//We say if, if else, if else if else, switch and ternary operators in previous challenges.

// syntax
if (condition) {
 // this part of code run for truthy condition
} else {
 // this part of code run for false condition
}

// if else
let num = 3
if (num > 0) {
 console.log(`${num} is a positive number`)
} else {
 console.log(`${num} is a negative number`)
}
//  3 is a positive number

// if else if else if else

let a = 0
if (a > 0) {
 console.log(`${a} is a positive number`)
} else if (a < 0) {
 console.log(`${a} is a negative number`)
} else if (a === 0) {
 console.log(`${a} is zero`)
} else {
 console.log(`${a} is not a number`)
}

// Switch More Examples
let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
 case 'monday':
   console.log('Today is Monday')
   break
 case 'tuesday':
   console.log('Today is Tuesday')
   break
 case 'wednesday':
   console.log('Today is Wednesday')
   break
 case 'thursday':
   console.log('Today is Thursday')
   break
 case 'friday':
   console.log('Today is Friday')
   break
 case 'saturday':
   console.log('Today is Saturday')
   break
 case 'sunday':
   console.log('Today is Sunday')
   break
 default:
   console.log('It is not a week day.')
}

// ternary

let isRaining = true
isRaining
 ? console.log('You need a rain coat.')
 : console.log('No need for a rain coat.')

 //Classes
//We declare class with CamelCase which starts with capital letter.

// syntax
class ClassName {
    // code goes here
}

// defining class
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}
/* 

Clean Code

-Be consistent with the coding style guide you choose.
-Follow common programming principles and design patterns.
-Keep your code organized and use a consistent structure.
-Write code that is easy to read and understand.
-Remember that other developers may need to read or maintain your code.

*/
//variables can be declared locally or globally

a = 'JavaScript' // declaring a variable without let or const make it available in window object and this found anywhere
b = 10 // this is a global scope variable and found in the window object
function letsLearnScope() {
  console.log(a, b)
  if (true) {
    console.log(a, b)
  }
}
console.log(a, b) // accessible

//Global scope

//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true) {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

//Local scope
//A variable declared as local can be accessed only in certain block code.

//--Block Scope
//--Function Scope

//scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file

// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible

 //A variable declared with var only scoped to function but variable declared with let or const is 
 //block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({})

function letsLearnScope() {
  var gravity = 9.81
  console.log(gravity)

}
console.log(gravity) // Uncaught ReferenceError: gravity is not defined

if (true){
  var gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // 9.81 because it is not in a function scope
 
// but if we do

if (true){
  let gravity = 9.81
  console.log(gravity) // 9.81
}
console.log(gravity)  // Uncaught ReferenceError: gravity is not defined because gravity is inside the block scope and we use let 

for(var i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // 3

// but if we do

for(let i = 0; i < 3; i++){
  console.log(i) // 0, 1, 2
}
console.log(i) // Uncaught ReferenceError: gravity is not defined because gravity is inside the block scope and we use let


 //When we use let our variable is block scoped and it will not infect other parts of our code.

 //so block scope = let
 // not changing value a block scope also = const
// var - for function only


//2 Object

//Everything can be an object and objects do have properties and properties have values, so an object is a key value pair. 

//creating an empty object

const person = {} // an empty object

// Creating an objecting with values

const rectangle = {
  length: 20,
  width: 20
}
console.log(rectangle) // {length: 20, width: 20}

const person = {
  firstName: 'Clarence Jake',
  lastName: 'Bonilla',
  age: 23,
  country: 'Philippines',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  isMarried: false
}
console.log(person)


//Getting values from an object

// using . followed by key name if the key-name is a one word
// using square bracket and a quote

const person = {
  firstName: 'Clarence Jake',
  lastName: 'Bonilla',
  age: 23,
  country: 'Philippines',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  'phone number': '+3584545454545'
} 

//using .
console.log(person.firstName) //Clarence Jake
console.log(person.lastName) //Bonilla
console.log(person.getFullName()) //Clarence Jake Bonilla
console.log(person.age) //23
console.log(person.location) // undefined

//using []
console.log(person['firstName'])
console.log(person['lastName'])
console.log(person['getFullName']())
console.log(person['age'])
console.log(person['location']) // undefined


//creating object methods
//Now, the person object has getFullName properties. The getFullName is function inside the person object and we call it an object method. 
// The this key word refers to the object itself. We can use the word this to access the values of different properties of the object. 
//we cant use arrow function here

const person = {
  firstName: 'Clarence Jake',
  lastName: 'Bonilla',
  age: 23,
  country: 'Philippines',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  },
  'phone number': '+3584545454545'
} 

console.log(person.getFullName()) //Clarence Jake Bonilla
console.log(person['getFullName']())


//Setting new key for an object

//An object is a mutable data structure and we can modify the content of an object after it gets created.

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
person.nationality = 'Ethiopian'
person.country = 'Finland'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
person.isMarried = true

person.getPersonInfo = function() {
  let skillsWithoutLastSkill = this.skills
    .splice(0, this.skills.length - 1)
    .join(', ')
  let lastSkill = this.skills.splice(this.skills.length - 1)[0]

  let skills = `${skillsWithoutLastSkill}, and ${lastSkill}`
  let fullName = this.getFullName()
  let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}.`
  return statement
}
console.log(person)
console.log(person.getPersonInfo())

/*

Asabeneh Yetayeh is a teacher.
He lives in Finland.
He teaches HTML, CSS, JavaScript, React, Node, MongoDB, Python, D3.js, Meteor, and SasS.

*/

//Object Methods

//There are different methods to manipulate an object. Let us see some of the available methods.

//Object.assign: 
//To copy an object without modifying the original object


const person = {
  firstName: 'Asabeneh',
  age: 250,
  country: 'Finland',
  city:'Helsinki',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'teacher',
  address: {
    street: 'Heitamienkatu 16',
    pobox: 2002,
    city: 'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

//Getting object keys using Object.keys()

const keys = Object.keys(copyPerson)
console.log(keys) //['firstName', 'age', 'country','city', 'skills','title', 'address', 'getPersonInfo']

const address = Object.keys(copyPerson.address)
console.log(address) //['street', 'pobox', 'city']


//Getting object values using Object.values()

//Object.values:To get values of an object as an array

const values = Object.values(copyPerson)
console.log(values)

/*
[
  'Asabeneh',
  250,
  'Finland',
  'Helsinki',
  [ 'HTML', 'CSS', 'JS' ],
  'teacher',
  { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' },
  [Function: getPersonInfo]
]
*/

//Getting object keys and values using Object.entries()

//Object.entries:To get the keys and values in an array

const entries = Object.entries(copyPerson)
console.log(entries)

/*
[
  [ 'firstName', 'Asabeneh' ],
  [ 'age', 250 ],
  [ 'country', 'Finland' ],
  [ 'city', 'Helsinki' ],
  [ 'skills', [ 'HTML', 'CSS', 'JS' ] ],
  [ 'title', 'teacher' ],
  [
    'address',
    { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' }
  ],
  [ 'getPersonInfo', [Function: getPersonInfo] ]
]
*/

//Checking properties using hasOwnProperty()

//hasOwnProperty: To check if a specific key or property exist in an object

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('score'))









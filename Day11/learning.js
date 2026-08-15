//Destructuring and Spread

//Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

//Destructuring arrays

const numbers  = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers

console.log(numOne, numTwo, numThree) //1 2 3

const names = ['Iron Man', 'Black Widow', 'Captain America', 'Thor', 'Hulk', 'Hawkeye']

let [firstPerson, secondPerson, ThirdPerson, FourthPerson, FithPerson, SixthPerson] = names

console.log(firstPerson, secondPerson, ThirdPerson, FourthPerson, FithPerson, SixthPerson)
//Iron Man Black Widow Captain America Thor Hulk Hawkeye

const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e, pi, gravity, bodyTemp, boilingTemp) //2.72 3.14 9.81 37 100


const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

let [frontEnd, backEnd] = fullStack

console.log(frontEnd) //[ 'HTML', 'CSS', 'JS', 'React' ]
console.log(backEnd) //[ 'Node', 'Express', 'MongoDB' ]

// If we like to skip on of the values in the array we use additional comma. 
// The comma helps to omit the value at that specific index

const numbers = [1, 2, 3]

let [numOne, , numThree] = numbers //2 is omitted

console.log(numOne, numThree) //1 3

//We can use default value in case the value of array for that index is undefined:

const names = [undefined, 'Brook', 'David']

let [
    firstPerson = 'Asabeneh',
    secondPerson,
    thirdPerson,
    fourthPerson = 'John' 
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  

//We can not assign variable to all the elements in the array. We can destructure few of the first
// and we can get the remaining as array using spread operator(...).

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3) //123
console.log(rest) //[4, 5, 6, 7, 8, 9, 10]

//Destructuring during iteration

const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]


for(const [country, city] of countries)
{
    console.log(country, city)
}
/*
Finland Helsinki
Sweden Stockholm
Norway Oslo
*/


const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]


for(const [first, second, third] of fullStack)
{
    console.log(first, second, third)
}
/*
HTML CSS JS
Node Express MongoDB
*/

//Destructuring Objects

//When we destructure the name of the variable we use to destructure should be exactly the same as
//the key or property of the object. See the example below.

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}

let {width, height, area, perimeter} = rectangle

console.log(width, height, area, perimeter) //20 10 200 undefined


//Renaming during structuring 

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}

let {width: w, height: h, area: a, perimeter: p} = rectangle

console.log(w, h, a, p) //20 10 200 undefined


//If the key is not found in the object the variable will be assigned to undefined.
// Sometimes the key might not be in the object, 
// in that case we can give a default value during declaration

const rectangle = {
  width: 20,
  height: 10,
  area: 200
}

let {width, height, area, perimeter = 60} = rectangle

console.log(width, height, area, perimeter) //20 10 200 60

const rectangle = {
  width: 30,
  height: 10,
  area: 200,
  perimeter: 80
}
let { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter) //30 10 200 80

//Destructuring keys as a function parameters. 
//Let us create a function which takes a
// rectangle object and it returns a perimeter of a rectangle.

//Object parameter without destructuring

//Withbout Destructuring

const rect = {
    width: 20,
    height: 10
}

const calculateParameter = rectange =>
{
    return 2 * (rectange.width + rectange.height)
}

console.log(calculateParameter(rect))

//Object parameter without destructuring

//Withbout Destructuring

const rect = {
    width: 20,
    height: 10
}

const calculateParameter = rectange =>
{
    return 2 * (rectange.width + rectange.height)
}

console.log(calculateParameter(rect)) //60


//with destructuring

const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)']
}


































































































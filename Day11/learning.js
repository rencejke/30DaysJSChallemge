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
  firstName: 'Clarence Jake',
  lastName: 'Bonilla',
  age: 250,
  country: 'Philippines',
  job: 'Developer',
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
  languages: ['Filipino', 'English', 'Suomi(Finnish)']
}

// Let us create a function which give information 
// about the person object without destructuring


const getPersonInfo = obj => {
  const skills = obj.skills
  const formattedSkills = skills.slice(0, -1).join(', ')
  const languages = obj.languages
  const formattedLanguages = languages.slice(0, -1).join(', ')

  personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
    obj.age
  } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]
  }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

  return personInfo
}

console.log(getPersonInfo(person))

/*

Clarence Jake Bonilla lives in Philippines. He is  250 years old. 
He is an Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js.
He speaks Filipino, English and a little bit of Suomi(Finnish).

*/

//Object parameter with destructuring

const rect = {
  width: 20,
  height: 10
}

const calculatedPerimeter = ({width, height}) =>
{
    return 2 * (width + height)
}

console.log(calculatedPerimeter(rect)) 

// Let us create a function which give information 
// about the person object with destructuring


const person = {
  firstName: 'Clarence Jake',
  lastName: 'Bonilla',
  age: 250,
  country: 'Philippines',
  job: 'Developer',
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
  languages: ['Filipino', 'English', 'Suomi(Finnish)']
}

const getPersonInfo = ({
    firstName,
    lastName,
    age,
    country,
    job, 
    skills,
    languages
}) =>
{
     const formattedSkills = skills.slice(0, -1).join(', ')
     const formattedLanguages = languages.slice(0, -1).join(', ')

    personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
    skills[skills.length - 1]}. He speaks speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

    return personInfo

}

console.log(getPersonInfo(person))

/*
Clarence Jake Bonilla lives in Philippines. He is 250 years old. 
He is an Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks
speaks Filipino, English and a little bit of Suomi(Finnish). 
*/

//Destructuring object during iteration

const todoList = [
{
  task:'Prepare JS Test',
  time:'4/1/2020 8:30',
  completed:true
},
{
  task:'Give JS Test',
  time:'4/1/2020 10:00',
  completed:false
},
{
  task:'Assess Test Result',
  time:'4/1/2020 1:00',
  completed:false
}
]

for (const {task, time, completed} of todoList){
  console.log(task, time, completed)
}


/* 
Prepare JS Test 4/1/2020 8:30 true
Give JS Test 4/1/2020 10:00 false
Assess Test Result 4/1/2020 1:00 false
*/

//Spread or Rest Operator

//When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that 
//we use spread operator to spread array elements to another array.

//Spread operator to get the rest of array elements

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)

//1 2 3
//[4, 5, 6, 7, 8, 9, 10]

const countries = [
  'Germany',
  'France',
  'Belgium',
  'Finland',
  'Sweden',
  'Norway',
  'Denmark',
  'Iceland'
]

let [gem, fra, ...nordicCountries] = countries

console.log(gem) //Germany
console.log(fra) //France
console.log(nordicCountries) //["Finland", "Sweden", "Norway", "Denmark", "Iceland"]


//Spread operator to copy array

const evens =  [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]


const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]


const wholeNumbers = [...evens, ...odds]


console.log(evenNumbers) //[0, 2, 4, 6, 8, 10]
console.log(oddNumbers) //[1, 3, 5, 7, 9]
console.log(wholeNumbers) //[0, 2, 4, 6, 8, 10, 1, 3, 5, 7, 9]



const frontEnd = ['HTML', 'CSS', 'JS', 'React']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = [...frontEnd, ...backEnd]

console.log(fullStack) //["HTML", "CSS", "JS", "React", "Node", "Express", "MongoDB"]

const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user}
console.log(copiedUser) //{name: "Asabeneh", title: "Programmer", country: "Finland", city: "Helsinki"}


const user = {
  name:'Asabeneh',
  title:'Programmer',
  country:'Finland',
  city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)
//{name: "Asabeneh", title: "instructor", country: "Finland", city: "Helsinki"}

//Spread Operator with Arrow Functions:

//When an arrow function needs to accept any number of arguments, use the spread 
//operator (...). It collects all the arguments into an array.


const sumAllNums = (...args) => {
  console.log(args)
}

sumAllNums(1, 2, 3, 4, 5) //[ 1, 2, 3, 4, 5 ]

const sumAllNums = (...args) => {
    let sum = 0
    for(const num of args)
    {
        sum+=num 
    }
    return sum 
}

console.log(sumAllNums(1, 2, 3, 4, 5)) //15
































































































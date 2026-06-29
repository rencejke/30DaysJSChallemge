//Higher Order Function

//Higher order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

//Callback

//A callback is a function which can be passed as parameter to other function


// a callback function, the name of the function could be any name
// a callback function, the name of the function could be any name
const callback = (n) => {
  return n ** 2
}

// function that takes other function as a callback
function cube(callback, n) {
  return callback(n) * n
}

console.log(cube(callback, 3))



// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))

// Let us see were we use call back functions. For instance the forEach method uses call back.

const numbers = [1, 2, 3, 4, 5]

const sumArray = arr => {
    
    let sum = 0
    const callback = function(element)
    {
        sum+=element
    }
    arr.forEach(callback)
    return sum
}

console.log(sumArray(numbers))


//The above example can be simplified as follows:

const numbers = [1, 2, 3, 4]
​
const sumArray = arr => {
  let sum = 0
  arr.forEach(function(element) {
    sum += element
  })
  return sum

}
console.log(sumArray(numbers))

//Setting Time

//In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// setInterval
// setTimeout

//setInterval() is a JavaScript function
// that repeatedly runs a callback function after a specified time interval. 
// The interval is measured in milliseconds (ms).

// syntax
function callback() {
  // code goes here
}
setInterval(callback, duration)
function sayHello() {
  console.log('Hello')
}
setInterval(sayHello, 1000) // it prints hello in every second, 1000ms is 1s


//setTimeout() is a JavaScript function 
//that runs a callback function once after 
//a specified amount of time. The delay is measured in milliseconds (ms).


// syntax
function callback() {
  // code goes here
}
setTimeout(callback, duration) // duration in milliseconds

function sayHello() {
  console.log('Hello')
}
setTimeout(sayHello, 2000) // it prints hello after it waits for 2 seconds.


//Functional Programming

//Instead of using regular loops, JavaScript provides 
// built-in array methods that make code simpler and easier to read. 
// These methods use callback functions. Some common methods are forEach(), map(), filter(), reduce(), find(), every(), some(), and sort().


//forEach

/* forEach: Iterate an array elements. We use forEach 
only with arrays. It takes a callback function with elements, 
index parameter and array itself. The index and the array optional. */

arr.forEach(function (element, index, arr) {
  console.log(index, element, arr)
})

// The above code can be written using arrow function
arr.forEach((element, index, arr) => {
  console.log(index, element, arr)
})

// The above code can be written using arrow function and explicit return
arr.forEach((element, index, arr) => console.log(index, element, arr))


let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => console.log(num))
console.log(sum)

/*
 num here is the parameter of the callback function. It is the same as
function(num) {
  console.log(num);
} but simplified because it used an arrow function.
 
*/

let sum = 0;

const numbers = [1,2,3,4,5]
numbers.forEach(function(num)
{
    sum +=num
})

console.log(sum)


//simplified version of the above code

let sum = 0;
const numbers = [1,2,3,4,5]
numbers.forEach(num => sum +=num)
console.log(sum) //15



const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach(countriesUpperCase => console.log(countriesUpperCase.toUpperCase()))

// FINLAND
// DENMARK
// SWEDEN
// NORWAY
// ICELAND


//map

/* map: Iterate an array elements and 
modify the array elements. It takes a callback function with elements, index , 
array parameter and return a new array.
*/

//syntax:
const modifiedArray = arr.map(function (element, index, arr) {
  return element
})

/*Arrow function and explicit return
const modifiedArray = arr.map((element,index) => element);
*/
//Example
const numbers = [1, 2, 3, 4, 5]
const numbersSquare = numbers.map((num) => num * num)

console.log(numbersSquare) //[ 1, 4, 9, 16, 25 ]


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCase = names.map((nameUpp) => nameUpp.toUpperCase()) 

console.log(namesToUpperCase) //[ 'ASABENEH', 'MATHIAS', 'ELIAS', 'BROOK' ]

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)

/*
Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
  
Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/

//['ALBANIA', 'BOLIVIA', 'CANADA', 'DENMARK', 'ETHIOPIA', 'FINLAND', 'GERMANY', 'HUNGARY', 'IRELAND', 'JAPAN', 'KENYA']


const countriesFirstThreeLetters = countries.map((country) =>
  country.toUpperCase().slice(0, 3)
)

// ["ALB", "BOL", "CAN", "DEN", "ETH", "FIN", "GER", "HUN", "IRE", "JAP", "KEN"]

//filter

//Filter: Filter out items which full fill filtering conditions and return a new array.

//Filter countries containing land
const countriesContainingLand = countries.filter((country) =>
  country.includes('land')
)
console.log(countriesContainingLand) //['Finland', 'Ireland']

const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
console.log(countriesEndsByia) //['Albania', 'Bolivia','Ethiopia']









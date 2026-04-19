//Arrays

//How to create an empty array

// - Using Array constructor
const arr = Array()
//or
//let arr = new Array()
console.log(arr)

// - uing square brackers []

const arr2 = []
console.log(arr2)

//How to create an array with values:

const numbers = [0, 3.14, 6,7, 9.81, 37, 98.6, 100]
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

console.log('Numbers:', numbers) //Numbers: [0, 3.14, 9.81, 37, 98.6, 100]
console.log('Number of numbers:', numbers.length) //Number of numbers: 6

console.log('Fruits:', fruits) //Fruits: ['banana', 'orange', 'mango', 'lemon']
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)  //Vegetables: ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot']
console.log('Number of vegetables:', vegetables.length) //Number of vegetables: 5

console.log('Animal products:', animalProducts) //Animal products: ['milk', 'meat', 'butter', 'yoghurt']
console.log('Number of animal products:', animalProducts.length) //Number of animal products: 4

console.log('Web technologies:', webTechs) //Web technologies: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']
console.log('Number of web technologies:', webTechs.length) //Number of web technologies: 7

console.log('Countries:', countries) //Countries: ['Finland', 'Estonia', 'Denmark', 'Sweden', 'Norway']

console.log('Number of countries:', countries.length) //Number of countries: 5

//Array can have items of different data types

const arr = [
    'Clarence Jake',
    250, true,
    {country: 'Philippines', city: 'San Pablo'},
    {skills: ['HTML', 'CSS', 'JS', 'REACT', 'AUTOMATION', 'SQL']}
] //array conatining different data types

console.log(arr)

//2 Creating an array using split

let js = 'JavaScript'
console.log(js.split('')) // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies)  // ["Facebook", " Google", " Microsoft", " Apple", " IBM", " Oracle", " Amazon"]

let txt =
  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = txt.split(' ')

console.log(words)
// the text has special characters think how you can just get only the words
// ["I", "love", "teaching", "and", "empowering", "people.", "I", "teach", "HTML,", "CSS,", "JS,", "React,", "Python"]

//3 Accessing array items using index

const fruits = ['banana', 'orange', 'mango', 'lemon']
let firstFruit = fruits[0] // we are accessing the first item using its index

console.log(firstFruit) // banana

let secondFruit = fruits[1]
console.log(secondFruit) // orange

let lastFruit = fruits[3]
console.log(lastFruit) // lemon

// Last index can be calculated as follows
let lastIndex = fruits.length - 1
lastFruit = fruits[lastIndex]
console.log(lastFruit)  // lemon


const numbers = [0, 3.14, 9.81, 37, 98.6, 100]  // set of numbers

console.log(numbers.length)  // => to know the size of the array, which is 6
console.log(numbers)         // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0])      //  -> 0
console.log(numbers[5])      //  -> 100

let lastIndex = numbers.length - 1;
console.log(numbers[lastIndex]) // -> 100

const webTechs = [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'] // List of web technologies

console.log(webTechs)        // all the array items
console.log(webTechs.length) // => to know the size of the array, which is 7
console.log(webTechs[0])     //  -> HTML
console.log(webTechs[6])     //  -> MongoDB

let lastIndex = webTechs.length - 1
console.log(webTechs[lastIndex]) // -> MongoDB

//Modifying array elements

const numbers  = [1, 2, 3, 4, 5]
number[0] = 10
number[0] = 20

console.log(numbers) // [10, 20, 3, 4, 5]

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany',   'Hungary', 'Ireland', 'Japan', 'Kenya']
counries[0] = 'Philippines'  // Replacing Albania by Philippines
let lastIndexx = countries.length - 1
countries[lastIndexx] = 'Korea' // Replacing Kenya by Korea
onsole.log(countries)

/* [
  'Philippines', 'Bolivia',
  'Canada',      'Denmark',
  'Ethiopia',    'Finland',
  'Germany',     'Hungary',
  'Ireland',     'Japan',
  'Korea'
]
*/

//4 Methods to manipulate array

// - Array Constructor

/* There are different methods to manipulate an array. These are some of the
 available methods to deal with arrays:

--Array, 
--length, 
--concat, 
--indexOf, 
--slice, 
--splice, 
--join, 
--toString, 
--includes, 
--lastIndexOf, 
--isArray, 
--fill, 
--push, 
--pop, 
--shift, 
--unshift

*/

const arr2 = Array() // creates an an empty array
console.log(arr)

const eightEmptyValues = Array(8) // it creates an 8 empty array
console.log(eightEmptyValues)  // [empty x 8]

//Creating static values using fill

//fill -- fill all the array with static values

const arr3 = Array()
console.log(arr3)

let eightXValues = Array(8).fill('X') // it creates eight element values filled with 'X'
console.log(eightXValues) // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
console.log(four4values) // [4, 4, 4, 4]

// Concatenating array using concat
// concat - To concatenate two arrays.

const firstList = [1,2,3]
const secondList = [4,5,6]
const thirdList = firstList.concat(secondList)

console.log(thirdList) // [1, 2, 3, 4, 5, 6]


const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

console.log(fruitsAndVegetables) //["banana", "orange", "mango", "lemon", "Tomato", "Potato", "Cabbage", "Onion", "Carrot"]

// Getting array length
// Length - To know the size of the array


const numberss = [1, 2, 3, 4, 5]
console.log(numberss.length) // -> 5 is the size of the array


// Getting index an element in arr array
// indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

const numbersss = [1, 2, 3, 4, 5]

console.log(numbersss.indexOf(5)) // -> 4
console.log(numbersss.indexOf(0)) // -> -1
console.log(numbersss.indexOf(1)) // -> 0
console.log(numbersss.indexOf(6)) // -> -1


const fruitss = ['banana', 'orange', 'mango', 'lemon']
let index = fruitss.indexOf('banana')  // 0

if(index === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does exist in the array

index === -1 ? console.log('This fruit does not exist in the array') : console.log('This fruit does exist in the array') // This fruit does exist in the array

let indexOfAvocado = fruitss.indexOf('avocado')  // -1, if the element not found index is -1
if(indexOfAvocado === -1){
   console.log('This fruit does not exist in the array')  
} else {
    console.log('This fruit does exist in the array')
}
// This fruit does not exist in the array

//Getting last index of an element in array

// lastIndexOf -- It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbersx =  [1, 2, 3, 4, 5, 3, 1, 2]

console.log(numbersx.lastIndexOf(2)) // 7
console.log(numbersx.lastIndexOf(0)) // -1
console.log(numbersx.lastIndexOf(1)) //  6
console.log(numbersx.lastIndexOf(4)) //  3
console.log(numbersx.lastIndexOf(6)) // -1

// includes -- To check if an item exist in an array. If it exist it returns the true else it returns false.

const numbersArr = [1, 2, 3, 4, 5]

console.log(numbersArr.includes(5)) //true
console.log(numbersArr.includes(0)) //false
console.log(numbersArr.includes(1)) //true
console.log(numbersArr.includes(6)) //false


const webTechsArr = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']

console.lof(webTechsArr.includes('Node')) //true
console.log(webTechsArr.includes('C')) //false

//Checking Array

//Array.isArray() -- To check if the data type is an array

const numberssx = [1, 2, 3, 4, 5]
console.log(Array.isArray(numberssx)) // true

const numberssxx = 100
console.log(Array.isArray(numberssxx)) // false

//Convert to String

//toString() -- Converts to String

const numberxs = [1, 2, 3, 4, 5]
console.log(numberxs.toString()) // 1,2,3,4,5

const names = ['Clarence', 'Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.toString()) // Clarence,Asabeneh,Mathias,Elias,Brook


//Joining array elements

/* join: It is used to join 
the elements of the array, the argument we 
passed in the join method will be joined in the array and 
return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.
*/

const names2 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(names2.join()) 
// Default: joins with commas → "Asabeneh,Mathias,Elias,Brook"

console.log(names2.join('')) 
// No separator → AsabenehMathiasEliasBrook

console.log(names2.join(' ')) 
// Space separator → Asabeneh Mathias Elias Brook

console.log(names2.join(', ')) 
// Comma + space → Asabeneh, Mathias, Elias, Brook

console.log(names2.join(' # ')) 
// Custom separator → Asabeneh # Mathias # Elias # Brook



const webTechsArrX = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB']

console.log(webTechs.join())       

// Default: joins with commas →  HTML,CSS,JavaScript,React,Redux,Node,MongoDB

console.log(webTechs.join(' # '))  
// Custom separator →  HTML # CSS # JavaScript # React # Redux # Node # MongoDB


// Slice array elements
// - Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

  const numbers = [1,2,3,4,5]
  
  console.log(numbers.slice()) // -> it copies all  item
  console.log(numbers.slice(0)) // -> it copies all  item
  console.log(numbers.slice(0, numbers.length)) // -> it copies all  item
  console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
  
// Splice 

// Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added.

  const numbers = [1, 2, 3, 4, 5]
  numbers.splice()
  console.log(numbers)           

  const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,1)
  console.log(numbers)   // remove the first item  [ 2, 3, 4, 5 ]
  
  const numbers = [1, 2, 3, 4, 5, 6]
  numbers.splice(3, 3, 7, 8, 9)
  console.log(numbers.splice(3, 3, 7, 8, 9))  // -> [ 7, 8, 9 ] it removes three item and replace three items

//Adding item to an array using push 

// Push - adding item in the end. To add item to the end of an existing array we use the push method.

const arr  = ['item1', 'item2','item3']
arr.push('new item')
console.log(arr) // ['item1', 'item2','item3','new item']

const numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // -> [1,2,3,4,5,6]

let fruits = ['banana', 'orange', 'mango', 'lemon']
fruits.push('apple')
console.log(fruits)    // ['banana', 'orange', 'mango', 'lemon', 'apple']

fruits.push('lime')
console.log(fruits)   // ['banana', 'orange', 'mango', 'lemon', 'apple', 'lime']

// Removing the end element using pop
// pop: Removing item in the end.

const numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> remove one item from the end
console.log(numbers) // -> [1,2,3,4]

// Removing an element from the beginning
// shift: Removing one array element in the beginning of the array.

const numbers = [1, 2, 3, 4, 5]
numbers.shift() // -> remove one item from the beginning
console.log(numbers) // -> [2,3,4,5]

//Add an element from the beginning

//unshift: Adding array element in the beginning of the array.

const numbers = [1, 2, 3, 4, 5]
numbers.unshift(0) // -> add one item from the beginning
console.log(numbers) // -> [0,1,2,3,4,5]


// Reversing any Order

// reverse: reverse the order of an array.

const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

webTechs.sort()
console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"] //ASC

webTechs.reverse() // after sorting we can reverse it
console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"] //DESC

//If you want to make an array into DESC order right away do this

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
].sort().reverse()

console.log(webTechs)

// Array of arrays
// Array can store different data types including an array itself. Let us create an array of arrays

const firstNum = [1,2,3]
const secondNum = [4,5,6]

//const arrayOfArray = [firstNum, secondNum] 
const arrayOfArray = [[1,2,3], [4,5,6]] 

console.log(arrayOfArray[0])


 const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'].sort().reverse()
 const backEnd = ['Node','Express', 'MongoDB'].sort().reverse()
 const fullStack = [frontEnd, backEnd]

 console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
 console.log(fullStack.length)  // 2
 console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
 console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]



 







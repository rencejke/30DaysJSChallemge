//DAY 6 LOOPS

//for loop

/* 

for(initialization, condition, increment/decrement){
  --code here
}
 */

for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5

for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0

//multiplication
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
/*

0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25

*/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
// arrays are 0-based (0 to length - 1)
// so we use i < countries.length to avoid going out of bounds
console.log(newArr)
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]


//Adding all elements in the array

const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum = sum + numbers[i]  // can be shorten, sum += numbers[i]
}

console.log(sum)  // 15

/*

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15

*/

//Creating a new array based on the existing array

const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}

console.log(newArr)  // [1, 4, 9, 16, 25]


const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}

console.log(newArr)  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]

//while loop

// Checks the condition before running the code block.
// If the condition is false at the start, the loop won’t run at all.

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

//Do-While Loop

//Runs the code block first, then checks the condition.
//This means it will always run at least once, even if the condition is false.

let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)

// 0 1 2 3 4 5

let i = 0
do
{
    console.log(i)
    i++
}
while (i > 5) //0 --- run once even though the condition is false

//for of loop
//We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array.

/* syntax

for (const 'element' of 'arr') {
  -- code goes here
}

*/

const numbers = [1,2,3,4,5]

for(const num of numbers)
{
  console.log(num)
} // 1 2 3 4 5

const numbers = [1,2,3,4,5]

for(const num of numbers)
{
  console.log(num * num)
} // 1 4 9 16 25


// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
}
console.log(sum) // 15


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

for (const tech of webTechs) {
  console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT REDUX NODE MONGODB

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]


for (const tech of webTechs)
{
    console.log(tech[0]) //get only the first letter of each element,  H C J R R N M
}

const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const arr = []

for(const country of countries) {
    arr.push(country.toUpperCase())
} //[ 'FINLAND', 'SWEDEN', 'NORWAY', 'DENMARK', 'ICELAND' ]

//break
//Break is used to interrupt a loop.

for(let i = 0; i <= 5; i++)
{
    if(i === 3)
    {
        break;
    }
    console.log(i)
}

// 0 1 2

//continue
//We use the keyword continue to skip a certain iterations.

for(let i = 0; i <= 5; i++)
{
    if(i === 3)
    {
        continue;
    }
    console.log(i)
}

// 0 1 2 4 5








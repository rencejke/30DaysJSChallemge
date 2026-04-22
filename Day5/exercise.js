//Exercise: Level 1

/*

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
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

-Declare an empty array;
-Declare an array with more than 5 number of elements
-Find the length of your array
-Get the first item, the middle item and the last item of the array
-Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
-Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
-Print the array using console.log()
-Print the number of companies in the array
-Print the first company, middle and last company
-Print out each company
-Change each company name to uppercase one by one and print them out
-Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
-Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
-Filter out companies which have more than one 'o' without the filter method
-Sort the array using sort() method
-Reverse the array using reverse() method
-Slice out the first 3 companies from the array
-Slice out the last 3 companies from the array
-Slice out the middle IT company or companies from the array
-Remove the first IT company from the array
-Remove the middle IT company or companies from the array
-Remove the last IT company from the array
-Remove all IT companies

*/


//1 

const arr = Array()
//const arr = []

console.log(arr)

//2
const arr  = ['Clarence Jake Bonilla', 'Business Application Developer', {Country: 'Philippines', City: 'San Pablo'}, {isMarried: false}, 25, 'WFH',
    ['HTML','CSS', 'TAILWIND', 'SQL', 'REACT', 'AI', 'DATA']
]
let computeMiddle = Math.floor(arr.length / 2)

//3
console.log(arr.length) // 7

//4
console.log(arr[0]) // Clarence Jake Bonilla
console.log(arr[computeMiddle]) // { isMarried: false }
console.log(arr[arr.length - 1])  //[ 'HTML', 'CSS', 'TAILWIND', 'SQL', 'REACT', 'AI', 'DATA' ]


//5

const mixedDataTypes = [1, 'Clarence Jake', true, null, undefined, ['HTML','CSS', 'TAILWIND', 'SQL', 'REACT', 'AI', 'DATA']]

console.log(mixedDataTypes.length) //6

//6

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let computeMiddle2 = Math.floor(arr.length / 2)

//7
console.log(itCompanies) //['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]

//8
console.log(itCompanies.length) //7


//9.
console.log(itCompanies[0])
console.log(itCompanies[computeMiddle2])
console.log(itCompanies[itCompanies.lenght - 1])


//10
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[itCompanies.length - 1])

//11
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

itCompanies[0] = itCompanies[0].toUpperCase()
itCompanies[1] = itCompanies[1].toUpperCase()
itCompanies[2] = itCompanies[0].toUpperCase()
itCompanies[3] = itCompanies[1].toUpperCase()
itCompanies[4] = itCompanies[0].toUpperCase()
itCompanies[5] = itCompanies[1].toUpperCase()
itCompanies[6] = itCompanies[1].toUpperCase()

console.log(itCompanies)
/*
[
  'FACEBOOK',
  'GOOGLE',
  'FACEBOOK',
  'GOOGLE',
  'FACEBOOK',
  'GOOGLE',
  'GOOGLE'
]
*/

//12
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let arrayToString = itCompanies.join(',')

console.log(`${arrayToString} are big IT companies.`) //Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon are big IT companies.


//13
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

itCompanies.includes('PWC') ? console.log('PWC') : console.log('Company is not found') //Company is not found

//14
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

const result = [];

companies[0].toLowerCase().split("o").length - 1

// First, each item should be in lowercase
// Second, split each item by "o"
// Example: "google" → ["g", "", "gle"]

// Before the first "o" → "g"
// Between the two "o's" → "" (nothing)
// After the second "o" → "gle"

// When we check the length, it becomes 3

// We subtract 1 because splitting creates one extra piece
// So: number of "o" = parts.length - 1

if ((companies[0].toLowerCase().split("o").length - 1) > 1) {
  result.push(companies[0]); //push the item in the empty array if it has more than 1 "o"
}

if ((companies[1].toLowerCase().split("o").length - 1) > 1) {
  result.push(companies[1]);
}

if ((companies[2].toLowerCase().split("o").length - 1) > 1) {
  result.push(companies[2]);
}

if ((companies[3].toLowerCase().split("o").length - 1) > 1) {
  result.push(companies[3]);
}

if ((companies[4].toLowerCase().split("o").length - 1) > 1) {
  result.push(companies[4]);
}

if ((companies[5].toLowerCase().split("o").length - 1) > 1) {
  result.push(companies[5]);
}

if ((companies[6].toLowerCase().split("o").length - 1) > 1) {
  result.shift(companies[6]);
}

console.log(result)

//15
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

companies.sort()

console.log(companies) //['Amazon','Apple','Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle' ]

//16
companies.reverse()
console.log(companies) //['Oracle', 'Microsoft', 'IBM', 'Google', 'Facebook', 'Apple', 'Amazon' ]

//17
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(companies.slice(0,3))

//18
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(companies.slice(4, companies.length))


//19
const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

let middleCompany = Math.floor(companies.length / 2) // Math.floor(3.5) -> 3

console.log(companies[middleCompany]) //apple





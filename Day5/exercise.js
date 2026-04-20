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
console.log(arr[computeMiddle]) //25
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


//1 Explain the difference between forEach, map, filter, and reduce.

// forEach()
// Used to loop through each item in an array.
// It executes a callback function for every element.
// It does NOT return a new array (returns undefined).
// Commonly used for side effects like logging, printing, or modifying external variables.

// map()
// Used to iterate through an array and transform each element.
// It returns a NEW array with the transformed values.
// The original array is not modified.

// filter()
// Used to create a new array containing only the elements
// that satisfy a given condition.
// It returns a NEW array.
// The original array is not modified.

// reduce()
// Used to reduce an array into a single value.
// It takes an accumulator and the current value.
// You can provide an initial value for the accumulator.
// Commonly used for calculating sums, averages, counting occurrences,
// grouping objects, or flattening arrays.

// Example:
// [10, 15, 20, 24].reduce((acc, curr) => acc + curr, 1)
// acc starts at 1
// 1 + 10 = 11
// 11 + 15 = 26
// 26 + 20 = 46
// 46 + 24 = 70
// Final result: 70


//2 call back function is a function that can be pass on as a parameter

//3 Use forEach to console.log each country in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

countries.forEach(country => {

   return console.log(country)

})

//4 

//Use forEach to console.log each name in the names array.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

names.forEach(name => console.log(name))

//5 Use forEach to console.log each number in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.forEach(number => console.log(number))


//6 Use map to create a new array by changing each country to uppercase in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryToUpperCase =  countries.map(country =>  country.toUpperCase())
console.log(countryToUpperCase)


//7 Use map to create an array of countries length from countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const  countriesLength =  countries.map(country =>  country.length)
console.log(countriesLength)

//8 Use map to create a new array by changing each number to square in the numbers array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numberToSquare = numbers.map(num =>  num * num)
console.log(numberToSquare)

//9 Use map to change to each name to uppercase in the names array

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const namesToUpperCaese = names.map(name => name.toUpperCase())
console.log(namesToUpperCaese)





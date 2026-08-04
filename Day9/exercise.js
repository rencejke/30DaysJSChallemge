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

//10 Use map to map the products array to its corresponding prices.

const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const productPrices = products.map(product => product['price'])
console.log(productPrices)


//11 Use filter to filter out countries containing land.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryWithLand = countries.filter(country => country.includes('land'))
console.log(countryWithLand)

//12 Use filter to filter out countries having six character.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryWithSixCharacter = countries.filter(country => country.length === 6)
console.log(countryWithSixCharacter)

//13 Use filter to filter out countries containing six letters and more in the country array.
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryWithSixCharacterAndMore = countries.filter(country => country.length >= 6)
console.log(countryWithSixCharacterAndMore)


//14 //Use filter to filter out country start with 'E';
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const countryStartWithLetterE = countries.filter(country => country[0].toLowerCase() === 'e')
console.log(countryStartWithLetterE)


//15 Use filter to filter out only prices with values.
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const productsWithValue = products.filter(product => product['price'].toString().trim('').length !== 0)
console.log(productsWithValue)

//16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (arr) =>
{
    const getData = arr.filter(arrData => (typeof arrData === 'string'))
    
    return getData
}

const data = [
  "apple",
  25,
  "banana",
  100,
  "orange",
  0,
  "grape",
  -5
];

console.log(getStringLists(data))






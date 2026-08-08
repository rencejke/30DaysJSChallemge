//exercise level 2


//1 Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

const totalPriceProduct = products.filter(product => product['price'].toString().trim('').length !== 0).map(getPrice => getPrice['price']).reduce((acc, curr) => acc + curr )
console.log(totalPriceProduct) //27

//2
//Find the sum of price of products using only reduce reduce(callback))
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


const totalPriceProduct2 = products.reduce((acc, curr) => 
{
    if(curr['price'].toString().trim().length !== 0)
    {
        return acc + curr['price'];
    } else
    {
        return acc
    }
}, 0)
console.log(totalPriceProduct2)


//3 Declare a function called categorizeCountries which returns an array of
//  countries which have some 
// common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

import { countries } from './countries.js';

const categorizeCountries = (filter) =>
{
    const getFilteredCountry = countries.filter(country => country.toLowerCase().includes(filter))
    
    return getFilteredCountry

  // or 
    // for much shorter
   // return countries.filter(country => country.toLowerCase().includes(filter))
}
console.log(categorizeCountries('land')) //[ 'IceLand', 'Finland' ]


//explicit version
const categorizeCountries = arr =>  
  countries.filter(country => 
    country.toLowerCase().includes(arr.toLowerCase())
    )
    
//4

const countNumberStarted = arr => 
arr.map(country => country[0]).reduce((acc, curr, index) =>
{
   //not yet done
}, 0)
    
    
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
console.log(countNumberStarted(countries))


//5 
const countNumberStarted = arr => 
    arr.map(country => country[0]).reduce((acc, curr) => {

        // Check if the current letter already exists in the object.
        // On the first occurrence of a letter, it is undefined,
        // so we create the letter and set its count to 1.
        // If the letter appears again, we increase its count by 1.

        if (acc[curr] === undefined) {
            acc[curr] = 1
        } else {
            acc[curr] += 1
        }

        return acc

    }, {}) // acc starts as an empty object
    
    const countries = ['Finland', 'Sweden', 'France', 'Denmark', 'Norway', 'IceLand'] 
    console.log(countNumberStarted(countries)) //{ F: 2, S: 1, D: 1, N: 1, I: 1 }


//5 Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
  
// const getFirstTenCountries = arr =>
//     arr.slice(0 , 10).map(country => country.toLowerCase()
// )

// const getFirstTenCountries = arr =>
//     arr.slice(0 , 10).map(country => country[0]).reduce((acc, curr) =>
//     {
//         if (acc[curr] === undefined) {
//             acc[curr] = 1
//         } else {
//             acc[curr] += 1
//         }
//         return acc
//     }, {})

// countries.slice(0, 10).forEach(country => console.log(country.toUpperCase()))

const getFirstTenCountries = arr =>
    arr.slice(0 , 10).map(country => country.slice(0, 3).toUpperCase()
)

import { countries } from './countries.js';

//6 

const getLastTenCountries = arr =>
//arr.slice(arr.length - 10, arr.length).map(country => country.slice(0, 3).toUpperCase())
arr.slice(arr.length - 10).map(country => country.slice(0, 3).toUpperCase())

console.log(getLastTenCountries (countries))

//7 Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

import { countries } from './countries.js';

const countLargestInitial = arr =>
arr.map(country => country[0]).reduce((acc, curr) =>
{
    if(acc[curr] === undefined)
    {
        acc[curr] = 1
    }else
    {
        acc[curr] += 1
    }
    
    return acc 
}, {})

const largestInitialObject = Object.assign({}, countLargestInitial (countries))
const initalCounts = Object.entries(largestInitialObject)

let biggestInitialCharacter = ''
let biggestCount = 0

for(let i = 0; i < initalCounts.length; i++)
{
    if(initalCounts[i][1] > biggestCount)
    {
        biggestInitialCharacter = initalCounts[i][0]
        biggestCount = initalCounts[i][1]
    }
}
console.log(`The biggest character in the countries.js is letter ${biggestInitialCharacter} with a count of ${biggestCount}`)












    

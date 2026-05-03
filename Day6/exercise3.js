import {countries} from './countries.js'

//Copy countries array(Avoid mutation)
console.log(countries)


//Arrays are mutable. Create a copy of array which does 
//not modify the original. Sort the copied array and store in a variable sortedCountries

let sortedArray = []
for(const country of countries)
{
    sortedArray.push(country.sort())
}
sortedArray.sort()
console.log(sortedArray)


//Sort the webTechs array and mernStack array

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]


let sortedWebTech = []
for(const item of webTechs)
{
    sortedWebTech.push(item)
}
sortedWebTech.sort()
console.log(sortedWebTech)


const mernStack = ['MongoDB', 'Express', 'React', 'Node']

let sortedMern = []

for(const item of mernStack)
{
    sortedMern.push(item)
}
sortedMern.sort()
console.log(sortedMern) //[ 'Express', 'MongoDB', 'Node', 'React' ]


//Extract all the countries contain the word 'land' from the countries array and print it as array

import {countries} from './countries.js'

let arr = []

for(const country of countries)
{
    if(country.includes('land'))
    {
        arr.push(country)
    }
}

console.log(arr)
/* [
  'Finland',
  'Iceland',
  'Ireland',
  'Marshall Islands',
  'Netherlands',
  'New Zealand',
  'Poland',
  'Solomon Islands',
  'Swaziland',
  'Switzerland',
  'Thailand'
] */

  
 //Find the country containing the hightest number of characters in the countries array

 import {countries} from './countries.js'

let checkLength = 0;
let biggestCharacter = ''

for(let i = 0; i < countries.length; i++)
{
    if(countries[i].length > checkLength)
    {
        checkLength = countries[i].length
        biggestCharacter = countries[i]
    }
}
console.log(biggestCharacter) //Central African Republic


//Extract all the countries containing only four characters from the countries array and print it as array

let arr = []

for(let i = 0; i < countries.length; i++)
{
    if(countries[i].length === 4)
    {
        arr.push(countries[i])
    }
}
console.log(arr)
/* [
  'Chad', 'Cuba',
  'Fiji', 'Iran',
  'Iraq', 'Laos',
  'Mali', 'Oman',
  'Peru', 'Togo'
] */


//Extract all the countries containing two or more words from the countries array and print it as array
let arr = []

for(let i = 0; i < countries.length; i++)
{
    if(countries[i].length >= 2)
    {
        arr.push(countries[i])
    }
}
console.log(arr)


//Reverse the countries array and capitalize each country and stored it as an array

countries.reverse()

let arr = []
for(const country of countries)
{
    arr.push(country.toUpperCase())
}

console.log(arr)

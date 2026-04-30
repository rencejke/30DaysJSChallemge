
//Develop a small script which generate any number of characters random id:

let text = 'abcdefghijklmnopqrstuvwxyz12345678910-_.~!*()'
text.split('')
let characterId = ''
let numberOfId = 12

for(let i = 0; i < numberOfId; i++)
{
    let random = Math.floor(Math.random() * text.length)
    characterId+=text[random]
 
}  
console.log(characterId) 

//Write a script which generates a random hexadecimal number.

let text = '0123456789ABCDEF' //hexadecimal is base 16 soo it has 16 possible symbols
text.split('')
let hexId = '#'
let length = 6

for(let i = 0; i < length; i++)
{
    let random = Math.floor(Math.random() * text.length)
    hexId+=text[random]
 
}  
console.log(hexId) 


//Write a script which generates a random rgb color number.
let rgb = []

for(let i = 0; i < 3; i++)
{
    let random = Math.floor(Math.random() * 256)
    rgb.push(random)
}  
console.log(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`) 


//Using the above countries array, create the following new array.

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

let arr = []

for(const country of countries)
{
    arr.push(country.toUpperCase())
}
console.log(arr) //["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]


//Using the above countries array, create an array for countries length'.

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

let arr = []

for(const country of countries)
{
    arr.push(country.length)
}
console.log(arr) //[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


//Use the countries array to create the following array of arrays:
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

let arr = []

for(const country of countries)
{
    let arr2 = []
    arr2.push(country)
    arr2.push(country.slice(0,3).toUpperCase())
    arr2.push(country.length)
    
    arr.push(arr2)
}
console.log(arr)

/*

[
  [ 'Albania', 'ALB', 7 ],
  [ 'Bolivia', 'BOL', 7 ],
  [ 'Canada', 'CAN', 6 ],
  [ 'Denmark', 'DEN', 7 ],
  [ 'Ethiopia', 'ETH', 8 ],
  [ 'Finland', 'FIN', 7 ],
  [ 'Germany', 'GER', 7 ],
  [ 'Hungary', 'HUN', 7 ],
  [ 'Ireland', 'IRE', 7 ],
  [ 'Japan', 'JAP', 5 ],
  [ 'Kenya', 'KEN', 5 ]
]

*/

//In above countries array, check if there is a country
//  or countries containing the word 'land'. If there are countries containing 
// 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

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

let arr = []

for(const country of countries)
{
    if(country.includes('land'))
    {
        arr.push(country)
    }
}
console.log(arr) //[ 'Finland', 'Ireland' ]








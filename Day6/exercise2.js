
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
// or countries containing the word 'land'. If there are countries containing 
//'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

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

if (arr.length > 0) {
  console.log(arr)
} 
else {
  console.log('All these countries are without land')
}


//In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with,
//  print it as array. If there is no country containing the 
// word 'ai', print 'These are countries ends without ia'.

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
    if(country.endsWith('ia'))
    {
        arr.push(country)
    }
}

if (arr.length > 0) {
  console.log(arr)
} 
else {
  console.log('These are countries ends without ia')
}


//Using the above countries array, find the country containing the biggest number of characters.
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

let checkLength = 0
let longestCountry = '';

for(let i = 0; i < countries.length; i++)
{  
    if(countries[i].length > checkLength)
    {
         checkLength = countries[i].length
         longestCountry = countries[i]
    } 
}
console.log(longestCountry)


//Using the above countries array, find the country containing only 5 characters.
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
    if(country.length === 5)
    {
        arr.push(country)
    }
}

console.log(arr)

//Find the longest word in the webTechs array

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let checkLength = 0;
let longestWebTech = '';

for(let i = 0; i < webTechs.length; i++)
{
    if(webTechs[i].length > checkLength)
    {
        checkLength = webTechs[i].length
        longestWebTech = webTechs[i]
    }
}
console.log(longestWebTech)


//Use the webTechs array to create the following array of arrays:
const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

let webTechArryofArrays = []

for(const webDevTech of webTechs)
{
    let webTechArr = []
    
    webTechArr.push(webDevTech)
    webTechArr.push(webDevTech.length)
    
    webTechArryofArrays.push(webTechArr)
    
}

console.log(webTechArryofArrays)



//An application created using MongoDB, Express,
//React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let mernTech = 'MongoDB, Express, React, Node'

const mernArr = mernTech.split(', ')

let output = ''

for(const mern of mernArr)
{
    output += mern[0]
}
console.log(output)


//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// using a for loop or for of loop and print out the items.


let webTech =  ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
let newWebTechArr = []

for(const webTechnology of weebTech)
{
  newWebTechArr.push(webTechnology)
}
console.log(newWebTechArr)


//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruits = ['banana', 'orange', 'mango', 'lemon'] 
let reverse = []
for(let i = 0; i < fruits.length; i++)
{
    reverse.unshift(fruits[i])
}
console.log(reverse) 

let fruits = ['banana', 'orange', 'mango', 'lemon'] 
let reverse = []
for(let i = fruits.length - 1; i >= 0 ; i--)
{
    reverse.push(fruits[i])
}
console.log(reverse)

//Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  
  for(const tech of fullStack)
  {
      for(const item of tech)
      {
          console.log(item)
      }
  }

 //Find the country containing the hightest number of characters in the countries array

 
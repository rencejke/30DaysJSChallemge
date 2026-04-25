/*

Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
First remove all the punctuations and change the string to array and count the number of words in the array

In the following shopping cart add, remove, edit items:

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    add 'Meat' in the beginning of your shopping cart if it has not been already added
    add Sugar at the end of you shopping cart if it has not been already added
    remove 'Honey' if you are allergic to honey
    modify Tea to 'Green Tea'

*/


//2

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let textToArray = text.split(' ')
console.log(ttextToArray) //["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]
console.log(textToArray.length) //13

//3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if(!shoppingCart.includes('Meat'))
{
    shoppingCart.unshift('Meat')
}
if(!shoppingCart.includes('Sugar'))
{
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

let isAllergicToHoney = true

if(isAllergicToHoney) 
{
    shoppingCart.pop()
}

console.log(shoppingCart) //[ 'Milk', 'Coffee', 'Tea' ]

//4

import { countries } from './countries.js';

countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')
console.log(countries) //[ 'Iceland', 'Philippines', 'India', 'Indonesia', 'Iraq', 'United States', 'China', 'Korea', 'Ethiopia']


//5
import { webTechs } from './webTechs.js';
webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
console.log(webTechs)

/*
[
  'HTML',       'CSS',
  'JavaScript', 'React',
  'Redux',      'Node',
  'MongoDB',    'Sass'
]
*/

//6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(frontEnd, backEnd)

console.log(fullStack) //["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]


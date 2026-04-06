/*
Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
*/

//ANSWERS

//1
let challenge = '30 Days Of JavaScript'
//2
console.log(challenge) // '30 Days Of JavaScript'
//3
console.log(challenge.length) //21
//4
let challengeToUpper = challenge.toUpperCase()
console.log(challengeToUpper) //30 DAYS OF JAVASCRIPT
//5
let challengeToLower = challenge.toLowerCase()
console.log(challengeToLower) //30 days of javascript
//6
console.log(challenge.substring(0, 7)) //30 Days
//7
console.log(challenge.substring(3, challenge.length)) //Days Of JavaScript
//8
console.log(challenge.includes('Script')) //true
//9
let challengeToArray = challenge.split()
console.log(challengeToArray) //[ '30 Days Of JavaScript' ]
//10
let challengeToArray2 = challenge.split(' ')
console.log(challengeToArray2) //[ '30', 'Days', 'Of', 'JavaScript' ]
//11
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let companyToArray = company.split(', ')
console.log(companyToArray) //[ 'Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon' ]

//12
let changeubj = challenge.replace('JavaScript', 'Python')
console.log(changeubj) //30 Days Of Python
//13
console.log(challenge.charAt(15)) //S
//14
console.log(challenge.charCodeAt('J')) //51
//15
console.log(challenge.indexOf(a)) //4
//16
console.log(challenge.lastIndexOf('a')) //14
//17
let txt = 'You cannot end a sentence with because because because is a conjunction'
console.log(txt.indexOf('because')) //31
//18
console.log(txt.lastIndexOf('because')) //47
//19
console.log(txt.search('because')) //31
//20 
let spaces = ' 30 Days Of JavaScript '
console.log(spaces.trim()) //30 Days Of JavaScript 
//21
console.log(challenge.startsWith('30 Days Of JavaScript')) //true
//22
console.log(challenge.endsWith('30 Days Of JavaScript')) //true
//23
let challengeMatch = /a/gi
console.log(challenge.match(challengeMatch)) //[ 'a', 'a', 'a' ]
//24
let combine = '30 Days of' 
console.log(combine.concat(' ', 'JavaScript')) //30 Days of JavaScript
//25
console.log(challenge.repeat(2)) //30 Days Of JavaScript30 Days Of JavaScript





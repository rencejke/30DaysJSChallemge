/*

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
    Write three JavaScript statement which provide truthy value.
    Write three JavaScript statement which provide falsy value.
5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    4 > 3
    4 >= 3
    4 < 3
    4 <= 3
    4 == 4
    4 === 4
    4 != 4
    4 !== 4
    4 != '4'
    4 == '4'
    4 === '4'
Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

    4 > 3 && 10 < 12
    4 > 3 && 10 > 12
    4 > 3 || 10 < 12
    4 > 3 || 10 > 12
    !(4 > 3)
    !(4 < 3)
    !(false)
    !(4 > 3 && 10 < 12)
    !(4 > 3 && 10 > 12)
    !(4 === '4')
    There is no 'on' in both dragon and python

7. Use the Date object to do the following activities
    What is the year today?
    What is the month today as a number?
    What is the date today?
    What is the day today as a number?
    What is the hours now?
    What is the minutes now?
    Find out the numbers of seconds elapsed from January 1, 1970 to now
*/


//1
let firstName = 'Clarence Jake'
let lastName =  'Bonilla'
let country = 'Philippines'
let city = 'San Pablo'
let age = 24
let isMarried = false

console.log(typeof firstName) //string
console.log(typeof lastName) //string
console.log(typeof country) //string
console.log(typeof city) //string
console.log(typeof age) //number
console.log(typeof isMarried) //boolean

//2 
let num = '10'
console.log(num == 10)  //true
console.log(num === 10) //false, same value but not same data type

//3
let num2 = parseInt('9.8')
console.log(num2 == 10) // false

//4
let truthValueOne = 'Clarence'
let truthValueTwo = true
let truthValueThree = 3

let falsyValueOne = ''
let falsyValueTwo = 0
let falsyValueThree = null

//5

console.log(4 > 3)  //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true

console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false

console.log(4 != 4) //false
console.log(4 == '4') //true
console.log(4 === '4') //false

let textOne = 'python'
let textTwo = 'jargon'

console.log(textOne.length != textTwo.length) //false


//6
console.log(4 > 3 && 10 < 12) //true
console.log(4 > 3 && 10 > 12) //false
console.log(4 > 3 || 10 < 12) //true
console.log(4 > 3 || 10 > 12) //true

console.log(!(4 > 3)) //false
console.log(!(4 < 3)) //true
console.log(!(false))//true

console.log(!(4 > 3 && 10 < 12)) //false
console.log(!(4 > 3 && 10 > 12)) //true
console.log(!(4 === '4')) //true

//There is no 'on' in both dragon and python
let text = 'dragon and python'
console.log(text.includes('on'))//true, there is on both dragon and python

//7

let dateNow = new Date()

console.log(dateNow.getFullYear()) //2026
console.log(dateNow.getMonth()) //3
console.log(dateNow.getDate()) //12
console.log(dateNow.getDay()) //0
console.log(dateNow.getHours()) //7
console.log(dateNow.getMinutes()) //10
console.log(dateNow.getTime()) //1775977899038
console.log(dateNow.toString()) //Sun Apr 12 2026 07:13:50 GMT+0000 (Coordinated Universal Time)


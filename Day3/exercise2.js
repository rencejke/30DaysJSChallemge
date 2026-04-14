/*

-Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
-Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
-Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
-Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
-Calculate the slope, x-intercept and y-intercept of y = 2x -2
-Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
-Compare the slope of above two questions.
-Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
-Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
-If the length of your name is greater than 7 say, your name is long else say your name is short.
-Compare your first name length and your family name length and you should get this output.
-Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
-Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
-Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
-Create a human readable time format using the Date time object

*/

//1

let base = Number(prompt('Enter base'))
let height = Number(prompt('Enter height'))
let area = (0.5 * base) * height //left to right ---> same arithmetic operations
console.log(`The area of the triangle is ${area}`) //The area of the triangle is 100

//2
let sideA = Number(prompt('Enter side a'))
let sideB = Number(prompt('Enter side b'))
let sideC = Number(prompt('Enter side c'))

const perimeter = sideA + sideB + sideC //left to right ---> same arithmetic operations
console.log(`The perimeter of the triangle is ${perimeter}`) //The perimeter of the triangle is 12

//3
let lengths = Number(prompt('Enter length'))
let width = Number(prompt('Enter width'))

const areaRectangle = lengths * width
const perimeterRectangle =  2 * (lengths + width) 
console.log(`The area of a triangle is ${areaRectangle} and the perimeter of triangle is ${perimeterRectangle}`)

//4 

//raidius = 5
let PI = 3.14
let radius = Number(prompt('Enter raidius'))
let areaCircle = PI * radius * radius
console.log(areaCircle) //78.5

let PITwo = 3.14
let radius2 = Number(prompt('Enter raidius'))
let circumference = 2 * PITwo * radius2
console.log(circumference)

//5
//calculate y = 2x -2

//x = 0
let yIntercept = 2 * x - 2
console.log(yIntercept) //-2

//y = 0
// 0 = 2x - 2  
// 0 + 2 = 2x - 2 + 2
//2x = 2
//divided both side by 2
//x = 1
let xIntercept = (0 + 2) / 2
console.log(xIntercept)
 
// final answer
// (x1 y1) (x2 y2)
// (0,-2) (1, 0)

let x1a = 0 //x1
let x2b = 1 //x2
let y1c = -2 //y1
let y2d = 0 //y2

let slopee = (y2d - y1c)/(x2b-x1a)
//(0 - (-2)) --> (0 + 2)
//(1 - 0)
//2/1 = 2
console.log(slopee) // 2

//6

// slope = (y2 - y1)/(x2-x1)
// (2, 2) and (6, 10)
// (x1, y1) (x2, y2)
 
let x1 = 2
let x2 = 6
let y1 = 2
let y2 = 10

let slope = (y2 - y1)/(x2-x1)
console.log(slope) // 2

//7 
console.log(slopee === slope) //true

//8
//y = x2 + 6x + 9

let x = -3
let y =  (x ** 2) + (6 * x) + 9
console.log(y)

//9
let hours = Number(prompt('Enter hours'))
let ratePerHour = Number(prompt('Enter rate per hour'))
const payComputation = hours * ratePerHour

console.log(`Enter hours: ${hours}`)
console.log(`Enter rate per hour: ${ratePerHour}`)
console.log(`Your weekly earning is ${payComputation}`)

//10
let names = prompt('Enter name')

names.length  > 7
    ? console.log('your name is long')
    : console.log('your name is short')

//11

let firstName = 'Clarence Jake'
let lastName = 'Bonilla'


firstName.length  > lastName.length
    ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
    : console.log(`Your first name, ${firstName} is shorter than your family name, ${lastName}`)

//12
let myAge = 19
let yourAge = 25

myAge > yourAge
    ? console.log(`I am ${myAge - yourAge} years older than you`)
    : console.log(`You are ${yourAge - myAge} years older than me`)

//13
let userYear = prompt('Enter your birth year')
const now = new Date()
let ageCompute =  now.getFullYear() - userYear
const legalAge = 18

console.log(`Enter birth Year: ${userYear}`)

ageCompute >= 18
    ? console.log(`You are ${ageCompute}. You are old enough to drive`)
    : console.log(`You are ${ageCompute}. You will be allowed to driver after ${legalAge - ageCompute} years`) 

//14
let userLive = prompt('Enter number of years you live')
let seconds = 365 * userLive * 24 * 60 * 60

//there are 365 days
//24 hrs per day
//60 mins per hour
//60s in 1 minute

console.log(`Enter number of years you live: ${userLive}`)
console.log(seconds)

//15

let currentDate = new Date()
let currentYear = currentDate.getFullYear()
let currentMonth = currentDate.getMonth()
let currentDay = currentDate.getDate()
let currentHour = currentDate.getHours()
let currentMinute = currentDate.getMinutes()

console.log(`${currentYear}-${currentMonth + 1}-${currentDay} ${currentHour}:${currentMinute}`) //2026-4-14 23:35 
console.log(`${currentDay}-${currentMonth + 1}-${currentYear} ${currentHour}:${currentMinute}`) //14-4-2026 23:36
console.log(`${currentDay}/${currentMonth + 1}/${currentYear} ${currentHour}:${currentMinute}`) //14/4/2026 23:37






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


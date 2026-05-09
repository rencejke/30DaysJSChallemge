//1. Declare a function fullName and it print out your full name.

const fullName = () =>
{
    console.log('Clarence Jake Bonilla')
}
fullName() //Clarence Jake Bonilla


//2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
const fullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
console.log(fullName('Clarence Jake', 'Bonilla')) //Clarence Jake Bonilla

//OR

const fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(fullName('Clarence Jake', 'Bonilla'))

//3. Declare a function addNumbers and it takes two two parameters and it returns sum.
const addNumbers = (numOne, numTwo) => {
    let sum = numOne + numTwo
    return sum 
}
console.log(addNumbers(40, 50))


//4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
const areaOfRectangle = (length, width) => {
    let area = length * width
    
    return area 
}
console.log(areaOfACircle(5, 10)) //50

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(length, width){

    let perimeter = 2 * (length + width)
    
    return perimeter
}
console.log(perimeterOfRectangle(5, 10))

//6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

const volumeOfRectPrism = (length, width, height) =>{

    let prism = length * width * height
    
    return prism;
}

console.log(volumeOfRectPrism(10, 5, 8)) //400

//7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

const areaOfCircle = (radius) => {

    let area = Math.PI * radius * radius
    return area
}

console.log(areaOfCircle(3)) //28.274333882308138

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

const circumOfCircle = (radius) => {
   return 2 * Math.PI * radius
}
console.log(circumOfCircle(3)) //18.84955592153876

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

const density = (mass, volume) => mass / volume
console.log(density(20, 15)) //1.3333333333333333

//10 Speed is calculated by dividing the total distance covered by a moving object 
// divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

//meter and seconds
const speed = (distance, time) => distance / time 
console.log(speed(133, 30) + ' m/s') //4.433333333333334 m/s

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
const weight = (mass, gravity) => {
    return mass * gravity

}

console.log(weight(100, 9.80665)) //980.665


//12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = celcius => {
    let fahrenheit = celcius * 9 / 5 + 32

    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(20) + '°F') //68°F

/* 13
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 
20 years old or older.Check if a person is 
underweight, normal, overweight or obese based 
the information given below.

*/
const checkBodyIndex = (weight, height) => { 
    let bmi = weight / (height * height) 
    
    if (bmi < 18.5) { 
        return 'Underweight'
    } else if (bmi >= 18.5 && bmi <= 24.9) { 
        return 'normal weight'
    } else if (bmi >= 25 && bmi <= 29.9) {
        return 'Overweight' 
    }
    else { 
        return 'Obese' 
    } 
} 
console.log(checkBodyIndex(70, 2))


//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

const checkSeason = (month) =>
{
    let months = month.toLowerCase()
    
   if (months === 'december' || months ==='january' || months === 'february') {
       return 'Winter'
   } 
    else if (months === 'march' || months === 'april' || months === 'may') {
         return 'Spring'
   } 
   else if (months === 'june' || months === 'july' || months === 'august') {
         return 'Summer'
   } 
   else if (months === 'september' || months === 'october' || months === 'november') {
         return 'Autumn'
   } else {
        return 'Error'
   }
}

console.log(checkSeason('JuLY')) //'Summer'

/* 15 Math.max returns
 its largest argument. Write a function findMax 
 that takes three arguments and returns their m
 aximum with out using Math.max method. */

const findMax = (...args)=>{
    return Math.max(...args)
}
console.log(findMax(0, 10, 5)) //10
console.log(findMax(0, -10, -2)) //0






//Conditionals

//Conditions can be implementing using the following ways:

// if
// if else
// if else if else
// switch
// ternary operator

//1. if

// syntax
if (condition) {
  //this part of code runs for truthy condition
}

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

//2 if else

if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}

if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition
}

let numTwo = 3
if (numTwo > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

numTwo = -3
if (numTwo > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number


let isRaining = true
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// You need a rain coat.

isRaining = false
if (isRaining) {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}
// No need for a rain coat.


//3. if else if else

    // syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code

}


let a = 0
if (a > 0) {
    console.log(`${a} is a positive number`)
} 
else if (a < 0) (
    console.log(`${a} is a negative number`)
)
else if (a === 0) {
  console.log(`${a} is zero`)
} 
else {
  console.log(`${a} is not a number`)
}


let weather = 'sunny'
if (weather === 'rainy'){
    console.log('You need a raincoat')
}
else if (weather === 'cloudy') {
    console.log('It might be cold, you need a jacket.')
}
else if (weather === 'sunny') {
  console.log('Go out freely.')
} else {
  console.log('No need for rain coat.')
}

//4 Switch

switch(caseValue){
  case 1:
    // code
    break
  case 2:
   // code
   break
  case 3:
   // code
   break
  default:
   // code
}


let weatherr = 'cloudy'
switch (weatherr) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

let dayUserInput = prompt('What is day today?')
let daytoLowerCase = dayUserInput.toLowerCase()

switch(daytoLowerCase) {
    case 'monday':
        console.log('Today is Monday')
    break;
    case 'tuesday':
        console.log('Today is Tuesday')
    break;
    case 'wednesday':
        console.log('Today is Wednesday')
    break;
    case 'thursday':
        console.log('Today is Thursday')
    break;
    case 'friday':
        console.log('Today is Friday')
    break;
    default:
        console.log('It is not a weekday')
}


let numm = prompt('Enter number')

switch(true){
    case numm > 0:
         console.log('Number is positive');
    break;
    case numm == 0:
         console.log('Number is zero');
    break;
    case numm < 0:
         console.log('Number is negative');
    break;
    default:
    console.log('Entered value was not a number');
}

//4. Ternary Operator

let isRainingToday = true
isRainingToday
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
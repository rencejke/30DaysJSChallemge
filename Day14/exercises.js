/*
1. Undefined Variable

Create a try/catch/finally block that attempts to print a variable that doesn't exist.

Requirements:

Catch the error.
Print the error name.
Print the error message.
finally prints "Done".

*/


try{
    const firstName = 'Clarence Jake'
    const fullName = fistName + ' ' + lastName

}catch(err){
    console.log(err.name)
    console.log(err.message)
}
finally{
    console.log("Done")
}

/*

2. Accessing an Undefined Property

*/

const person = {
  name: 'John',
  age: 25
}

try{
    const text = `My name is ${person.name} my age is ${person.age} and my nationality is ${person.nationality.toUpperCase()}`
    console.log(text)
}catch(err){
    console.log(err.name) // TypeError
    console.log(err.message) // Cannot read properties of undefined (reading 'toUpperCase')
}

//3 Number as a String
//Inside try, attempt to use a string method on age.

try{
    const age = 25
    const ageLength = age.substring(0, 1)
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}
finally{
    console.log("Finished")
}

//4. Array Operation

//Create an array of numbers.

try{
    const numbers = [1,2,3,4,5]
    console.log(numbers.middleIndeOf(2))
}catch(err)
{
    console.log(err.name) //TypeError
    console.log(err.message) //numbers.middleIndeOf is not a function
}

//5

try{
    const numbers = [1,2,3,4,5].indexOf(3)
    console.log('Everything is working') //Everything is working
}catch(err){
    console.log(err.name) 
    console.log(err.message) 
}finally{
    console.log('Process Completed') //Process Completed
}

//exercises level  2

//1 User Input Validation
//Create a variable representing a user's age.
//Inside try, check whether the value can reasonably be used as an age.








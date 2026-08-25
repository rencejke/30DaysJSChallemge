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











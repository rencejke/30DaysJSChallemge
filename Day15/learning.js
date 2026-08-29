//Classes

/* 
    JavaScript is an object-oriented programming language. Objects have properties (data) and methods (actions).

    A class is like a blueprint for creating objects. We instantiate a class to create an object.

    Class → Blueprint
    Object → Something created from the blueprint
    Properties → Data/attributes
    Methods → Actions/behavior

    Once we create a class, we can use it to create many objects. This process is called class instantiation.
    An object literal creates a single object. If we need another similar object, we have to write it again.
    A class, on the other hand, acts as a blueprint that lets us create many similar objects. This helps reduce code repetition.

    Simple example:

    Object literal → Create one object manually
    Class → Create many similar objects easily

*/
// Defining a classes
// To define a class in JavaScript we need the keyword class , 
// the name of a class in CamelCase and block code(two curly brackets).

// syntax
class ClassName {
    //  code goes here
}

//example

class Person{
    //code goes here
}

//Class Instantiation

// Instantiation class means creating an object from a class. 
// We need the keyword new and we call the name of the class after the word new.

class Person {
  // code goes here
}
const person = new Person()
console.log(person)

/*

Class Constructor

A constructor is a special method used to create and set up objects from a class.

It uses the constructor keyword.
We pass properties as parameters.
We use this to attach those properties to the object.
this refers to the current object.

Simple idea:
constructor → sets up the object
this → gives the object its properties

*/
class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
  }
}

const persons = new Person()

console.log(persons) //Person { firstname: undefined, lastname: undefined}

// All the keys of the object are undefined. When ever we instantiate we should pass the value of the properties.
// Let us pass value at this time when we instantiate the class.

class Person{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
}
const person1 = new Person('Clarence Jake', 'Bonilla')
console.log(person1) //Person { firstname: 'Clarence Jake', lastname: 'Bonilla' }

//As we have stated at the very beginning that once we create a 
//class we can create many object using the class. 
//Now, let us create many person objects using the Person class.


class Person{
    constructor(firstname, lastname){
        this.firstname = firstname
        this.lastname = lastname
    }
}

const person2 = new Person('Marianne', 'Ishir')
const person3 = new Person('Chaewon', 'Kim')
const person4 = new Person('Ji-min', 'Yu')

console.log(person2) //Person { firstname: 'Marianne', lastname: 'Ishir' }
console.log(person3) //Person { firstname: 'Chaewon', lastname: 'Kim' }
console.log(person4) //Person { firstname: 'Ji-min', lastname: 'Yu' }

class Person{
    constructor(firstname, lastname, age, country, city)
    {
        console.log(this)
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.country = country
        this.city = city
        
    }
}

const person5 = new Person('Clarence Jake', 'Bonilla', 25, 'Philippines', 'San Pablo')
console.log(person5)

//Default values with constructor

//The constructor function properties may have a default value like other regular functions.

class Person{
    constructor(
        firstname = 'Clarence Jake',
        lastname = 'Bonilla',
        age = 25,
        country = 'Philippines',
        city = 'San Pablo'
    )
    {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age,
        this.country = country
        this.city = city
    }
}

const Person6 = new Person()
const Person7 = new Person('Chaewon', 'Kim', 26, 'South Korea', 'Seoul')


console.log(Person6)
console.log(Person7)

//Class Method

//The constructor inside a class is a builtin function which allow us to create a blueprint for the object. In a class we can create class methods. 
//Methods are JavaScript functions inside the class. 

class Person{
    constructor(firstname, lastname, age, country, city)
    {
        this.firstname = firstname
        this.lastname = lastname
        this.age = age
        this.country = country
        this.city = city
    }
    getFullName() {
        const fullName = this.firstname + ' ' + this.lastname
        return fullName
    }
}

const person7 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person8 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person7.getFullName())
console.log(person8.getFullName())

//Properties with Initial Value

/*
When creating a class, some properties can have initial values.

For example:

A game's starting score can be 0.
Your starting skill can increase as you gain experience.

In short, initial values are the starting values of properties.

*/

class Person {
 constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age 
    this.country = country
    this.city = city
    this.score = 0
    this.skill = []
 }
 getFullName(){
    const fullName = this.lastName + ' '  + this.lastName
    return fullName   
 }
 }

const person9 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person10 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

console.log(person9.score) //0
console.log(person10.score) //0

console.log(person9.skill) //[]
console.log(person10.skill) //[]













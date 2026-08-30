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


//getter

// The get method allow us to access value from the object. 
// We write a get method using keyword get followed by a function.
// Instead of accessing properties directly from the object we use getter to get the value.

class Person{
    constructor(firstName, lastName, age, country, city){
        this.firstName - firstName
        this.lastName = lastName
        this.age = age
        this.country = country,
        this.score = 0
        this.skills = []
    }
    getFullName()
    {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore()
    {
        return this.score
    }
    get getSkills()
    {
        return this.skills 
    }
}

const person11 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person12 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')


console.log(person11.getScore) //0
console.log(person11.getScore) //0 

console.log(person12.getSkills) //[]
console.log(person11.getSkills) //[]


//setter

// The setter method allow us to modify the value of certain properties. 
// We write a setter method using keyword set followed by a function.


class Person{
    constructor(firstName, lastName, age, country, city){
        this.firstName - firstName
        this.lastName = lastName
        this.age = age
        this.country = country,
        this.score = 0
        this.skills = []
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills 
    }
    set setScore(score){
        this.score += score
    }
    set setSkills(skills){
        this.skills.push(skills)
    }
}

const person13 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person14 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')

person13.setScore = 1
person13.setSkills = 'HTML'
person13.setSkills = 'CSS'
person13.setSkills = 'JavaScript'

person14.setScore = 1
person14.setSkills = 'Planning'
person14.setSkills = 'Managing'
person14.setSkills = 'Organizing'


console.log(person13.score) //1
console.log(person14.score) //1


console.log(person13.skills) //[ 'HTML', 'CSS', 'JavaScript' ]
console.log(person14.skills) //[ 'Planning', 'Managing', 'Organizing' ]


class Person{
    constructor(firstName, lastName, age, country, city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age,
        this.country = country,
        this.city = city,
        this.score = 0
        this.skills = []
    }
    getFullName(){
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }
    get getScore(){
        return this.score
    }
    get getSkills(){
        return this.skills 
    }
    set setScore(score){
        this.score += score
    }
    set setSkill(skills){
        this.skills.push(skills)
    }
     
     getPersonInfo(){
     
     let fullName = this.getFullName()
     let skills = 
        this.skills.length > 0 && 
        this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`
     let formattedSkills = skills ? `He knows ${skills}` : ''

     let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
     return info

     }
}


const person15 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person16 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person17 = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

person15.setScore = 1
person15.setSkill = 'HTML'
person15.setSkill = 'CSS'
person15.setSkill = 'JavaScript'

person16.setScore = 1
person16.setSkill = 'Planning'
person16.setSkill = 'Managing'
person16.setSkill = 'Organizing'

console.log(person15.getScore)
console.log(person16.getScore)

console.log(person15.getSkills)
console.log(person16.getSkills)
console.log(person17.getSkills)

console.log(person15.getPersonInfo())
console.log(person16.getPersonInfo())
console.log(person17.getPersonInfo())

/*

1
1
[ 'HTML', 'CSS', 'JavaScript' ]
[ 'Planning', 'Managing', 'Organizing' ]
[]
Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS, and JavaScript
Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing, and Organizing
John Doe is 50. He lives Mars city, Mars. 

*/

//Static Method

// A static method belongs to the class itself, not its objects (instances).
// You call it directly using the class name.

//example

//Date.mow()

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.country = country
    this.city = city
    this.score = 0
    this.skills = []
  }
  getFullName() {
    const fullName = this.firstName + ' ' + this.lastName
    return fullName
  }
  get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
  set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
  getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''

    let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
    static favoriteSkills() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)

        return skills[index] 
    }

    static showDateTime(){
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()

        if(hours < 10){
            hours = '0' + hours
        }

        if(minutes < 10){
            minutes = '0' + minutes
        }

        let formattedDate = date + '.' + month + '.' + year
        let time  = hours + ':' + minutes
        let fullTime = formattedDate + ' ' + time

        return fullTime

    }
}


console.log(Person.favoriteSkills()) //HTML
console.log(Person.showDateTime()) //30.8.2026 03:20

//Inheritance

//Inheritance allows a child class to use the properties and methods of a parent class.
//It helps reduce repeated code.
//For example, Person can be the parent class, while Student and Teacher can be child classes.

// syntax 

class childClassName extends parentClassName{
    //code here 
} 

class Student extends Person{
    saySomething() {
        return 'I am a child of the person class'
    }
}

const stud1 =  new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
console.log(stud1)
console.log(stud1.saySomething())
console.log(stud1.getFullName())
console.log(stud1.getPersonInfo())


/*

Student {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 'Finland',
  country: 250,
  city: 'Helsinki',
  score: 0,
  skills: []
}
I am a child of the person class
Asabeneh Yetayeh
Asabeneh Yetayeh is Finland. He lives Helsinki, 250. 

*/

class Student extends Person{
    constructor(firstName, lastName, age, country, city, gender){
        super(firstName, lastName, age, country, city)
        this.age = age 
    }

    saySomething() {
        return 'I am a child of the person class'
    }

    getPersonInfo() {
    let fullName = this.getFullName()
    let skills =
      this.skills.length > 0 &&
      this.skills.slice(0, this.skills.length - 1).join(', ') +
        ` and ${this.skills[this.skills.length - 1]}`

    let formattedSkills = skills ? `He knows ${skills}` : ''
    let pronoun = this.gender === 'Male' ? 'He' : 'She'

    let info = `${fullName} is ${this.age}. ${pronoun} lives ${this.city}, ${this.country}. ${formattedSkills}`
    return info
  }
}

const stud2 = new Student(
  'Asabeneh',
  'Yetayeh',
  250,
  'Finland',
  'Helsinki',
  'Male'
  )

const stud3 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')

stud2.setScore = 1
stud2.setSkill = 'HTML'
stud2.setSkill = 'CSS'
stud2.setSkill = 'JavaScript'

stud3.setScore = 1
stud3.setSkill = 'Planning'
stud3.setSkill = 'Managing'
stud3.setSkill = 'Organizing'

console.log(stud2)

console.log(stud2.saySomething())
console.log(stud2.getFullName())
console.log(stud2.getPersonInfo())


console.log(stud3.saySomething())
console.log(stud3.getFullName())
console.log(stud3.getPersonInfo())


/*

Student {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  score: 1,
  skills: [ 'HTML', 'CSS', 'JavaScript' ]
}
I am a child of the person class
Asabeneh Yetayeh
Asabeneh Yetayeh is 250. She lives Helsinki, Finland. He knows HTML, CSS and JavaScript
I am a child of the person class
Lidiya Tekle
Lidiya Tekle is 28. She lives Helsinki, Finland. He knows Planning, Managing and Organizing

*/













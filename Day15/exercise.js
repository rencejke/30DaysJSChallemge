class Animal{
    constructor(name, age, color, legs){
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs 
    }
    getAnimalInfo(){
        const info = `This animal name is ${this.name}, it's ${this.age} years old. Its color is ${this.color} and it has ${this.legs} legs`
        return info 
    }
    getAge(){
        return this.age
    }  
    
} 


const animal = new Animal('Brownie', 5, 'Brown', 4)
console.log(animal)
console.log(animal.getAge())
console.log(animal.getAnimalInfo())

//2
class Dog extends Animal {
    static saySomething()
    {
        return 'I\'m a dog'
    } 
}

class Cat extends Animal {
 static saySomething()
    {
        return 'I\'m a cat'
    } 
}

 
const dog2 = new Dog('Max', 3, 'Brown', 4)
const dog3 = new Dog('Luna', 2, 'White', 4)
const dog4 = new Dog('Leo', 5, 'Black', 4)
console.log(Dog.saySomething())
console.log(dog2)
console.log(dog3)
console.log(dog4)


const cat2 = new Cat('Milo', 2, 'Orange', 4)
const cat3 = new Cat('Bella', 4, 'Gray', 4)
const cat4 = new Cat('Coco', 1, 'Black', 4)
console.log(Cat.saySomething())
console.log(cat2)
console.log(cat3)
console.log(cat4)

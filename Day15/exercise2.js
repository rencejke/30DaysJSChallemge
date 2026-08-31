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

class Dog extends Animal {
    constructor(name, age, color, legs, type, sound){
      super(name, age, color, legs)
        this.name = name
        this.age = age
        this.color = color 
        this.legs = 4
        this.type = 'Dog'
        this.sound = 'Bark'
    }
    getAnimalInfo(){
        const info = `This animal name is ${this.name}, it's ${this.age} years old. Its color is ${this.color} and it has ${this.legs} legs`
        return info 
    }
    getAge(){
        return this.age
    }  
    getType(){
        return this.type
    }  
    getSound(){
        return this.sound
    }  
}

class Cat extends Animal {
    constructor(name, age, color, legs, type, sound){
      super(name, age, color, legs)
        this.name = name
        this.age = age
        this.color = color 
        this.legs = 4
        this.type = 'Cat'
        this.sound = 'Meow'
    }
    getAnimalInfo(){
        const info = `This animal name is ${this.name}, it's ${this.age} years old. Its color is ${this.color} and it has ${this.legs} legs`
        return info 
    }
    getAge(){
        return this.age
    }  
    getType(){
        return this.type
    }  
    getSound(){
        return this.sound
    }  
}

 
const dog2 = new Dog('Max', 3, 'Brown')
const dog3 = new Dog('Luna', 2, 'White')
const dog4 = new Dog('Leo', 5, 'Black')
console.log(dog2)
console.log(dog3)
console.log(dog4)


const cat2 = new Cat('Milo', 2, 'Orange')
const cat3 = new Cat('Bella', 4, 'Gray')
const cat4 = new Cat('Coco', 1, 'Black')
console.log(cat2)
console.log(cat3)
console.log(cat4)















































//SETS AND MAPS

//Set
//Set is a collection of elements. Set can only contains unique elements. 

//Creating an empty set

const companies  = new Set()
console.log(companies) //Set(0) {}

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

//Set is an iterable object and we can iterate through each elements.

for(const language of languages)
{
    console.log(language)
}

/*
English
Finnish
French
Spanish
undefined
*/

/* const test = setOfLanguages.forEach(lang => console.log(lang))
console.log(test) */

//adding an element to set

const companies = new Set(); //creat an empty Set
console.log(companies); //Set(0) {}


companies.add('Google');
companies.add('Facebook');
companies.add('Amazon');
companies.add('Oracle');
companies.add('Microsoft');
console.log(companies.size); //5
console.log(companies); //Set(5) { 'Google', 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }


//deleting an element a Set

//We can delete an element from a set using a delete method.

const companies = new Set();

companies.add('Google');
companies.add('Facebook');
companies.add('Amazon');
companies.add('Oracle');
companies.add('Microsoft');

console.log(companies.delete('Google')) //true
companies.delete('Google') //deleted
console.log(companies.size) //4
console.log(companies) // Set(4) { 'Facebook', 'Amazon', 'Oracle', 'Microsoft' }

//clearing the Set
companies.clear()
console.log(companies) //Set(0) {}

//sample use of set

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French']

const langguageSet = new Set(languages)
console.log(langguageSet) //Set(4) { 'English', 'Finnish', 'French', 'Spanish' }
console.log(langguageSet.size) //4

const counts = [] //empty array
const count = {} //empty object


for(const lang of langguageSet)
{   

    //filteredLang go through the original languages array and keep only 
    //that are equal to lang
    //sample the first loop is english, in the original array it shows 3 times
    //so when printed on console.log(filteredLang) it shows  ['English', 'English', 'English']
    //filteredLang.length = 3 because there are 3 english
    //now we add the result to counts sample [{language: 'English', count: 3}]
    //and the loops repeat until all languages in langguageSet have been processed.

    const filteredLang = languages.filter((lng) => lng === lang) 
    console.log(filteredLang)
    counts.push({
        language: lang, 
        count: filteredLang.length
    })
}
console.log(counts)
/*

[
  { language: 'English', count: 3 },
  { language: 'Finnish', count: 1 },
  { language: 'French', count: 2 },
  { language: 'Spanish', count: 1 }
]

*/

//Other use case of set. For instance to count unique item in an array.

const numbers = [5, 3, 2, 5, 5, 9, 4, 5]
const setOfNumbers = new Set(numbers)

console.log(setOfNumbers) //Set(5) { 5, 3, 2, 9, 4 }


//union of sets

//To find a union to two sets can be achieved using spread operator. 
//Lets find the union of set A and set B (A U B)

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let c = [...a, ...b] // [1, 2, 3, 4, 5, 3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C)

//intersection of sets

//To find an intersection of two sets can be achieved using filter.
// Lets find the intersection of set A and set B (A ∩ B)

//intersection of sets are the values that two Sets have in common.
//has() is a Set method that checks whether a specific value exists inside the Set.

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c) 
console.log(C) //Set(3) { 3, 4, 5 }

//Difference of sets

//To find an the difference between two sets can be achieved using filter. 
//Lets find the different of set A and set B (A \ B)


let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

//go through a and keep only the numbers that exist in a
let c = a.filter((num) => !B.has(num)) 
let C = new Set(c)

console.log(C) //Set(2) { 1, 2 }


//Map

//a collection that stores key value pairs
//map = a way to connect a key to a value

//Creating an empty Map

const map = new Map()
console.log(map)

//Creating an Map from array
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

//
const map = new Map(countries)
console.log(map) 
/*

Map(3) {
  'Finland' => 'Helsinki',
  'Sweden' => 'Stockholm',
  'Norway' => 'Oslo'
}

*/
console.log(map.size) //3

//Adding values to the Map()

const countriesMap = new Map()

console.log(countriesMap.size) //0
countriesMap.set('Finland', 'Helsinki')
countriesMap.set('Sweden', 'Stockholm')
countriesMap.set('Norway', 'Oslo')
console.log(countriesMap) //Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(countriesMap.size) //3

//Getting a value from Map

console.log(countriesMap.get('Finland')) //Helsinki


//Getting all values from map using loop
for (const country of countriesMap) {
  console.log(country)
}

for (const [country, city] of countriesMap) {
  console.log(country, city)
}
/*
Finland Helsinki
Sweden Stockholm
Norway Oslo
*/


















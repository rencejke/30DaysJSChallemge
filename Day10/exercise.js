// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']


//1. create an empty set

const numSet = new Set()

//2  Create a set containing 0 to 10 using loop

for(let i = 0; i <= 10; i++)
{
    numSet.add(i)
}

console.log(numSet) // Set(11) { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

//3 Remove an element from a set

numSet.delete(0)
console.log(numSet) //Set(10) { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 }

//4 Clear a set

numSet.clear()
console.log(numSet) //Set(0) {}

//5. Create a set of 5 string elements from array

const fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Grapes']

const fruitsSet = new Set(fruits)
console.log(fruitsSet) //Set(5) { 'Apple', 'Banana', 'Mango', 'Orange', 'Grapes' }


//6 Create a map of countries and number of characters of a country

const countries = ['Philippines', 'Japan', 'South Korea', 'Canada', 'France']

const countryWithCount = []

for(const country of countries)
{
    countryWithCount.push([country, country.length])
}

const countryCountMap = new Map(countryWithCount)
console.log(countryCountMap)
console.log(countryCountMap.size)
/*
Map(5) {
  'Philippines' => 11,
  'Japan' => 5,
  'South Korea' => 11,
  'Canada' => 6,
  'France' => 6
}
5
*/

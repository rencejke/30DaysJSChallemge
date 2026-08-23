//Exercises:Level 3

//Check the speed difference among the following loops: while, for, for of, forEach
const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

console.time('Regular for Loop')
for(let i = 0; i <= fruits.length; i++)
{
   console.log(i)
}
 console.timeEnd('Regular for Loop')


console.time('for of Loop')
for(const fruit of fruits)
{
   console.log(fruit)
}
 console.timeEnd('for of Loop')

console.time('forEach Loop')
fruits.forEach(fruitt => console.log(fruitt))
console.timeEnd('forEach Loop')

/*

0
1
2
3
4
5
Regular for Loop: 0.179931640625 ms
Apple
Banana
Orange
Mango
Grapes
for of Loop: 0.135009765625 ms
Apple
Banana
Orange
Mango
Grapes
forEach Loop: 0.1669921875 ms

*/
//DAY 6 LOOPS

//for loop

/* 

for(initialization, condition, increment/decrement){
  --code here
}
 */

for(let i = 0; i <= 5; i++){
  console.log(i)
}

// 0 1 2 3 4 5

for(let i = 5; i >= 0; i--){
  console.log(i)
}

// 5 4 3 2 1 0

//multiplication
for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}
/*

0 * 0 = 0
1 * 1 = 1
2 * 2 = 4
3 * 3 = 9
4 * 4 = 16
5 * 5 = 25

*/

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
// arrays are 0-based (0 to length - 1)
// so we use i < countries.length to avoid going out of bounds
console.log(newArr)
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]


const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum = sum + numbers[i]  // can be shorten, sum += numbers[i]
}

console.log(sum)  // 15

/*

0 + 1 = 1
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15

*/
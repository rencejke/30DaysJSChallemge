/* 

1.Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

2.Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
Check if 'on' is found in both python and jargon
I hope this course is not full of jargon. Check if jargon is in the sentence.
Generate a random number between 0 and 100 inclusively.
Generate a random number between 50 and 100 inclusively.
Generate a random number between 0 and 255 inclusively.
Access the 'JavaScript' string characters using a random number.
Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/


//1
let quote1 = 'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.'
console.log(quote1)

//2
let quote2 = 'Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.';
console.log(quote2)

//3
let type1 = '10'
let type1ToInt = +type1
let type2 =  10

console.log(typeof type1ToInt == typeof type2)

//4 

let stringToFloat = Math.ceil(parseFloat('9.8')) //9.8 -> 10
let num = 10

console.log(stringToFloat == num) //true

//5 

let word1 = 'python'
let word2 = 'jargon'

console.log(word1.includes('on')) //true
console.log(word2.includes('on')) //true

//6

let txt = 'I hope this course is not full of jargon.'
console.log(txt.includes('jargon')) //true

//7

let randomNum = Math.floor(Math.random() * 101) // 0.999999 * 101 = Math.floor(100.999899) -> 100
console.log(randomNum) //0 - 100

//8

let randomNum50to100 =  Math.floor(Math.random() * 51) + 50 //50 to 100
console.log(randomNum50to100)

//9

let randomNum0to255 = Math.floor(Math.random() * 256) // -> 0 - 255
console.log(randomNum0to255)

//10
let string = 'JavaScript'
let randomNummmStr = Math.floor(Math.random() * string.length + 1) - 1 // 0 to 9
console.lof(string[randomNummmStr])

//11

console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125') 
/*

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125

*/

//12



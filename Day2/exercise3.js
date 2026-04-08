/* Exercises: Level 3
1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

//1
let quote  = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let findWord = quote.match(/love/gi)
console.log(findWord) //[ 'Love', 'love', 'love' ]
console.log(findWord.length) //3

//2
let quote2 = 'You cannot end a sentence with because because because is a conjunction'
let findWord2 = quote2.match(/because/gi)
console.log(findWord2) //[ 'because', 'because', 'because' ]
console.log(findWord2.length) //3

//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let symbols = /[%#@$;&]/g //find all symbols
let staging = sentence.replace(symbols, '') //replace symbols
console.log(staging.replace('30DaysOfJavaScript', '30 Days Of JavaScript')) 

/*

I am a teacher, and I love teaching.
There is nothing as more rewarding as educating and empowering people.
I found teaching more interesting than any other jobs. Does this motivate you to be a teacher!? 
This 30 Days Of JavaScript is also the result of love of teaching

*/

//4
const text2 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let getNumbers = text2.match(/\d+/g) //get all numbers [ '5000', '10000', '15000' ]
let computeAnnualIncome = ((parseInt(getNumbers[0]) + parseInt(getNumbers[2])) * 12) + parseInt(getNumbers[1])  
console.log(computeAnnualIncome) //25000

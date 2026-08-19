//day 12

/*Regular Expresions

Regular Expresions is a programming language that helps to find pattern in a data.
RegExp can be used to check if some patterns exist in diff data types
to use RegExp we use RegExp constructor or we declare  RegExp pattern using two forward 
slashes followed by a flag

To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two
forward slashes and an optional flag. The flag could be g, i, m, s, u or y.

RegExp parameters

A regular expression takes two parameters.
One required search pattern and an optional flag.

Pattern

A pattern could be a text or any form of pattern which some sort of similarity

For example:

The word "spam" in an email.
A phone number format like 0912-345-6789.
An email format like example@gmail.com.



Flags

Flags are optional parameters in a 
regular expression which determine the type of searching.

g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline

*/

//Creating a pattern with RegExp Constructor

//Declaring regular expression without global flag and case insensitive flag.

//without flag
let pattern = 'love'
let regEx = new RegExp(pattern)

//Declaring regular expression with global flag and case insensitive flag.

let pattern = 'love'
let flag = gi 
let regEx = new RegExp(pattern, flag)


//Declaring a regex pattern using RegExp object. 
//Writing the pattern and the flag inside the RegExp constructor

let regEx = new RegExp('love','gi')

//Creating a pattern without RegExp Constructor
//Declaring regular expression with global flag and case insensitive flag.

let regEx = /love/gi

//The above regular expression is the same as the one which 
//we created with RegExp constructor

let regEx= new RegExp('love','gi')

//RegExp Object Methods

//Testing a match

//test(): Tests for a match in a string. It returns true or false.

const str = 'I love JavaScript'
const pattern = /love/
const result = pattern.test(str)

console.log(result) //true

//Array containing all of the match

//match() finds a pattern in a string.
//With the g flag, it returns all matches.
//Without the g flag, it returns the first match plus extra information like index and input.

const str = 'I love JavaScript'
const pattern = /love/
const result = str.match(pattern)

console.log(result) //[ 'love', index: 2, input: 'I love JavaScript', groups: undefined ]

const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)

console.log(result) //["love"]

//search(): Tests for a match in a string. 
//It returns the index of the match, or -1 if the search fails.

const str = 'I love JavaScript'
const pattern =  /love/g
const ressult = str.search(pattern)

console.log(ressult) //2

//Replacing a Substring

//replace(): Executes a search for a match in a string, and replaces
//the matched substring with a replacement substring.

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced)

/* 
JavaScript is the most beautiful language that a human begin has ever created.
I recommend python for a first programming language
*/

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

let matchReplaced = txt.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)

/* 
JavaScript is the most beautiful language that a human begin has ever created.
I recommend JavaScript for a first programming language
*/

const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python/gi, 'JavaScript')
console.log(matchReplaced)

/*
JavaScript is the most beautiful language that a human begin has ever created.
I recommend JavaScript for a first programming language
*/

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

let matches = txt.replace(/%/g, '')
console.log(matches)

/*
I am teacher and  I love teaching.There is nothing as more rewarding 
as educating and empowering people.I found teaching more interesting 
than any other jobs.Does this motivate you to be a teacher.

*/

//Square Bracket

const pattern = '[Aa]pple' // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)
/*

  'Apple',
  index: 0,
  input: 'Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ',
  groups: undefined
]

*/

const pattern = /[Aa]pple/g  // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  //["Apple", "apple"]

//If we want to look for the banana, we write the pattern as follows:

const pattern = /[Aa]pple|[Bb]anana/g
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. Banana is easy to eat too.'
const matches = txt.match(pattern)

console.log(matches) //[ 'Apple', 'banana', 'apple', 'banana', 'Banana' ]

/*
Using the square bracket and or operator ,
we manage to extract Apple, apple, Banana and banana. 
*/

//Escape character(\) in RegExp

const pattern = /\d/g  //// d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt.match(pattern)

console.log(matches) //[ '1', '2', '2', '0', '2', '0' ]

const pattern = /\d+/g  // d is a special character which means digits and + means two or more digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)

console.log(matches)  // ["12", "2020"]

//One or more times(+)

const pattern = /\d+/g  // d is a special character which means digits
const txt = 'This regular expression example was made in January 12,  2020.'
const matches = txt. match(pattern)
console.log(matches)  // ["12", "2020"], this is not what we want

//Period(.)
const pattern = /[a]./g //must find the letter a and .hen match one character after a except new line
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ["an", "an", "an", "a ", "ar"]

const pattern = /[a].+/g  //. any character, + any character one or more times 
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)

console.log(matches)  // ['and banana are fruits']


//Zero or more times(*)

//Zero or many times. The pattern may not occur or it can occur many times.

const pattern = /[a].*/g //find the letter a, .any character, * zero or more of that character, g find all matches
const txt = 'Apple and banana are fruits'
const matches = txt.match(pattern)
console.log(matches) //["and banana are fruits"]














































 //dont mind the errors its just the variables are used multiple times
 
 /*
Write a single line comment which says, comments can make code readable

Write another single comment which says, Welcome to 30DaysOfJavaScript

Write a multiline comment which says, comments can make code readable, easy to reuse and informative

Create a variable.js file and declare variables and assign string, boolean, undefined and null data types

Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable

Declare four variables without assigning values

Declare four variables with assigned values

Declare variables to store your first name, last name, marital status, country and age in multiple lines

Declare variables to store your first name, last name, marital status, country and age in a single line

Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

*/ 

//Answer


1. //comments can make code readable

2. //Welcome to 30DaysOfJavaScript

3. /* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat risus eu vulputate dapibus. Praesent et feugiat sapien. Vivamus libero leo, pharetra sit amet orci id, tempus aliquet ex. Suspendisse molestie tellus sit amet nulla vestibulum aliquam. Proin bibendum, 
enim at vestibulum pretium, ipsum est dapibus ipsum, eget ultricies 
ante sem vitae sapien. Ut hendrerit, nunc a ullamcorper dignissim, arcu nunc rhoncus nunc 
*/ 

//4.
let name = 'Clarence Jake Bonlla'
let isWorking = true;
let age1; //undefined cause there are no data assigned
let savings = null;

//6.
let company
let techStack
let isHiring
let minSalary

//7.
let company = 'Noah Business Application'
let techStack = 'C#, SQL, JS, HTML, CSS'
let isHiring = true
let minSalary = 20000


//8. multiple lines
let fname = 'Clarence Jake'
let lname = 'Bonilla'
let maritalStatus = 'Single'
let country = 'Philippines'
let age =  23


//09 single line

let fname = 'Clarence Jake',  lname = 'Bonilla', maritalStatus = 'Single', country = 'Philippines', age =  23


//10
let myAge = 23
let yourAge  = 30

console.log('I am ' + myAge + ' years old')
console.log('You are ' + yourAge + ' years old')
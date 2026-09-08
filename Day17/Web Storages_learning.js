/*

Day 17 
Web Storage lets a website save data directly in the user's browser using JavaScript.

#1 localStorage
-Data remains after closing the tab.
-Data remains after closing and reopening the browser.
-Data can be shared between tabs/windows of the same website/origin.
-Data is specific to the browser. For example, data saved in Chrome isn't automatically available in Firefox.

#2 sessionStorage

-Data is available while the tab is open.
-When you close the tab/window, the stored data is removed.
-It is useful for temporary data that you don't need to keep permanently.

# Web Storage vs Cookies

-Cookies usually have a small limit (around 4 KB).
-Web Storage can store much more data (at least around 5 MB, depending on the browser).
-Web Storage data is not automatically sent to the server with every request like cookies can be.
-Web Storage is accessed through JavaScript.

Important Rules:
Both localStorage and sessionStorage store data as:

key → value

And both the key and value are always strings.

For example, conceptually:
"name" → "Rence"
"age"  → "25"

localStorage = stays locally
sessionStorage = stays for the session

# Use Cases of Web Storage

Web Storage is useful when you want a website to remember information 
in the user's browser without sending it to the server every time.

#Common Uses

#Web Storage can be used for:

-Saving shopping cart items
-Saving user preferences
-Temporarily storing data
-Making some data available offline
-Reducing requests to the server by keeping some data in the browser
-Keeping data between page refreshes or browser sessions

When to use which?

Use localStorage when: I want this data to still exist later.
Use sessionStorage when: I only need this data while this tab is open.

#HTML5 Web Storage Objects — Simplified

Web Storage gives JavaScript two objects that can store data in the user's browser:

window.localStorage → stores data permanently until you remove it.
window.sessionStorage → stores data only for the current session/tab.

You can usually write localStorage instead of window.localStorage because window is the global object in the browser.

Main localStorage methods

Method	        What it does
localStorage	  Lets you access the local storage
setItem()	      Saves data
getItem()	      Gets saved data
removeItem()	  Removes one saved item
clear()	          Removes everything
key()	          Gets a key using its index

#Setting Items in localStorage 

When you save something using localStorage, the value is always stored as a string.

You use:
localStorage.setItem(key, value)

For example, if you want to save a name:
localStorage.setItem('name', 'Rence')

Now localStorage contains:
name → "Rence"
*/

//Storing string in a localStorage 

localStorage.setItem('firstName', 'Asabeneh') // since the value is string we do not stringify it
console.log(localStorage) //Storage {firstName: 'Asabeneh', length: 1}

//Storing number in a local storage

localStorage.setItem('age', 200)
console.log(localStorage)


/* 
#What if you want to store an array or object?

This is important because arrays and objects aren't stored in their original structure automatically.
You should convert them to a JSON string using JSON.stringify() before storing them.

For example:

*/
const skills = ['HTML', 'CSS', 'JS', 'React'] //Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)

localStorage.setItem('skills', skillsJSON)
console.log(localStorage) //Storage {age: '200', firstName: 'Asabeneh', skills: 'HTML,CSS,JS,React', length: 3}


let skills2 = [
  { tech: 'HTML', level: 10 },
  { tech: 'CSS', level: 9 },
  { tech: 'JS', level: 8 },
  { tech: 'React', level: 9 },
  { tech: 'Redux', level: 10 },
  { tech: 'Node', level: 8 },
  { tech: 'MongoDB', level: 8 }
]

let skillJSON = JSON.stringify(skills2)
localStorage.setItem('skills2', skillJSON)
console.log(localStorage)


//Getting item from localStorage

//We get data from the local storage using localStorage.getItem() method.

let firstName = localStorage.getItem('firstName')
let age = localStorage.getItem('age')
//let skills = localStorage.getItem('skills') key and variable name should be unique 
let skillsx = localStorage.getItem('skills')
console.log(firstName, age, skillsx)


//As you can see the skill is in a string format. Let us use JSON.parse() to parse it to normal array.

let skillsz = localStorage.getItem('skills')
let skillsObj = JSON.parse(skillsz, undefined, 4)
console.log(skillsObj) //['HTML','CSS','JS','React']

//Clearing the localStorage

//The clear method, will clear everything stored in the local storage

localStorage.clear()





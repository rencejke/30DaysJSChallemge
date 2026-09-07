/*
JSON (JavaScript Object Notation) is a simple format for storing and sending data.

-It looks similar to a JavaScript object.
-But JSON is text/string data.
-It's commonly used to send data between a server and a website/app.
-It's lightweight and easier to use than XML.

*/

{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}

/*
JSON vs JavaScript Object

-JSON and JavaScript objects look very similar, but there is one major difference.
-In JSON, all keys must be written with double quotes. For example: "name": "John".
-In a JavaScript object, keys do not need double quotes. For example: name: "John".
-JSON is mainly used for storing and transferring data, especially between a server and a website or application.
-JavaScript objects are used directly within JavaScript code.
-We can convert an object to JSON using JSON.stringify() and convert JSON back to an object using JSON.parse().

*/

/*
Converting JSON to JavaScript Object 

-JSON.parse() is used to convert JSON into a JavaScript object.
-JSON.stringify() is used to convert a JavaScript object into JSON.
-JSON data often comes from a server, API, or file.
-We can also store JSON as a string and convert it into an object for use in JavaScript.

Easy way to remember:

JSON.parse() → JSON → Object
JSON.stringify() → Object → JSON

*/

//JSON.parse()

//JSON.parse(json[, reviver])

// json or text , the data
// reviver is an optional callback function
/* JSON.parse(json, (key, value) => {

})
*/

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, undefined)
console.log(usersObj)

/*
{
  users: [
    {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      age: 250,
      email: 'asab@asb.com'
    },
    {
      firstName: 'Alex',
      lastName: 'James',
      age: 25,
      email: 'alex@alex.com'
    },
    {
      firstName: 'Lidiya',
      lastName: 'Tekle',
      age: 28,
      email: 'lidiya@lidiya.com'
    }
  ]
}

*/ 

const usersText = `{
"users":[
  {
    "firstName":"Asabeneh",
    "lastName":"Yetayeh",
    "age":250,
    "email":"asab@asb.com"
  },
  {
    "firstName":"Alex",
    "lastName":"James",
    "age":25,
    "email":"alex@alex.com"
  },
  {
  "firstName":"Lidiya",
  "lastName":"Tekle",
  "age":28,
  "email":"lidiya@lidiya.com"
  }
]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
  let newValue =
    typeof value === 'string' && key != 'email' ? value.toUpperCase() : value
  return newValue
})
console.log(usersObj)

/*
{
  users: [
    {
      firstName: 'ASABENEH',
      lastName: 'YETAYEH',
      age: 250,
      email: 'asab@asb.com'
    },
    {
      firstName: 'ALEX',
      lastName: 'JAMES',
      age: 25,
      email: 'alex@alex.com'
    },
    {
      firstName: 'LIDIYA',
      lastName: 'TEKLE',
      age: 28,
      email: 'lidiya@lidiya.com'
    }
  ]
}
  
*/

/* Converting Object to JSON

We use JSON.stringify() to convert a JavaScript object into JSON.

It has 1 required parameter and 2 optional parameters:

-replacer → filters which properties to include
-space → adds indentation to make the JSON easier to read
-Use undefined for the replacer if you don't want to filter anything.

JSON.stringify(obj, replacer, space)
// json or text , the data
// reviver is an optional callback function

*/

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Redux',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'MongoDB',
      'Express',
      'React',
      'Node'
    ],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const txt = JSON.stringify(users, undefined, 4)
console.log(txt) 

// text means JSON- because json is a string form of an object.
//convert object to json with 4 indentions for easier reading
//undefined for the replacer because i dont want to filter anything.


/*
Using a Filter Array with JSON.stringify()

-The replacer can be an array used to choose which properties to keep.

-Simply put the keys you want to keep in an array and pass that array as the replacer.

ex: JSON.stringify(user, ['name', 'age', 'country'])

This will include only name, age, and country in the JSON output.


*/


const user = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  country: 'Finland',
  city: 'Helsinki',
  email: 'alex@alex.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age: 250,
  isLoggedIn: false,
  points: 30
}

const txt = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(txt)

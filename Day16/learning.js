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
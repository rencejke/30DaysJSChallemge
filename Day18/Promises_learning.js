/*
Promise 

A Promise is used in JavaScript to handle
something that will finish later, usually an asynchronous operation.

Think of it like making a promise to someone:
“I promise I will do this later.”

You don't get the result immediately. You wait until the task is finished.

A Promise has 3 states:
-- Pending → The task is still ongoing.
-- Fulfilled → The task finished successfully.
-- Rejected → The task failed.

For example:

   Promise
      ↓
   Pending
      ↓
 ┌───────────┐
 ↓           ↓
Fulfilled   Rejected
(success)   (failed)

.then() and .catch()
-- .then() → runs when the Promise is successful.
-- .catch() → runs when the Promise fails.

Example idea:

"Get data from a server"
        ↓
     Promise
        ↓
   ┌────┴────┐
 success     failed
    ↓           ↓
 .then()     .catch()

 Promises can also be chained because .then() and .catch() themselves return another Promise.

 A Promise is JavaScript's way of saying
"I don't have the result yet, but I'll give you the result later—either successfully or with an error.

*/

/*

CALLBACKS

A callback is a function that is passed to another function and is called later, usually after an operation is finished.

In this example, the callback has two parameters:

callback(err, result)
err → tells us whether an error happened.
result → contains the result if the operation was successful.

Think of it like:

Operation starts
      ↓
Operation finishes
      ↓
callback(err, result)
      ↓
 ┌────┴─────┐
 ↓          ↓
No error   Error
 ↓          ↓
result     err

If err is false (or there is no error), we use the result.
If err contains an error, we handle the error instead.

A callback is a function that says, "When you're finished, call me and tell me whether it succeeded or failed."
*/

const doSomething = callback => {
    setTimeout(()=>{
        const skills = ['HTML', 'CSS', 'JS']
        callback('It did not go well', skills)
    }, 2000)
}

const callback = (err, result) =>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
}

doSomething(callback) 
// after 2 seconds it will print
//It did not go well

//In this case the err is false and it will return the else block which is the result.

const doSomethings = callback => {
  setTimeout(() => {
    const skills = ['HTML', 'CSS', 'JS']
    callback(false, skills)
  }, 2000)
}

doSomethings((err, result) => {
  if (err) {
    return console.log(err)
  }
  return console.log(result)
}) //['HTML', 'CSS', 'JS']

/*
Promise Constructor 

You can create a Promise using the Promise constructor:

-Use the new keyword
-Write Promise()
-Inside it, put a callback function
-The callback function has two parameters:
-resolve → when the operation succeeds
-reject → when the operation fails


A Promise is created using new Promise(), and it gives you resolve and reject to
tell JavaScript whether the operation succeeded or failed.

*/

//syntax
const promise = new Promise((resolve, reject) =>{
    resolve('success')
    reject('failure')
})

const doPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>
    {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.length > 0){
            resolve(skills)
        }else{
            reject('Something wrong has happened')
        }
    }, 2000)
})

doPromise.then(result =>
{
    console.log(result)
    
}).catch(error => console.log(error))

/*
The above promise has been settled with resolve. 
Let us another example when the promise is settled with reject.
*/

const doPromised = new Promise((resolve, reject) =>{
    setTimeout(()=>
    {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.includes('Node')){
            resolve('fullstack developer')
        } else{
            reject('Something has happened')
        }
    }, 2000)
})

doPromised.then(result =>
{
    console.log(result)
}).catch(error => console.log(error))

/*
Fetch API 

The Fetch API is used to get data from the internet, such as from a website or API.

In simple terms:

Fetch API = a way for JavaScript to request data from a URL or API.
It also works with Promises, because fetching data takes time.

For example:
JavaScript → Fetch API → Request API → Wait → Receive data
So when learning Fetch API, you're also learning how Promises handle asynchronous network requests.

*/

const url = 'https://restcountries.com/v2/all'

fetch(url)
.then(response => response.json()) //accessing data as JSON
.then(data =>
{
    //gettting the data
    console.log(data)
    
}).catch(error=> console.error(error))


/*
Async and Await

async and await are an easier and cleaner way to work with Promises.

async → tells JavaScript that a function works with Promises.
await → waits for a Promise to finish before continuing.


Async/await = a cleaner way to handle Promises and asynchronous code.
Instead of using .then() and .catch() everywhere, async/await can make the 
code look more like normal step-by-step code.

*async* before a function means the function always returns a Promise, even if you return a normal value.
*await* is used to get the value from the Promise.
*await* makes JavaScript wait for the Promise to finish before continuing.

async → makes the function return a Promise
await → gets the result/value from that Promise

async = "This function uses a Promise."
await = "Wait for the Promise and give me its result."

*/

const square = async function(n){
    return n * n 
}
square(2) //Promise {<fulfilled>: 4}

const square2 = async function(n)
{
    return n * n 
}
const value = await square2(2)
console.log(value) //4

/*

Writing *async* before a function makes it return a Promise.
To get the value from that Promise, we use *await*.

async → makes a function return a Promise.
await → waits for the Promise and gets its value.
They are commonly used together to handle Promises more easily.

async and await don't strictly have to exist together.
An async function can exist without await. But await is normally used inside an async function.

*/

//promise

const urls = 'https://restcountries.com/v2/all'

fetch(urls)
.then(response => response.json()) //accessing data as json 
.then(data =>{
    console.log(data) //display the data 
})
.catch(error => console.error(error))


//async and await

const fetchData = async () =>{
    try{
        const response = await fetch(urls)
        const countries = await response.json()
        console.log(countries)
    }catch(e)
    {
        console.log(e.name)
        console.log(e.message)

    }
}

fetchData()



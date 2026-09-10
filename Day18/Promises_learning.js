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

In short:
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


/* Closure

JavaScript allows writing function inside an outer function. We can write as many inner
functions as we want. If inner function access the variables of outer function then it is called closure.

simple idea:
Inner function remembers the variables from its outer function.

 */

function outerFunction() {
    let count = 0;
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc()) //1
console.log(innerFunc()) //2
console.log(innerFunc()) //3


function outer() {
    let name = "Rence"

    function inner() {
        console.log(name)
    }

    inner()
}

outer() //rence

//ex #2

function outerFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = outerFunction()

console.log(innerFuncs.plusOne) //1
console.log(innerFuncs.minusOne) //0
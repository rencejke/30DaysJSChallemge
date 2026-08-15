//Find a union b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]

const C = new Set(c)
console.log(C) //Set(6) { 4, 5, 8, 9, 3, 7 }


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]


const A = new Set(a)
const B = new Set(b)
const C = a.filter(intSect =>  B.has(intSect))

console.log(C) //[4, 5]


const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]

//Find a with b

const A = new Set(a)
const B = new Set(b)
const C = a.filter(intSect =>  !B.has(intSect))

console.log(C) //[ 8, 9 ]




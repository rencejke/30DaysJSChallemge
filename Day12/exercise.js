//1 Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 
//10000 euro annual bonus, 5500 euro online courses per month.’

const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const digits = /\d+/g
const result = text.match(digits)
const transFormToInt = result.map(num => Number(num))
const computeTotalAnnualIncome = (transFormToInt[0] * 12) + (transFormToInt[2] * 12) + transFormToInt[1]
console.log(computeTotalAnnualIncome)

const txt2 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'

const pattern = /-?\d+/g 
const results = txt2.match(pattern) 
const transFormAndSorted = results.map(num => Number(num)).sort((a, b) => a-b)


let smallNumber = 0
let bigNumber = 0
for(let i = 0; i < transFormAndSorted.length; i++)
{

    if(transFormAndSorted[i] <= smallNumber)
    {
        smallNumber = transFormAndSorted[i]
    }

     if(transFormAndSorted[i] >= bigNumber){
        bigNumber = transFormAndSorted[i]
    }

}

let distance = bigNumber - smallNumber

console.log(distance) //20


//13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

const evensAndOdds = (num) => {

    let countOdd = 0;
    let countEven = 0;
    
    if(num < 0) {

        return 'Negative number'
        
     } else {
        
        for(let i = 0; i <= num; i++) {

            if(i % 2 === 0)
            {
                countEven++
            }
            else
            {
                countOdd++
            }
        }
        
    }
    return `The number of odds are ${countOdd}\nThe number of evens are ${countEven}`
}

console.log(evensAndOdds(100))
/* 
   The number of odds are 50
   The number of evens are 51 
*/

//14 Write a function which takes any number of arguments and return the sum of the arguments
const sumOfNumbers = (...args)=>{
    let sum = 0;

    for(let i = 0; i < args.length; i++)
    {
        sum+=args[i]
    }

    return sum

}

console.log(sumOfNumbers(1, 2, 3)) //6
console.log(sumOfNumbers(1, 2, 3, 4)) //10

//15 Write a function which generates a randomUserIp.

const randomUserIp = () =>
{
    let arr = []
    let countLength = 4

    for(let i = 0; i < countLength; i++)
    {
        let random = Math.floor(Math.random() * 256)
        arr.push(random)
    }

    return arr.join('.')

}
console.log(randomUserIp())

//16 Write a function which generates a randomMacAddress

const randomMacAddress = () =>{

     let characters = '0123456789ABCDEF'
     characters = characters.split('')

     let arr = []
     let length = 6
   
     for(let i = 0; i < length; i++)
     {
       
        let random = Math.floor(Math.random() * characters.length)
       
               let arr2 = []
               let random2 = Math.floor(Math.random() * characters.length)
               arr2.push(characters[random])
               arr2.push(characters[random2])

               arr.push(arr2.join(''))  //turn array of array into [A, F] to ['AF']
     }
     
return arr.join(':') //[ '80', 'FC', 'D1', '46', '3E', '5D' ] to DA:1B:A1:7F:67:B4
}
console.log(randomMacAddress()) //85:6B:5B:FE:80:A3
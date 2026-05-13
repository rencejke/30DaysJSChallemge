//1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = (a, x, b, y, c) =>{
    return (a * x) + (b * y) + c
}
console.log(solveLinEquation(1, 2, 3, 4, 5))

/* 2 Quadratic equation is calculated as 
follows: ax2 + bx + c = 0. Write a function which calculates
value or values of a quadratic equation, solveQuadEquation */

const solveQuadEquation = (a, b, c) =>
{
    //formula
    // x = (-b ± √(b² - 4ac)) / (2a)

    let x1 =(-b + Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)
    let x2 = (-b - Math.sqrt((b ** 2) - 4 * a * c)) / (2 * a)

    return `{${x1}, ${x2}}`
}
console.log(solveQuadratic(1, -1, -2))

//3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

const printArray = (arr) => {
    
    for(const newArr of arr)
    {
        console.log(newArr)
    }
}
printArray([3, 7, 12, 5, 9])

//4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

const showDateTime = () =>{
    
    const date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let year = date.getFullYear()

    let hour = date.getHours()
    let minutes = date.getMinutes()

    //format - 08/01/2020 04:08
    console.log(`${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/ ${year} ${hour < 10 ? '0' + hour : hour}:${minutes < 10 ? '0' + minutes : minutes}`)
    
}

//5
const swapValues = (x, y) => {
    
    let arr  = []
    let reverse = ''
    arr.push(x)
    arr.push(y)
    
    arr.reverse()
    
    reverse= arr.join(',')
    
    console.log(reverse) 
    
}

swapValues(3, 4) 

//6
//Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).


const reverseArray = (arr) => {
    
    let reverseArr = []
    
    for(let i = 0; i < arr.length; i++)
    {
        reverseArr.unshift(arr[i])
    }
    
    return reverseArr
}

console.log(reverseArray([1, 2, 3, 4, 5]))  //[5, 4, 3, 2, 1]


const reverseArray = (arr) => {
    
    let reverseArr = []
    
    for(let i = arr.length - 1; i  >=0; i--)
    {
        reverseArr.push(arr[i])
    }
    
    return reverseArr
}

console.log(reverseArray([1, 2, 3, 4, 5])) //[5, 4, 3, 2, 1]

//7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

const capitalizeArray = (arr) =>
{
    let capitizeArr = []
    for(const capArr of arr)
    {
       capitizeArr.push(capArr.toUpperCase())
    }

    return capitizeArr
    
}
console.log(capitalizeArray(["apple", "banana", "orange", "mango", "grapes"]))

//8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

const addItem = (item) =>
{
    const tech = ["AI", "Blockchain", "Cloud Computing", "Cybersecurity", "Web Development"];
    
    tech.push(item)
    
    return tech
}

console.log(addItem('Automation'))

//9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

const removeItem = (index) =>
{
    const tech = ["AI", "Blockchain", "Cloud Computing", "Cybersecurity", "Web Development"];
    let arr2 = []
    
    for(let i = 0; i < tech.length; i++)
    {
        
        if(i != index)
        {
            arr2.push(tech[i])
        }else
        {
            continue;
        }
        
    }
    return arr2
 
}

console.log(removeItem(0))

//10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
const sumOfNumbers = (number) =>
{
    let sum = 0
    for(let i = 0; i <= number; i++)
    {
        sum+=i
    }
    
    return sum
}

console.log(sumOfNumbers(10))

//11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
const sumOfOdd = (number) =>
{
    let sum = 0
    for(let i = 0; i <= number; i++)
    {
        if(i % 2 != 0)
        {
            sum+=i
        }
        else
        {
            continue
        }
    }
    
    return sum
}

console.log(sumOfOdd(10))



//12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
const sumOfEven = (number) =>
{
    let sum = 0
    for(let i = 0; i <= number; i++)
    {
        if(i % 2 === 0)
        {
            sum+=i
        }
        else
        {
            continue
        }
    }
    
    return sum
}

console.log(sumOfEven(10))



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
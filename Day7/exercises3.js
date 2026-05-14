// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the 
// number of characters and the second input
// is the number of ids which are supposed to be generated.


const userIdGeneratedByUser = () =>
{
    
    let numberOfCharacters = Number(prompt('Enter the number of characters'))
    let numberOfGeneratedIds = Number( prompt('Enter how many ids you want to generate'))
    let text = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    
    let length = numberOfCharacters
    let result = ''

    for(let i = 0; i < numberOfGeneratedIds; i++) {
        let id = ''
        for(let j = 0; j < length; j++) {
            let random = Math.floor(Math.random() * text.length)
            id+=text[random] 
      }
      result += id + '\n'
    }
    return result.trim()
}

console.log(userIdGeneratedByUser())

//2 Write a function name rgbColorGenerator and it generates rgb colors.

const rgbColorGenerator = () =>
{
    let arr = []

    for(let i = 0; i < 3; i++)
    {
        let random = Math.floor(Math.random() * 256)
        arr.push(random)
    }

   return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`
}
console.log(rgbColorGenerator()) //rgb(37, 213, 143)



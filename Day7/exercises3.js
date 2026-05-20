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

//3 Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

const arrayOfHexaColors = (number) =>
{
     let text = '0123456789ABCDEF'
     let numberOfHexCharacteers = prompt('Enter the number of hex you want to geneerate')
     let length = 6
     let result = '#'
     let arr = []

     for(let i = 0; i < numberOfHexCharacteers; i++)
     {
         for(let j = 0; j < length; j++) {
            let random = Math.floor(Math.random() * text.length)
            if(result.length != 7) {
                result+=text[random]
            }
         }
            arr.push(result)
            result = '#'
         
     }
    return arr
}
console.log(arrayOfHexaColors())

//4 Write a function arrayOfRgbColors which return any number of RGB colors in an array.
const rgbColorGenerator = (number) =>
{
    let arr = []

    for(let i = 0; i < number; i++)
    {
       let arr2 = []  
       for(let j = 0; j < 3; j++)
       {
         let random = Math.floor(Math.random() * 256)
         arr2.push(random)
        }
        arr.push(`(${arr2[0]}, ${arr2[1]}, ${arr2[2]})`)
}

   return arr
}
console.log(rgbColorGenerator(5)) 
/* 

[
  '(75, 226, 48)',
  '(237, 202, 23)',
  '(127, 150, 65)',
  '(35, 169, 182)',
  '(246, 225, 231)'
]

*/

// 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

const convertHexaToRgb = (hex) =>
{
    let text = '0123456789ABCDEF'
    let red = hex.substr(1, 2).split('')
    let green = hex.substr(3, 2).split('')
    let blue = hex.substr(5, 2).split('')
    
    let redCompute = text.indexOf(red[0])  * 16  + text.indexOf(red[1])
    let  greenCompute = text.indexOf(green[0])  * 16  + text.indexOf(green[1])
    let blueCompute = text.indexOf(blue[0])  * 16  + text.indexOf(blue[1])

    
    return`rgb(${redCompute}, ${greenCompute},  ${blueCompute})`
    
} 

console.log(convertHexaToRgb('#FF5733'))



//6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

const convertRgbToHexa = (hex) =>
{
    let getRgbNumbers = hex.match(/\d+/g)
    let text = '0123456789ABCDEF'
    
    let red = Number(getRgbNumbers[0])
    let green = Number(getRgbNumbers[1])
    let blue = Number(getRgbNumbers[2])

    let computeRedPartOne = Math.floor(red / 16)
    let computeRedPartTwo = red - (16 * computeRedPartOne)

    let computeGreenPartOne = Math.floor(green / 16)
    let computeGreenPartTwo = green - (16 * computeGreenPartOne)
    
    let computeBluePartOne = Math.floor(blue / 16)
    let computeBluePartTwo = blue - (16 * computeBluePartOne)
    
    let redPair = text[computeRedPartOne] + text[computeRedPartTwo] 
    let greenPair = text[computeGreenPartOne]  + text[computeGreenPartTwo] 
    let bluePair = text[computeBluePartOne]  + text[computeBluePartTwo] 


    return `#${redPair}${greenPair}${bluePair}`
    
} 

console.log(convertRgbToHexa('rgb(255, 87, 51)'))

//7 Write a function generateColors which can generate any number of hexa or rgb colors.

const generateColors = (type, colorToGenerate) =>
{
    if(type == 'rgb')
    {
     let arr = []
    for(let i = 0; i < colorToGenerate; i++)
    {
       let arr2 = []  
       for(let j = 0; j < 3; j++)
       {
         let random = Math.floor(Math.random() * 256)
         arr2.push(random)
        }
        arr.push(`rgb(${arr2[0]}, ${arr2[1]}, ${arr2[2]})`)
    }
        return arr
    } else if(type == 'hexa')
     {
        let text = '0123456789ABCDEF'
        let length = 6
        let result = '#'
        let arr = []
        
        for(let i = 0; i < colorToGenerate; i++)
        {
            for(let j = 0; j < length; j++) {
            let random = Math.floor(Math.random() * text.length)
            if(result.length != 7) {
                result+=text[random]
            }
         }
            arr.push(result)
            result = '#'
         
     }
    return arr
} else{
    return 'Invalid Color Request'
}
    
}

console.log(generateColors('hexax', 3)) 
    
   

   

    
   











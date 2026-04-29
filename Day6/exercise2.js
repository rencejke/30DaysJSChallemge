
//Develop a small script which generate any number of characters random id:

let text = 'abcdefghijklmnopqrstuvwxyz12345678910'.split('')
let characterId = ''

for(let i = 0; i < 6; i++)
{
    let random = Math.floor(Math.random() * text.length)
    characterId+=text[random]
 
}  
console.log(characterId) //bazs37
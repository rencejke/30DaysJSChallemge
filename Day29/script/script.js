const textLineOne = document.querySelector('.text-line-one');
const textLineTwo = document.querySelector('.text-line-two');
const textLineThree = document.querySelector('.text-line-three');
const textLineFour = document.querySelector('.text-line-four');
const wrapper = document.querySelector('.wrapper');

const textOneArray = textLineOne.textContent.split('');
const textTwoArray = textLineTwo.textContent.split('');
const textThreeArray = textLineThree.textContent.split('');
const textFourArray = textLineFour.textContent.split('');

const colors = [
  '#df5080', '#21d99b', '#e5e936', '#9b59b6',
  '#f1c40f', '#2ecc71', '#3498db', '#e67e22',
  '#1abc9c', '#95a5a6', '#ff6b6b', '#a3cb38',
  '#6c5ce7', '#fd79a8', '#00cec9', '#b2bec3'
];

const fonts = [
  'Poppins', 'Nanum Gothic', 'Average Sans',
  'Encode Sans Semi Expanded', 'Alata'
];

const animations = [
  'fadeInUp',
  'fadeInDown',
  'fadeInLeft',
  'fadeInRight',
  'zoomIn'
];

let lastColorIndex = -1;
let lastFontIndex = -1;
let lastAnimationIndex = -1;

const getRandomColor = () =>{
let randomColor;

    do{
        randomColor = Math.floor(Math.random() * colors.length);
    } while(randomColor === lastColorIndex)
        
    lastColorIndex = randomColor

    return randomColor;
    
}   

const getRandomFonts = () =>{
let randomFonts;
    do{
        randomFonts = Math.floor(Math.random() * fonts.length);
    } while(randomFonts === lastFontIndex)
        
    lastFontIndex = randomFonts

    return randomFonts;
    
}   

const getRandomAnimation = () =>{
let randomAnimation;
    do{
        randomAnimation = Math.floor(Math.random() * animations.length);
    } while(randomAnimation === lastAnimationIndex)
        
    lastAnimationIndex = randomAnimation

    return randomAnimation;
    
}   

const createLetters = (element, arrayLetters) =>{

    element.textContent = '';
    for(let i = 0; i < arrayLetters.length; i++){

    const resultColor = getRandomColor();
    const letters = document.createElement('span');
    
    letters.textContent = arrayLetters[i];
    letters.style.color = colors[resultColor];
    // element.style.animation = `${animations[getRandomAnimation()]} 1s ${i * 100}ms  ease-in-out`;
    element.appendChild(letters);
    
}}

createLetters(textLineOne, textOneArray);
createLetters(textLineTwo, textTwoArray);
createLetters(textLineThree, textThreeArray);
createLetters(textLineFour, textFourArray);

const resultFont = getRandomFonts();
wrapper.style.fontFamily = `"${fonts[resultFont]}", sans-serif`;
wrapper.style.backgroundColor = colors[getRandomColor()];











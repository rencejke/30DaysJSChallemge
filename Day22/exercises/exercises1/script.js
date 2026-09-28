let title = document.createElement('h1')
let subTitle = document.createElement('h2')
let author = document.createElement('h3')
let body = document.querySelector('body')


body.style.width='80%'
body.style.margin='auto'


document.body.appendChild(title)
title.textContent = 'Number Generator'
title.style.textAlign = 'center'

document.body.appendChild(subTitle)
subTitle.textContent = '30DaysOfJavaScript:DOM Day 2'
subTitle.style.textDecoration = 'underline'
subTitle.style.fontWeight = 'normal'
subTitle.style.textAlign = 'center'

document.body.appendChild(author)
author.textContent = 'Author: Asabeneh Yetayeh'
author.style.textDecoration = 'underline'
author.style.fontWeight = 'normal'
author.style.textAlign = 'center'

for(let i = 0; i <= 100; i++){
    let numbers = document.createElement('p')
    document.body.appendChild(numbers)
    numbers.textContent = i
    numbers.style.display = 'inline-block'
    numbers.style.boxSizing = 'border-box'
    numbers.style.paddingLeft = '48px'
    numbers.style.paddingRight = '48px'
    numbers.style.paddingTop = '25px'
    numbers.style.paddingBottom = '25px'
    numbers.style.color = 'white'
    numbers.style.margin = '2px'
    numbers.style.fontSize = '20px'
    numbers.style.fontFamily = 'Verdana, Helvetica, sans-serif'

    if(i < 10)
    {
        numbers.style.paddingLeft = '54.5px'
        numbers.style.paddingRight = '54.5px'
    } else if(i > 99)
    {
        numbers.style.paddingRight = '40px'
    }
}

   const paraNumbers = document.querySelectorAll('p')
   let isPrime;

    for(let j = 0; j < paraNumbers.length; j++)
    {
    
        j < 2 ? isPrime = false : isPrime = true
        

        if(j % 2 === 0) {
            paraNumbers[j].style.backgroundColor = 'green'
        }else if(isPrime)
        {
             paraNumbers[j].style.backgroundColor = 'yellow'
        }
        else{
            paraNumbers[j].style.backgroundColor = 'red'
        }
}
const wrapper = document.querySelector('.wrapper')
const heading1 = document.querySelector('h1')
const heading2 = document.querySelector('h2')
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')

ul.style.width = '35%'
ul.style.margin = 'auto'

const getCurrentDate = ()  =>{

const date = new Date()
const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

const currentMonth = date.getMonth()
const currentYear = date.getFullYear()
const currentDay = date.getDate()
const currentHours = date.getHours()
const currentMinutes = date.getMinutes()
const currentSeconds = date.getSeconds()

let formattedDate = `${months[currentMonth] + ' ' + currentDay + ', ' + currentYear} ${currentHours < 10 ? '0' + currentHours : currentHours}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}:${currentSeconds}`

return {
    date: formattedDate,
    year: currentYear
}
}

const getRandomColor = () =>{
    const colors = [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'purple',
        'pink',
        'cyan',
        'magenta',
        'lime',
        'teal',
        'navy',
        'brown',
        'gray',
        'gold'
    ]

    const randomColor = Math.floor(Math.random() * (colors.length))

    return colors[randomColor]
    
}

setInterval(() => { //call random color evey 1 seconds
   const headingOneSpan = document.querySelector('h1 span')
   headingOneSpan.style.color = `${getRandomColor()}`
   headingOneSpan.style.fontSize = '50px'

}, 1000)


setInterval(() => { //call date evey 1 seconds
   heading2.innerHTML = `
    <span>30DaysOfJavaScript Challenge</span> 
    <br> 
    <span>${getCurrentDate().date}</span>`

     const headingTwoSpan = document.querySelectorAll('h2 span')
     
     headingTwoSpan[0].style.fontWeight = '100'
     headingTwoSpan[0].style.fontSize = '15px'
     headingTwoSpan[0].style.textDecoration = 'underline'

    
     headingTwoSpan[1].style.textDecoration = 'none'
     headingTwoSpan[1].style.display = 'inline-block'
     headingTwoSpan[1].style.fontWeight = '300'
     headingTwoSpan[1].style.marginTop = '15px'
     headingTwoSpan[1].style.fontSize = '15px'
     headingTwoSpan[1].style.backgroundColor = 'green'
     headingTwoSpan[1].style.padding = '10px'
     

}, 1000)




heading1.innerHTML = `Asabeneh Yetayeh challenges in <span>${getCurrentDate().year}</span>`

wrapper.style.textAlign ='center'
wrapper.style.fontFamily = 'Arial, Helvetica, sans-serif'

for(let i = 0; i < lists.length; i++)
{
    lists[i].style.textAlign = 'left'
    lists[i].style.boxSizing = 'border-box'
    lists[i].style.paddingLeft = '20px'
    lists[i].style.paddingTop = '25px'
    lists[i].style.paddingBottom = '20px'
    lists[i].style.marginTop = '5px'

    if(i === 0){
        lists[i].style.backgroundColor = 'green'
    }else if(i === 1){
        lists[i].style.backgroundColor = 'yellow'
    }else{
        lists[i].style.backgroundColor = '#EE4B2B'
    }
    

}











const wrapper = document.querySelector('.wrapper')
const heading1 = document.querySelector('h1')
const heading2 = document.querySelector('h2')

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


setInterval(() => { //call date evey 1 seconds
   heading2.innerHTML = `30DaysOfJavaScript Challenge
    <h3>${getCurrentDate().date}</h3>`
}, 1000)

heading1.innerHTML = `Asabeneh Yetayeh challenges in <span>${getCurrentDate().year}</span>`

setInterval(() => { //call random color evey 1 seconds
   const headingOneSpan = document.querySelector('span')
   headingOneSpan.style.color = `${getRandomColor()}`
}, 1000)

wrapper.style.textAlign ='center'
wrapper.style.fontFamily = 'Arial, Helvetica, sans-serif'

heading2.style.fontWeight = '100'
heading2.style.fontSize = '15px'
heading2.style.textDecoration = 'underline'







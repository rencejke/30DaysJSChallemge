let authorHeader = document.createElement('h1')
let subHeader = document.createElement('h3')
let timeDateHeader = document.createElement('h4')
let body = document.querySelector('body')
let container = document.createElement('div')
let unlisted = document.createElement('ul')

body.style.width = '80%'
body.style.margin = 'auto'

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

document.body.appendChild(authorHeader)
authorHeader.textContent = `Asabeneh Yetayeh challenges`
authorHeader.style.textAlign = 'center'

document.body.appendChild(subHeader)
subHeader.textContent = '30DaysofJavaScript Challenges'
subHeader.style.textAlign = 'center'
subHeader.style.fontWeight = 'normal'
subHeader.style.textDecoration = 'underline'


setInterval(() => { //call random color evey 1 seconds
   const headingYear = document.querySelector('h1')
   headingYear.innerHTML = `30DaysofJavaScript Challenges <span>${getCurrentDate().year}</span>`
   const headingYearSpan = document.querySelector('h1 span')
   headingYearSpan.style.color = `${getRandomColor()}`
   headingYearSpan.style.fontSize = '50px'

}, 1000)

setInterval(() =>{
    document.body.appendChild(timeDateHeader)
    timeDateHeader.textContent = `${getCurrentDate().date}`
    timeDateHeader.style.textAlign = 'center'
    timeDateHeader.style.fontWeight = 'normal'
}, 1000)



const subjects = ['Python', 'JavaScript', 
    'HTML & CSS', 'React', 'ReactNative', 'Fullstack', 
'Data Analysis', 'Machine Learning']

for(let i = 0; i < subjects.length; i++){

}


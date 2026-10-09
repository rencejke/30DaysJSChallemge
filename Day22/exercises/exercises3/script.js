let authorHeader = document.createElement('h1')
let subHeader = document.createElement('h3')
let timeDateHeader = document.createElement('h4')
let body = document.querySelector('body')
let container = document.createElement('div')
let unlisted = document.createElement('ul')

const asabenehChallenges2020 = {
  description: 'Asabeneh Yetayeh challenges',
  challengeTitle: 'Asabeneh Yetayeh challenges',
  challengeSubtitle: '30DaysOfJavaScript Challenge',
  challengeYear: 2020,
  keywords: [
    'HTML',
    'HTML5',
    'CSS',
    'CSS3',
    'JS',
    'JavaScript',
    'ES6',
    'Promise',
    'async await',
    'Database',
    'React',
    'React Hooks',
    'Context API',
    'React Router',
    'Web Storage',
    'localStorage',
    'sessionStorage',
    'Redux',
    'Node',
    'MongoDB',
    'SQL',
    'API',
    'DOM',
    'data science',
    'MERN',
    'Python',
    'Flask',
    'Statistics',
    'Linear Algebra',
    'Numpy',
    'Pandas',
    'Scipy',
    'Scikit-learn',
    'Visualization',
    'D3.js'
  ],
  author: {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    titles: [
      ['🌱', 'Educator'],
      ['💻', 'Programmer'],
      ['🌐', 'Developer'],
      ['🔥', 'Motivator'],
      ['📔', 'Content Creator']
    ],
    qualifications: [
      'MSc. Computer Science Ongoing',
      'BSc. Information and Communication Eng.',
      'MSc. Food Technology',
      'BSc.Food Technology'
    ],
    socialLinks: [
      {
        social: 'LinkedIn',
        url: 'https://www.linkedin.com/in/asabeneh/',
        fontawesomeIcon: '<i class="fab fa-linkedin">'
      },
      {
        social: 'Twitter',
        url: 'https://twitter.com/Asabeneh',
        fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
      },
      {
        social: 'Github',
        fontawesomeIcon: '<i class="fab fa-github-square"></i>',
        url: 'https://github.com/Asabeneh'
      },
      {
        social: 'DEV.to',
        fontawesomeIcon: '',
        url: 'https://dev.to/asabeneh'
      }
    ],
    skills: [
      'Web Development',
      'Data Analysis',
      'Data Visualization',
      'Programming',
      'Databases',
      'Developing API'
    ],
    bio:
      'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
  },
  challenges: [
    {
      name: '30 Days Of Python',
      topics: [
        'Python',
        'Flask',
        'Numpy',
        'Pandas',
        'Statistics',
        'API',
        'MongoDB'
      ],
      days: 30,
      status: 'Done',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
    },
    {
      name: '30 Days Of JavaScript',
      topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
      days: 30,
      status: 'Ongoing',
      questions: 'Above 500',
      projects: 'About 30',
      interviewQns: '',
      githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
    },
    {
      name: '30 Days Of HTML & CSS',
      topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
      days: 30,
      status: 'Coming',
      questions: 'Above 500',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of React',
      topics: [
        'React',
        'React Router',
        'Redux',
        'Context API',
        'React Hooks',
        'MERN'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of ReactNative',
      topics: ['ReactNative', 'Redux'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: 'Two',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Fullstack',
      topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Data Analysis',
      topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Machine Learning',
      topics: [
        'Python',
        'Numpy',
        'Pandas',
        'Scikit-learn',
        'Scipy',
        'Linear Algebra',
        'Statistics',
        'Visualization'
      ],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    }
  ]
}

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



// const subjects = ['Python', 'JavaScript', 
//     'HTML & CSS', 'React', 'ReactNative', 'Fullstack', 
// 'Data Analysis', 'Machine Learning']



document.body.appendChild(container)
container.style.display = 'fles'
container.style.flexWrap = 'wrap'
container.style.justifyContent = 'senter'
container.style.gap = '10px'
container.style.width = '100%'
container.style.maxWidth = '1000px'
container.style.margin = '50px auto 0'
container.style.alignSelf = 'center'
container.style.flexDirection = 'column'

container.appendChild(unlisted)

for(let i = 0; i < subjects.length; i++){

let listed = document.createElement('li')
let details = document.createElement('details')
let summary = document.createElement('summary')
let detailsText =  document.createElement('p')

listed.textContent = `30 days of ${subjects[i]}`
listed.style.fontSize = '20px'

unlisted.appendChild(listed)
listed.appendChild(details)
details.appendChild(summary)
summary.appendChild(detailsText)
}


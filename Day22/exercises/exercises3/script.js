let authorHeader = document.createElement('h1')
let subHeader = document.createElement('h3')
let body = document.querySelector('body')
let timeDateHeader = document.createElement('h4')
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
        url: 'https://dev.to/asabeneh',
        fontawesomeIcon: '<i class="fab fa-dev"></i>'
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
      topics: ['Fullstack', 'React', 'Redux', 'MongoDB', 'Node', 'MERN'],
      days: 30,
      status: 'Coming',
      questions: '',
      projects: '',
      interviewQns: '',
      githubUrl: ''
    },
    {
      name: '30 Days Of Data Analysis',
      topics: ['Data Analysis', 'Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
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
        'Machine Learning',
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
body.style.fontFamily = 'Poppins, sans-serif'
body.style.fontWeight='400';


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
  '#df5080', '#21d99b', '#e5e936', '#9b59b6',
  '#f1c40f', '#2ecc71', '#3498db', '#e67e22',
  '#1abc9c', '#95a5a6', '#ff6b6b', '#a3cb38',
  '#6c5ce7', '#fd79a8', '#00cec9', '#b2bec3'
];


    const randomColor = Math.floor(Math.random() * (colors.length))

    return colors[randomColor]
    
}

document.body.appendChild(authorHeader)
authorHeader.textContent = asabenehChallenges2020.description
authorHeader.style.textAlign = 'center'

document.body.appendChild(subHeader)
subHeader.textContent = asabenehChallenges2020.challengeSubtitle
subHeader.style.textAlign = 'center'
subHeader.style.fontWeight = 'normal'
subHeader.style.textDecoration = 'underline'


setInterval(() => { //call random color evey 1 seconds
   const headingYear = document.querySelector('h1')
   headingYear.innerHTML = `${asabenehChallenges2020.description} <span>${getCurrentDate().year}</span>`
   const headingYearSpan = document.querySelector('h1 span')
   headingYearSpan.style.color = `${getRandomColor()}`
   headingYearSpan.style.fontSize = '50px'

}, 1000)

document.body.appendChild(timeDateHeader)

setInterval(() =>{
    timeDateHeader.textContent = `${getCurrentDate().date}`
    timeDateHeader.style.textAlign = 'center'
    timeDateHeader.style.fontWeight = 'normal'
}, 1000)

document.body.appendChild(container)
container.style.width = '100%'
container.style.maxWidth = '1000px'
container.style.margin = '50px auto 0'

container.appendChild(unlisted)

//challenges
for(let i = 0; i < asabenehChallenges2020.challenges.length; i++){
let challenge = asabenehChallenges2020.challenges[i]

let listed = document.createElement('li')
let listText = document.createElement('a')
let listedWrapper = document.createElement('div')
let details = document.createElement('details')
let summary = document.createElement('summary')
let status =  document.createElement('p')

 listed.style.listStyle = 'none'

  listedWrapper.style.display = 'flex'
  listedWrapper.style.alignItems = 'center'
  listedWrapper.style.marginTop = '5px'
  listedWrapper.style.width = '100%'
  listedWrapper.style.padding = '10px 20px'
  listedWrapper.style.boxSizing = 'border-box'
  listedWrapper.style.fontWeight = '500'

  listText.textContent = challenge.name
  listText.href = '#'
  listText.style.fontSize = '14px'
  listText.style.flex = '1' 
  listText.style.textAlign = 'left'

  summary.textContent = challenge.topics[0]
  
    challenge.topics.forEach((topic) => {
      
    let detailsText =  document.createElement('p')
    detailsText.textContent = topic
    detailsText.style.margin = '4px 0 4px 16px'
    detailsText.style.fontSize = '14px'
    details.appendChild(detailsText)

  })
  

  status.textContent = challenge.status
  status.style.flex = '1'
  status.style.textAlign = 'right'
  status.style.fontSize = '14px'

  unlisted.appendChild(listed)
  listed.appendChild(listedWrapper)
  listedWrapper.appendChild(listText)
  listedWrapper.appendChild(details)
  details.appendChild(summary)
  listedWrapper.appendChild(status)

  if(challenge.status.toLowerCase() === 'done'){
    listedWrapper.style.backgroundColor = '#4F7D32'
  }else if(challenge.status.toLowerCase() === 'ongoing'){
    listedWrapper.style.backgroundColor = '#FFD16A'
  }else {
    listedWrapper.style.backgroundColor = '#B93636'
  }

}

let author = document.createElement('h2')
let authorFullName = author.textContent = asabenehChallenges2020.author.firstName + ' ' +  asabenehChallenges2020.author.lastName

author.textContent = authorFullName
author.style.textAlign = 'center'
container.appendChild(author)

let unlistedIcon = document.createElement('ul')
unlistedIcon.style.textAlign = 'center'
container.appendChild(unlistedIcon)


//social links
asabenehChallenges2020.author.socialLinks.forEach((social) =>
{
    if (!social.fontawesomeIcon) return;

      const li = document.createElement('li');
      const link = document.createElement('a');

      link.href = social.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', social.social);
      link.style.color = 'black'
      link.style.fontSize = '35px'

      li.style.display = 'inline-block';
      li.style.margin = '3px';

      link.innerHTML = social.fontawesomeIcon;
      li.appendChild(link);
      unlistedIcon.appendChild(li);
      
})

let authorBio = document.createElement('p');
authorBio.textContent = asabenehChallenges2020.author.bio;
authorBio.style.textAlign = 'center';
authorBio.style.marginTop = '35px';
authorBio.style.fontSize = '15px';
container.appendChild(authorBio);
      

const authorOtherInfosWrapper = document.createElement('div');
authorOtherInfosWrapper.style.display = 'flex'
authorOtherInfosWrapper.style.fontSize = '17px'
authorOtherInfosWrapper.style.justifyContent = 'space-around'

const unlistedOtherInfoOne = document.createElement('ul');
const unlistedOtherInfoTwo = document.createElement('ul');
const unlistedOtherInfoThree = document.createElement('ul');
const listWrapperOneHeader = document.createElement('h5'); 
const listWrapperTwoHeader = document.createElement('h5'); 
const listWrapperThreeHeader = document.createElement('h5'); 
listWrapperOneHeader.textContent = 'Titles' 
listWrapperTwoHeader.textContent = 'Skills' 
listWrapperThreeHeader.textContent = 'Qualifications' 

container.appendChild(authorOtherInfosWrapper)
authorOtherInfosWrapper.appendChild(unlistedOtherInfoOne)
unlistedOtherInfoOne.appendChild(listWrapperOneHeader)
unlistedOtherInfoTwo.appendChild(listWrapperTwoHeader)
unlistedOtherInfoThree.appendChild(listWrapperThreeHeader)
authorOtherInfosWrapper.appendChild(unlistedOtherInfoTwo)
authorOtherInfosWrapper.appendChild(unlistedOtherInfoThree)
      

asabenehChallenges2020.author.titles.forEach((titles) =>{
      const listTitles = document.createElement('li');
      listTitles.textContent = titles[0] + titles[1] 
      listTitles.style.marginBottom = '5px' 
      unlistedOtherInfoOne.appendChild(listTitles)
})

asabenehChallenges2020.author.skills.forEach((skills) =>{
      const listSkills = document.createElement('li');
      listSkills.textContent = '✅' + skills 
      listSkills.style.marginBottom = '5px' 
      unlistedOtherInfoTwo.appendChild(listSkills)
})

asabenehChallenges2020.author.qualifications.forEach((qualifications) =>{
      const listQualifications = document.createElement('li');
      listQualifications.textContent = qualifications
      listQualifications.style.marginBottom = '5px' 
      unlistedOtherInfoThree.appendChild(listQualifications)
})


const keywords = document.createElement('div')
const keywordsHeader = document.createElement('h3')
const unlistedKeyWords = document.createElement('ul')

keywordsHeader.textContent = 'Keywords'

unlistedKeyWords.style.display = 'flex'
unlistedKeyWords.style.flexWrap = 'wrap'
unlistedKeyWords.style.gap = '7px'
unlistedKeyWords.style.justifyContent = 'center'
unlistedKeyWords.style.alignItems = 'center'

container.appendChild(keywords)
keywords.appendChild(keywordsHeader)
keywords.appendChild(unlistedKeyWords)


asabenehChallenges2020.keywords.forEach((words) =>{
      const listWords = document.createElement('li');
  
      listWords.textContent =  `# ${words}`;
      listWords.style.backgroundColor = getRandomColor();
      listWords.style.padding = '5px';     
      listWords.style.borderRadius = '10px'   
      listWords.style.fontStyle = 'italic';  
      listWords.style.marginBottom = '5px';
      unlistedKeyWords.appendChild(listWords);

})








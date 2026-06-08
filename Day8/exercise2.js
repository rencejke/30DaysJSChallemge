//1 Find the person who has many skills in the users object.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const usersKey = Object.keys(users)
let highestSkills = 0;
let highestSkillProfile = '';

for(let i = 0; i <  usersKey.length; i++)
{
    let usersSkillCount = users[usersKey[i]].skills.length
    let userProfile = usersKey[i]
    
    if(usersSkillCount > highestSkills)
    {
        highestSkillProfile = userProfile
        highestSkills = usersSkillCount;
    }
}

console.log(`The peson who has the most skill in the user object is ${highestSkillProfile} with skill count of ${highestSkills}`)

//2 Count logged in users, count users having greater than equal to 50 points from the following object.


const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

const usersKey = Object.keys(users)
let usersCount = 0;
let loggedUsers = []

for(let i = 0; i <  usersKey.length; i++)
{
    let usersLogPoints = users[usersKey[i]].points
    let usersLogIn = usersKey[i]
    if(usersLogPoints >= 50)
    {
        usersCount+=1
        loggedUsers.push(usersLogIn)
    }
}

let loggedUsersWithoutLastUser = loggedUsers
    .splice(0, loggedUsers.length - 1)
    .join(', ')
    
let lastUser = loggedUsers
    .splice(0, loggedUsers.length)
    
console.log(`This the number of users who has greater than equal to 50 points is ${usersCount} and that users is ${loggedUsersWithoutLastUser} and ${lastUser}`)






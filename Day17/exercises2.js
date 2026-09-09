/* 
Create a student object. The student object will have first name, last name, 
age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
*/

const student = {
    firstName: 'Ji-min',
    lastName: 'Yu',
    age:26,
    skills: ['Visual', 'Dancing', 'Singing'],
    country: 'South Korea',
    enrolled: true
}

const studentToJson = JSON.stringify(student, undefined, 4)
localStorage.setItem('student', studentToJson)
console.log(localStorage)
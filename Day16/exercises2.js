//Exercises Level 2
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}

const text = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(text)

/*

{
    "firstName": "Asabeneh",
    "lastName": "Yetayehe",
    "skills": [
        "HTML",
        "CSS",
        "JS",
        "React",
        "Node",
        "Python"
    ]
}

*/



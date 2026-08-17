import { countries_data } from './countries_data.js';

//1. Destructure the countries object print name, capital, population and languages of all countries

for(const {name, capital, population, languages} of countries_data)
{
    console.log(name, capital, population, languages)
}

//2 A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores,
//  JavaScript score to jsScore and React score to reactScore variable in one line.

//nested destructuring
  const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  let [name, skills, [htmlScore, cssScore, jsScore, reactScore]] = student
  console.log(name, skills, jsScore, reactScore) //David [ 'HTML', 'CSS', 'JS', 'React' ] 90 95

  
//3 Write a function called convertArrayToObject which can convert the array to a structure object.
     const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]
const convertArrayToObject = (arr) =>
{

   const testArr = []

   for(const [name, skill, scores] of arr)
   {
        testArr.push({name, skill, scores})
        
   }

    return testArr

}

console.log(convertArrayToObject(students))

/*


177 ms
[
  {
    name: 'David',
    skill: [ 'HTM', 'CSS', 'JS', 'React' ],
    scores: [ 98, 85, 90, 95 ]
  },
  {
    name: 'John',
    skill: [ 'HTM', 'CSS', 'JS', 'React' ],
    scores: [ 85, 80, 85, 80 ]
  }
]
 */ 




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




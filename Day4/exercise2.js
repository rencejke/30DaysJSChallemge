//Exercises: Level 2

//1

let userGrades = Number(prompt('Enter your grade'))

switch(true){

    case userGrades >= 80 && userGrades <= 100:
         console.log(`Your grade ${userGrades} is A`)
    break;
    case userGrades >= 70 && userGrades <= 79:
         console.log(`Your grade ${userGrades} is B`)
    break;
    case userGrades >= 60 && userGrades <= 69:
         console.log(`Your grade ${userGrades} is C`)
    break;
    case userGrades >= 50 && userGrades <= 59:
         console.log(`Your grade ${userGrades} is D`)
    break;
    case userGrades >= 0 && userGrades <= 49:
         console.log(`Your grade ${userGrades} is F`)
    break;
    default:
         console.log(`This grade exceeded the grade range`)

}

//2
let season = prompt('Enter your grade')
let seasonToLowerCase = season.toLowerCase()

if(seasonToLowerCase === 'september' || seasonToLowerCase === 'october' || seasonToLowerCase === 'november') {
     console.log(`This month ${season} is the season of Autumn`)
}
else if(seasonToLowerCase === 'december' || seasonToLowerCase === 'january' || seasonToLowerCase === 'february') {
      console.log(`This month ${season} is the season of Winter`)
}
else if(seasonToLowerCase === 'march' || seasonToLowerCase === 'april' || seasonToLowerCase === 'may') {
      console.log(`This month ${season} is the season of Winter`)
}
else if(seasonToLowerCase === 'june' || seasonToLowerCase === 'july' || seasonToLowerCase === 'august') {
      console.log(`This month ${season} is the season of Summer`)
}
else {
     console.log(`This ${season} value is not recognized as month`)
}
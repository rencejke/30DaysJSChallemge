// Exercises: Level 1
// #1 Create a closure which has one inner function

const person = () =>{
    let fname = 'Clarence Jake'
    let lname = 'Bonilla'
    let age = 25

    const getFName = () => {
        let fullName = fname + ' ' + lname

        return fullName
    }

    return getFName
}

const innerFunc = person()

console.log(innerFunc()) //Clarence Jake Bonilla
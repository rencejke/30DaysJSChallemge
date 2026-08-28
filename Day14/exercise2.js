//exercises level  2

//1 User Input Validation
//Create a variable representing a user's age.
//Inside try, check whether the value can reasonably be used as an age.


try{
    const age = 25
    const toTest = age.toUpperCase()
} catch(err){
    console.log(err.name)
    console.log(err.message)
}finally
{
    console.log("Done")
}

//2  Safe String Processing


try{
    const username = 'rence'
    const stringMethod1 = username.length
    const stringMethod2 = username.substring(0, 3) 
    const stringMethod3 = username.substr(0, 3) 
    const stringMethod5 = username.toLowerCas() 
}catch(e)
{
    console.log(e.mame)
    console.log(e.message)
}
finally{
    console.log("String processing finished")
}

///3  Calculator

try{
    let num1 = 26
    let num2 = 29
    let operations = num1 * num2 

}catch(err)
{
    console.log(err.mame)
    console.log(err.message)
}
finally{
    console.log("String processing finished")
}

//4 Function  Execution

const sumNumbers = (num1, num2) =>
{
    return num1 + num2
}

    try{
        console.log(sumNumbers(2, 5))
    }catch(err) 
    {
        console.log('Error Type:', err.mame)
        console.log('Error Message:', err.message)
    }finally
    {
        console.log('Calculation complete.')
    }

//5. Error Logger

try{
    const num = 205
    console.log(num.toUpperCase())

    let area = b * h * 25
    console.log(area)
    
}catch(err) {
        console.log('Error Type:', err.name)
        console.log('Error Message:', err.message)
}finally{
        console.log('Program execution ended.')
}

//2 Multi-Step Program

//Create a small program with three different operations inside a try block.

try {
    
    const data = [1, 3, '5', 8, 19, '20', '25']
    const cleanData = []

    for(const datax of data){
        cleanData.push(Number(datax))
    }
    console.log(cleanData)
    
    //compute 
    let sum = 0;
    for(const numm of cleanData){

        sum+=num
    }
    console.log(sum)

} catch(err) {
        console.log('Error Type:', err.name)
        console.log('Error Message:', err.message)
}finally{
        console.log('Program execution ended.')
}

//3 Debugging Challenge

//You're given this broken program:

const username = 'Rence'
const age = 25

try {
    console.log(username)
    console.log(age.toUpperCase()) //this should be console.log(age)
    console.log('This is the final step')
} catch (err) {
    console.log(err.name)
    console.log(err.message)
} finally {
    console.log('Program finished')
}

//error
//typeerror
//age.toUpperCase is not a function
//Program finished

//noticed that "this is the final step" will not be printed because there's an error before it
//the error message and finally block will printed if it detects an error



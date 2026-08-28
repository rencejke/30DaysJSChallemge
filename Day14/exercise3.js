//1 Data Processor
//Create an array containing several values representing user data.
//Your goal is to intentionally perform an operation that could fail depending on the value being processed.

try {
    const data = ['rence', 25, null, undefined, {skill: "react", grade: 99}]
    const [age, username, single, married, {skill, grade}] = data

    for(const datas of data)
    {
        console.log(datas.toUpperCase())
    }
    
} catch (err) {
        console.log('Error Type:', err.name)
        console.log('Error Message:', err.message)
} finally {
        console.log('Operation Complete')
}

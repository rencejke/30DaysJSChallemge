//1

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = txt =>
{
    const pattern = /[^A-Za-z ]/g //removes special characters
    const result = txt.replace(pattern, '')

    return result
}

console.log(cleanText(sentence))

/*
I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people 
I found teaching more interesting than any other jobs 
Does this motivate you to be a teacher
*/


//2

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

const cleanText = txt =>
{
    const pattern = /[^A-Za-z ]/g //removes special characters
    const result = txt.replace(pattern, '')

    return result
}
const mostFrequentWords = (text, limit) =>
{
    const pattern = /\w[A-Za-z]*/g
    const resultWords = text.match(pattern)

    const setOfCleanedWords = new Set(resultWords)

    const cleanedCounts = []

    for(const cleanedWords of setOfCleanedWords)
    {
        const filteredWords = resultWords.filter(checkCleanWords => checkCleanWords === cleanedWords)
        cleanedCounts.push({word: cleanedWords, count: filteredWords.length})
    }


     let sortedCleanedItems = cleanedCounts.sort((a, b) =>
    {
        if(a.word.length > b.word.length) return -1
        if(a.word.length < b.word.length) return 1
        return 0
    }).sort((a, b) =>
    {
        if(a.count > b.count) return -1
        if(a.count < b.count) return 1
        return 0
    }).slice(0, limit)

    return sortedCleanedItems
}

console.log(mostFrequentWords(cleanText(sentence), 3))

/*
[
  { word: 'I', count: 3 },
  { word: 'teaching', count: 2 },
  { word: 'teacher', count: 2 }
]
*/




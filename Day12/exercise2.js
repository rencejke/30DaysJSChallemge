let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


const tenMostFrequentWords = (text, limit) =>
{
    const pattern = /\w[A-Za-z_]*/g // get words containing letters, or underscores

    const result = text.match(pattern) //check the pattern and turn it into array
    const setOfWord = new Set(result) //get only unique values from the result

    const counts = []

    for(const words of setOfWord)
    {
        const filteredWord = result.filter(checkWord => checkWord === words)
        counts.push({word:words, count: filteredWord.length})
    }

    let sortedItems = counts.sort((a,b) =>
    {
        if(a.count < b.count) return 1
        if(a.count > b.count) return -1
        return 0
    }).slice(0, limit)

    return sortedItems
}

console.log(tenMostFrequentWords(paragraph, 10))
/*
[
  { word: 'love', count: 6 },
  { word: 'you', count: 5 },
  { word: 'can', count: 3 },
  { word: 'I', count: 2 },
  { word: 'teaching', count: 2 },
  { word: 'do', count: 2 },
  { word: 'not', count: 2 },
  { word: 'what', count: 2 },
  { word: 'else', count: 2 },
  { word: 'If', count: 1 }
]
*/


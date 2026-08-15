//1 How many languages are there in the countries object file.
//123

//2 

import { countries_data } from './countries_data.js';

const mostSpokenLanguages = (arr, limit) =>
{
    const countryLanguages = arr.reduce((acc, curr) =>
    {
    curr.languages.forEach(lang =>
        {
            acc.push(lang)
        })
            return acc

    },[])

    const languagesSet = new Set(countryLanguages)
    console.log(languagesSet.size) //123

    const counts = []
    //const count = {}

    for(const lang of languagesSet)
    {
        const filteredLang = countryLanguages.filter((languagefilter) => languagefilter === lang)
        counts.push({language: lang, count: filteredLang.length})
    }

    const sortedLimitLang = counts.sort((a, b) => b.count - a.count).slice(0, limit)

    return sortedLimitLang

}

console.log(mostSpokenLanguages(countries_data, 10))

//123
/*
[
  { language: 'English', count: 91 },
  { language: 'French', count: 45 },
  { language: 'Arabic', count: 25 },
  { language: 'Spanish', count: 24 },
  { language: 'Portuguese', count: 10 },
  { language: 'Russian', count: 8 },
  { language: 'Dutch', count: 8 },
  { language: 'German', count: 7 },
  { language: 'Chinese', count: 5 },
  { language: 'Serbian', count: 4 }
]
 */ 
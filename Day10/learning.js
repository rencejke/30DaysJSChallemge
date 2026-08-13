//SETS AND MAPS

//Set
//Set is a collection of elements. Set can only contains unique elements. 

//Creating an empty set

const companies  = new Set()
console.log(companies) //Set(0) {}

const languages = [
  'English',
  'Finnish',
  'English',
  'French',
  'Spanish',
  'English',
  'French',
]

const setOfLanguages = new Set(languages)
console.log(setOfLanguages)

// Set(4) { 'English', 'Finnish', 'French', 'Spanish' }

//Set is an iterable object and we can iterate through each elements.

for(const language of languages)
{
    console.log(language)
}

/*
English
Finnish
French
Spanish
undefined
*/

/* const test = setOfLanguages.forEach(lang => console.log(lang))
console.log(test) */











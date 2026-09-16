//exercises 3

//#1 Read the cats api and find the average weight of cat in metric unit.

const apikey =  'API_kEY'
const catAPI = `https://api.thecatapi.com/v1/breeds/search?api_key=${apikey}`

// fetch(catAPI).then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))

const fetchCat = async () => {
    try{
         const response = await fetch(catAPI)  
         const catsData = await response.json()
         
         let catsWeight = 0

         for(let i = 0; i < catsData.length; i++)
        {
             const pattern = /\d+(\.\d+)?/g  //get decimal places or whole numbers
             /* 
             \d+ -> 2 or more digit numbers
             (\.\d+)? -> optional for decimal numbers being grouped by ()
             /g -> find all the data it matches   
             */
             const extractNumbers = catsData[i].weight.metric.match(pattern)
             catsWeight+= ((Number(extractNumbers[0]) + Number(extractNumbers[1]))/2)
        }

        let catAvg = catsWeight / catsData.length
        
        console.log(catAvg)
      
    }catch(err){
        console.log(err)
    }
}

fetchCat()


//#2 Read the countries api and find out the 10 largest countries

const apiKey = 'API_KEY'

let limit = 100 
let offset = 0 //where to start or how many to skip

//offset = 0 starts 1
//offset = 100 starts 101
//offset = 200 starts 201

let numberOfrequest = 3

const fetchCountries = async() =>
{
    try{
        
        let allCountries = []
        for(let i = 0; i < numberOfrequest; i++){
           
            const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`

            offset+=limit

            const response = await fetch(url, {headers: {'Authorization': `Bearer ${apiKey}` }})
            const countriesData = await response.json()
            allCountries.push(...countriesData.data.objects) //unpack array of objects

        }
        const finalResult = allCountries.sort((a, b) => b.area.kilometers - a.area.kilometers).slice(0, 10)
        console.log(finalResult)

    }catch(err){
        console.log(err)
    }
}

fetchCountries()


//#3 Read the countries api and count total number of languages in the world used as officials.

const apiKey = ''

let limit = 100 
let offset = 0 //where to start or how many to skip
let numberOfrequest = 3

const fetchLanguages = async () => {
    try{
        let count = []

        for(let i = 0; i < numberOfrequest; i++){

        const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`
    
        const response = await fetch(url, {headers: {'Authorization': `Bearer ${apiKey}` }})
        const countriesLangData = await response.json()
        const objectCount = countriesLangData.data.objects.length

        for(k = 0; k < objectCount; k++)
        {
            const languageCount = countriesLangData.data.objects[k].languages.length

            for(j = 0; j < languageCount; j++){
            if(count.includes(countriesLangData.data.objects[k].languages[j].name)){
                count.counts +=1
            } else {
                count.push({name: countriesLangData.data.objects[k].languages[j].name, counts: 1})
            }
        }
        }
        
}
    }catch(e){
        console.log(e.name)
        console.log(e.message)
    }
}

fetchLanguages()
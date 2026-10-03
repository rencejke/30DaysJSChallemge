// let title = document.createElement('h1')
// let totalCount = document.createElement('h2')
// let subTitle = document.createElement('p')
// let author = document.createElement('p')
// let body = document.querySelector('body')

// let textTile = 'world countries list'
// body.style.width='80%'
// body.style.margin='auto'

// document.body.appendChild(title)
// title.textContent = textTile.toUpperCase()
// title.style.textAlign = 'center'

// document.body.appendChild(totalCount)
// totalCount.textContent = `Total number of countries: ${count}`
// totalCount.style.textAlign = 'center'

// document.body.appendChild(subTitle)
// subTitle.textContent = '30DaysOfJavaScript:DOM Day 2'
// subTitle.style.textAlign = 'center'

// document.body.appendChild(author)
// author.textContent = 'Author: Asabeneh Yetayeh'
// author.style.textAlign = 'center'


// title.style.margin = '10px'
// totalCount.style.margin = '0'
// subTitle.style.margin = '2px'
// author.style.margin = '2px'

const apiKey = ''

let limit = 100 
let offset = 0 
let numberOfRequest = 1
let count = 0

const fetchCountries = async() =>{

   try{
    
     for(let i = 0; i < numberOfRequest; i++){

        const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`
        offset+=limit

        const response = await fetch(url, {headers: {'Authorization': `Bearer ${apiKey}`}})
        const countryData = await response.json()
        const countryObjectCount = countryData.data.objects.length

       for(j = 0; j < countryObjectCount; j++){
         console.log(countryData.data.objects[j].names.official)
    }_

    }
   }catch(e) {
        console.log(e.name)
        console.log(e.message)
   }


}

fetchCountries()





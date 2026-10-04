let title = document.createElement('h1')
let subTitle = document.createElement('p')
let author = document.createElement('p')
let body = document.querySelector('body')

let textTile = 'world countries list'
body.style.width='80%'
body.style.margin='auto'

document.body.appendChild(title)
title.textContent = textTile.toUpperCase()
title.style.textAlign = 'center'

document.body.appendChild(subTitle)
subTitle.textContent = '30DaysOfJavaScript:DOM Day 2'
subTitle.style.textAlign = 'center'

document.body.appendChild(author)
author.textContent = 'Author: Asabeneh Yetayeh'
author.style.textAlign = 'center'


title.style.margin = '10px'
subTitle.style.margin = '2px'
author.style.margin = '2px'

const apiKey = 'API_KEY'

let limit = 100 
let offset = 0 
let numberOfRequest = 3
let count = 0

const fetchCountries = async() =>{

   let totalCount = document.createElement('h2')
   document.body.appendChild(totalCount)
   totalCount.textContent = `Total number of countries: Loading....`
   totalCount.style.textAlign = 'center'
   totalCount.style.margin = '0'

   //create container for countries cards
   const container = document.createElement('div')
   
   //style the container
   container.style.display = 'flex'
   container.style.flexWrap = 'wrap'
   container.style.justifyContent = 'center'
   container.style.gap = '10px'
   container.style.width = '100%'
   container.style.maxWidth = '1000px'
   container.style.margin = '50px auto 0'
   container.style.alignSelf = 'center'

   document.body.appendChild(container)

   try{
    
     for(let i = 0; i < numberOfRequest; i++){

        const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`
        
        offset+=limit

        const response = await fetch(url, {headers: {
            'Authorization': `Bearer ${apiKey}`
         }})
        const countryData = await response.json()
        const countryObjectCount = countryData.data.objects.length

       for (let j = 0; j < countryObjectCount; j++) {
         let country = document.createElement('div')
         country.textContent = countryData.data.objects[j].names.official.toUpperCase()

         //countries card
         
         //card size
         country.style.width = '150px' 
         country.style.width = '100px' 
         country.style.boxSizing = 'border-box'
         country.style.padding = '10px' 
         country.style.flex = '0 0 150px' //stops card from shrinking

         //text to center
         country.style.display = 'flex'
         country.style.alignItems = 'center'
         country.style.justifyContent = 'center'
         country.style.textAlign = 'center'

         //card text and looks
         country.style.overflowWrap = 'break-word'
         country.style.fontSize = '12px'
         country.style.fontFamily = 'Verdana, Helvetica, sans-serif'
         country.style.backgroundColor = '#fffafa'
         country.style.boxShadow = '0 0 4px rgba(0,0,0,0.15)'

         container.appendChild(country)

         count++
}
    }
    
   }catch(e) {
        console.log(e.name)
        console.log(e.message)
        return 
   }

   totalCount.textContent = `Total number of countries: ${count}`
}


fetchCountries()





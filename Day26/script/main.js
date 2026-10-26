const countryList = document.querySelector('.countries-data-wrapper');
const searchBtn = document.querySelector('.search-btn');
const isStartingWordBtn = document.querySelector('.starting-word-btn');
const isStartingWithAnyWordBtn = document.querySelector('.any-word-btn');

const apiKey = '';

let isStartingWord = false;
let isStartingWithAnyWord = false;

let limit = 100; 
let offset = 0;
let numberOfRequest = 1;
let count = 0;


const fetchCountries = async (isStartingWord, isStartingWithAnyWord) =>{
    try{
        
        const countriesList = [];

        for(let i = 0; i < numberOfRequest; i++){

        const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`;
        
        offset+=limit;

        const response = await fetch(url,{headers: {'Authorization': `Bearer ${apiKey}` } });
        const countryData = await response.json();
        countriesList.push(...countryData.data.objects);
    
    }
        countryList.innerHTML = countriesList.map((country) =>`
            <div class="country-row">
            <p class="country-name">${country.names.common.toUpperCase()}</p>
            </div>
        `).join('')
    }catch(error){
        console.log(error)
}};

isStartingWordBtn.addEventListener('click', ()=>{
    isStartingWord = true;
});

isStartingWithAnyWordBtn.addEventListener('click', ()=>{
   isStartingWithAnyWord = true;
});

searchBtn.addEventListener('click', ()=>{
    fetchCountries();
});

const countryList = document.querySelector('.countries-data-wrapper');
const searchBtn = document.querySelector('.search-btn');
const isStartingWordBtn = document.querySelector('.starting-word-btn');
const isSearchWithAnyWordBtn = document.querySelector('.any-word-btn');
const sortByBtn = document.querySelector('.sort-by-btn');
const searchValue = document.querySelector('.search');
const totalCountries = document.querySelector('.total-countries');
const totalSearchCountries = document.querySelector('.total-search-countries');

const apiKey = '';

let isStartingWord = false;
let isSearchWithAnyWord = false;
let sortBy = false;
let isClick = false;
let limit = 100; 
let numberOfRequest = 3;
let countriesCount = 0;
let searchCount = 0;

const fetchCountries = async (search, isStartingWord, isSearchWithAnyWord, sortBy) =>{
    try{
        let offset = 0;
        countryList.innerHTML = 'Loading Data....';
        totalCountries.innerHTML = 'Loading Data....';
        totalSearchCountries.innerHTML = 'Loading Data....';

        const countriesList = [];
        let finalResult;

        for(let i = 0; i < numberOfRequest; i++){

        const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`;
        
        offset+=limit;

        const response = await fetch(url,{headers: {'Authorization': `Bearer ${apiKey}` } });
        const countryData = await response.json();
        countriesList.push(...countryData.data.objects);
        
        countriesCount = countriesList.length;
    }

    if(isStartingWord){
        
            const flag = 'i';
            const pattern = new RegExp(`^${search}`, flag);
            const result = countriesList.filter((countrySearchStart) => {
            return pattern.test(countrySearchStart.names.common);
        });
            finalResult = result
        }else if(isSearchWithAnyWord){
            const flag = 'i';
            const pattern = new RegExp(`\\b${search}`, flag);
            const result = countriesList.filter((countrySearchStart) => {
            return pattern.test(countrySearchStart.names.common);

        });
         finalResult = result;
    }else {
        finalResult = countriesList;
    }   
    
    searchCount = finalResult.length;

    if(sortBy){
          finalResult.sort((a, b) =>  {
           return a.names.common.localeCompare(b.names.common);
    })
}  

            totalCountries.innerHTML = `Total Number of Countries: ${countriesCount}`;
            totalSearchCountries.innerHTML = `Countries Containing "${search}" are ${searchCount}`;

        countryList.innerHTML = finalResult.map((country) =>`
            <div class="country-row">
            <p class="country-name">${country.names.common.toUpperCase()}</p>
            </div>
        `).join('')
    }catch(error){
        alert(error);
    }};

isStartingWordBtn.addEventListener('click', ()=>{
    isStartingWord = true;
    isSearchWithAnyWord = false;
    isStartingWordBtn.classList.add('active');
    isSearchWithAnyWordBtn.classList.remove('active');
});

isSearchWithAnyWordBtn.addEventListener('click', ()=>{
   isSearchWithAnyWord = true;
   isStartingWord = false;
   isStartingWordBtn.classList.remove('active');
   isSearchWithAnyWordBtn.classList.add('active');
});

sortByBtn.addEventListener('click', ()=>{
   if(isClick){
    sortBy = false;
    isClick = false;
   }else{
      sortBy = true
      isClick = true;
   }
   sortByBtn.classList.toggle('active');
});

searchBtn.addEventListener('click', ()=>{
    let search = searchValue.value;
    fetchCountries(search, isStartingWord, isSearchWithAnyWord, sortBy);
});

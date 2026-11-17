import { countries } from './data/countries_data.js';
const contriesDataWrapper = document.querySelector('.countries-data-wrapper');
const searcbCountries = document.querySelector('.countries-find-search-input');
const countryOrderByNameBtn = document.querySelector('.countries-find-order-name');
const countryOrderByCapitalBtn = document.querySelector('.countries-find-order-capital');
const countryOrderByPopulationBtn = document.querySelector('.countries-find-order-population');
const allArrows = document.querySelectorAll(
    '.countries-find-order .fa-arrow-up, .countries-find-order .fa-arrow-down');
const countriesCount = document.querySelector('.header-data-countries-length');
const searchCount = document.querySelector('.header-data-search-info');
const populationBtn = document.querySelector('.countries-population-btn');
const languageBtn = document.querySelector('.countries-languages-btn');
const chart = document.querySelector('#chart');
  
 
const [...statsCountries] = countries 

  const max =  countries.reduce((acc, cur) => acc + (cur.population || 0), 0)
  statsCountries.push({
			"name": "World",
			"population": max
	})


 let finalCountries = [];
 let isOrderByName = false;
 let isOrderByCapital = false;
 let isOrderByPopulation = false;
 let searchValue = '';
 let sortBy = '';

const hiddenArrows = () =>{
    allArrows.forEach((arrow) =>{
        arrow.classList.add('hidden-arrow');
        arrow.classList.remove('show-arrow');
    });
};
const showHideArrows = (button, isAscending) =>{
    const arrowUpIcon = button.querySelector('.fa-arrow-up');
    const arrowDownIcon = button.querySelector('.fa-arrow-down');

    arrowUpIcon.classList.toggle('hidden-arrow', isAscending);
    arrowDownIcon.classList.toggle('hidden-arrow', !isAscending);

};
const checkDataCapital = (a, b) =>{
    if(!a.capital && !b.capital){
             return 0;
            }
            if(!a.capital){
                return 1;
            }
            if(!b.capital){
                return -1;
            }
}
const checkDataName = (a, b) =>{
    if(!a.name && !b.name){
         return 0;
    }
     if(!a.name){
         return 1;
     }
     if(!b.name){
         return -1;
    }
}
const checkDataPopulation = (a, b) =>{
    if(!Number.isFinite(a.population) && !Number.isFinite(b.population)){
            return 0;
    }
    if(!Number.isFinite(a.population)){
            return 1;
    }
     if(!Number.isFinite(b.population)){
            return -1;
     }
}
const getCountries = (searchCountry, orderByName, orderByCapital, orderByPopulation, sortBy) =>{
  
 //regExpression (filter)
 const regExFlag  = 'i';
 const regExFPattern  = new RegExp(`\\b${searchCountry}`, regExFlag);
 const filteredCountries = countries.filter((filterCountry) =>{
    return regExFPattern.test(filterCountry.name) || 
    regExFPattern.test(filterCountry.capital) ||
    regExFPattern.test(filterCountry.languages) 
 });
    finalCountries = filteredCountries;

     countriesCount.innerHTML = `Currently we have ${countries.length} Countries`
     searchCount.innerHTML = `${finalCountries.length} countries satisfied with the search criteria`
    //TRUE DESC
    //FALSE ASC

    if (sortBy ==='name') {

        let order = orderByName ? 'desc' : 'asc'
        order === 'desc' 
        ? finalCountries.sort((a, b) => {
        const resultCheckName = checkDataName(a, b);
        if(resultCheckName !== undefined){
            return resultCheckName;
        }
        return b.name.localeCompare(a.name);
    }) : finalCountries.sort((a, b) => {
        const resultCheckName = checkDataName(a, b);
        if(resultCheckName !== undefined){
            return resultCheckName;
        }
        return a.name.localeCompare(b.name);
    });

    }
    else if (sortBy === 'capital') {

        let order = orderByCapital ? 'desc' : 'asc'

        order === 'desc'  ? finalCountries.sort((a, b) => {
        const resultCheckCapital = checkDataCapital(a, b);

        if(resultCheckCapital !== undefined){
            return resultCheckCapital;
        }
        
        return b.capital.localeCompare(a.capital);
            
        }): finalCountries.sort((a, b) => {

        const resultCheckCapital = checkDataCapital(a, b);
        
        if(resultCheckCapital !== undefined){
            return resultCheckCapital;
        }
            return a.capital.localeCompare(b.capital);
        });
   } 
   else if (sortBy === 'population') {
      
       let order = orderByPopulation ? 'desc' : 'asc'

        order === 'desc' ? finalCountries.sort((a, b) => {

        const resultCheckPopulation = checkDataPopulation(a, b);

        if(resultCheckPopulation !== undefined){
              return resultCheckPopulation;
        }

        return b.population - a.population;
            
        }) : finalCountries.sort((a, b) => {
            const resultCheckPopulation = checkDataPopulation(a, b);
            
            if(resultCheckPopulation !== undefined){
                return resultCheckPopulation;
            }

            return a.population - b.population;
            
        });

   }

   
  contriesDataWrapper.innerHTML = finalCountries.map((country) =>`
      <div class="countries-data-wrapper-row">
            <div class="countries-data-image">
                <img src="${country.flag}" alt="Åland Islands Flag">
                <p class="countries-data-name">${country.name}</p>
            </div>
            <div class="coutries-data-details">
                    <p class="coutries-data-details-capital">Capital: ${country.capital}</p>
                    <p class="coutries-data-details-language">Language: ${country.languages.join(', ')}</p>
                    <p class="coutries-data-details-population">Population: ${country.population.toLocaleString()}</p>
            </div>
        </div>
  `).join('');

};

 
const getPopulation = (searchCountry) =>{
     //regExpression (filter)
    const regExFlag  = 'i';
    const regExFPattern  = new RegExp(`\\b${searchCountry}`, regExFlag);
    const filteredCountries = statsCountries.filter((filterCountry) =>{
        return filterCountry.name.toLowerCase() === 'world' || 
        regExFPattern.test(filterCountry.name) ||
        regExFPattern.test(filterCountry.capital) ||
        regExFPattern.test(filterCountry.languages) 
    });
        finalCountries = filteredCountries;

    finalCountries.sort((a, b) => {
        return b.population - a.population
    })

    chart.innerHTML = finalCountries.map((country) =>`
     <div class="countr-row">
     <p class="country-name">${country.name}</p>
     <div class="progress-bar">
         <span class="progress-bar-fill" style="width:${(country.population / max) * 100}%"></span>
     </div>
     <p class="country-value">${country.population.toLocaleString()}</p>
     </div>`).join('');
}

const getLanguage = (searchCountry) =>{
     //regExpression (filter)

    const countryLanguages = [];
    const regExFlag  = 'i';
    const regExFPattern  = new RegExp(`\\b${searchCountry}`, regExFlag);
    const filteredCountries = countries.filter((filterCountry) =>{
        return regExFPattern.test(filterCountry.name)  ||
        regExFPattern.test(filterCountry.capital) ||
        regExFPattern.test(filterCountry.languages) 
    });
    finalCountries = filteredCountries;

    finalCountries.forEach((finalCountryLang) =>{
    finalCountryLang.languages.forEach((lang)=>{
         console.log(lang);
        const existLanguages = countryLanguages.find((countryLang) => countryLang.language === lang)

        if(existLanguages){
            existLanguages.count +=1;
        }else{
            countryLanguages.push({
              language: lang,
              count: 1
         })
     }})
 })

    const sortedCountries = countryLanguages.sort((a, b) => b.count - a.count)
    const max = sortedCountries[0].count;

    chart.innerHTML = countryLanguages.map(({language, count}) =>`
     <div class="countr-row">
     <p class="country-name">${language}</p>
     <div class="progress-bar">
         <span class="progress-bar-fill" style="width:${(count / max) * 100}%"></span>
     </div>
     <p class="country-value">${count}</p>
     </div>`).join('');
}

countryOrderByNameBtn.addEventListener('click', ()=>{
    hiddenArrows();
    isOrderByName = !isOrderByName;
    isOrderByCapital = false;
    isOrderByPopulation = false;
    sortBy = 'name';
    showHideArrows(countryOrderByNameBtn, isOrderByName);
    getCountries(searchValue, isOrderByName, isOrderByCapital, isOrderByPopulation, sortBy);
});
countryOrderByCapitalBtn.addEventListener('click', ()=>{
      hiddenArrows();
      isOrderByCapital = !isOrderByCapital;
      isOrderByName = false;
      isOrderByPopulation = false;
      sortBy = 'capital';
      showHideArrows(countryOrderByCapitalBtn, isOrderByCapital);
      getCountries(searchValue, isOrderByName, isOrderByCapital, isOrderByPopulation, sortBy);
});
countryOrderByPopulationBtn.addEventListener('click', ()=>{
    hiddenArrows();
    isOrderByPopulation = !isOrderByPopulation;
    isOrderByName = false;
    isOrderByCapital = false;
    sortBy = 'population';
    showHideArrows(countryOrderByPopulationBtn, isOrderByPopulation);
    getCountries(searchValue, isOrderByName, isOrderByCapital, isOrderByPopulation, sortBy);
});

searcbCountries.addEventListener('input', ()=>{
    searchValue  = searcbCountries.value;
    getCountries(searchValue, isOrderByName, isOrderByCapital, isOrderByPopulation, sortBy);
    getPopulation(searchValue);
});
populationBtn.addEventListener('click', ()=>{
    getPopulation(searchValue);
})
languageBtn.addEventListener('click', ()=>{
    getLanguage(searchValue);
})







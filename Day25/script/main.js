const chart = document.querySelector('#chart');
const populationBtn = document.querySelector('.population-btn');
const languagesBtn = document.querySelector('.languages-btn');
const countriesBtnData = document.querySelector('.countries-btn-txt');
const countriesCount = document.querySelector('.countries-count');
const apiKey  = 'API_KEY';

const limit = 100; 
const numberOfRequest = 3
let topNumbers = 10;




const fetchCountriesPopulation = async () =>{

   countriesBtnData.innerHTML = '';
   chart.innerHTML = '<p class="validation">Loading Data....</p>'
   countriesCount.textContent = 'Loading data....'
   let offset = 0;

    try{
        
        const countries = [];
    
        for(let i = 0; i < numberOfRequest; i++){

          const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`;
          
          offset+=limit;

          const response = await fetch(url,{headers: {'Authorization': `Bearer ${apiKey}` } });
          const countriesData = await response.json();

          countries.push(...countriesData.data.objects)

  }
   
    const top10Countries = countries.sort((a, b) => b.population - a.population).slice(0, topNumbers);
    const max = top10Countries[0].population;

    countriesCount.textContent = `Currently, we have ${countries.length} countries`

    countriesBtnData.innerHTML = `${topNumbers} most populated countries in the World`

    chart.innerHTML = top10Countries.map((country) =>`
     <div class="countr-row">
     <p class="country-name">${country.names.common}</p>
     <div class="progress-bar">
         <span class="progress-bar-fill" style="width:${(country.population / max) * 100}%"></span>
     </div>
     <p class="country-value">${country.population.toLocaleString()}</p>
     </div>`).join('');
     
}
    catch(error){
        console.log(error.name);
        console.log(error.message);
}};

const fetchCountriesLanguages = async () =>{

    countriesBtnData.innerHTML = '';

    chart.innerHTML = '<p class="validation">Loading Data....</p>'
    let offset = 0;
    countriesCount.textContent = 'Loading data....'
    
    try{
        
        const languages = [];
        const countries = [];

        for(let i = 0; i < numberOfRequest; i++){

          const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`;
          
          offset+=limit;

          const response = await fetch(url,{headers: {'Authorization': `Bearer ${apiKey}` } });
          const countriesData = await response.json();
          countries.push(...countriesData.data.objects)

          countries.forEach((language) =>{
            language.languages.forEach((lang)=>{
                const existLang = languages.find((langs) => langs.language === lang.name);
                if(existLang){
                    existLang.count +=1;
                }else{
                    languages.push({language: lang.name,
                        count: 1
                    })
                }})
          })
  }
   const countryTop10Languages = languages.toSorted((a, b) => b.count - a.count).slice(0, topNumbers);
   const max = countryTop10Languages[0].count;
  
  countriesCount.textContent = `Currently, we have ${countries.length} countries`;
  countriesBtnData.innerHTML = `${topNumbers} most Spoken Languages in the World`;


  chart.innerHTML = countryTop10Languages.map(({language, count}) => `
    <div class ="countr-row">
         <div class="country-language">${language}</div>
         <div class="progress-bar">
            <span class="progress-bar-fill" style="width:${(count / max) * 100}%"></span>
         </div>
          <p class="country-value">${count}</p>
    </div>`).join('')

}
    catch(error){
        console.log(error.name);
        console.log(error.message);
}};

populationBtn.addEventListener('click', ()=>{
    fetchCountriesPopulation();
});

languagesBtn.addEventListener('click', ()=>{
    fetchCountriesLanguages();
});



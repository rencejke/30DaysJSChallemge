const chart = document.querySelector('#chart');
const populationBtn = document.querySelector('.population-btn');
const apiKey  = '';
const limit = 100; 
let offset = 0;
const numberOfRequest = 3


const fetchCountriesPopulation = async () =>{
    try{

        for(let i = 0; i < numberOfRequest; i++){

          const url = `https://api.restcountries.com/countries/v5?limit=${limit}&offset=${offset}`;
          
          offset+=limit;

          const response = await fetch(url,{headers: {'Authorization': `Bearer ${apiKey}` } });
          const countriesData = await response.json();
          const top10Countries = [...countriesData.data.objects].sort((a, b) => b.population - a.population).slice(0, 10) ;
          const max = top10Countries[0].population;
          
          if(i === (numberOfRequest - 1)){
             chart.innerHTML = top10Countries.map((country) =>`
            <div class="countryRow">
            <p class="countryName">${country.names.common}</p>
            <div class="progressBar">
                <span class="progressBarFill" style="width:${(country.population / max) * 100}%"></span>
            </div>
            <p class="countryValue">${country.population.toLocaleString()}</p>
            </div>`).join('');
        }else {
            chart.innerHTML = ' <p class="validation">Loading Data....</p>'
        }
        
         
  }}
    catch(error){
        console.log(error.name);
        console.log(error.message);
}};

populationBtn.addEventListener('click', ()=>
{
    fetchCountriesPopulation();
})



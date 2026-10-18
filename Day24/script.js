const mass = document.querySelector('#mass');
const planets = document.querySelector('#planet');
const computeBtn = document.querySelector('.weightBtn');
const planetDetailsWrapper = document.querySelector('.planetDetailsWrapper')
const planetDetailsWrapperCreateRight = document.createElement('div')
const planetDetailsWrapperCreateLeft = document.createElement('div')
const planetDetailsWrapperValidation = document.createElement('p')
const planetDetailsCreate = document.createElement('div')
const planetDetailsOtherInfo = document.createElement('div')
const planetDetailsTitle = document.createElement('p')
const planetDetailsUnlist = document.createElement('ul')
const apiKey = 'API_KEY';

planetDetailsWrapperCreateRight.setAttribute('class', 'right');
planetDetailsWrapperCreateLeft.setAttribute('class', 'left');
planetDetailsCreate.setAttribute('class', 'planetDetails');
planetDetailsWrapperValidation.setAttribute('class', 'validation');
planetDetailsOtherInfo.setAttribute('class', 'planetDetailsOtherInfo');
planetDetailsTitle.setAttribute('class', 'planetDetailsTitle');


let planetsGravity = 0;
let selectedPlanet;
let selectedPlanetMass;
let selectedPlanetTemp;
let selectedPlanetRadius;

const planetGravity = {
  mercury: 3.70,
  venus: 8.87,
  earth: 9.81,
  mars: 3.71,
  moon: 1.625,
  jupiter: 24.79,
  saturn: 10.44,
  uranus: 8.69,
  neptune: 11.15
};

planets.addEventListener('change', (e)=>
{
   
    let planetSelectValue = planets.value;
    selectedPlanet = planetSelectValue;
    planetsGravity = planetGravity[planetSelectValue];

    getPlanet(selectedPlanet);

});

const getPlanet = async (selectedPlanet) =>{
const url =  `https://api.api-ninjas.com/v1/planets?name=${selectedPlanet}`;
    
   try{
        const response = await fetch(url, {headers: {'X-Api-Key': `${apiKey}`}});
        const planetsData = await response.json();
        
        //no planet found ? skip
        //show N/A if the data is unavailable
        selectedPlanetMass = planetsData[0]?.mass ?? 'N/A';
        selectedPlanetTemp = planetsData[0]?.temperature ?? 'N/A';
        selectedPlanetRadius = planetsData[0]?.radius ?? 'N/A';

   }
catch(e){
    console.log(e);
}}

computeBtn.addEventListener('click', async () =>
{
    planetDetailsWrapper.innerHTML = '';                    
    planetDetailsWrapper.appendChild(planetDetailsWrapperValidation);
    

    if (mass.value === '' || isNaN(mass.value)) {
        planetDetailsWrapperValidation.textContent = 'Please enter a valid mass in kilograms.';
        return;
    }
    if (Number(mass.value) <= 0) {
        planetDetailsWrapperValidation.textContent = 'Mass must be greater than 0.';
        return;
    }
    if (!selectedPlanet) {
        planetDetailsWrapperValidation.textContent = 'Please select a planet.';
        return;
    }

    planetDetailsWrapperValidation.textContent = 'Loading Data....';
    await getPlanet(selectedPlanet);

    planetDetailsWrapper.innerHTML = '';  
    planetDetailsWrapperCreateRight.innerHTML = '';
    planetDetailsCreate.innerHTML = '';
    planetDetailsWrapper.appendChild(planetDetailsWrapperCreateRight);
    planetDetailsWrapper.appendChild(planetDetailsWrapperCreateLeft);
    planetDetailsWrapperCreateLeft.appendChild(planetDetailsCreate);

    const weight = mass.value * planetsGravity;
    const planetDetailsWrapperImg = document.createElement('img');
    const planetDetailsText = document.createElement('p');
   
    planetDetailsWrapperImg.src = `img/planets/${selectedPlanet}.png`;
    planetDetailsWrapperImg.alt = selectedPlanet;
    planetDetailsWrapperCreateRight.appendChild(planetDetailsWrapperImg);

    planetDetailsText.setAttribute('class', 'planetDetailsText');
    planetDetailsText.textContent = `The Weight of the object on ${selectedPlanet.toUpperCase()} is ${weight.toFixed(2)}`;
    planetDetailsTitle.textContent = 'Planet Information';
    
    planetDetailsCreate.appendChild(planetDetailsText);
    planetDetailsCreate.appendChild(planetDetailsOtherInfo);
    planetDetailsOtherInfo.appendChild(planetDetailsTitle);

const planetsData = [
      selectedPlanet.toUpperCase(),
     `Mass: ${selectedPlanetMass}`, 
     `Temperature: ${selectedPlanetTemp}`, 
     `Radius: ${selectedPlanetRadius}`
    ];
    
planetDetailsUnlist.innerHTML = '';

for(let i = 0; i < planetsData.length; i++) {

       const list = document.createElement('li');
       const p = document.createElement('p');

       p.textContent = planetsData[i];

       planetDetailsOtherInfo.appendChild(planetDetailsUnlist);
       planetDetailsUnlist.appendChild(list);
       list.appendChild(p);

}})







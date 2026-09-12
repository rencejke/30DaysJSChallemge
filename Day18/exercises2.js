//exercises 2

/*

Read the Cat Breeds API using fetch() and print the following information for each breed:

Name
Country
Origin
Coat

*/

const catsAPI = 'https://catfact.ninja/breeds'

const fetchCat = async () =>{
    try{
        const response = await fetch(catsAPI)
        const catsData = await response.json()
        let cats = []

         for(let i = 0; i < catsData.data.length; i++){
            cats.push({ 
                        name: catsData.data[i].breed, 
                        country: catsData.data[i].country,
                        origin: catsData.data[i].origin,
                        coat:  catsData.data[i].coat,
                    })
        }
        console.log(cats)
    }catch(err){
        console.log(err)
    }
}

fetchCat()
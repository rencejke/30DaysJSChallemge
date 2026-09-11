//exercises 1

const usersAPI = 'https://jsonplaceholder.typicode.com/users'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

/* Read the Users API using fetch() and print the following information for each user:

Name
Username
Email
City
Phone
Company name

*/
fetch(countriesAPI)
.then(response => response.json())
.then(data =>{
    console.log(data)
}).catch(err => console.error(err))


const fetchUsers = async () => {
    try {
        const response = await fetch(usersAPI)
        const usersData = await response.json()
        usersData.forEach(prnName => console.log(prnName.name)) 
    } catch (e) {
        console.log(e.name)
        console.log(e.message)
    }
}

fetchUsers()
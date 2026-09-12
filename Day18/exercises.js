//exercises 1

const usersAPI = 'https://jsonplaceholder.typicode.com/users'


/* Read the Users API using fetch() and print the following information for each user:

Name
Username
Email
City
Phone
Company name

*/
// fetch(usersAPI)
// .then(response => response.json())
// .then(data =>{
//     console.log(data)
// }).catch(err => console.error(err))

const fetchUsers = async () => {
    try {
        const response = await fetch(usersAPI)
        const usersData = await response.json()

        let users = []
        for(let i = 0; i < usersData.length; i++){
            users.push({ 
                        name: usersData[i].name, 
                        username: usersData[i].username,
                        email: usersData[i].email,
                        city:  usersData[i].address.city,
                        phone:  usersData[i].phone,
                        company: usersData[i].company.name
                    })
        }
        console.log(users)
    } catch (e) {
        console.log(e.name)
        console.log(e.message)
    }
}

fetchUsers() 
//1. Create an object literal called personAccount. 
// It has firstName, lastName, incomes, expenses properties and it has
//  totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//  Incomes is a set of incomes and its description and expenses is a set of incomes and its description.


const personAccount = {
    
    fisrtName: "Clarence Jake",
    lastName: "Bonilla",
    incones: "Paycheck",
    expenses: [
        {description: "Nitro Subscription", amount: 267},
        {description: "Spotify Subscription", amount: 169},
        {description: "Bills", amount: 8800},
        {description: "Food", amount: 5000},
        {description: "Me", amount: 5000}
    ],
  totalIncome: 30000,
  totalExpense: 19236,
  accountInfo: {
    accountNumber: "123456789",
    email: "CJB@example.com",
    balance: 10764
  },
  addIncome: "None",
  addExpense: "None",
  accountBalance: function()
  {
      const currBalance = this.totalIncome - this.totalExpense
      return `Mr. ${this.lastName} your current balance is ${currBalance}`
  }
  }

console.log(personAccount.accountBalance())

//2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

// Imagine you are getting the above users collection from a MongoDB database.
//  a. Create a function called signUp which allows user to add to the collection.
//  If user exists, inform the user that he has already an account.
//  b. Create a function called signIn which allows user to sign in to the application


    const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

const signUp = () =>
{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
    const date = new Date()
    const year = date.getFullYear()
    const months = date.getMonth() + 1
    const day = date.getDate()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    let id = ''
    const newUser = {}
    
    for(let i = 0; i < 6; i++)
    {
        const randomId = Math.floor(Math.random() * letters.length)
        id+=letters[randomId]
    }
    
    const username = prompt("Enter username");
    const useremail = prompt("Enter email").toLowerCase();
     
     for(let i = 0; i < users.length; i++)
     {
         if(users[i].email === useremail)
         {
             return 'This user is already existed'
         }
     }
    
    const password = prompt("Enter password");
    const serverDate = `${months}/${day}/${year} ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}`;
    const isLoggedIn = false;
    
    
    newUser._id = id
    newUser.username = username
    newUser.email = useremail
    newUser.password = password
    newUser.createdAt = serverDate
    newUser.isLoggedIn = isLoggedIn
    
    users.push(newUser)
    
    return users
    
}

const signIN = () =>
{
    const accEmail = prompt('Enter your email Address').toLowerCase()
    

         for(let i = 0; i < users.length; i++)
         {
              
             if(users[i].email === accEmail)
             {
                const userPass =  prompt('Enter your password').toLowerCase()
                
                if(users[i].email === accEmail && users[i].password === userPass)
                {
                     return `Login Successfully`
                } 
                else
                {
                    return `Incorrect Password`
                }
                
             }
         }
         
         return 'Account does not exist'
}

console.log(signIN())
console.log(signUp()) 


//The products array has three elements 
// and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 

const rateProduct = () =>
{
    const userRatings = {}
    const userIdData = prompt('Enter your userid')
    const userRate =  Number(prompt('Enter your rate'))
    const productName = prompt('Enter your userid')
    
    userRatings.userId = userIdData
    userRatings.rate = userRate
    
    
    for(let i = 0; i < products.length; i++)
    {
        if(products[i].name.toLowerCase() === productName.toLowerCase())
        {
           products[i].ratings.push(userRatings)
           return products[i]
        }
        else
        {
            return 'that product is not available'
        }
    }
    
}
console.log(rateProduct())

//Create a function called likeProduct. 
// This function will helps to like to the 
// product if it is not liked and remove like if it was liked.


const likeProduct = () =>
{
    const userId = prompt('Enter your username')
    
    for(let i = 0; i < products.length; i++)
    {
        const likeProduct = prompt(`Do you like this ${products[i].name}?`, 'Answer yes or no')
        
        if(likeProduct.toLowerCase() === 'yes')
        {
            products[i].likes.push(userId)
        } else if (likeProduct.toLowerCase() === 'no')
        {
            return `test`
        } else
        {
            return `Invalid response`
        }
    }
    return products
}

console.log(likeProduct())






















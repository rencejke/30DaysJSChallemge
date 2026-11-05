const firstName  = document.querySelector('.first-name');
const lastName  = document.querySelector('.last-name');
const country  = document.querySelector('.country');
const score  = document.querySelector('.score');
const validation  = document.querySelector('.validation');
const addPlayer = document.querySelector('.add-player');
const leaderboardDataWrapper = document.querySelector('.leaderboard-data-wrapper');

validation.innerHTML = '';
let users = [];

//initialize data from the saved data from local storage
let savedUsersLocal = localStorage.getItem('users');
users = JSON.parse(savedUsersLocal) || [];

const validate = () =>{

    if(firstName.value.trim() === '' || lastName.value.trim() === '' || 
        country.value.trim() === '' || score.value.trim() === ''){
        validation.innerHTML = 'All Fields Are Required';
    }else{
        validation.innerHTML = '';
         userIdGenerator();
    }
    
}

const getCurrentDate = ()=>{

const date = new Date()
const months = [
  'Jan', 'Feb', 'Mar', 'Apr',
  'May', 'Jun', 'Jul', 'Aug',
  'Sep', 'Oct', 'Nov', 'Dec'
];

const currentMonth = date.getMonth()
const currentYear = date.getFullYear()
const currentDay = date.getDate()
const currentHours = date.getHours()
const currentMinutes = date.getMinutes()
const currentSeconds = date.getSeconds()

let formattedDate = `${months[currentMonth] + ' ' + currentDay + ', ' + currentYear} ${currentHours < 10 ? '0' + currentHours : currentHours}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}:${currentSeconds}`

return formattedDate

}
const userIdGenerator = () =>{

const characters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z',  '0', '1', '2', '3',
  '4', '5', '6', '7', '8', '9'
];

const numberOfCharacters = 6;
let id = 'USR-';

for(let i = 0; i < numberOfCharacters; i++){

    const random =  Math.floor(Math.random() * characters.length);
    id+=characters[random]; 
}
      console.log('Generated ID:', id);
      addUser(id);
}
const addUser = (id) =>{
    const checkUser = users.some((user) => user.id === id)
   
    if(checkUser){
        userIdGenerator;
        return;
    }

    const newUser = {
         'id': id,
         'fullName': firstName.value + ' ' + lastName.value,
         'dateAdded': getCurrentDate(),
         'country': country.value,
         'score': Number(score.value)
    };

    console.log('Before push:', users);
    users.push(newUser);
    console.log('After push:', users);

    renderLeaderboard();
    saveLocalUser();

    firstName.value = '';
    lastName.value = '';
    country.value = '';
    score.value = '';
}

const saveLocalUser = () => {
    const userJSON = JSON.stringify(users, undefined, 4);
    localStorage.setItem('users', userJSON);
    console.log(localStorage);
}

const renderLeaderboard = () =>{

if(users.length === 0){
    leaderboardDataWrapper.innerHTML = 'NO DATA FOUND';
    return;
}

//sort users: highest score to lowest
let sortedUsers = users.toSorted((a, b) => b.score - a.score);

leaderboardDataWrapper.innerHTML =
      sortedUsers.map(({id, fullName, dateAdded, country, score})=>`
            <div class="leaderboard-data-row" data-user-id=${id}>
                <div class="leaderboard-data-row-name-date">
                    <div class="name-and-date-wrapper">
                    <p>${fullName}</p>
                    <p>${dateAdded}</p>
                    </div>
                </div>
                <div class="leaderboard-country-country">
                <p class="country">${country}</p>
                </div>
                <div class="leaderboard-country-score">
                <p class="score-data">${score}</p>
                </div>
                <div class="leader-data-buttons">
                    <button class="leader-data-buttons-delete"><i class="fa-solid fa-trash"></i></button>
                    <button class="leader-data-buttons-plus-five">+5</button>
                    <button class="leader-data-buttons-minus-five">-5</button>
                </div>
            </div>
      `).join('');
}
const updateUserScore = (event) =>{
    let matchRow = event.target.closest('.leaderboard-data-row');
    console.log('Update score triggered');

    const userClicked =  users.find((user) => user.id === matchRow.dataset.userId);
    //console.log(userClicked);

   if (event.target.closest('.leader-data-buttons-plus-five')) {
        userClicked.score += 5;
    } else if (event.target.closest('.leader-data-buttons-minus-five')) {
        userClicked.score -= 5;
    } else if (event.target.closest('.leader-data-buttons-delete')) {
        deleteUser(userClicked.id);
    }
    saveLocalUser();
    renderLeaderboard();
}
const deleteUser = (id) =>{
    users = users.filter((user)=> user.id !== id);
    console.log(`Deleted ${id}`);
    saveLocalUser();
    renderLeaderboard();
}

leaderboardDataWrapper.addEventListener('click', (event) => {
    updateUserScore(event);
});
addPlayer.addEventListener('click', ()=>{
    validate();
})



renderLeaderboard();







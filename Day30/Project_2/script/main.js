const firstNameInput = document.querySelector('#fname');
const lastNameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const telephoneInput = document.querySelector('#telephone');
const form = document.querySelector('#form');

const validateName = (name) =>{
//get the specific input field form validation
//looks like this 
//form-row (parent element) -> label -> input field (name) -> form-validation  
const validation = name.parentElement.querySelector('.form-validation'); 

//get the specific label based on the input field
const label = document.querySelector(`label[for="${name.id}"]`);
const regExPattern = /^[a-z\sA-Z-']{3,16}$/;
const inputValue = name.value;
/*
para i-validate ang name. it only accepts lang ng 
 uppercase at lowercase letters, spaces, hyphens (-), at single quotes ('). 
 Dapat may minimum na 3 at maximum na 16 characters ang input.
*/
const checkPatternName = regExPattern.test(inputValue);

if(inputValue.trim() === ''){
     validation.innerHTML = `${label.textContent} is empty`
     return false;
}
else if(!checkPatternName){
    validation.innerHTML = `${label.textContent} must be alphanumeric and contain 3 - 16 characters`
}else{
    validation.innerHTML = '';
}
return checkPatternName;
}
const validateEmail = (email) =>{

const regExPattern = /^[A-Za-z0-9][A-Za-z0-9._+-]*@[A-Za-z0-9-]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;
//format sample: test@gmail.com
//optional sample format: test@gmail.co.uk (.uk is optional)

// ^                  = Start of the string
// [A-Za-z0-9]       = First character must be a letter or number
// [A-Za-z0-9._+-]*  = Remaining characters can contain letters,
//                     numbers, periods, underscores, hyphens, and plus signs
//                     (* = zero or more characters)
// @                  = Requires exactly one @ separator
// [A-Za-z0-9-]+      = Domain: letters, numbers, hyphens 
//                      (+ = allowed one or more characters)
// \.                 = Requires a literal period
// [A-Za-z]{2,}       = Extension: at least 2 letters
// (\.[A-Za-z]{2,})?  = Optional additional extension
// $                  = End of the string

//without ^ and $ the regex only validates the portion of the input


const validation = email.parentElement.querySelector('.form-validation'); 
const inputValue = email.value;
const checkPatternEmail = regExPattern.test(inputValue);

if(inputValue.trim() === ''){
     validation.innerHTML = `Email is empty`
     return false;
}
else if(!checkPatternEmail){
    validation.innerHTML = `Email must be a valid address. e.g. example@example.com`
}else{
    validation.innerHTML = '';
}
return checkPatternEmail;
} 

form.addEventListener('submit', (event)=>{

event.preventDefault();

validateName(firstNameInput);   
validateName(lastNameInput);   
validateEmail(emailInput);
})







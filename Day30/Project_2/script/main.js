const firstNameInput = document.querySelector('#fname');
const lastNameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const telephoneInput = document.querySelector('#telephone');
const bioInput = document.querySelector('#bio');
const form = document.querySelector('#form');
const formSubmit = document.querySelector('#submit');

 
const validateName = (name) =>{
//get the specific input field form validation
//looks like this 
//form-row (parent element) -> label -> input field (name) -> form-validation  
const validation = name.parentElement.querySelector('.form-validation'); 

//get the specific label based on the input field
const label = document.querySelector(`label[for="${name.id}"]`);
const regExPattern = /^[a-z\sA-Z'-]{3,16}$/;
const inputValue = name.value;
/*
para i-validate ang name. it only accepts lang ng 
 uppercase at lowercase letters, spaces, hyphens (-), at single quotes ('). 
 Dapat may minimum na 3 at maximum na 16 characters ang input.
*/
const checkPatternName = regExPattern.test(inputValue);
changeInputBorderStyle(checkPatternName, name);
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
changeInputBorderStyle(checkPatternEmail, email);

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
const validatePassword = (password)=>{
const regExPattern = /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@_-])[A-Za-z0-9@_-]{6,20}$/;

/*
(?=.*[A-Za-z]) — at least one letter.
(?=.*[0-9]) — at least one number.
(?=.*[@,_-]) — at least one allowed special character.
[A-Za-z0-9@,_-]{6,20} — only allowed characters, 6–20 characters total.
*/

const validation = password.parentElement.querySelector('.form-validation');
const inputValue = password.value;

const checkPatternPassowrd = regExPattern.test(inputValue);
changeInputBorderStyle(checkPatternPassowrd, password);

if(inputValue.trim() === ''){
     validation.innerHTML = `Password is empty`
     return false;
}
else if(!checkPatternPassowrd){
    validation.innerHTML = 'Password must be 6–20 characters, contain at least one letter, one number, and one special character (@, _ or -), and use only allowed characters.'
}else{
    validation.innerHTML = '';
}
return checkPatternPassowrd;

}
const validateTelephone = (tel) =>{

const regExPattern = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/
const validation = tel.parentElement.querySelector('.form-validation');
const inputValue = tel.value;
const checkPatternTelephone = regExPattern.test(inputValue);
changeInputBorderStyle(checkPatternTelephone, tel);

if(inputValue.trim() === ''){
     validation.innerHTML = `Telephone is empty`
     return false;
}
else if(!checkPatternTelephone){
    validation.innerHTML = `A valid Telephone number (10 digits and 333-333-3334)`
}else{
    validation.innerHTML = '';
}

return checkPatternTelephone;

}
const validateBio = (bio) =>{

const regExPattern = /^[a-z _-]{8,50}$/;
const inputValue = bio.value;
const checkPatternBio = regExPattern.test(inputValue);
const validation = bio.parentElement.querySelector('.form-validation');
changeInputBorderStyle(checkPatternBio, bio);

if(inputValue.trim() === ''){
     validation.innerHTML = `Bio is empty`
     return false;
}
else if(!checkPatternBio){
    validation.innerHTML = 'Bio must contain only lowercase letters, underscores(_), hyphens(-) and be 8 - 50 characters'
}else{
    validation.innerHTML = '';
}

return checkPatternBio;

}
const changeInputBorderStyle = (validate, inputField) =>{
 
    if(validate){
        inputField.style.border = '2px solid #21BF73'
    }else{
         inputField.style.border = '2px solid red'
    }

}
const checkFormValidity = () =>{
    const isFormValid  = [validateName(firstNameInput), validateName(lastNameInput),  validateEmail(emailInput), validatePassword(passwordInput), 
    validateTelephone(telephoneInput), validateBio(bioInput)].every((checkForm)=> checkForm === true)

    if(isFormValid){
        formSubmit.style.backgroundColor = '#21BF73'
    }else{
       formSubmit.style.backgroundColor = '#000'
    }

    return isFormValid;
}
firstNameInput.addEventListener('blur', ()=>{
    checkFormValidity();
});
lastNameInput.addEventListener('blur', ()=>{

    checkFormValidity();
});
emailInput.addEventListener('blur', ()=>{
    checkFormValidity();
});
passwordInput.addEventListener('blur', ()=>{  
    checkFormValidity();
});
telephoneInput.addEventListener('blur', ()=>{
    checkFormValidity();
});
bioInput.addEventListener('blur', ()=>{
    checkFormValidity();
});
form.addEventListener('submit', (event)=>{

if(!checkFormValidity()){
    event.preventDefault(); 
}
});






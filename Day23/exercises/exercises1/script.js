const numberGenInput = document.querySelector('#numberGen')
const genButton = document.querySelector('button')
const validationAlert = document.querySelector('.alert')
let numberWrapper = document.querySelector('.numberWrapper')

genButton.addEventListener('click', (e)=>{
    //console.log(numberGenInput.value)
    let isPrime;

    numberWrapper.innerHTML = ""

    if(numberGenInput.value === "")
    {
        validationAlert.textContent = 'Enter a number on the input field to generate numbers'   
        validationAlert.style.color = 'red'    
    }else if(!Number(numberGenInput.value.trim()) && !(Number(numberGenInput.value) === 0)) {
        validationAlert.textContent = 'Input must be a number'    
        validationAlert.style.color = 'red'   
    } else {
        validationAlert.textContent = ""  
    for(let i = 0; i <= numberGenInput.value; i++)
    {
        const numbers = document.createElement('p')

        numbers.textContent = i
        numberWrapper.appendChild(numbers)
        
        i < 2 ? isPrime = false : isPrime = true
        
        for(j = 2; j * j <= i; j++){
             if(i % j === 0 ){

             isPrime = false;
             break;
             
        }
    }

    if(isPrime){
      numbers.style.backgroundColor = '#E11A45'
    } else if(i % 2 === 0) {
      numbers.style.backgroundColor = '#66BB6A'
    } else{
       numbers.style.backgroundColor = '#EDC92C'
    }
}}  

});





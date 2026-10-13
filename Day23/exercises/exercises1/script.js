const numberGenInput = document.querySelector('#numberGen')
const genButton = document.querySelector('button')



genButton.addEventListener('click', (e)=>{
    //console.log(numberGenInput.value)
  

    for(let i = 0; i <= numberGenInput.value; i++)
    {
        const numbers = document.createElement('p')
        let numberWrapper = document.querySelector('.numberWrapper')
   
        numbers.textContent = i
        numberWrapper.appendChild(numbers)
    }
})




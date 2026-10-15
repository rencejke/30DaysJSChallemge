const wrapper = document.querySelector('.wrapper')
const keys = document.querySelector('.keys')
const keyCodePara = document.createElement('p')


document.body.addEventListener('keypress', (e)=>{
    keys.innerHTML = `You pressed <span>${e.key}</span>`
    const span = document.querySelector('span')
    span.style.color = '#4A943E'
    
    keyCodePara.innerHTML = e.keyCode
    keyCodePara.style.backgroundColor = 'white'
    keyCodePara.style.color = '#4A943E'
    keyCodePara.style.margin = '0'
    keyCodePara.style.fontSize = '70px'
    keyCodePara.style.padding = '50px'
    keyCodePara.style.boxShadow = '2px 3px 8px rgba(0, 0, 0, 0.4)'
    keyCodePara.style.textShadow = '2px 3px 0 #000';   
    wrapper.appendChild(keyCodePara)
})
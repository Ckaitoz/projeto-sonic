const sonic = document.querySelector('.sonic')
const esp = document.querySelector('.espinho')

const jump = () => {
    sonic.classList.add('jump')
    
    
    setTimeout(() => {
        sonic.classList.remove('jump')
    },500)
}

const loop = setInterval(() => {

    const espPosition = esp.offsetLeft
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '')

    if(sonicPosition > 0){
        sonic.src = 'image/spinning.gif'
    }else{
        
    }
    if(espPosition <= 120 && espPosition > 0 && sonicPosition < 80){
        esp.style.animation = 'none'
        esp.style.left = `${espPosition}px`

        sonic.style.animation = 'none'
        sonic.style.bottom = `${espPosition}px`

        sonic.src = 'image/game-over.webp'
        sonic.style.width = '150px'
        sonic.style.marginLeft = '50px'
        
        clearInterval(loop)
        
    }

    
},10)



document.addEventListener('keydown',jump)

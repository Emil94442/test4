const button = document.querySelector('button.es')

const p = document.querySelector('li')

const div = document.querySelector('.new')

const button2 = document.querySelector('button.no')
/////////////////////////////////////////////////////////

button.addEventListener('click' , () => {
    pFunCT(div)
})




let booler = false
button.addEventListener('click' , () => {
    if (booler === false) {
        booler = true
    } else {
        booler = false
    }
})




function pFunCT(hr) {
    if (booler === false) {
        hr.style.color = 'red'
        hr.style.textShadow = '0 0 20px black , 0 0 20px black'
    } else {
        hr.style.color = 'black'
        hr.style.textShadow = 'none'
    }
} 

//////////////////////////////////////////////////////////////


button2.addEventListener('click' , () => {
    pFunCT2(div)
})

let booler2 = false
button2.addEventListener('click' , () => {
    if (booler2 === false) {
        booler2 = true
    } else {
        booler2 = false
    }
})



function pFunCT2(hr) {
    if (booler2 === false) {
        hr.style.color = 'blue'
        hr.style.textShadow = '0 0 20px black , 0 0 20px black'
    } else {
        hr.style.color = 'black'
        hr.style.textShadow = 'none'
    }
} 
/*
function pFunCT2(hr) {
    if (hr.style.color === 'red') {
        
    } else {
        hr.style.color = 'black'
        hr.style.textShadow = 'none'
    }
} 
*/

/*
function pFunCT(hr) {
    if (hr.style.color === 'black') {
        hr.style.color = 'red'
        hr.style.textShadow = '0 0 20px black , 0 0 20px black'
    } else {
        hr.style.color = 'black'
        hr.style.textShadow = 'none'
    }
} 
*/


/*
button.addEventListener('click' , () => {
    if (booler === true) {
        button.classList.add = 'new'
    } else {
        button.classList.remove = 'new'
    }
})
*/










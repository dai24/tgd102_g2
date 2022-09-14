let applyForOpen = document.getElementById('applyForOpen')
let applyForClose = document.getElementById('applyForClose')
let applyForInner = document.getElementById('applyForInner')
let applyForCard = document.getElementById('applyForCard')
let applyForSubmit = document.getElementById('applyForSubmit')

applyForOpen.addEventListener('click', function(){
    if(applyForInner.style.display === 'block'){
        console.log('123');
        applyForInner.style.display = 'none'
        applyForCard.style.display = 'none'
    }else{
        applyForInner.style.display = 'block'
        applyForCard.style.display = 'block'
    }
})

applyForInner.addEventListener('click', function(){
    if(applyForInner.style.display === 'none'){
        applyForInner.style.display = 'block'
        applyForCard.style.display = 'block'
    }else{
        applyForInner.style.display = 'none'
        applyForCard.style.display = 'none'
    }
})

applyForClose.addEventListener('click', function(){
    if(applyForInner.style.display === 'block'){
        applyForInner.style.display = 'none'
        applyForCard.style.display = 'none'
    }else{
        applyForInner.style.display = 'block'
        applyForCard.style.display = 'block'
    }
})

applyForSubmit.addEventListener('click', function(){
    if(applyForInner.style.display === 'block'){
        applyForInner.style.display = 'none'
        applyForCard.style.display = 'none'
    }else{
        applyForInner.style.display = 'block'
        applyForCard.style.display = 'block'
    }
})
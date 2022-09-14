let saveApplyOpen = document.getElementsByClassName('saveApplyOpen')
let saveApplyClose = document.getElementById('saveApplyClose')
let saveApplyInner = document.getElementById('saveApplyInner')
let saveApplyCard = document.getElementById('saveApplyCard')
let saveApplySubmit = document.getElementById('saveApplySubmit')

for(let i = 0; i < saveApplyOpen.length; i++){
    saveApplyOpen[i].addEventListener('click', function(){
    if(saveApplyInner.style.display === 'block'){
        console.log('123');
        saveApplyInner.style.display = 'none'
        saveApplyCard.style.display = 'none'
    }else{
        saveApplyInner.style.display = 'block'
        saveApplyCard.style.display = 'block'
        }
    })
}


saveApplyInner.addEventListener('click', function(){
    if(saveApplyInner.style.display === 'none'){
        saveApplyInner.style.display = 'block'
        saveApplyCard.style.display = 'block'
    }else{
        saveApplyInner.style.display = 'none'
        saveApplyCard.style.display = 'none'
    }
})

saveApplyClose.addEventListener('click', function(){
    if(saveApplyInner.style.display === 'block'){
        saveApplyInner.style.display = 'none'
        saveApplyCard.style.display = 'none'
    }else{
        saveApplyInner.style.display = 'block'
        saveApplyCard.style.display = 'block'
    }
})

saveApplySubmit.addEventListener('click', function(){
    if(saveApplyInner.style.display === 'block'){
        saveApplyInner.style.display = 'none'
        saveApplyCard.style.display = 'none'
    }else{
        saveApplyInner.style.display = 'block'
        saveApplyCard.style.display = 'block'
    }
})
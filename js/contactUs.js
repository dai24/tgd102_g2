let contactUsOpen = document.getElementById('contactUsOpen')
let contactUsClose = document.getElementById('contactUsClose')
let contactUSInner = document.getElementById('contactUSInner')
let contactUSCard = document.getElementById('contactUSCard')
let contactUsSubmit = document.getElementById('contactUsSubmit')

contactUsOpen.addEventListener('click', function(){
    if(contactUSInner.style.display === 'block'){
        console.log('123');
        contactUSInner.style.display = 'none'
        contactUSCard.style.display = 'none'
    }else{
        contactUSInner.style.display = 'block'
        contactUSCard.style.display = 'block'
    }
})

contactUSInner.addEventListener('click', function(){
    if(contactUSInner.style.display === 'none'){
        contactUSInner.style.display = 'block'
        contactUSCard.style.display = 'block'
    }else{
        contactUSInner.style.display = 'none'
        contactUSCard.style.display = 'none'
    }
})

contactUsClose.addEventListener('click', function(){
    if(contactUSInner.style.display === 'block'){
        contactUSInner.style.display = 'none'
        contactUSCard.style.display = 'none'
    }else{
        contactUSInner.style.display = 'block'
        contactUSCard.style.display = 'block'
    }
})

contactUsSubmit.addEventListener('click', function(){
    if(contactUSInner.style.display === 'block'){
        contactUSInner.style.display = 'none'
        contactUSCard.style.display = 'none'
    }else{
        contactUSInner.style.display = 'block'
        contactUSCard.style.display = 'block'
    }
})
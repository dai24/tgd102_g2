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

$(function () {
let textMax = $('#talk').attr('maxlength')
$('#feedback').html(` <span style="color:#c1c1c1";> ${textMax} </span> / 200`)
$('#talk').keyup(function(){
    let textLength = $('#talk').val().length
    $('#feedback').html(` <span style="color:#c1c1c1";> ${textMax - textLength} </span> / 200`)
})

// console.log(textLength);
});
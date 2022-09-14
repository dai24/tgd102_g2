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

$('.resume_zoom_browser_btn').on('click', function () {
    $('.jobMainWrapper').append(resume_zoome_browser)     
    $('.m-a-s-k').show()
    console.log('123');
    // 履歷範本放大關閉
    $('.m-a-s-k').on('click', function(){
        $(this).hide()
        $('.resume_zoom_imggg').hide()
    })
    
})

let resume_zoome_browser = `
    <div class="m-a-s-k"></div>
    <div class="resume_zoom">
    <img src="../images/resume/resume_1.jpg" class='resume_zoom_imggg'>
    </div> 
`
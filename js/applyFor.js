let applyForOpen = document.getElementById('applyForOpen')
let applyForClose = document.getElementById('applyForClose')
let applyForInner = document.getElementById('applyForInner')
let applyForCard = document.getElementById('applyForCard')
let applyForSubmit = document.getElementById('applyForSubmit')
let resume_zoom_browser_btn = document.getElementsByClassName('resume_zoom_browser_btn')

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


// let resume_zoome_browser = `
//     <div class="m-a-s-k"></div>
//     <div class="resume_zoom">
//     <img src="../images/resume/resume_1.jpg" class='resume_zoom_imggg'>
//     </div> 
// `

// $('.resume_zoom_browser_btn').on('click', function (e) {
//     console.log('.resume_zoom_browser_btn');
//     $('.jobMainWrapper').append(resume_zoome_browser)     
//     $('.m-a-s-k').show()
//     // console.log('123');
//     $('.m-a-s-k').on('click', function(){
//         // console.log('123');
//         $('.m-a-s-k').hide()
//         $('.resume_zoom_imggg').hide()
//         // e.preventDefault();
//         // closeWindow();
//     })
// })




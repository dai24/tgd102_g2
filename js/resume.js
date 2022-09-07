$(function () {
    // 履歷製作按鈕連結
    // $('#resume_btn').on('click', function () {
    //    location.href = "../resume_work_space.html"
    // })
 
    // 履歷範本分類按鈕(未完成)
    $('.btna13').on('click', function () {
       $('.btna13').css('background-color', 'rgba(255, 255, 255, 0)').css('color', '#313131')
       $(this).css('background-color', '#EAA565').css('color', '#FFFFFF')
    })
 
    // 頁碼
    $('.pagination-ul a').on('click', function () {
       $('.pagination-ul a').css('color', '#313131')
       $(this).css('color', '#EAA565')
    })
 
    // 履歷範本放大
    $('.resume_zoom_btn').on('click', function () {
       let img_src = $(this).parents('.resume_card').children("img").attr('src')
       $('.m-a-s-k').show()
       $('.m-a-s-k img').attr('src',img_src)
    })

    // 履歷範本放大關閉
    $('.resume_zoom .fa-xmark').on('click', function () {
       console.log('123')
       $('.m-a-s-k').hide()
    })
    
    // 打開關閉履歷模組視窗
    $('#resume_model-btn').on('click', function () {
       $('.resume_model-border').toggle('blind',{percent: 50},500 )
 
    })
 
    // RWD 關閉履歷模組視窗
    $('.xmark_btn').on('click', function () {
       $('.resume_model-border').toggle('blind',{percent: 50},500 )
 
    })
   
 
 })
 
 // new Vue({
 //    el: '#app',
 //    data: {     // 變數放這裡
 //    }
 // })
$(function () {
   // 履歷製作按鈕連結
   $('#resume_btn').on('click', function () {
      location.href = "../resume_work_space.html"
   })

   // 履歷範本分類按鈕(未完成)
   $('.btn13').on('click', function () {
      $('.btn13').css('background-color', 'rgba(255, 255, 255, 0)').css('color', '#313131')
      $(this).css('background-color', '#EAA565').css('color', '#FFFFFF')
   })

   // 頁碼
   $('.pagination-ul a').on('click', function () {
      $('.pagination-ul a').css('color', '#313131')
      $(this).css('color', '#EAA565')
   })

   // 履歷放大
   $('.resume_zoom_btn').on('click', function () {
      let img_src = $(this).parents('.resume_card').children("img").attr('src')

   })

   // 打開關閉履歷模組
   $('#resume_model-btn').on('click', function () {
      $('.resume_model-border').toggle('blind',{percent: 50},500 )

   })

})

// new Vue({
//    el: '#app',
//    data: {     // 變數放這裡
//    }
// })
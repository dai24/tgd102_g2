$(function(){
   // 履歷製作按鈕連結
   $('#resume_btn').on('click',function(){
      location.href = "../resume_work_space.html"
   })

   // 履歷範本分類按鈕(未完成)
   $('.btn13').on('click',function(){
      $(this).css('background-color','#EAA565').css('color','#FFFFFF')
   })
   
})

// new Vue({
//    el: '#app',
//    data: {     // 變數放這裡
//    }
// })
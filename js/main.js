function f(p1 , p2){
   return p1 * p2 
}

console.log(f(10 , 20));

$(function(){
   // 履歷製作按鈕連結
   $('#resume_btn').on('click',function(){
      location.href = "../resume_work_space.html"
   })

   // 履歷範本分類按鈕(未完成)
   // let category = document.getElementsByClassName('btn13');
   // for(let i = 0; i < category.length; i++){
   //    category[i].addEventListener('click',function(){
   //       console.log(category[i])
   //       $(this).css('background-color','#EAA565').css('color','#FFFFFF')
   //    })
   // }
   $('.btn13').on('click',function(){
      $(this).css('background-color','#EAA565').css('color','#FFFFFF')
   })
   
})
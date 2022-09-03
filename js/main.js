function f(p1 , p2){
   return p1 * p2 
}

console.log(f(10 , 20));

$(function(){
   let category = document.getElementsByClassName('btn13');
   for(let i = 0; i < category.length; i++){
      category[i].addEventListener('click',function(){
         console.log(category[i])
         $(this).css('background-color','#EAA565').css('color','#FFFFFF')
      })
   }
   
})
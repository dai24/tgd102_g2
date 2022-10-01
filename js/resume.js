$(function () {

   // 頁碼
   $('.pagination-ul a').on('click', function () {
      $('.pagination-ul a').css('color', '#313131')
      $(this).css('color', '#EAA565')
   })

  
})


// 分頁
Vue.component('my-pagination',{
   data() {
       return {
           
       }
   },
   methods:{
       
   },
   computed:{

   },
   template:
   `
   <div class="pagination-div">
       <ul class="pagination-ul">
           <li><a href="#"><i class="fa-solid fa-chevron-left"></i></a></li>
           <li v-for="num in 5"><a href="#">{{num}}</a></li>
           <li><a href="#"><i class="fa-solid fa-chevron-right"></i></a></li>
       </ul>
   </div>
   `,
  })

   Vue.component('my-resume_sample', {
      
       data() {
           return {
               count: 0,
               resume_sample: [],
               imgURL:'',
               isPopup: false,
               like_count:0,
               Student_id:0,
               categorys: ['全部', '設計', '工程', '管理', '媒體', '銷售', '金融', '行政', '科技', '服務'],
               current:'全部',
           }
       },
       methods: {
           open(imgurl) {
               this.imgURL = imgurl                    
               this.isPopup = true
               console.log( this.imgURL)
           },
           close() {
               this.isPopup = false
           },
           clickLike(likeCount,sId,id){
            console.log(likeCount)
               fetch(`./php/updateResume.php?id=${id}&studentId=${sId}&likeCount=${likeCount}`)
               .then(rsp => rsp.json())
               .then(updateSample => {
                   this.resume_sample = updateSample;
               })
           },
           clickCategory(category){
               this.current = category;
               fetch(`./php/getResume_sample_All.php?category=${category}`)
               .then(rsp => rsp.json())
               .then(updateResume_sample => {
                   this.resume_sample = updateResume_sample;
               })
           }
          
       },
       mounted() {
           
           fetch('./php/getResume_sample_All.php')
               .then(rsp => rsp.json())
               .then(resume_sample => {
                   this.resume_sample = resume_sample;
                   // console.log(resume_sample)
               })

       },
       template:
           `   
           <div>
               <div class="row category">
                   <div v-for="category in categorys" class="col-1">
                       <button class="btna13" @click="clickCategory(category)" :class="{'categoryBtn':current === category}">{{category}}</button>
                   </div>
               </div>
               <div class="row resume_sample_row">         
                   <div class="col" v-for="resume in resume_sample">
                       <div class="resume_card">
                           <img :src='resume.IMG_PATH' class="" alt="resume_1">
                           <div class="card_body">
                               <div class="row">
                                   <div class="col-2"><button @click="clickLike(resume.LIKE_COUNT+=1,resume.STUDENT_ID,resume.ID)" class="fa-solid fa-heart"></button></div>
                                   <div class="col-1 align-self-center"><span>{{resume.LIKE_COUNT}}</span></div>
                                   <div class="offset-7 col-1">
                                       <button class="resume_zoom_btn" @click="open(resume.IMG_PATH)" >
                                           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                                               fill="currentColor" class="bi bi-box-arrow-up-right"
                                               viewBox="0 0 16 16">
                                               <path fill-rule="evenodd"
                                                   d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                               <path fill-rule="evenodd"
                                                   d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                           </svg>
                                       </button>
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                   </div>
                   <div v-if="isPopup">
                       <div class="m-a-s-k" @click="close"></div>
                       <div class="resume_zoom">
                           <button class=""><i class="fa-solid fa-xmark" @click="close"></i></button>
                           <img :src="imgURL">
                       </div>
                   </div>
               </div>
           </div>
           `
   })

   
   new Vue({
       el: '#resume',
       data: {
          

       },
       methods: {
          checkMember(e){
           // e.preventDefault()
           const StudentId = sessionStorage.getItem('StudentId')
           
           if(StudentId != null){
               location.href = './resume_work_space.html'
           }else{
               let ckeck = confirm("請先登入會員")
               
               if(ckeck == true){
                   location.href = './student_login.html'
               }else{

               }
               
           }
          }
           
       },

   })






 //打開/關閉子選單
 let consultantIndustrySearch = document.querySelector(".consultantIndustrySearch");  
 let categoryCurrent = consultantIndustrySearch.firstElementChild;
 let consultantIndustry = document.querySelector(".searchItem"); 
 let category = consultantIndustry.querySelectorAll("button"); //找到所有子選單選項
 // console.log(category);
 // console.log(categoryCurrent.innerText);
 let currentCategory = consultantIndustrySearch.firstElementChild;
 consultantIndustrySearch.addEventListener("click", () => {
     consultantIndustry.classList.toggle("-on");
     if(consultantIndustry.classList.contains("-on")){
         consultantIndustry.style.display = "block";
     }else{
         consultantIndustry.style.display = "none";
     }

     for(let i = 0; i <category.length; i++ ){
         category[i].addEventListener("click", e => {
             categoryCurrent.innerText = e.target.innerHTML;
             categoryCurrent.insertAdjacentHTML("beforeend", `
                 <i class="fa-solid fa-chevron-down"></i>
             `)
         })
     }
 })

//--------------------------------------------

Vue.component('teacher-data',{
    data(){
        return{
            teacherData:[],
        }       
    },
    methods: {
        
    },
    mounted() {
        //顯示履歷導師的資料
        fetch(`./php/resumeReview.php`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            this.teacherData = userArr
            // console.log(this.teacherData) //確認有回傳資料
        })
    },
    updated() {
        // swiper套件---------------------
        var swiper = new Swiper(".mySwiper", {
            
            slidesPerView: 5,     //同時顯示的slides數量。auto則依 slide 大小來顯示
            spaceBetween: 30,     //slide的間距
            // autoplay: true,     //自動撥放
            // slideToClickedSlide: true,     //true時，則點擊slide會跑到這個slide。
            // centeredSlides: true,     //設定為true時，active slide會居中，而不是預設值的靠左。
            loop:true,     //設置 active slide 居中後，會有左右留白現象，添加此會讓未尾的導航補齊前後空白
            
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,

            // pagination: { //小圓點
            //   el: ".swiper-pagination",
            //   clickable: true,
            // },

            navigation: { //箭頭
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    },
    template:`
        <div class="swiper mySwiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="teachers in teacherData">
                    <a><img :src="teachers.img" alt="導師照片"></a>
                    <ul class="teacherInform">
                        <li><h3 class="tname">{{teachers.tname}}</h3></li>
                        <li><h4 class="major">{{teachers.tjobtitle}}</h4></li>
                        <li><h4 class="match">已健診人數：{{teachers.ttimes}}</h4></li>
                        <a href="#"><button class="btna21">詳細資料</button></a>
                    </ul>
                </div>
            </div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-pagination"></div>
        </div>
    `,
})

let vm = new Vue({
    el: `#backstage_resource_app`,
    template:`
        <teacher-data></teacher-data>
    `
})



 
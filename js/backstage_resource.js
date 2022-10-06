

//目標：從資料庫取得導師資訊
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
        fetch(`./php/resumeReview_all.php`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            this.teacherData = userArr.teacherList
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

Vue.component('')
let vm = new Vue({
    el: `#backstage_resource_teacher_app`,
    data:{        
        toggleAddTeacher:false, //打開彈窗。新增導師
        figure:'',
        tname:'',
        tschool:'',
        jobtitle:'',
        temail:'',
        tdescription:'',
        checkIndustry:[],
        industryList:"",
        checkSkill:[],
        skillList:"",
    },
    methods:{
        closeWindow(){ //關閉彈窗
            this.toggleAddTeacher = !this.toggleAddTeacher
        },
        changeFigure(e){
            const file = e.target.files[0]; 
            const reader = new FileReader();

            reader.readAsDataURL(file); 
            reader.addEventListener("load", () => {
                // console.log(reader.result)
                this.figure = reader.result
                // console.log(this.figure) //顯示新增的導師照片
            })      
            // console.log(this.figure)       
        },
        addTeacher(){ //新增導師
            const vm = this
            // console.log(this.tname) //顯示輸入的導師名稱
            // console.log(this.figure) //顯示導師照片
            // console.log(this.tschool) //顯示導師最高學歷
            // console.log(this.jobtitle) //顯示導師職業
            // console.log(this.temail) //顯示導師信箱
            // console.log(this.tdescription) //顯示導師簡介
            this.industryList = this.checkIndustry.join(" / ")            
            this.skillList = this.checkSkill.join(" / ")
            // console.log(this.industryList) //顯示導師擅長產業
            // console.log(this.skillList) //顯示導師擅長領域

            fetch("./php/backstage_addteacher.php",{
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({
                    tname:this.tname,
                    figure:this.figure,
                    school:this.tschool,
                    job:this.jobtitle,
                    email:this.temail,
                    descript:this.tdescription,
                    industry:this.industryList,
                    skill:this.skillList,
                })
            })    
            .then(rsp => rsp.json())
            .then(userArr => {})           
            this.toggleAddTeacher = !this.toggleAddTeacher
        },
        
        // imageLoaded(e) {
        //     this.figure = e.target.result; 
        //   },
    },
    template:`
    <div>
        <ul class="block" >
            <!-- 新增導師彈窗-->
            <div class="backstage_addTeacher" v-if="toggleAddTeacher">
                <div class="contactUSInner"></div>
                <div class="card3">
                    <ul class="cardUl">
                        <li>
                            <h1 class="cardH1">新增導師</h1>
                        </li>
                        <li>
                            <i class="fa-solid fa-xmark cardXmark" @click="closeWindow"></i>
                        </li>
                    </ul>
                    <div class="cardInner ">
                        <section class="input01">
                            <h2 class="question">導師名稱</h2>
                            <input class="inputText" v-model="tname" type="text" placeholder="請輸入導師姓名">
                        </section>

                        <section class="input01">
                            <h2 class="question">導師照片</h2>
                            <div class="teacherPhoto">
                                <input type="file" @change="changeFigure">
                                <img v-if="figure" :src="figure" alt="導師照片">
                            </div>
                        </section>

                        <section class="input01">
                            <h2 class="question">導師資料</h2>
                            <input  class="inputText school" type="text" v-model="tschool" placeholder="請輸入最高學歷">
                            <input  class="inputText" type="text" v-model="jobtitle" placeholder="請輸入導師職業">
                            <input  class="inputText" type="text" v-model="temail" placeholder="請輸入聯絡信箱">
                            <textarea v-model="tdescription"  placeholder="導師簡介"></textarea>
                        </section>

                        <section class="input01 industry">
                            <h2 class="question">導師擅長產業</h2>
                            <div class="industrywra">
                                <label><input type="checkbox" value="電子科技" v-model="checkIndustry"><h4>電子科技</h4></label>
                                <label><input type="checkbox" value="資訊" v-model="checkIndustry"><h4>資訊</h4></label>
                                <label><input type="checkbox" value="軟體" v-model="checkIndustry"><h4>軟體</h4></label>
                                <label><input type="checkbox" value="金融" v-model="checkIndustry"><h4>金融</h4></label>
                                <label><input type="checkbox" value="休閒" v-model="checkIndustry"><h4>休閒</h4></label>
                                <label><input type="checkbox" value="出版" v-model="checkIndustry"><h4>出版</h4></label>
                                <label><input type="checkbox" value="藝文相關" v-model="checkIndustry"><h4>藝文相關</h4></label>
                                <label><input type="checkbox" value="法律" v-model="checkIndustry"><h4>法律</h4></label>
                                <label><input type="checkbox" value="顧問" v-model="checkIndustry"><h4>顧問</h4></label>
                                <label><input type="checkbox" value="研發" v-model="checkIndustry"><h4>研發</h4></label>
                                <label><input type="checkbox" value="餐飲" v-model="checkIndustry"><h4>餐飲</h4></label>
                                <label><input type="checkbox" value="旅遊" v-model="checkIndustry"><h4>旅遊</h4></label>
                            </div>
                        </section>

                        <section class="input01 skill">
                            <h2 class="question">導師擅長職務</h2>
                            <div class="skillwra">
                                <label><input type="checkbox" value="管理幕僚" v-model="checkSkill"><h4>管理幕僚</h4></label>
                                <label><input type="checkbox" value="人資" v-model="checkSkill"><h4>人資</h4></label>
                                <label><input type="checkbox" value="金融" v-model="checkSkill"><h4>金融</h4></label>
                                <label><input type="checkbox" value="財會" v-model="checkSkill"><h4>財會</h4></label>
                                <label><input type="checkbox" value="貿易" v-model="checkSkill"><h4>貿易</h4></label>
                                <label><input type="checkbox" value="客服" v-model="checkSkill"><h4>客服</h4></label>
                                <label><input type="checkbox" value="行銷" v-model="checkSkill"><h4>行銷</h4></label>
                                <label><input type="checkbox" value="企劃" v-model="checkSkill"><h4>企劃</h4></label>
                                <label><input type="checkbox" value="資訊" v-model="checkSkill"><h4>資訊</h4></label>
                                <label><input type="checkbox" value="專案管理" v-model="checkSkill"><h4>專案管理</h4></label>
                                <label><input type="checkbox" value="顧問" v-model="checkSkill"><h4>顧問</h4></label>
                                <label><input type="checkbox" value="保險" v-model="checkSkill"><h4>保險</h4></label>
                            </div>
                        </section>

                        <!-- 按鈕：儲存、取消 -->
                        <ul class="edit">
                            <li class="btna3" @click="closeWindow">取消</li>
                            <li class="btna4" @click="addTeacher">儲存</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- 真人履歷健檢導師群 -->
            <li>
                <h3>履歷健檢導師群</h3>
            </li>

            <li>
                <ul class="addTeacher">                    
                    <li @click="closeWindow"><h4>新增導師</h4></li>
                    <li><i class="fa-solid fa-arrow-up-from-bracket" @click="closeWindow"></i></li>
                </ul>
                <div class="inputsearch">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="Text" class="inputText" placeholder="搜尋導師名稱" name="search">
                </div>
            </li>       
        </ul>
        <div class="containTeacher swiper-container mySwiper" >
            <teacher-data></teacher-data>
        </div>      
    </div> 
    `
})

let vms = new Vue({
    el:'#backstage_resource_article_app',
    data:{
        toggleAddArticle:false, //打開彈窗。新增文章
    },
    methods:{
        addArticle(){ //開關新增文章
            this.toggleAddArticle = !this.toggleAddArticle
        },        
    },
    updated(){
        
    },
    template:`
    <div class="block block2">        
        <!-- 新增文章彈窗-->
        <div class="backstage_addArticle" v-if="toggleAddArticle">
            <div class="contactUSInner"></div>
            <div class="card3">
                <ul class="cardUl">
                    <li>
                        <h1 class="cardH1">新增文章</h1>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark cardXmark" @click="addArticle"></i>
                    </li>
                </ul>
                <div class="cardInner applyfor">
                    <section class="input01">
                        <h2 class="question">文章標題</h2>
                        <input class="inputText" type="text" placeholder="請輸入文章標題">
                    </section>

                    <section>
                        <h2 class="question">文章內容</h2>
                        <textarea name="" id="" cols="30" rows="6" placeholder="請輸入文章內容"></textarea>
                    </section>

                    <!-- 按鈕：儲存、取消 -->
                    <ul class="edit">
                        <li class="btna3" @click="addArticle">取消</li>
                        <li class="btna4" @click="addArticle">儲存</li>
                    </ul>
                </div>
            </div>
        </div> 
        <li class="articleTitle">
            <h3>文章種類：</h3>
            <div class="consultantIndustrySearch">
                <button class="btna21">求職指南<i class="fa-solid fa-chevron-down"></i></button>
                <ul class="consultantIndustry searchItem">
                    <li><button class="btna22">求職指南</button></li>
                    <li><button class="btna22">履歷教學</button></li>
                    <li><button class="btna22">面試技巧</button></li>
                    <li><button class="btna22">職涯發展</button></li>
                </ul>                    
            </div>
        </li>

        <li class="articleTitle">
            <ul class="addContent">
                <li><a><h4 @click="addArticle">新增文章</h4></a></li>
                <li><i @click="addArticle" class="fa-solid fa-arrow-up-from-bracket"></i></li>
            </ul>
            <div class="inputsearch">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="Text" class="inputText" placeholder="搜尋文章名稱" name="search">
            </div>
        </li>           
        </ul>    
    </div>
    `
})

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
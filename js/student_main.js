//組件上半部
Vue.component('student-list',{
    data(){
        return{
            studentTitle:[],
            addCoin:false, //顯示or關閉 加值功能
            figure:'', //存放大頭貼
        }
    },
    methods: {
        openAddCoin(){ //顯示or關閉 加值功能
            this.addCoin = !this.addCoin
        },
        changeFigure(e){ //更換大頭貼
            const file = document.querySelector(".student_photo").querySelector("input[type=file]").files[0]; 
            const figureNow = document.querySelector(".figureNow")
            const reader = new FileReader();
            
            reader.addEventListener('load', () => {
                figureNow.src = file ? URL.createObjectURL(file) : '';              
                // console.log(figureNow.src)
            },false);

            if(file){
                reader.readAsDataURL(file); 
                console.log(figureNow.src)
                fetch('./php/updateStudentFigure.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        
                    })
                })
            }           
        },
    },
    mounted() {
        fetch(`./php/student_list.php?home=${sessionStorage.getItem('StudentId')}`) //從後端JS拿到資料
        // fetch(`php/company_list.php?`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.studentTitle = userArr
            // console.log(userArr);
            // console.log(this.studentTitle);
        })
    },
    template:`

    <div>
        <!--彈窗：加值-->
        <div class="studentaddmoneywrapper" v-if="addCoin">
            <div class="contactUSInner"></div>
            <div class="card3">
                <ul class="cardUl">
                    <li>
                        <h1 class="cardH1">加值點數</h1>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark cardXmark" @click="openAddCoin"></i>
                    </li>
                </ul>
                <div class="cardInner">
                    <ul class="studentaddmoney_applyTitle">
                
                        <li class="applyTitle_main a1">
                            <div class="left">
                                <input type="radio" name="123">
                                <h2 class="nt">NT 399</h2>
                            </div>
                            <div class="right">
                                <img src="./images/header_icon/money.png" alt="金幣">
                                <h2>200金幣</h2>
                            </div>
                        </li>

                        <li class="applyTitle_main a2">
                            <div class="left">
                                <input type="radio" name="123">
                                <h2 class="nt">NT 899</h2>
                            </div>
                            <div class="right">
                                <img src="./images/header_icon/money.png" alt="金幣">
                                <h2>500金幣</h2>
                            </div>
                        </li>

                        <li class="applyTitle_main a3">
                            <div class="left">
                                <input type="radio" name="123">
                                <h2 class="nt">NT 1599</h2>
                            </div>
                            <div class="right">
                                <img src="./images/header_icon/money.png" alt="金幣">
                                <h2>1000金幣</h2>
                            </div>
                        </li>
                    </ul>                
                    <div class="btna3" @click="openAddCoin">確定</div>
                </div>
            </div>
        </div>

        <div class="studenMainWrapperTitle"  v-for="studentTitlec in studentTitle">

            <div class="studenMainWrapperTitle_left">

                <div class="student_photo">
                    <label for="upload" class="upload">
                        <input  id="upload" type="file" accept="image/*" @change="changeFigure">
                        <img class="figureNow" :src="studentTitlec.PICTURE + '.jpg'" alt="大頭貼">
                    </label>                    
                </div>
                <ul>
                    <li><h3>會員名稱：<span>{{studentTitlec.NAME}}</span></h3></li>
                    <li><h3>電話：<span>{{studentTitlec.PHONE}}</span></h3></li>
                    <li><h3>信箱：<span>{{studentTitlec.EMAIL}}</span></h3></li>
                    <li class="coin">
                        <h3>點數：
                            <button @click="openAddCoin"><span>{{studentTitlec.COIN}}</span></button>
                            <a href="#" style="display:none">歷史加值紀錄</a>
                        </h3>
                    </li>
                    <div class="btna11">
                        <a href="./userinfo_edit.html"><h4>編輯個人檔案</h4></a>
                    </div>
                </ul>
            </div>

            <div class="studenMainWrapperTitle_right">
                <button><a href="#"><h4>已儲存職缺</h4><h1>100</h1></a></button>
                <button><a href="#"><h4>已應徵職缺<h1>30</h1></h4></a></button>
                <button><a href="./student_interviewinvite.html"><h4>面試邀約</h4><h1>10</h1></a></button>
                <button><a href="#"><h4>近期履歷<br>被查閱數</h4><h1>10</h1></a></button>
            </div>
        </div>
    </div>

    `, 
})

//我的履歷
Vue.component('myResume',{
    data() {
        return {
            addResume:true, //顯示or關閉 新增履歷功能  
            myStuId:'',
            myResumeData:[],
        }
    },
    methods: {
        
    },
    mounted() {
        //顯示該學生的履歷
        const myStuId = sessionStorage.getItem("StudentId")

        fetch(`./php/searchMyResume.php?stuId=${myStuId}`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            // console.log(userArr)
            this.myResumeData = userArr
            // console.log(this.myResumeData.length)
            if(this.myResumeData.length >= 5){ //如果會員已經有五筆履歷，則隱藏新增履歷功能
                this.addResume = false
            }else{
                this.addResume = true
            }            
        })
    },
    template:`
    <ul class="resume">
        <li class="myResume" v-for="(resumes, key) in myResumeData" :key=resumes.ID>
            <img :src="resumes.IMG_PATH" alt="我的履歷">
            <ul class="resumeDetail">
                <li class="create-date"><h3>{{resumes.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></li>
                <div class="editicon">
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            </ul>
        </li>

        <!--新增履歷-->
        <li class="studenMainWrapper_resumebottom">
            <button v-if="addResume"><a href="resume_work_space.html"><i class="fa-solid fa-file-circle-plus"></i></a></button>
            
        </li>
    </ul>
        
    `,
})

//父層
let vm = new Vue({
    el:"#student_main_app",
    data:{
       
    },
    methods: {
        
    },
    template:`
        <div class="student_main">            

            <student-list></student-list>

            <h2>我的履歷</h2>
            <myResume></myResume>
        </div>
    `,
})

//<label for="upload"  class="Avatar"><img src=""></label>
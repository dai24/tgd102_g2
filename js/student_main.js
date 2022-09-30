//組件上半部
Vue.component('student-list',{
    data(){
        return{
            studentTitle:[],

        }
    },
    mounted() {
        fetch(`./php/student_list.php?home=${sessionStorage.getItem('StudentId')}`) //從後端JS拿到資料
        // fetch(`php/company_list.php?`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.studentTitle = userArr
            console.log(userArr);
            console.log(this.studentTitle);
        })
    },
    template:`

    <div>

        <div class="studenMainWrapperTitle"  v-for="studentTitlec in studentTitle">

            <div class="studenMainWrapperTitle_left">

                <div class="student_photo">
                    <label for="upload" class="upload">
                        <input id="upload" type="file" accept="image/*">
                        <img :src="studentTitlec.PICTURE + '.jpg'" alt="">
                    </label>
                    <label for="upload"  class="Avatar"><img src=""></label>
                </div>
                <ul>
                    <li><h3>會員名稱：<span>{{studentTitlec.NAME}}</span></h3></li>
                    <li><h3>電話：<span>{{studentTitlec.PHONE}}</span></h3></li>
                    <li><h3>信箱：<span>{{studentTitlec.EMAIL}}</span></h3></li>
                    <li class="coin">
                        <h3>點數：
                            <span><a href="./student_addmoney.html">{{studentTitlec.COIN}}</a></span>
                            <a href="#">歷史加值紀錄</a>
                        </h3>
                    </li>
                    <div class="btna11">
                        <a href="./userinfo_edit.html"><h4>編輯個人檔案</h4></a>
                    </div>
                </ul>
            </div>

            <div class="studenMainWrapperTitle_right">

                <button><a href="#">已儲存職缺<h1>100</h1></a></button>
                <button><a href="#">已應徵職缺<h1>30</h1></a></button>
                <button><a href="./student_interviewinvite.html">面試邀約<h1>10</h1></a></button>
                <button><a href="#">近期履歷<br>被查閱數<h1>10</h1></a></button>

            </div>
        
        </div>
    
    </div>

    `, 
})





//父層
new Vue({
    el:"#student_main",
    methods:{

    },
    
   
})
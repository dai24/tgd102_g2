

Vue.component('my-list-com',{
    data() {
        return {
            companyTitle:[]
        }
    },
    mounted() {
        fetch(`./php/findCompany.php?comid=${sessionStorage.getItem('findJobcomId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.companyTitle= userArr
        })
    },
    template:`
    
    <div class="companyWrapperTitle">
            <div class="companyWrapperTitImg">

            </div>
            <div class="companyWrapperTitMain" v-for="(companyTitle1, index) in companyTitle.slice(0, 1)" :key="index">
                <div class="companyWrapperTitMainImg"  >
                    <img :src="companyTitle1.LOGO + '.jpg'" alt="">
                </div>
                <div class="companyWrapperTitMainIcon">
                    <div  >
                        <h2>{{companyTitle1.COM_NAME}}</h2>
                    </div>
                    <div class="companyIcon">
                        <div>
                            <a href="" title="總人數"><i class="fa-solid fa-users"></i><p>{{companyTitle1.SCALE}}</p></a>
                        </div>
                        <div>
                            <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{companyTitle1.ADDRESS}}</p></a>
                        </div>
                        <div>
                            <a href="" title="資本額"><i class="fa-solid fa-landmark"></i><p>$ {{companyTitle1.PROPERTY}}萬</p></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
       `,
    
})
Vue.component('my-list-com2',{
    data() {
        return {
            companyMain:[],
            comPic:[]
            
        }
    },
    mounted() {
        fetch(`./php/findCompany.php?comid=${sessionStorage.getItem('findJobcomId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.companyMain= userArr
            this.comPic = this.companyMain[0].PHOTO.split('|')
            console.log(this.comPic);
        })
    },
    template:
    `
    <div class="companyWrapperMain">
            <div class="companyWrapperContent" v-for="(companyMain1, index) in companyMain.slice(0, 1)" :key="index">
                <div class="company">
                    <div class="companyStatement"><h3>公司介紹</h3></div>
                    <div><p>{{companyMain1.DESCRIBE}}</p></div>
                </div>
                <div class="company">
                    <div class="companyStatement"><h3>產品或服務</h3></div>
                    <div><p>服務項目</p></div>
                    <div><p>{{companyMain1.REQUIRE}}</p></div>
                </div>
                <div class="company">
                    <div class="companyStatement"><h3>員工福利</h3></div>
                    <div><p>{{companyMain1.CONDITION}}</p>
                    </div>
                </div>
                    <div class="company">
                        <div class="companyStatement"><h3>公司照片</h3></div>
                        <div>
                            <div>
                                <img :src="'./images/' + comPic1" alt="" v-for="comPic1 in comPic">
                            </div>
                        </div>
                    </div>
                </div>
                
        </div>
            `,
    
})
Vue.component('my-list-com3',{
    data() {
        return {
            companyOth:[],
            jobID:[],
            jobID1:[],  
        }
    },
    mounted() {
        fetch(`./php/findCompany.php?comid=${sessionStorage.getItem('findJobcomId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.companyOth= userArr
        })
    },
    template:`
    <div class="jobMainWrapperOther">
            <div class="jobMainWrapperOthSec">
                <div class="jobMainWrapperOthTitle">
                    <h2>所有職缺</h2>
                </div>
                <div class="jobMainWrapperOthMain" v-for="companyOth1 in companyOth">
                    <div>
                        <p>{{companyOth1.CATEGORY}}</p>
                        <p>{{companyOth1.JOB_NAME}}</p>
                        <div class="findJobVacanciesIcTitle">
                            <div class="findJobVacanciesIcon">
                                <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p>{{companyOth1.JOB}}</p></a>
                            </div>
                            <div class="findJobVacanciesIcon">
                                <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{companyOth1.CITY}}</p></a>
                            </div>
                            <div class="findJobVacanciesIcon">
                                <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p>{{companyOth1.SALARY}} / h</p></a>
                            </div>
                        </div>
                    </div>
                    <div class="jobMainWrapperOthBtn">
                        <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                        <div class="btna6 moveToJob" @click='goApply(companyOth1.ID,companyOth1.COMPANY_ID)'>立即應徵</div>
                    </div>
                </div>
                <div class="jobMainWrapperOthMain">
                    <div class="btna19">查看更多職缺</div>
                </div>
                </div>
                </div>
            

          
            `,
            methods: {
                openSave(){
                    this.$emit('save-click')
                },
                goApply(idNum,comidNum){
                    console.log(comidNum);
                    sessionStorage.setItem('findJobId', idNum);
                    sessionStorage.setItem('findJobcomId', comidNum);
                    this.jobID.push(idNum)
                    this.jobID.forEach((num) => {
                        if (!this.jobID1.includes(num)) {
                            this.jobID1.push(num);
                        }
                    })
                    for(let i = 0; i < this.jobID1.length; i++){
                        console.log(this.jobID1[i]);
                        fetch(`./php/jobmain.php?home=${this.jobID1[i]}`)
                        
                        //jobId : this.jobID1[i]
                    }
                    location='./jobMain.html'
                    // console.log(COMID);
                    // location = './jobMain.html';
                }
            },
    
})
new Vue({
    el:'#companyApp',
    data:{
        isShowSave:false,
    },
    methods: {
        saveGo(){
            if(JSON.stringify(sessionStorage.getItem('StudentId'))  === 'null'){
                alert('請先登入會員')
                location='./student_login.html'
            }else{
                this.isShowSave =!this.isShowSave
            }
        },
        saveClose(){
            this.isShowSave =!this.isShowSave
        },
        goStudentMain(){
            location='./student_main.html'
        },
    },
    
})
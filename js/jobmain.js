Vue.component('my-list1',{
    data() {
        return {
            jobTitle:[]
        }
    },
    mounted() {
        fetch(`../php/jobMain.php?home=${sessionStorage.getItem('findJobId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.jobTitle = userArr
            console.log(userArr);
            // console.log(this.jobTitle);
        })
    },
    template:`
    <div>
    <div class="jobMainWrapperTitle" v-for="jobTitleH in  jobTitle">
        <h2>{{jobTitleH.JOB_NAME}}</h2>
        <div class="moveToCom">
            <img :src="jobTitleH.LOGO + '.jpg'" alt=""><p>{{jobTitleH.COM_NAME}}</p>
        </div>
    </div>
    </div>
            `, 
})

Vue.component('my-list2',{
    data() {
        return {
            jobMain:[]

        }
    },
    mounted() {
        fetch(`../php/jobMain.php?home=${sessionStorage.getItem('findJobId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.jobMain = userArr
            console.log(userArr);
            // console.log(this.jobTitle);
        })
    },
    template:`
    <div>
    <div class="jobMainWrapperMain" v-for="jobTitleM in jobMain">
    <div class="jobMainContent">
            <div class="jobMain">
                <div class="jobMainStatement"><h3>職缺描述</h3></div>
                <div><p>{{jobTitleM.DESCRIBE}}</p></div>
            </div>
            <div class="jobMain">
                <div class="jobMainStatement"><h3>職務需求</h3></div>
                <div><p>【經驗條件】</p></div>
                <div>
                    <ul>
                        <li><p>{{jobTitleM.REQUIRE}}</p></li>
                    </ul>
                </div>
            </div>
            <div class="jobMain">
                <div class="jobMainStatement"><h3>條件要求</h3></div>
                <div>
                    <ul>
                        <li><p>{{jobTitleM.CONDITION}}</p></li>
                        
                    </ul>
                </div>
            </div>
            <div class="jobMain">
                <div class="jobMainStatement"><h3>加分條件</h3></div>
                <div>
                    <ul>
                        <li><p>{{jobTitleM.PLUS}}</p></li>
                    </ul>
                </div>
            </div>
            <div class="jobMainVacanciesBtn">
                <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                <div class="btna6" @click="openApply">應徵職缺</div>
            </div>
        </div>


        <div class="jobMainItem">
                <div class="jobMainIcon">
                    <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p>{{jobTitleM.JOB}}</p></a>
                </div>
                <div class="jobMainIcon">
                    <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{jobTitleM.CITY}}</p></a>
                </div>
                <div class="jobMainIcon">
                    <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p>{{jobTitleM.SALARY}} / h</p></a>
                </div>
        </div>
    </div>
    </div>

            `,
    methods: {
        openSave(){
            this.$emit('save-click')
        },
        openApply(){
            this.$emit('open-click')
        },
        
    }, 
    
})
Vue.component('my-list3',{
    data() {
        return {
            jobCompany:[]

        }
    },
    mounted() {
        fetch(`../php/jobMain.php?home=${sessionStorage.getItem('findJobId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.jobCompany = userArr
            console.log(userArr);
            // console.log(this.jobTitle);
        })
    },
    template:
    `
    <div>
    <div class="jobMainWrapperCom" v-for="jobC in jobCompany">
        <div class="jobMainWrapperComTitle">
            <div><a @click='moveCom(jobC.COMPANY_ID)' ><img :src="jobC.LOGO + '.jpg'" alt="" class="moveToCom"></a></div>
            <div class="jobMainWrapperComIconT">
                    <a><h2 class="moveToCom">{{jobC.COM_NAME}}</h2></a>
                <div class="jobMainWrapperComIconTM">
                    <div class="jobMainWrapperComIcon">
                        <a title="總人數"><i class="fa-solid fa-users"></i><p>{{jobC.SCALE}}</p></a>
                    </div>
                    <div class="jobMainWrapperComIcon">
                        <a title="地點"><i class="fa-solid fa-location-dot"></i><p>{{jobC.ADDRESS}}</p></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="jobMainWrapperComMain">
            <h3>關於我們</h3>
            <p>{{jobC.INTRO}}</p>
        </div>
    </div>
    </div>
    `,
    methods: {
        moveCom(comId){
            sessionStorage.setItem('findJobcomId', comId);
            console.log(comId)
            location='./company.html'
        }
    },
    
})
Vue.component('my-list4',{
    data() {
        return {
            jobOth : [],
            jobID:[],
            jobID1:[],
            
        }
    },
    mounted() {
        fetch(`../php/findCompany.php?comid=${sessionStorage.getItem('findJobcomId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.jobOth= userArr
            
        })
    },
    template:`
    <div class="jobMainWrapperOther">
                <div class="jobMainWrapperOthSec">
                    <div class="jobMainWrapperOthTitle">
                        <img :src="jobOth[0].LOGO + '.jpg'" alt=""><h2><span>{{jobOth[0].COM_NAME}}</span>的其他熱門職缺</h2>
                    </div>
                    <div class="jobMainWrapperOthMain" v-for="jobMainOthMain in jobOth">
                        <div>
                            <p>{{jobMainOthMain.CATEGORY}}</p>
                            <p>{{jobMainOthMain.JOB_NAME}}</p>
                            <div class="findJobVacanciesIcTitle">
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p>{{jobMainOthMain.JOB}}</p></a>
                                </div>
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{jobMainOthMain.CITY}}</p></a>
                                </div>
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p>{{jobMainOthMain.SALARY}} / h</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="jobMainWrapperOthBtn">
                            <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                            <div class="btna6" @click='goApply(jobMainOthMain.ID,jobMainOthMain.COMPANY_ID)'>立即應徵</div>
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
                fetch(`../php/jobMain.php?home=${this.jobID1[i]}`)
                
                //jobId : this.jobID1[i]
            }
            location='./jobMain.html'
            // console.log(COMID);
            // location = './jobMain.html';
        }
    },
})

new Vue({
    el: '#jobMainApp',
    data:{
        asd:'123',
        isShowSave:false,
        isShow:false,
        isShowR: false,
        resumeBrow:[],
        resumePic:[],
        jobApply:[],
        resumeSrr:''
    },
    mounted() {
        fetch(`../php/jobMain.php?home=${sessionStorage.getItem('findJobId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.jobApply = userArr
        })
    },
    
    methods: {
        open(){
            console.log(JSON.stringify(sessionStorage.getItem('StudentId')));
            if(JSON.stringify(sessionStorage.getItem('StudentId'))  === 'null'){
                alert('請先登入會員')
                location='./student_login.html'
            }else{
                this.isShow =!this.isShow
            }
            
            fetch(`../php/applyFor.php?StudentTd=${sessionStorage.getItem('StudentId')}`) //從後端JS拿到資料
            .then(rsp => rsp.json())
            .then(userArr => {            
                this.resumeBrow= userArr
                this.resumePic = this.resumeBrow[0].PICTURE.split('|')
                console.log(this.resumeBrow[0].PICTURE.split('|'));
                
            })
        
            
        },
        close(){
            this.isShow =!this.isShow
            this.resumePic=[]
        },
        saveGo(){
            this.isShowSave =!this.isShowSave
        },
        saveClose(){
            this.isShowSave =!this.isShowSave
        },
        isShowResOpen(re){
            console.log(re);
            this.isShowR =!this.isShowR
            this.resumeSrr += re
            // fetch(`../php/applyFor.php?StudentTd=${sessionStorage.getItem('StudentTd')}`) //從後端JS拿到資料
            // .then(rsp => rsp.json())
            // .then(userArr => {            
            //     this.resumeBrow= userArr
            //     // this.resumePic = this.resumeBrow[0].PICTURE.split('|')
            //     console.log(this.resumeBrow[0].PICTURE.split('|'));
                
            // })
        },
        isShowResClose(){
            this.isShowR =!this.isShowR
            this.resumeSrr = ''
        },

        
    },

})

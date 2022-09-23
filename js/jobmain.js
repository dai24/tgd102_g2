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
            <div><a @click='moveCom' ><img :src="jobC.LOGO + '.jpg'" alt="" class="moveToCom"></a></div>
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
        moveCom(){
            console.log('123')
            location='./company.html'
        }
    },
    
})
Vue.component('my-list4',{
    data() {
        return {
            jobMainOthTitle:{
                companyName : 'Dr. Right 精準關懷',
                companyImg : './images/findJob/comLogo.jpg',
            },
            jobMainOthMain:[
                {
                    companyDepartment : '溝通部門',
                    companyName : 'Dr. Right 精準關懷',
                    vacancies : 6,
                    placeDist : '台北',
                    salary : 200,
                    numberOfCompant:'50',
                    jobTitle:'醫療客服專案管理師',
                },
                {
                    companyDepartment : '溝通部門',
                    companyName : 'Dr. Right 精準關懷',
                    vacancies : 6,
                    placeDist : '台北',
                    salary : 200,
                    numberOfCompant:'50',
                    jobTitle:'醫療客服專案管理師',
                }
            ]
            
        
            
        }
    },
    template:`
    <div class="jobMainWrapperOther">
                <div class="jobMainWrapperOthSec">
                    <div class="jobMainWrapperOthTitle">
                        <img :src="jobMainOthTitle.companyImg" alt=""><h2><span>{{jobMainOthTitle.companyName}}</span>的其他熱門職缺</h2>
                    </div>
                    <div class="jobMainWrapperOthMain" v-for="jobMainOthMain in jobMainOthMain">
                        <div>
                            <p>{{jobMainOthMain.companyDepartment}}</p>
                            <p>{{jobMainOthMain.jobTitle}}</p>
                            <div class="findJobVacanciesIcTitle">
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p>{{jobMainOthMain.vacancies}}</p></a>
                                </div>
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{jobMainOthMain.placeDist}}</p></a>
                                </div>
                                <div class="findJobVacanciesIcon">
                                    <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p>{{jobMainOthMain.salary}} / h</p></a>
                                </div>
                            </div>
                        </div>
                        <div class="jobMainWrapperOthBtn">
                            <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                            <div class="btna6" @click='goApply'>立即應徵</div>
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
        goApply(){
            location = './jobMain.html';
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
        resumeBrow:[
            {   
                resumeName:'履歷一',
                resumeImg:'./images/resume/resume_1.jpg'
            }
        ]
    },
    methods: {
        open(){
            this.isShow =!this.isShow
        },
        close(){
            this.isShow =!this.isShow
        },
        saveGo(){
            this.isShowSave =!this.isShowSave
        },
        saveClose(){
            this.isShowSave =!this.isShowSave
        },
        isShowResOpen(){
            this.isShowR =!this.isShowR
        },
        isShowResClose(){
            this.isShowR =!this.isShowR
        }
        
    },

})

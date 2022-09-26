Vue.component('my-list-com',{
    data() {
        return {
            companyTitle:[]
        }
    },
    mounted() {
        fetch(`../php/findCompany.php?comid=${sessionStorage.getItem('findComId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.companyTitle= userArr
        })
    },
    template:`
    <template>
    <div class="companyWrapperTitle">
            <div class="companyWrapperTitImg">

            </div>
            <div class="companyWrapperTitMain">
                <div class="companyWrapperTitMainImg">
                    <img :src="companyTitle[0].LOGO + '.jpg'" alt="">
                </div>
                <div class="companyWrapperTitMainIcon">
                    <div>
                        <h2>{{companyTitle[0].COM_NAME}}</h2>
                    </div>
                    <div class="companyIcon">
                        <div>
                            <a href="" title="總人數"><i class="fa-solid fa-users"></i><p>{{companyTitle[0].SCALE}}</p></a>
                        </div>
                        <div>
                            <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p>{{companyTitle[0].ADDRESS}}</p></a>
                        </div>
                        <div>
                            <a href="" title="資本額"><i class="fa-solid fa-landmark"></i><p>$ {{companyTitle[0].PROPERTY}}萬</p></a>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    </template>      `,
    
})
Vue.component('my-list-com2',{
    data() {
        return {
            companyMain:[]
        }
    },
    mounted() {
        fetch(`../php/findCompany.php?comid=${sessionStorage.getItem('findComId')}`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.companyMain= userArr
        })
    },
    template:
    `
    <div class="companyWrapperMain">
            <div class="companyWrapperContent">
                <div class="company">
                    <div class="companyStatement"><h3>公司介紹</h3></div>
                    <div><p>{{companyMain[0].DESCRIBE}}</p></div>
                </div>
                <div class="company">
                    <div class="companyStatement"><h3>產品或服務</h3></div>
                    <div><p>服務項目</p></div>
                    <div><p>{{companyMain[0].REQUIRE}}</p></div>
                </div>
                <div class="company">
                    <div class="companyStatement"><h3>員工福利</h3></div>
                    <div><p>{{companyMain[0].CONDITION}}</p>
                    </div>
                </div>
                    <div class="company">
                        <div class="companyStatement"><h3>公司照片</h3></div>
                        <div>
                            <div>
                                <img :src="comImgAll" alt="" v-for="comImgAll in comImg">
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
            companyOth:[]
        }
    },
    mounted() {
        fetch(`../php/findCompany.php?comid=${sessionStorage.getItem('findComId')}`) //從後端JS拿到資料
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
                        <div class="btna6 moveToJob" @click='goApply'>立即應徵</div>
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
    el:'#companyApp',
    data:{
        isShowSave:false,
    },
    methods: {
        saveGo(){
            this.isShowSave =!this.isShowSave
        },
        saveClose(){
            this.isShowSave =!this.isShowSave
        },
    },
    
})
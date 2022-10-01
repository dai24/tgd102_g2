
// 擅長產業項目
Vue.component("allindustryclass", {
    props:['allindustrytypechild'],
    template:`<li><button class="btna22" @click="searchindustryclass(index)" v-for="(item,index) in this.allindustrytypechild">{{ item.industryclassname }}</button></li>`,
    data(){
        return{
           
        }   
    },

    methods:{
        searchindustryclass(i){
            console.log(this.$props.allindustrytypechild);
            this.$emit("industryclass", {
                type: 'industry',
                value: this.allindustrytypechild[i].industryclassname
            })
            
        }
    },

})

// 擅長職務項目
Vue.component("alljobclass", {
    props:['alljobtypechild'],
    template:`<li><button class="btna22" @click="searchjobclass(index)" v-for="(item,index) in this.alljobtypechild">{{ item.jobclassname }}</button></li>`,
    data(){
        return{
           
        }   
    },
    
    methods:{
        searchjobclass(i){
            console.log(this.$props.alljobtypechild);
            this.$emit("jobclass", {
                type: 'job',
                value: this.alljobtypechild[i].jobclassname
            })
        }
    },

})


// 父層
const vm = new Vue({
    el: '#resumeReview',
    data: {     
        isshow1:false,
        isshow2:false,
        resumecardshow:false,  // 履歷診療彈窗是否顯示

        industrytype:"全部產業",
        jobclasstype:"全部職務",

        allteachers:[
            // {tname:'王博均',tjobtitle:'人資經理',ttimes:5,tschool:'國立台灣大學商研所',tjobname:'Jobs雜誌 專欄作家',industrytype:'電子科技',jobclasstype:'管理幕僚',tdescription:'只要透過深入訪談',timg:'../images/resumeReview/1.jpg',tlink:'../dist/consultant.html'},
        ],

        allindustrytypeparent:[
            //   "電子科技","資訊","軟體","金融","休閒","出版","藝文相關","法律","顧問","研發","餐飲","旅遊"
        ],

        alljobtypeparent:[
            // "管理幕僚","人資","金融","財會","貿易","客服","行銷","企劃","資訊","專案管理","顧問","保險"
        ],

        teachersFiltered: [],
        
        resumeall:[
        //    '履歷一','履歷二'
        ],

    },
    methods: {
        open1(){
            this.isshow1 = !this.isshow1
        },
        open2(){
            this.isshow2 = !this.isshow2
        },

       

        openreviewcard(){
            if(JSON.stringify(sessionStorage.getItem('StudentId'))== 'null'){
                alert("請先登入會員")
                location='./student_login.html'
            }else{
                this.resumecardshow =!this.resumecardshow
            }


            // 依照sessionStorage的StudentId(登入會員ID)去抓該會員的履歷 

            fetch(`../php/resumeReviewcard.php?StudentId=${Number(sessionStorage.getItem('StudentId'))}`) //從後端JS拿到資料
            .then(rsp => rsp.json())
            .then(userArr => {            // userArr 是抓 resumeReviewcard.php 的 echo json_encode($resumeList);
                this.resumeall= userArr   // resumeall 的data 抓userArr
                // console.log(this.resumeall);
            })


        },

        closereviewcard(){
            this.resumecardshow =!this.resumecardshow
        },

        filter({type, value}){
            switch(type) {
                case 'industry':
                    this.industrytype = value
                    this.isshow1 = !this.isshow1;
                    break;
                case 'job':
                    this.jobclasstype = value;
                    this.isshow2 = !this.isshow2;
                    break;
            }
            
            

            this.teachersFiltered = this.allteachers.filter(
                function(teacher) {
                    const condition1 = vm.industrytype === '全部產業' || teacher.industryClassList.findIndex(function(type){
                        return type === vm.industrytype;
                    }) !== -1;

                    const condition2 = vm.jobclasstype === '全部職務' || teacher.jobClassList.findIndex(function(type){
                        return type === vm.jobclasstype;
                    }) !== -1;
                    return condition1 && condition2;
                
                }
            );


        },
    },

    mounted() {
        // fetch('php/resumeReview_teacher.php')
        //     .then(resp => resp.json())
        //     .then(teacherList => this.allteachers = teacherList);

        // fetch('php/resumeReview_industry.php')
        //     .then(resp => resp.json())
        //     .then(industryclassList => this.allindustrytypeparent = industryclassList);
        
        // fetch('php/resumeReview_jobclass.php')
        //     .then(resp => resp.json())
        //     .then(jobclassList => this.alljobtypeparent = jobclassList);


        fetch('php/resumeReview_all.php')
            .then(
                resp => resp.json()
            )
            .then(body => {
                this.allteachers = body.teacherList
                this.teachersFiltered = this.allteachers;
                body.industryclassList.unshift({industryclassname: '全部產業'});
                this.allindustrytypeparent = body.industryclassList;
                body.jobclassList.unshift({jobclassname:'全部職務'});
                this.alljobtypeparent = body.jobclassList

            });

    }
})
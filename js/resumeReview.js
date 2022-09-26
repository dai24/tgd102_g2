
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
            this.$emit("industryclass", this.allindustrytypechild[i].industryclassname)
            
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
            this.$emit("jobclass", this.alljobtypechild[i].jobclassname)
        }
    },

})


// 父層
new Vue({
    el: '#resumeReviewtest',
    data: {     
        isshow1:false,
        isshow2:false,
        resumecardshow:false,  // 履歷診療彈窗是否顯示

        industrytype:"擅長產業",
        jobclasstype:"擅長職務",

        allteachers:[
            // {tname:'王博均',tjobtitle:'人資經理',ttimes:5,tschool:'國立台灣大學商研所',tjobname:'Jobs雜誌 專欄作家',industrytype:'電子科技',jobclasstype:'管理幕僚',tdescription:'只要透過深入訪談',timg:'../images/resumeReview/1.jpg',tlink:'../dist/consultant.html'},
        ],

        allindustrytypeparent:[
              // "電子科技","資訊","軟體","金融","休閒","出版","藝文相關","法律","顧問","研發","餐飲","旅遊"
        ],

        alljobtypeparent:[
            // "管理幕僚","人資","金融","財會","貿易","客服","行銷","企劃","資訊","專案管理","顧問","保險"
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
            this.resumecardshow =!this.resumecardshow 
        },

        closereviewcard(){
            this.resumecardshow =!this.resumecardshow
        },

        industrytypeis(childindustrytype){
            this.industrytype = childindustrytype;
            this.isshow1 = !this.isshow1
        },


        jobclasstypeis(childjobclass){
            this.jobclasstype = childjobclass;
            this.isshow2 = !this.isshow2
        }

    
    },

    mounted() {
        fetch('php/resumeReview_teacher.php')
            .then(resp => resp.json())
            .then(teacherList => this.allteachers = teacherList);

        fetch('php/resumeReview_industry.php')
            .then(resp => resp.json())
            .then(industryclassList => this.allindustrytypeparent = industryclassList);
        
        fetch('php/resumeReview_jobclass.php')
            .then(resp => resp.json())
            .then(jobclassList => this.alljobtypeparent = jobclassList);


    },


    
})
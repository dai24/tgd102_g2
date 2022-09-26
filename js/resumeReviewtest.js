
// 擅長產業項目
Vue.component("allindustryclass", {
    template:`<li><button class="btna22" @click="searchindustryclass(index)" v-for="(item,index) in allindustrytype">{{ item }}</button></li>`,
    data(){
        return{
            allindustrytype:["電子科技","資訊","軟體","金融","休閒","出版","藝文相關","法律","顧問","研發","餐飲","旅遊"],
        }   
    },

    methods:{
        searchindustryclass(i){
            this.$emit("industryclass", this.allindustrytype[i])
        }
    },

})

// 擅長職務項目
Vue.component("alljobclass", {
    template:`<li><button class="btna22" @click="searchjobclass(index)" v-for="(item,index) in alljobtype">{{ item }}</button></li>`,
    data(){
        return{
            alljobtype:["管理幕僚","人資","金融","財會","貿易","客服","行銷","企劃","資訊","專案管理","顧問","保險"],
        }   
    },
    
    methods:{
        searchjobclass(i){
            this.$emit("jobclass", this.alljobtype[i])
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
        fetch('php/resumeReview.php')
            .then(resp => resp.json())
            .then(teacherList => this.allteachers = teacherList);
    },


    
})
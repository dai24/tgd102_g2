
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
            // {tname:'薛彥涵',tjobtitle:'人資經理',ttimes:5,tschool:'國立台灣大學商研所',tjobname:'Jobs雜誌 專欄作家',industrytype:'法律',jobclasstype:'管理幕僚',tdescription:'只要透過深入訪談',timg:'../images/resumeReview/2.jpg',tlink:'../dist/consultant.html'},
            // {tname:'李凱宇',tjobtitle:'人資經理',ttimes:5,tschool:'國立台灣大學商研所',tjobname:'Jobs雜誌 專欄作家',industrytype:'電子科技',jobclasstype:'資訊',tdescription:'只要透過深入訪談',timg:'../images/resumeReview/3.jpg',tlink:'../dist/consultant.html'},
            // {tname:'宋軒辰',tjobtitle:'人資經理',ttimes:5,tschool:'國立台灣大學商研所',tjobname:'Jobs雜誌 專欄作家',industrytype:'電子科技',jobclasstype:'管理幕僚',tdescription:'只要透過深入訪談',timg:'../images/resumeReview/4.jpg',tlink:'../dist/consultant.html'},
            
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
        
        industrytypeis(industrytypechoose){
            this.industrytype = industrytypechoose;
            this.isshow1 = !this.isshow1
        },

        jobclasstypeis(jobclasstypechoose){
            this.jobclasstype = jobclasstypechoose;
            this.isshow2 = !this.isshow2
        },

    

    },

    mounted() {
        fetch('php/resumeReview.php')
            .then(resp => resp.json())
            .then(teacherList => this.allteachers = teacherList);
    },


    
})
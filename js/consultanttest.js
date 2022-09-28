new Vue({
    el:"#consultanttest",
    data:{
        teacherinfo:[],
            // img:"../images/consultant/1.jpg",
            // tname:"王博均",
            // tschool:"國立台灣大學商研所",
            // tjobtitle:"產品經理",
            // ttimes:5,
            // tdescription:"只要透過深入訪談，就可以重新優化安排履歷自傳的組成元素，突顯最相關、最有價值的部份，讓對方快速看見你的價值。透過履歷證明你的專業實力和經驗，並透過自傳展現軟實力和個人特質，兩相合一就能最大幅度地提高邀約面試的機會！",

        

        teacherjobname:[
            // "關鍵評論網","亞洲職業生涯發展中心 研發經理"
        ],

        teacherindustrytype:[
            // "電子科技","資訊","軟體","金融"
        ],
        
        teacherjobtype:[
            // "管理幕僚","人資","金融","財會"
        ],



        resumecardshow:false,  // 履歷診療彈窗是否顯示
    },

    methods: {

        openreviewcard(){
            this.resumecardshow =!this.resumecardshow 
        },

        closereviewcard(){
            this.resumecardshow =!this.resumecardshow
        },
        
    },
    mounted() {

        fetch('php/consultant_info.php')
            .then(resp => resp.json())
            .then(teacherinfo => this.teacherinfo = teacherinfo);

        fetch('php/consultant_jobs.php')
            .then(resp => resp.json())
            .then(teacherjob => this.teacherjobname = teacherjob);
        
        fetch('php/consultant_industrytype.php')
            .then(resp => resp.json())
            .then(teacherindustrytype => this.teacherindustrytype = teacherindustrytype);

        fetch('php/consultant_jobtype.php')
            .then(resp => resp.json())
            .then(teacherjobtype => this.teacherjobtype = teacherjobtype);

        
    },

})
new Vue({
    el:"#consultant",
    data:{
        teacherinfo:[
            // img:"../images/consultant/1.jpg",
            // tname:"王博均",
            // tschool:"國立台灣大學商研所",
            // tjobtitle:"產品經理",
            // ttimes:5,
            // tdescription:"只要透過深入訪談，就可以重新優化安排履歷自傳的組成元素，突顯最相關、最有價值的部份，讓對方快速看見你的價值。透過履歷證明你的專業實力和經驗，並透過自傳展現軟實力和個人特質，兩相合一就能最大幅度地提高邀約面試的機會！",

        ],

        teacherjobname:[
            // "關鍵評論網","亞洲職業生涯發展中心 研發經理"
        ],

        teacherindustrytype:[
            // "電子科技","資訊","軟體","金融"
        ],
        
        teacherjobtype:[
            // "管理幕僚","人資","金融","財會"
        ],

        resumeall:[
            //    '履歷一','履歷二'
        ],


        resumecardshow:false,  // 履歷診療彈窗是否顯示
    },

    methods: {
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
        
    },
    mounted() {
        const urlParams = new URLSearchParams(location.search);
        const teacherId = urlParams.get('teacherId');
        fetch(`php/consultant_all.php?teacherId=${teacherId}`)
            .then(resp => resp.json())
            .then(body => {
                this.teacherinfo = body.teacherinfo;
                this.teacherjobtype = body.teacherjobtype;
                this.teacherindustrytype = body.teacherindustrytype;
                this.teacherjobname = body.teacherjob;
            }); 
    },

})
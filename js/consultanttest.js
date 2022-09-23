new Vue({
    el:"#consultanttest",
    data:{
        teacherinfo:{
            img:"../images/consultant/1.jpg",
            name:"王博均",
            school:"國立台灣大學商研所",
            jobtitle:"產品經理",
            times:5,
            jobname:["關鍵評論網","亞洲職業生涯發展中心 研發經理"],
            industrytype:["電子科技","資訊","軟體","金融"],
            jobclasstype:["管理幕僚","人資","金融","財會"],
            description:"只要透過深入訪談，就可以重新優化安排履歷自傳的組成元素，突顯最相關、最有價值的部份，讓對方快速看見你的價值。透過履歷證明你的專業實力和經驗，並透過自傳展現軟實力和個人特質，兩相合一就能最大幅度地提高邀約面試的機會！",

        }
    },

    methods: {
        
    },
    mounted() {
        fetch('php/consultant.php')
            .then(resp => resp.json())
            .then(teacherList => {});
    },

})
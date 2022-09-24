Vue.component('my-resume_sample', {
           
    data() {
        return {
            count: 0,
            resume_sample: [],
            imgURL:'',
            isPopup: false,
            like_count:0,
            Student_id:0,
            categorys: ['全部', '設計', '工程', '管理', '媒體', '銷售', '金融', '行政', '科技', '服務'],
            current:'全部',

            toggleSwitch: true, //切換停權
            toggleResume:false, //停權時，履歷的class屬性改變
        }
    },
    methods: {
        open(imgurl) {
            this.imgURL = imgurl                    
            this.isPopup = true
            // console.log( this.imgURL)
        },
        close() {
            this.isPopup = false
        },
        clickLike(likeCount,sId){
            fetch(`./php/updateResume.php?Student_id=${sId}&like_count=${likeCount}`)
            .then(rsp => rsp.json())
            .then(like_count => {
                this.resume_sample = like_count;
            })
        },
        clickCategory(category){
            this.current = category;
            fetch(`./php/getResume_sample_All.php?category=${category}`)
            .then(rsp => rsp.json())
            .then(updateResume_sample => {
                this.resume_sample = updateResume_sample;
            })
        },
        //打開or關閉停權圖示
        toggleBan(){
            this.toggleSwitch = !this.toggleSwitch
        },       
    },
    mounted() {
        
        fetch('./php/getResume_sample_All.php')
            .then(rsp => rsp.json())
            .then(resume_sample => {
                this.resume_sample = resume_sample;
                // console.log(resume_sample)
            })

    },
    updated() {
        
        //目標：只改變要停權的履歷。沒有用到vue的data
        let fa_ban = document.querySelectorAll(".fa-ban")
        for(let i = 0; i < fa_ban.length; i++){
            fa_ban[i].addEventListener("click", e => {
                // console.log(e.target)
                if(e.target.classList.contains('-on')){
                    e.target.classList.toggle('-on')
                    e.target.style.opacity = "10%"
                }else {
                    e.target.classList.toggle('-on')
                    e.target.style.opacity = "100%"
                }
            })
        }
    },
    
    //
    template:
        `   
        <div>
            <div class=" category">
                <div class="col-1 category-mid" v-for="category in categorys">
                    <button class=" col-1 btna13 categoryBtn" @click="clickCategory(category)" :class="{'categoryBtn':current === category}">{{category}}</button>
                </div>
            </div>
            <div class="resume_sample_row resumeWra">  
                <div class="resume_card resumeCard" :class="{toggleResume:toggleResume}" v-for="resume in resume_sample">
                    <img :src='resume.IMG_PATH' class="" alt="resume_1">                        
                    <div class="data">
                        <h3>建立日期：{{resume.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3>
                        <h3><i class="fa-solid fa-ban" :class="{toggleBan:toggleSwitch}" ></i></h3>
                    </div>
                </div>
            </div>  

            <div class="pagination-div">
                <ul class="pagination-ul">
                <li><a href="#"><i class="fa-solid fa-chevron-left"></i></a></li>
                <li><a href="#" class="pageContent">1</a></li>
                <li><a href="#" class="pageContent">2</a></li>
                <li><a href="#" class="pageContent">3</a></li>
                <li><a href="#" class="pageContent">4</a></li>
                <li><a href="#" class="pageContent">5</a></li>
                <li><a href="#"><i class="fa-solid fa-chevron-right"></i></a></li>
                </ul>
            </div>
        </div>
        `
})

new Vue({
    el: '#backstage_template_app',
    data: {},
    methods: {},

})
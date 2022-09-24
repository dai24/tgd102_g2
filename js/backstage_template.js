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
        }
       
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
        
    },
    // category範本種類的寬度，由於後台視覺問題，後台不用col-1
    template:
        `   
        <div>
            <div class=" category">
                <div class="col-1" v-for="category in categorys">
                    <button class="btna13 cateoryBtn" @click="clickCategory(category)" :class="{'categoryBtn':current === category}">{{category}}</button>
                </div>
            </div>
            <div class=" resume_sample_row">         
                <div class="" v-for="resume in resume_sample">
                    <div class="resume_card">
                        <img :src='resume.IMG_PATH' class="" alt="resume_1">                        
                    </div>
                </div>
                <div v-if="isPopup">
                    <div class="m-a-s-k" @click="close"></div>
                    <div class="resume_zoom">
                        <button class=""><i class="fa-solid fa-xmark" @click="close"></i></button>
                        <img :src="imgURL">
                    </div>
                </div>
            </div>
        </div>
        `
})

new Vue({
    el: '#backstage_template_app',
    data: {},
    methods: {},

})
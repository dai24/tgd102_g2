Vue.component('resumedata',{
    data(){
        return{
            resume_modelAll: [],
            banId:'', //停權用途
            openMask:null,
            openM0:false,
            togglemask:true, //測試 綁定class
            closeDisabled:false, //測試切換上下架按鈕
        }       
    },
    methods: {
        chooseMask(ban, resumeId){
            alert("aaa")
            if(ban == 1){
                this.openMask = resumeId
            }else{
                this.openMask = null
            }
        },
        openM(resumeId){ //下架並打開遮罩            
            banId = resumeId        
            let result = confirm("確定下架?")
            if(result){
                fetch(`./php/backstage_banResume.php?resumeId=${banId}`) //修改資料庫ban欄位數值為1
                this.openMask = resumeId //打開遮罩
                this.closeDisabled = true
                // console.log(e.target.closest(".fa-download"))
                // alert("下架")
            }
        },
        closeM(resumeId){ //上架並關閉遮罩            
            banId = resumeId            
            let result = confirm("確定上架?")
            if(result){
                fetch(`./php/backstage_banResume.php?resumeId2=${banId}`) //修改資料庫ban欄位數值為0
                this.openMask = null //關閉遮罩
                this.closeDisabled = false
                // alert("上架")
            }
        },
    },
    computed:{
        
    },
    mounted() {
        fetch(`./php/backstage_resume.php`)
        .then(rsp => rsp.json())
        .then(resume_model => {
            this.resume_modelAll = resume_model;
        })
    },
    updated() {
    //    let closeResume = document.querySelectorAll(".fa-download")
    //    let openResume = document.querySelectorAll(".fa-upload")
    //    for(let i = 0 ; i < closeResume.length ; i ++){
    //     closeResume[i].addEventListener("click",e => {
    //         // console.log(e.target.closest(".fa-download"))
    //         // e.target.toggleAttribute ("disabled")
    //     })
    //    }
    },
    template:`
    <div class="content">
        <li v-for="models in resume_modelAll">
            <div class="resumewra" >
                <div :class="{imgMask:openM0}" :class="models.BAN == 1 ? openMask = models.ID : openMask = null" v-if="openMask === models.ID"></div>
                <img :src="models.IMG_PATH" alt="模板">
            </div>            
            <div class="edit">
                <h3>{{models.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3>
                <div class="editIcon">        
                    <i class="fa-solid fa-upload" @click="closeM(models.ID)"><h4>上架</h4></i>
                    <i class="fa-solid fa-download" @click="openM(models.ID)" :disabled="closeDisabled"><h4>下架</h4></i>
                </div>                    
            </div>
        </li>
    </div>
    `,
})

let vm = new Vue({
    el:"#backstage_resume_app",
    data:{},
    methods: {
        
    },
    template:`
        <div  class="wrapper">
            <h1 class="title">履歷專區</h1>
            <div class="block">
                <ul class="block-left">
                    <li class="model"><a href="./backstage_resume.html"><h3>模板預覽</h3></a></li>
                    <li class="template"><a href="./backstage_template.html"><h3>範本預覽</h3></a></li>
                </ul>
                <ul class="block-right">
                    <div class="inputsearch">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="Text" class="inputText" placeholder="搜尋模板名稱或編號" name="search">
                    </div>  
                </ul>                          
            </div>
            <div class="category" style="display:none;"></div>
                
            <resumedata></resumedata>
                  
            <div class="pagination-div">
                    <ul class="pagination-ul">
                        <li><a href="#"><i class="fa-solid fa-chevron-left"></i></a></li>
                        <li><a href="#" class="pageContent">1</a></li>
                        <li><a href="#"><i class="fa-solid fa-chevron-right"></i></a></li>
                    </ul>
                </div>  
        </div>
    `,
})
Vue.component('resumedata',{
    data(){
        return{
            resume_modelAll: [],
        }       
    },
    methods: {
        
    },
    mounted() {
        fetch(`./php/backstage_resume.php`)
        .then(rsp => rsp.json())
        .then(resume_model => {
            this.resume_modelAll = resume_model;
            
        })
    },
    template:`
    <div class="content">
        <li v-for="models in resume_modelAll">
            <img :src="models.IMG_PATH" alt="模板">
            <div class="edit">
                <h3>{{models.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3>
                <div class="editIcon">                
                    <i class="fa-solid fa-pen"></i>
                    <i class="fa-solid fa-upload"></i>
                    <i class="fa-solid fa-download"></i>
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
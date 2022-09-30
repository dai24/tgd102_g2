// 製作履歷
Vue.component('my-workspace',{
    data(){
        return {
            openwin: true,
        }
    },
    methods:{
        clickData(btnType){
            // e.preventDefault(); 
            // this.$emit('自訂事件'[,傳值1, 傳值2, ...])
            this.$emit('get', this.openwin,btnType);
            console.log('get')   
        },
    },
    template:
    `
    <div class="work_space_header">         
        <div class="box_1"><button id="resume_model-btn" @click="clickData('model')">模板</button> </div>
        <div class="box_2"><button id="resume_save" @click="clickData('save')">儲存</button> </div>
        <div class="box_3"><button id="resume_share" @click="clickData('share')">分享</button> </div>
        <div class="box_4"><button id="resume_pdf_dowload" @click="clickData('pdf')"><i class="fa-regular fa-file-pdf"></i></button></div>
        <div class="box_5"><button id="resume_delete" @click="clickData('delete')"><i class="fa-regular fa-trash-can"></i></button></div>           
    </div>
    `,
 })
 
 //履歷模板
 Vue.component('resume-modelBorder',{   
    data(){
        return {
            resume_modelAll:[],
            resume_modelOne:{
                id: 0,
                student_id: 0,
                model: 0,
                price: 0,
                unlock: 0,
                fileName: '',
                img_path: '',
                name: '',
                address: '',
                phone: '',
                email: '',
                porfolio: '',
                autobiography: '',
                work_experience_job: '',
                during_work: '',
                work_content: '',
                school: '',
                during_school: '',
                department: '',
                attend_school_status: '',
                school_experience: '',
                job_apply: '',
                skill1: '',
                skill2: '',
                skill3: '',
                skill4: '',
                language1: '',
                language2: '',
            },
           
        }
    },
    methods: {
        submitData(id,student_id,model,price,unlock,fileName,img_path,name,address,phone,email,porfolio,autobiography,
        work_experience_job,during_work,work_content,school,during_school,department,attend_school_status,
        school_experience,job_apply,skill1,skill2,skill3,skill4,language1,language2){
            if(fileName != undefined){               
                // 28
                this.resume_modelOne.id = id
                this.resume_modelOne.student_id = student_id,
                this.resume_modelOne.model = model,
                this.resume_modelOne.price = price,
                this.resume_modelOne.unlock = unlock,
                this.resume_modelOne.fileName = fileName,
                this.resume_modelOne.img_path = img_path,
                this.resume_modelOne.name = name,
                this.resume_modelOne.address = address,
                this.resume_modelOne.phone = phone,
                this.resume_modelOne.email = email,
                this.resume_modelOne.porfolio = porfolio,
                this.resume_modelOne.autobiography = autobiography,
                this.resume_modelOne.work_experience_job = work_experience_job,
                this.resume_modelOne.during_work = during_work,
                this.resume_modelOne.work_content = work_content,
                this.resume_modelOne.school = school,
                this.resume_modelOne.during_school = during_school,
                this.resume_modelOne.department = department,
                this.resume_modelOne.attend_school_status = attend_school_status,
                this.resume_modelOne.school_experience = school_experience,
                this.resume_modelOne.job_apply = job_apply,
                this.resume_modelOne.skill1 = skill1,
                this.resume_modelOne.skill2 = skill2,
                this.resume_modelOne.skill3 = skill3,
                this.resume_modelOne.skill4 = skill4,
                this.resume_modelOne.language1 = language1,
                this.resume_modelOne.language2 = language2,
                this.$emit('selectModel',true,this.resume_modelOne)
                console.log('selectModel: ' +"檔名:"+ fileName+"，解鎖:"+unlock+"，價格:"+price)
            }else{
                this.$emit('modelBorder',false)
                console.log('close model')
            }
            
        }
        
    },
    mounted() {
        fetch('./php/getResume_model_All.php?model=1')
            .then(rsp => rsp.json())
            .then(resume_model => {
                this.resume_modelAll = resume_model;
                
            })
    },
    template:
    `
        <div class="resume_model-border">
            <button class="xmark_btn" @click="submitData()"><i class="fa-solid fa-xmark"></i></button>            
            <div :class="{'resume_model':true,'resume_pay':model.UNLOCK_STATUS == 0}" v-for="model in resume_modelAll"  
            @click="submitData(model.ID,model.STUDENT_ID,model.MODEL,model.PRICE,model.UNLOCK_STATUS,model.FILE_NAME,model.IMG_PATH,
            model.NAME,model.ADDRESS,model.PHONE,model.EMAIL,model.PORFOLIO,model.AUTOBIOGRAPHY,model.WORK_EXPERIENCE_JOB,model.DURING_WORK,
            model.WORK_CONTENT,model.SCHOOL,model.DURING_SCHOOL,model.DEPARTMENT,model.ATTEND_SCHOOL_STATUS,model.SCHOOL_EXPERIENCE,
            model.JOB_APPLY,model.SKILL1,model.SKILL2,model.SKILL3,model.SKILL4,model.LANGUAGE1,model.LANGUAGE2)">
                <img :src="model.IMG_PATH">
                <div v-if="model.UNLOCK_STATUS == 0">
                    <i class="fa-solid fa-crown"></i>
                    <div class="resume_model_mask"></div>
                </div>
                
            </div>
        </div>
    `,
 })
 
 //付費
 Vue.component('win-pay',{   
    props: ['fileName','price','unlock',],
    data(){
        return {
            
           
        }
    },
    methods: {
        submitData(payCheck){
            if(payCheck == 'payCheck'){
                this.$emit('payCheckwin',true,payCheck)
                console.log('submit: ' + payCheck)
            }else{   
                this.$emit('paywin',false)  
            }
                                  
        }
        
    },
    template:
    `
    <div>
        <div class="m-a-s-k" @click="submitData('close')"></div>
            <div class="card_resume resume_window">
            <ul class="cardUl">
                <li>
                    <h1 class="cardH1">金幣不足</h1>
                </li>
                <li>
                    <i class="fa-solid fa-xmark cardXmark" @click="submitData('close')"></i>
                </li>
            </ul>
            <div class="cardInner applyfor">
                <div class="applyTitle">
                    <div class="messageTitleMain">
                        <h3>{{fileName}}模板需{{price}}金幣</h3>
                    </div>
                </div>
                <div class="btna3 addpay" @click="submitData('payCheck')">確定加值</div>
            </div>
        </div>
    </div>
        
    `,
 })
 
 //付費方案
 Vue.component('win-payplan',{   
    data(){
        return {
            fee:[],
           
        }
    },
    methods: {
        submitData(type){
                this.$emit('payplanwin',false)   
        }
        
    },
    mounted(){
        fetch('./php/fee.php')
        .then(resp => resp.json())
        .then(fee => this.fee = fee)
    },
    template:
    `
    <div>
        <div class="m-a-s-k" @click="submitData('close')"></div>
        <div class="card_resume  resume_window">
            <ul class="cardUl">
                <li>
                <h1 class="cardH1">加值點數</h1>
                </li>
                <li>
                <i class="fa-solid fa-xmark cardXmark" @click="submitData('close')"></i>
                </li>
            </ul>
            <div class="cardInner payplan">
                <div class="applyTitle">
            
                    <div class="applyTitle_main" v-for="Fee in fee">
                        <input type="radio" name="123">
                        <h2>NT {{Fee.NT}}</h2>
                        <img src="images/header_icon/money.png" alt="">
                        <h2>{{Fee.PRICE}}金幣</h2>
                    </div>
                    
                </div>
                <div class="btna3 payplan_btn">確定</div>
            </div>
        </div>
    </div>
        
    `,
 })
 
 
 //編輯履歷
 Vue.component('model-A01',{
    props: {
        resumeModelOne:{},
        summerdata:'',
    },
    data(){
        return {
           image:'',
           fileInput: false,
           Avatar:false,
        }
    },
    methods:{
       fileChange(e){
            let file = e.target.files[0]
            let readFile = new FileReader()
            
            readFile.readAsDataURL(file)
            readFile.addEventListener('load',()=>{
                this.image = readFile.result
                this.Avatar = true
 
            })
             
       },
       summernote(element){
        this.$emit('summer',true,'summernote')
        this.$emit('summerelement',element)
       }
    },
    mounted() {
        let resume = document.querySelector('.work_space_a4')
        resume.addEventListener('click',(e) => {
            this.summernote(e.target)
            console.log(e.target.innerHTML)
        })
    },
    template:
    `
    <div class="resume_make mode">
 
        <div class="resume_name_div">
            <label for="resume_name">檔案名稱: </label><input type="text" :value="resumeModelOne.fileName">
        </div>
        <div class="work_space_a4">
 
            <div class="work_space_a4_1">
 
                <h3 title="姓名" >{{resumeModelOne.name}}</h3>
 
                <h4 title="職務" >{{resumeModelOne.job_apply}}</h4>
                <h5>聯絡方式</h5>
                <p class="p1">地址：<span class="span1">{{resumeModelOne.address}}</span></p>
                <p class="p2">電話：<span class="span2">{{resumeModelOne.phone}}</span></p>
                <p class="p3">信箱：<span class="span3">{{resumeModelOne.email}}</span></p>
                <p class="p4">作品：<span class="span4">{{resumeModelOne.porfolio}}</span></p>
            </div>
 
            <div title="上傳圖片" class="work_space_a4_2">
                <label for="upload" class="upload" >
                    <input v-show="fileInput" id="upload" type="file" accept="image/*" @change="fileChange">
                    <i class="fa-solid fa-file-circle-plus"></i>
                </label>
                <label for="upload" class="Avatar"><img v-if="Avatar" :src="image"></label>
            </div>
 
            <div class="work_space_a4_3">
 
                <div class="work_space_a4_3_1">
                    <h4>學歷</h4>
                    <h5>{{resumeModelOne.school}}</h5>
                    <h6>{{resumeModelOne.during_school}}</h6>
                    <span>{{resumeModelOne.department}}</span><span> /</span><span>{{resumeModelOne.attend_school_status}}</span>
                </div>
 
                <div class="work_space_a4_3_2">
                    <h4>自傳</h4>
                    <textarea name="" id="" cols="27" rows="5" maxlength="65" disabled>{{resumeModelOne.autobiography}}</textarea>
                        
                    </div>
 
                    <div class="work_space_a4_3_3">
                        <h4>就學期間</h4>
                        <textarea name="" id="" cols="27" rows="6" maxlength="65" disabled>{{resumeModelOne.school_experience}}</textarea>
                    </div>
 
                    <div class="work_space_a4_3_4">
                        <h4>工作經歷</h4>
                        <h5>{{resumeModelOne.work_experience_job}}</h5>
                        <h6>{{resumeModelOne.during_work}}</h6>
                        <textarea name="" id="" cols="27" rows="4" maxlength="50" disabled>{{resumeModelOne.work_content}}</textarea>
                    <p>
                        
                    </p>
                </div>
 
                <div class="work_space_a4_3_5">
                    <h4>工作技能</h4>
                    <p>{{resumeModelOne.skill1}}</p>
                    <p>{{resumeModelOne.skill2}}</p>
                    <p>{{resumeModelOne.skill3}}</p>
                    <p>{{resumeModelOne.skill4}}</p>
                </div>
 
                <div class="work_space_a4_3_6">
                    <h4>語文能力</h4>
                    <p>{{resumeModelOne.language1}}</p>
                    <p>{{resumeModelOne.language2}}</p>
                </div>
 
            </div>
 
        </div>
    </div>
    `,
 })
 
 
 //summernote
 Vue.component('edit-summernote',{   
    data(){
        return {
           data:'',
           
        }
    },
    methods: {
        submitData(){
            
         //    this.data =  $($("#summernote1").summernote("code")).text();
             this.data = $("#summernote1").summernote("code")
             console.log(this.data)
             this.$emit('summerData',this.data)
             // $("#summernote1").code('')   
        }
        
    },
    mounted() {
        let summer = $('#summernote1').summernote({
            toolbar:
                [
                    ['fontsize', ['fontsize']],
                    ['font', ['bold', 'italic', 'underline']],
                    ['hr'],
                    ['fontname', ['fontname']],
                    ['forecolor'],
                    ['para', ['ul', 'ol', 'paragraph', 'height']],
                    ['clear', ['clear', 'undo' , 'redo']],
 
                ],
 
            height: 150,
            dialogsFade: true,
            focus: true,
            placeholder: "",
            fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '28','30','36', ],//字体大小配置
            focus: true,
            placeholder: "",
            disableDragAndDrop: true,
            
        });
        
    },
    template:
    `
    <div class="sumEdit">
        <div id="summernote1"></div>
        <div class="btna3 sumerbtn" @click="submitData">確定</div>
    </div>
    `,
 })
 
 
 
 // 儲存彈窗
 Vue.component('win-save',{   
    data(){
        return {
            // closewin: false,
        }
    },
    methods: {
        submitData(){
            this.$emit('savewin', false);
            console.log('winsave')
            
        },
 
    },
    template:
    `
        <div>
            <div class="m-a-s-k" @click="submitData"></div>
            <div class="card_resume resume_window">
                <ul class="cardUl">
                    <li>
                        <h1 class="cardH1">儲存</h1>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark cardXmark" @click="submitData"></i>
                    </li>
                </ul>
                <div class="cardInner applyfor">
                    <div class="applyTitle">
                        <div class="messageTitleMain">
                            <h3>儲存成功</h3>
                            <h3>要到會員的我的履歷檢視嗎？</h3>
                        </div>
                    </div>
                    <div class="btna3 check_btn"><a href="./student_main.html">確定</a></div>
                </div>   
            </div>    
        </div>
    `,
 })
 
 //分享彈窗
 Vue.component('win-share',{           
    data(){
        return {
            // closewin: false,
        }
    },
    methods: {
        submitData(){
            this.$emit('sharewin', false);
            console.log('winshare')   
        },
 
    },
    template:
    `
        <div>
            <div class="m-a-s-k" @click="submitData"></div>
            <div class="card_resume resume_window">
                <ul class="cardUl">
                    <li>
                        <h1 class="cardH1">分享您的履歷</h1>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark cardXmark" @click="submitData"></i>
                    </li>
                </ul>
                <div class="cardInner shareresumeform ">
                    <div class="applyTitle">
                        <select name="" id="shareresumeform_select"><option value="設計">請選擇履歷種類</option>
                            <option value="工程">工程</option>
                            <option value="管理">管理</option>
                            <option value="媒體">媒體</option>
                            <option value="銷售">銷售</option>
                            <option value="金融">金融</option>
                            <option value="行政">行政</option>
                            <option value="科技">科技</option>
                            <option value="服務">服務</option>
                        </select>    
                    </div>
                    <div class="shareresumeform_1">
                        <input type="radio">
                        <i class="fa-solid fa-earth-asia"></i>
                        <span>公開 網站上的人都可以找到並檢視。</span>
                        <div class="share_ig_fb">
                            <h3>分享至</h3>
                            <a href="#"><img src="./images/careertest//icon_instagram.svg" alt="IG"></a>
                            <a href="#"><img src="./images/careertest//icon_facebook.svg" alt="臉書"></a>
                        </div>
                        <div class="btna3 check_btn">確定</div>
                    </div>
                </div>
            </div>
        </div>
    `,
 })
 
 //下載pdf彈窗
 Vue.component('win-pdf',{   
    data(){
        return {
            // closewin: false,
        }
    },
    methods: {
        submitData(){
            this.$emit('pdfwin', false);
            console.log('winpdf')   
        },
 
    },
    template:
    `
    <div>
        <div class="m-a-s-k" @click="submitData"></div>
        <div class="card_resume  resume_window">
            <ul class="cardUl">
                <li>
                    <h1 class="cardH1">您的履歷 PDF 已就緒</h1>
                </li>
                <li>
                    <i class="fa-solid fa-xmark cardXmark" @click="submitData"></i>
                </li>
            </ul>
            <div class="cardInner applyfor">
                <div class="applyTitle">
                    <div>
                        <i class="fa-solid fa-file-circle-plus"></i>
                    </div>
                    <div class="deleteTitleMain">
                        <h3>新鮮人履歷.pdf</h3>
                    </div>
                </div>
                <div class="btna3 check_btn pdf_dowload">下載 PDF</div>
            </div>
        </div>
    </div>
        
    `,
 })
 
 //刪除彈窗
 Vue.component('win-delete',{   
    data(){
        return {
            // closewin: false,
        }
    },
    methods: {
        submitData(type){
            if(type == 'close'){
                this.$emit('deletewin', false);
            }else{
                this.$emit('deletecheck',false);
                console.log('deletecheck')
            }
 
        },
 
    },
    template:
    `
    <div>
        <div class="m-a-s-k" @click="submitData('close')"></div>
        <div class="card_resume resume_window">
        <ul class="cardUl">
            <li>
                <h1 class="cardH1">刪除</h1>
            </li>
            <li>
                <i class="fa-solid fa-xmark cardXmark" @click="submitData('close')"></i>
            </li>
        </ul>
        <div class="cardInner applyfor">
            <div class="applyTitle">
                <div>
                    <i class="fa-regular fa-circle-check"></i>
                </div>
                <div class="messageTitleMain">
                    <h3>確定刪除履歷嗎？</h3>
                </div>
            </div>
            <div class="btna3 delete_btn" @click="submitData('delete')">確定</div>
        </div>
        </div>
    </div>
        
    `,
 })
 
 // 主內容
 Vue.component('my-content',{
    data(){
        return {
            savePopup: false,
            sharePopup: false,
            pdfPopup: false,
            deletePopup: false,
            payPopup: false,
            payplan: false,
            modelBorder: false,
            deleteResumeBorder: true,
            resume_modelOne:{},
            fileName: '',
            unlock: 0,
            price: 0,
            summernote: false,
            // summerData:'',
            summerEl:'',
        }
    },
    methods: {  
        // 依哪個click功能就打開彈窗
        open(open,type){
            // console.log(open,type)
            // 連點模板可以開啟關閉，換替 toggle
            if(type == 'model'){
                // 當模板是打開狀態，在點擊就關閉
                if(this.modelBorder == true){
                    this.modelBorder = false; 
                }else{
                    // 第1次點擊打開模板
                    this.modelBorder = open;
                } 
                
            }else if(type == 'save'){
                this.savePopup = open;
            }else if(type == 'share'){
                this.sharePopup = open;
            }else if(type == 'pdf'){
                this.pdfPopup = open;
            }else if(type == 'delete'){
                this.deletePopup = open;
            }else if(type == 'pay'){
                this.payPopup = open;
            }else if(type == 'payCheck'){
                this.payplan = open;
            }else if(type == 'summernote'){
                this.summernote = open;
                // console.log('summer:' + type + open)
            }
 
        },
        // 關閉彈窗
        close(closeWin) {
            // console.log('close')
            this.savePopup = closeWin;
            this.sharePopup = closeWin;
            this.pdfPopup = closeWin;
            this.deletePopup = closeWin;
            this.modelBorder = closeWin;
            this.payPopup = closeWin;
            this.payplan = closeWin;
            
 
        },
        // 刪除履歷彈窗及刪除履歷(模板隱藏)
        deleteResume(deleteCheck){
            this.deleteResumeBorder = deleteCheck;
            this.deletePopup = false
            // console.log('deleteResume')
        },
        selectedModel(open,resume_modelOne){
            this.resume_modelOne = resume_modelOne
            // console.log(this.resume_modelOne)
            if(resume_modelOne.unlock == 1){
                // 選擇模板編譯履歷
                // console.log('resumeborder:' + resume_modelOne.id)
                this.deleteResumeBorder = open;
            }else{
                // 付費彈窗
                
                this.payPopup = open
               
                this.fileName = resume_modelOne.fileName
                this.unlock = resume_modelOne.unlock
                this.price = resume_modelOne.price
                this.resume_modelOne = ''
                console.log('prselectedModel:'+ resume_modelOne.fileName +','+ resume_modelOne.unlock +','+ resume_modelOne.price)
            }
            
            // this.modelBorder = false;
            
        },
        getSummerData(data){
            this.summerEl.innerHTML = data
            console.log('getdata:' + data)
            $("#summernote1").summernote("code")
        },
        getSummerEl(element){
             this.summerEl = element
            console.log('getel:' + this.summerEl)
        },
     
    },
    template:
    `
    <div>
        <my-workspace @get="open"></my-workspace>
 
        <div class="work_space_make">
            <resume-modelBorder v-show="modelBorder" @modelBorder="close" @selectModel="selectedModel"></resume-modelBorder>
                                  
                <model-A01 v-if="deleteResumeBorder" :resumeModelOne="resume_modelOne" @summer="open" @summerelement="getSummerEl"></model-A01>
            
            <edit-summernote v-show="summernote" @summerData="getSummerData"></edit-summernote>
            
        </div>
        
        <win-save v-if="savePopup" @savewin="close"></win-save>
        <win-share v-if="sharePopup" @sharewin="close"></win-share>
        <win-pdf v-if="pdfPopup" @pdfwin="close"></win-pdf>
        <win-pay v-if="payPopup" @paywin="close" @payCheckwin="open" :fileName="fileName" :price="price"></win-pay>
        <win-payplan v-if="payplan" @payplanwin="close"></win-payplan>
        <win-delete v-if="deletePopup" @deletewin="close" @deletecheck="deleteResume"></win-delete>
        
    </div>
    `,
 })
 new Vue({
    el: '#resumeWorkSpace',
    data: {
        // content: 'A01',
    },
    methods: {
       
    },
 
 })
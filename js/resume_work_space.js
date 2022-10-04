// 功能列
Vue.component('my-workspace', {
    data() {
        return {
            openwin: true,
        }
    },
    methods: {
        clickData(btnType) {
            // e.preventDefault(); 
            // this.$emit('自訂事件'[,傳值1, 傳值2, ...])
            this.$emit('get', this.openwin, btnType);
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

//付費
Vue.component('win-pay', {
    props: ['fileName', 'price', 'unlock',],
    data() {
        return {


        }
    },
    methods: {
        submitData(payCheck) {
            if (payCheck == 'payCheck') {
                this.$emit('payCheckwin', true, payCheck)
                console.log('submit: ' + payCheck)
            } else {
                this.$emit('paywin', false)
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
Vue.component('win-payplan', {
    data() {
        return {
            fee: [],

        }
    },
    methods: {
        submitData(type) {
            this.$emit('payplanwin', false)
        }

    },
    mounted() {
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

// 儲存彈窗
Vue.component('win-save', {
    data() {
        return {
            // closewin: false,
        }
    },
    methods: {
        submitData() {
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
Vue.component('win-share', {
    data() {
        return {
            categorys: ['請選擇履歷種類', '工程', '管理', '媒體', '銷售', '金融', '行政', '科技', '服務'],
            category: '請選擇履歷種類',
            public_status: 0,

        }
    },
    methods: {
        submitData() {

            if (this.category == '請選擇履歷種類') {
                alert('請選擇履歷分類')
                return;
            } else {
                this.$emit('category', this.category, this.public_status);
            }
            this.$emit('sharewin', false);
        },
        close() {
            this.$emit('sharewin', false);
        },
        publicStatus(e) {
            if (e.target.checked) {
                this.public_status = 1
            }
        },

    },
    template:
        `
        <div>
            <div class="m-a-s-k" @click="close"></div>
            <div class="card_resume resume_window">
                <ul class="cardUl">
                    <li>
                        <h1 class="cardH1">分享您的履歷</h1>
                    </li>
                    <li>
                        <i class="fa-solid fa-xmark cardXmark" @click="close"></i>
                    </li>
                </ul>
                <div class="cardInner shareresumeform ">
                    <div class="applyTitle">
                        <select name="" id="shareresumeform_select" v-model="category">
                            <option v-for="category in categorys" >{{category}}</option>
                        </select>    
                    </div>
                    <div class="shareresumeform_1">
                        <input type="radio" v-model="public_status" value="1" @click="publicStatus">
                        <i class="fa-solid fa-earth-asia"></i>
                        <span>公開 網站上的人都可以找到並檢視。</span>
                        <div class="share_ig_fb">
                            <h3>分享至</h3>
                            <a href="#"><img src="./images/careertest//icon_instagram.svg" alt="IG"></a>
                            <a href="#"><img src="./images/careertest//icon_facebook.svg" alt="臉書"></a>
                        </div>
                        <div class="btna3 check_btn" @click="submitData">確定</div>
                    </div>
                </div>
            </div>
        </div>
    `,
})

//下載pdf彈窗
Vue.component('win-pdf', {
    props: ['pdfName'],
    data() {
        return {

        }
    },
    methods: {
        submitData() {
            this.$emit('pdfwin', false);
        },
        pdfDowload() {
            let page = $('.work_space_a4');
            
            // 手機版
            if(page.width() < 370){
                // page.width('470')
                // page.height('670')
                html2PDF(page, {
                    jsPDF: {
                        unit: "pt",
                        format: 'a4',
                    },
                    html2canvas: {
                        scale: 2,
                        width: 470, // canvas 寬度, 視情況調整
                        height: 800, // canvas 單頁高度, 請自行調整
                        useCORS: true, // 沒有的話轉成PDF後所有的<img>內容都會不見
                    },
                    imageType: 'image/jpeg',
                    imageQuality: 1,
                    margin: {
                        top: 30,
                        right: 30,
                        bottom: 0,
                        left: 30,
                    },
                    output: this.pdfName
    
                });
            }else{
                html2PDF(page, {
                    jsPDF: {
                        unit: "pt",
                        format: 'a4',
                    },
                    html2canvas: {
                        scale: 2,
                        width: 470, // canvas 寬度, 視情況調整
                        height: 900, // canvas 單頁高度, 請自行調整
                        useCORS: true, // 沒有的話轉成PDF後所有的<img>內容都會不見
                    },
                    imageType: 'image/jpeg',
                    imageQuality: 1,
                    margin: {
                        top: -255,
                        right: 20,
                        bottom: 0,
                        left: 10,
                    },
                    output: this.pdfName
    
                });
            }
            
            this.submitData()
        }

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
                        <h3>{{pdfName}}</h3>
                    </div>
                </div>
                <div class="btna3 check_btn pdf_dowload" @click="pdfDowload">下載 PDF</div>
            </div>
        </div>
    </div>
        
    `,
})

//刪除彈窗
Vue.component('win-delete', {
    data() {
        return {
            // closewin: false,
        }
    },
    methods: {
        // 關閉彈窗
        submitData(type) {
            if (type == 'close') {
                this.$emit('deletewin', false);
            } else {
                this.$emit('deletecheck', false);
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


//編輯履歷
Vue.component('model-A01', {
    props: ['modelpopup', 'resumepopup'],
    data() {
        return {
            image: '',
            fileInput: false,
            Avatar: false,
            summerPopup: false,
            summerData: '',
            type: '',
            resume_modelAll: [], // 全部模板
            resume_modelOne: { // 儲存編輯的資料
                id: 0,
                student_id: 0,
                model: 0,
                price: 0,
                unlock: 0,
                fileName: '',
                avatar:'',
                public_status: 0,
                category: '',
                like_count: 0,
                ban: 0,
                avatar: '',
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
                skill5: '',
                skill6: '',
                language1: '',
                language2: '',
                language3: '',
                studentId: 0,
            },
        }
    },
    methods: {
        // 檔名有blur事件時，取得input資料
        setFileName(e) {
            this.resume_modelOne.fileName = e.target.value
            console.log(e.target.value)
        },
        // 點擊編輯的地方就把summernote打開
        openSummer(type,$event) {
            this.summerPopup = true
            this.type = type
            console.log('get:' + type)
            console.log($event.target);

            // 點選編輯位置時，會把值帶到summernote，帶值有問題先不處理 
            // if(type == 'name'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.name));
            // }else if(type == 'job_apply'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.job_apply));
            // }else if(type == 'address'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.address));
            // }else if(type == 'phone'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.phone));
            // }else if(type == 'email'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.email));
            // }else if(type == 'porfolio'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.porfolio));
            // }else if(type == 'school'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.school));
            // }else if(type == 'during_school'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.during_school));
            // }else if(type == 'department'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.department));
            // }else if(type == 'attend_school_status'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.attend_school_status));
            // }else if(type == 'autobiography'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.autobiography));
            // }else if(type == 'school_experience'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.school_experience));
            // }else if(type == 'work_experience_job'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.work_experience_job));
            // }else if(type == 'work_content'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.work_content));
            // }else if(type == 'skill1'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.skill1));
            // }else if(type == 'skill2'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.skill2));
            // }else if(type == 'skill3'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.skill3));
            // }else if(type == 'skill4'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.skill4));
            // }else if(type == 'language1'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.language1));
            // }else if(type == 'language2'){
            //     $($("#summernote1").summernote("code",this.resume_modelOne.language2));
            // }

        },
        // summernote 輸入的值放到對應的物件中
        getSummer() {
            let data = $($("#summernote1").summernote("code")).text();
            // let data = $("#summernote1").summernote("code")
            console.log(data + ',' + this.type)
            if (this.type == 'name') {
                this.resume_modelOne.name = data

                console.log("summernote:" + data)
            } else if (this.type == 'job_apply') {
                this.resume_modelOne.job_apply = data
                // console.log(data)
            } else if (this.type == 'address') {
                this.resume_modelOne.address = data
                // console.log(data)
            } else if (this.type == 'phone') {
                this.resume_modelOne.phone = data
            } else if (this.type == 'email') {
                this.resume_modelOne.email = data
            } else if (this.type == 'porfolio') {
                this.resume_modelOne.porfolio = data
            } else if (this.type == 'school') {
                this.resume_modelOne.school = data
            } else if (this.type == 'during_school') {
                this.resume_modelOne.during_school = data
            } else if (this.type == 'department') {
                this.resume_modelOne.department = data
            } else if (this.type == 'attend_school_status') {
                this.resume_modelOne.attend_school_status = data
            } else if (this.type == 'autobiography') {
                this.resume_modelOne.autobiography = data
                console.log('autobiography:' + this.type)
            } else if (this.type == 'school_experience') {
                this.resume_modelOne.school_experience = data
            } else if (this.type == 'work_experience_job') {
                this.resume_modelOne.work_experience_job = data
            } else if (this.type == 'during_work') {
                this.resume_modelOne.during_work = data
            } else if (this.type == 'work_content') {
                this.resume_modelOne.work_content = data
            } else if (this.type == 'skill1') {
                this.resume_modelOne.skill1 = data
            } else if (this.type == 'skill2') {
                this.resume_modelOne.skill2 = data
            } else if (this.type == 'skill3') {
                this.resume_modelOne.skill3 = data
            } else if (this.type == 'skill4') {
                this.resume_modelOne.skill4 = data
            } else if (this.type == 'skill5') {
                this.resume_modelOne.skill5 = data
            } else if (this.type == 'skill6') {
                this.resume_modelOne.skill6 = data
            } else if (this.type == 'language1') {
                this.resume_modelOne.language1 = data
            } else if (this.type == 'language2') {
                this.resume_modelOne.language2 = data
            } else if (this.type == 'language3') {
                this.resume_modelOne.language3 = data
            }

        },
        // 把點到的模板資料傳點父層
        submitData(id, student_id, model, price, unlock, fileName, avatar, public_status, category, like_count, ban, img_path, name,
            address, phone, email, porfolio, autobiography,
            work_experience_job, during_work, work_content, school, during_school, department, attend_school_status,
            school_experience, job_apply, skill1, skill2, skill3, skill4, language1, language2) {
            if (fileName != undefined) {
                // 28
                this.resume_modelOne.id = id
                this.resume_modelOne.student_id = student_id,
                    this.resume_modelOne.model = model,
                    this.resume_modelOne.price = price,
                    this.resume_modelOne.unlock = unlock,
                    this.resume_modelOne.fileName = fileName,
                    this.resume_modelOne.avatar = avatar,
                    // console.log(this.resume_modelOne.avatar)
                    this.resume_modelOne.public_status = public_status,
                    this.resume_modelOne.like_count = like_count,
                    this.resume_modelOne.category = category,
                    this.resume_modelOne.ban = ban,
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
                    this.$emit('selectModel', true, this.resume_modelOne)
                // console.log('selectModel: ' + "檔名:" + fileName + "，解鎖:" + unlock + "，價格:" + price)
            } else {
                // 關閉rwd視窗
                this.$emit('modelBorder', false)
                console.log('close model')
            }

        },
        // 讀取上傳的圖片存到物件中
        fileChange(e) {
           
            let file = e.target.files[0]
            let readFile = new FileReader()

            readFile.readAsDataURL(file)
            readFile.addEventListener('load', () => {
                this.resume_modelOne.avatar = readFile.result
                // 因上傳圖片的icon跟預覽的img重壘，上傳圖片時要把大頭照img顯示
                this.Avatar = true

            })

        },


    },
    mounted() {
        this.studentId = sessionStorage.getItem('StudentId')
        console.log(this.studentId)
        // 取得模板所有資料
        fetch(`./php/getResume_sample_All.php?model=1&studentId=${this.studentId}`)
            .then(rsp => rsp.json())
            .then(resume_model => {
                this.resume_modelAll = resume_model;

            })

        // summernote 編輯器設定
        let summer = $('#summernote1').summernote({
            toolbar:
                [
                    ['fontsize', ['fontsize']],
                    ['font', ['bold', 'italic', 'underline']],
                    ['hr'],
                    ['fontname', ['fontname']],
                    ['forecolor'],
                    ['para', ['ul', 'ol', 'paragraph', 'height']],
                    ['clear', ['clear', 'undo', 'redo']],

                ],

            height: 150,
            dialogsFade: true,
            focus: true,
            placeholder: "",
            fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '28', '30', '36',],//字体大小配置
            focus: true,
            placeholder: "",
            disableDragAndDrop: true,

        });

    },
    template:
        `
    <div class="work_space_make">
        <div class="resume_model-border" v-show="modelpopup">
            <button class="xmark_btn" @click="submitData()"><i class="fa-solid fa-xmark"></i></button>            
            <div :class="{'resume_model':true,'resume_pay':model.UNLOCK_STATUS == 0}" v-for="model in resume_modelAll"  
                @click="submitData(model.ID,model.STUDENT_ID,model.MODEL,model.PRICE,model.UNLOCK_STATUS,model.FILE_NAME,model.AVATAR,
                    model.PUBLIC_STATUS,model.CATEGORY,model.LIKE_COUNT,model.BAN,model.IMG_PATH,
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
        <div class="resume_make" v-if="resumepopup">
    
            <div class="resume_name_div">
                <label for="resume_name">檔案名稱: </label><input type="text" :value="resume_modelOne.fileName" @blur="setFileName">
            </div>
            <div class="work_space_a4">
    
                <div class="work_space_a4_1">
    
                    <h3 :class="{'borderStyle':type == 'name'}" v-if="resume_modelOne.name" @click="openSummer('name',$event)">{{resume_modelOne.name}}</h3>
    
                    <h4 :class="{'borderStyle':type == 'job_apply'}" v-if="resume_modelOne.job_apply" @click="openSummer('job_apply',$event)">{{resume_modelOne.job_apply}}</h4>
                    <h5>聯絡方式</h5>
                    <p class="p1">地址：<span class="span1" :class="{'borderStyle':type == 'address'}" v-if="resume_modelOne.address" @click="openSummer('address',$event)">{{resume_modelOne.address}}</span></p>
                    <p class="p2">電話：<span class="span2" :class="{'borderStyle':type == 'phone'}" v-if="resume_modelOne.phone" @click="openSummer('phone',$event)">{{resume_modelOne.phone}}</span></p>
                    <p class="p3">信箱：<span class="span3" :class="{'borderStyle':type == 'email'}" v-if="resume_modelOne.email" @click="openSummer('email',$event)">{{resume_modelOne.email}}</span></p>
                    <p class="p4">作品：<span class="span4" :class="{'borderStyle':type == 'porfolio'}" v-if="resume_modelOne.porfolio" @click="openSummer('porfolio',$event)">{{resume_modelOne.porfolio}}</span></p>
                </div>
    
                <div title="上傳圖片" class="work_space_a4_2">
                    <label for="upload" class="upload" >
                        <input v-show="fileInput" id="upload" name="upload" type="file" accept="image/*" @change="fileChange">
                        <i class="fa-solid fa-file-circle-plus"></i>
                    </label>
                    <label for="upload" class="Avatar"><img v-if="Avatar = resume_modelOne.avatar?true:false" :src="resume_modelOne.avatar"></label>
                </div>
    
                <div class="work_space_a4_3">
    
                    <div class="work_space_a4_3_1">
                        <h4>學歷</h4>
                        <h5 :class="{'borderStyle':type == 'school'}" @click="openSummer('school',$event)">{{resume_modelOne.school}}</h5>
                        <h6 :class="{'borderStyle':type == 'during_school'}" @click="openSummer('during_school',$event)">{{resume_modelOne.during_school}}</h6>
                        <span :class="{'borderStyle':type == 'department'}" @click="openSummer('department',$event)">{{resume_modelOne.department}}</span>
                        <span> /</span>
                        <span :class="{'borderStyle':type == 'attend_school_status'}" @click="openSummer('attend_school_status',$event)">{{resume_modelOne.attend_school_status}}</span>
                    </div>
    
                    <div class="work_space_a4_3_2">
                    <h4>自傳</h4>
                    <textarea :class="{'borderStyle':type == 'autobiography'}" cols="27" rows="5" maxlength="65" readonly @click="openSummer('autobiography',$event)">{{resume_modelOne.autobiography}}</textarea>
                        
                    </div>
    
                    <div class="work_space_a4_3_3">
                        <h4>就學期間</h4>
                        <textarea :class="{'borderStyle':type == 'school_experience'}" cols="27" rows="6" maxlength="65" readonly @click="openSummer('school_experience',$event)">{{resume_modelOne.school_experience}}</textarea>
                    </div>
    
                    <div class="work_space_a4_3_4">
                        <h4>工作經歷</h4>
                        <h5 :class="{'borderStyle':type == 'work_experience_job'}" @click="openSummer('work_experience_job',$event)">{{resume_modelOne.work_experience_job}}</h5>
                        <h6 :class="{'borderStyle':type == 'during_work'}" @click="openSummer('during_work',$event)">{{resume_modelOne.during_work}}</h6>
                        <textarea :class="{'borderStyle':type == 'work_content'}" cols="27" rows="4" maxlength="50" readonly @click="openSummer('work_content',$event)">{{resume_modelOne.work_content}}</textarea>

                    </div>
    
                    <div class="work_space_a4_3_5">
                        <h4>工作技能</h4>
                        <p :class="{'borderStyle':type == 'skill1'}" @click="openSummer('skill1',$event)">{{resume_modelOne.skill1}}</p>
                        <p :class="{'borderStyle':type == 'skill2'}" @click="openSummer('skill2',$event)">{{resume_modelOne.skill2}}</p>
                        <p :class="{'borderStyle':type == 'skill3'}" @click="openSummer('skill3',$event)">{{resume_modelOne.skill3}}</p>
                        
                    </div>
    
                    <div class="work_space_a4_3_6">
                        <h4>語文能力</h4>
                        <p :class="{'borderStyle':type == 'language1'}" @click="openSummer('language1',$event)">{{resume_modelOne.language1}}</p>
                        <p :class="{'borderStyle':type == 'language2'}" @click="openSummer('language2',$event)">{{resume_modelOne.language2}}</p>
                        <p :class="{'borderStyle':type == 'language3'}" @click="openSummer('language3',$event)">{{resume_modelOne.language3}}</p>
                    </div>
    
                </div>
    
            </div>
        </div>
        <div class="sumEdit" v-show="summerPopup">
            <div id="summernote1"></div>
            <div class="btna3 sumerbtn" @click="getSummer">確定</div>
        </div>
    </div>
    `,
})



// 主內容
Vue.component('my-content', {
    data() {
        return {
            temp: '',
            savePopup: false,
            sharePopup: false,
            pdfPopup: false,
            deletePopup: false,
            payPopup: false,
            payplan: false,
            modelBorder: false,
            deleteResumeBorder: true,
            resume_modelOne: {},
            // fileName: '',
            unlock: 0,
            price: 0,
            studentId: 0,
            ResumeTotal: 0,
            pdfFileName: '',
        }
    },
    methods: {
        // 依功能列哪個click就打開彈窗
        open(open, type) {
            // console.log(open,type)
            // 連點模板可以開啟關閉，換替 toggle
            if (type == 'model') {
                // 當模板是打開狀態，在點擊就關閉
                if (this.modelBorder == true) {
                    this.modelBorder = false;
                } else {
                    // 第1次點擊打開模板
                    this.modelBorder = open;

                }
                // 組件儲存傳送 'save'過來後要存檔
            } else if (type == 'save') {
                // 查看該學生有幾筆履歷
                fetch(`./php/getResume_sample_All.php?model=2&studentId=${this.studentId}`)
                    .then(rsp => rsp.json())
                    .then(data => {
                        // this.ResumeTotal = 0
                        for (total1 in data) {
                            // console.log('id:' + data[total].ID)
                            // console.log('studentId:' + data[total].STUDENT_ID)
                            this.ResumeTotal++
                        }
                        // 沒有student_id代表是新增履歷
                            if (this.resume_modelOne.student_id == null) {
                                // 履歷達到5筆時的提示
                                if (this.ResumeTotal == 5) {
                                    alert('製作履歷數量已達上限5個')
                                } else {
                                    // 存檔
                                    this.saveResume()
                                }   
                            } else {
                                // 有student_id代表是修改履歷
                                this.updateResume()
                            }
                            // 儲存完資料後，儲存視窗要顯示
                            this.savePopup = open;
                        
                    })

            } else if (type == 'share') {
                this.sharePopup = open;
            } else if (type == 'pdf') {
                const date = new Date()
                // pdf彈窗的檔名
                this.pdfFileName = `resume-${date.getTime()}.pdf`
                this.pdfPopup = open;
            } else if (type == 'delete') {
                this.deletePopup = open;
                // this.Delete = type
            } else if (type == 'pay') {
                this.payPopup = open;
            } else if (type == 'payCheck') {
                this.payplan = open;
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
        deleteResume(deleteCheck) {
            this.deleteResumeBorder = deleteCheck;
            this.deletePopup = false
            fetch(`./php/deleteResume.php?id=${this.resume_modelOne.id}&studentId=${this.studentId}`)
                .then(rsp => rsp.json())
                .then(data => {
                    console.log(data.message)
                })
        },
        // 點擊模板帶過來的資料
        selectedModel(open, resume_modelOne) {
            this.resume_modelOne = resume_modelOne
            // console.log(this.resume_modelOne)
            if (resume_modelOne.unlock == 1) {
                // 選擇模板編譯履歷
                // console.log('resumeborder:' + resume_modelOne.id)
                this.deleteResumeBorder = open;
            } else {
                // 付費彈窗
                this.payPopup = open
                this.fileName = resume_modelOne.fileName
                this.unlock = resume_modelOne.unlock
                this.price = resume_modelOne.price
                // this.resume_modelOne = ''
                // console.log('prselectedModel:' + resume_modelOne.fileName + ',' + resume_modelOne.unlock + ',' + resume_modelOne.price)
            }

            // this.modelBorder = false;

        },
        // 儲存
        saveResume() {
            html2canvas(document.querySelector('.work_space_a4'), {
                onrendered: canvas => {
                    this.resume_modelOne.img_path = canvas.toDataURL();

                    fetch('./php/insertResume.php', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: this.resume_modelOne.id,
                            studentId: this.studentId,
                            model: this.resume_modelOne.model,
                            price: this.resume_modelOne.price,
                            unlock: this.resume_modelOne.unlock,
                            fileName: this.resume_modelOne.fileName,
                            avatar: this.resume_modelOne.avatar,
                            img_path: this.resume_modelOne.img_path,
                            name: this.resume_modelOne.name,
                            address: this.resume_modelOne.address,
                            phone: this.resume_modelOne.phone,
                            email: this.resume_modelOne.email,
                            porfolio: this.resume_modelOne.porfolio,
                            autobiography: this.resume_modelOne.autobiography,
                            work_experience_job: this.resume_modelOne.work_experience_job,
                            during_work: this.resume_modelOne.during_work,
                            work_content: this.resume_modelOne.work_content,
                            school: this.resume_modelOne.school,
                            during_school: this.resume_modelOne.during_school,
                            department: this.resume_modelOne.department,
                            attend_school_status: this.resume_modelOne.attend_school_status,
                            school_experience: this.resume_modelOne.school_experience,
                            job_apply: this.resume_modelOne.job_apply,
                            skill1: this.resume_modelOne.skill1,
                            skill2: this.resume_modelOne.skill2,
                            skill3: this.resume_modelOne.skill3,
                            skill4: this.resume_modelOne.skill4,
                            skill5: this.resume_modelOne.skill5,
                            skill6: this.resume_modelOne.skill6,
                            language1: this.resume_modelOne.language1,
                            language2: this.resume_modelOne.language2,
                            language3: this.resume_modelOne.language3,
        
                        })
                    })
                        .then(resp => resp.json())
                        .then(data => {
                            console.log(data.message)
        
                            // this.resumeJPEG()
        
                        })
                    
                    
                }
            });
            
            
        },
        // 修改
        updateResume() {
            html2canvas(document.querySelector('.work_space_a4'), {
                onrendered: canvas => {
                    this.resume_modelOne.img_path = canvas.toDataURL();
                fetch('./php/updateResume.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        id: this.resume_modelOne.id,
                        studentId: this.studentId,
                        model: this.resume_modelOne.model,
                        price: this.resume_modelOne.price,
                        unlock: this.resume_modelOne.unlock,
                        fileName: this.resume_modelOne.fileName,
                        avatar: this.resume_modelOne.avatar,
                        img_path: this.resume_modelOne.img_path,
                        public_status: this.resume_modelOne.public_status,
                        category: this.resume_modelOne.category,
                        like_count: this.resume_modelOne.like_count,
                        ban: this.resume_modelOne.ban,
                        name: this.resume_modelOne.name,
                        address: this.resume_modelOne.address,
                        phone: this.resume_modelOne.phone,
                        email: this.resume_modelOne.email,
                        porfolio: this.resume_modelOne.porfolio,
                        autobiography: this.resume_modelOne.autobiography,
                        work_experience_job: this.resume_modelOne.work_experience_job,
                        during_work: this.resume_modelOne.during_work,
                        work_content: this.resume_modelOne.work_content,
                        school: this.resume_modelOne.school,
                        during_school: this.resume_modelOne.during_school,
                        department: this.resume_modelOne.department,
                        attend_school_status: this.resume_modelOne.attend_school_status,
                        school_experience: this.resume_modelOne.school_experience,
                        job_apply: this.resume_modelOne.job_apply,
                        skill1: this.resume_modelOne.skill1,
                        skill2: this.resume_modelOne.skill2,
                        skill3: this.resume_modelOne.skill3,
                        skill4: this.resume_modelOne.skill4,
                        skill5: this.resume_modelOne.skill5,
                        skill6: this.resume_modelOne.skill6,
                        language1: this.resume_modelOne.language1,
                        language2: this.resume_modelOne.language2,
                        language3: this.resume_modelOne.language3,

                    })
                })
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data.message)
                        // this.resumeJPEG()
                    })
                }
            });
        },
        // 分享
        shareResume(category, public_status) {
            this.resume_modelOne.category = category
            this.resume_modelOne.public_status = public_status
            this.updateResume()

        },

    },
    mounted() {

        this.studentId = sessionStorage.getItem('StudentId')

    },
    template:
        `
    <div>
        <my-workspace @get="open"></my-workspace>
                                  
        <model-A01 :modelpopup="modelBorder" :resumepopup="deleteResumeBorder" @selectModel="selectedModel" @modelBorder="close"></model-A01>
        
        <win-save v-if="savePopup" @savewin="close"></win-save>
        <win-share v-if="sharePopup" @sharewin="close" @category="shareResume"></win-share>
        <win-pdf v-if="pdfPopup" @pdfwin="close" :pdfName="pdfFileName"></win-pdf>
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


Vue.component('my-list',{
    props: ["myname"],
    data() {
        return {
            com:[],
            jobID:[],
            jobID1:[],
        }
    },
    mounted() {
        
        fetch("../php/findJob.php",{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
        })
         //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.com = userArr
        })
        
    },
    template:`
    <div >
        <div class="findJobVacancies" v-for='find in com'>
            <div class="findJobVacanciesPicture">
                <img :src= "find.LOGO + '.jpg'"  alt="" class="moveToCom">
            </div>
            <div class="findJobVacanciesTitle">
                <h3 class="moveToJob">{{find.JOB_NAME}}</h3>
                <p class="moveToCom">{{find.COM_NAME}}</p>
                <p>{{find.DESCRIBE}}</p>
            </div>
            <div class="findJobVacanciesItem">
                <div>
                    <div class="findJobVacanciesIcon">
                        <a href="" title="職缺人數"><i class="fa-solid fa-user-tie"></i><p> {{find.JOB}} </p></a>
                    </div>
                    <div class="findJobVacanciesIcon">
                        <a href="" title="地點"><i class="fa-solid fa-location-dot"></i><p> {{find.CITY}} </p></a>
                    </div>
                    <div class="findJobVacanciesIcon">
                        <a href="" title="薪資"><i class="fa-solid fa-dollar-sign"></i><p> {{find.SALARY}} / h</p></a>
                    </div>
                    <div class="findJobVacanciesIcon">
                        <a href="" title="瀏覽數"><i class="fa-solid fa-eye"></i><p> {{find.BROWSED}} </p></a>
                    </div>
                </div>
                
                <div class="findJobVacanciesBtn">
                    <div class="btna5 saveApplyOpen" @click='openSave'>儲存職缺</div>
                    <div class="btna6" @click='jobMainGo(find.ID)'>立即應徵</div>
                </div>
            </div>
        </div>
    </div>
            `,
    methods: {
        // filiSort(a, b){
        //     a.filter(function(element, index, self){
        //         // console.log(element);
        //         for(let i = 0; i < b.length; i++){
        //             // console.log(b[i]);
        //             if(b[i].CITY == element){
        //                 // console.log('qwe');
        //             }else{
        //                 console.log(b);
        //                 delete b[i];
        //             }
        //         }
                
        //     })
        // },
        jobMainGo(idNum){
            sessionStorage.setItem('findJobId', idNum);
            this.jobID.push(idNum)
            this.jobID.forEach((num) => {
                if (!this.jobID1.includes(num)) {
                    this.jobID1.push(num);
                }
            })
            for(let i = 0; i < this.jobID1.length; i++){
                console.log(this.jobID1[i]);
                fetch(`../php/jobMain.php?home=${this.jobID1[i]}`)
                
                //jobId : this.jobID1[i]
            }
            location='./jobMain.html'
        },
        openSave(){
            this.$emit('save-click')
        }
    },
    computed: {
        
    },
    
})

new Vue({
    el: '#findJobApp',
    data:{
        isShowSave:false,
        tab_1: false,
        tab_2: false,
        tab_3: false,
        tab_4: false,
        tab_5: false,
        findJobClassMainList:[
            {
                id:'1',
                name:'前端工程師'
            },
            {
                id:'2',
                name:'企業財務'
            },
            {
                id:'3',
                name:'後端開發人員'
            },
            {
                id:'4',
                name:'行銷人員'
            }
        ],
        placeList:[
            {
                id:'1',
                name:'台北市'
            },
            {
                id:'2',
                name:'新北市'
            },
            {
                id:'3',
                name:'桃園市'
            },
            {
                id:'4',
                name:'新竹縣'
            },
            {
                id:'5',
                name:'台中市'
            },
            {
                id:'6',
                name:'台南市'
            },
            {
                id:'7',
                name:'高雄市'
            },
            {
                id:'8',
                name:'彰化縣'
            },
        ],
        sortTitle:['軟體','行銷','金融'],
        sortList1:[
            {
                id:'1',
                sort:'軟體',
                name:'前端開發人員'
            },
            {
                id:'2',
                sort:'軟體',
                name:'後端開發人員'
            },
            {
                id:'3',
                sort:'行銷',
                name:'行銷人員'
            },
            {
                id:'4',
                sort:'行銷',
                name:'數位行銷人員'
            },
            {
                id:'5',
                sort:'金融',
                name:'企業財務'
            },
            {
                id:'6',
                sort:'金融',
                name:'管理會計'
            },
        ],
        scaleList:[
            {
                id:'1',
                name:'大'
            },
            {
                id:'2',
                name:'中'
            },
            {
                id:'3',
                name:'小'
            },
        ],
        moneyList:[
            {
                id:'1',
                name:'168 / h'
            },
            {
                id:'2',
                name:'200 / h'
            },
            {
                id:'3',
                name:'250 / h'
            },
            {
                id:'4',
                name:'300 / h'
            },
        ],
        distanceList:[
            {
                id:'1',
                name:'是'
            },
            {
                id:'2',
                name:'否'
            },
        ],
        checkedSort: [],
        searchJob1:[]
    },
    mounted() {
        
    },
    methods: {
        searchJob(){
            console.log('qwe');
            fetch(`../php/searchJob.php?searchJob1=${this.searchJob1}`)
        },  
        sortGo(){
            
        },
        saveGo(){
            this.isShowSave =!this.isShowSave
        },
        saveClose(){
            this.isShowSave =!this.isShowSave
        },
        open(){
            this.isShow =!this.isShow
        },
        close(){
            this.isShow =!this.isShow
        },
        place(){
            this.tab_1 = !this.tab_1
            this.tab_2 = false
            this.tab_3 = false
            this.tab_4 = false
            this.tab_5 = false
        },
        sort(){
            this.tab_2 = !this.tab_2
            this.tab_1 = false
            this.tab_3 = false
            this.tab_4 = false
            this.tab_5 = false
        },
        scale(){
            this.tab_3 = !this.tab_3
            this.tab_1 = false
            this.tab_2 = false
            this.tab_4 = false
            this.tab_5 = false
        },
        money(){
            this.tab_4 = !this.tab_4
            this.tab_1 = false
            this.tab_2 = false
            this.tab_3 = false
            this.tab_5 = false
        },
        distance(){
            this.tab_5 = !this.tab_5
            this.tab_1 = false
            this.tab_2 = false
            this.tab_3 = false
            this.tab_4 = false
        },
        all(){
            this.tab_1 = false
            this.tab_2 = false
            this.tab_3 = false
            this.tab_4 = false
            this.tab_5 = false
        },
        remove(e){
            const pText = e.target.parentNode.children[0].innerText;
            this.checkedSort.forEach((item, index, arr) => {
                console.log(arr);
                console.log(item);
                if(item == pText) {
                    this.checkedSort.splice(index, 1);
                }
            });
        },
        
    },
})


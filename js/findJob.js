
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
                name:'前端工程',
                checked:true,
            },
            {
                id:'2',
                sort:'軟體',
                name:'後端工程',
                checked:true,
            },
            {
                id:'3',
                sort:'行銷',
                name:'行銷人員',
                checked:true,
            },
            {
                id:'4',
                sort:'行銷',
                name:'數位行銷人員',
                checked:true,
            },
            {
                id:'5',
                sort:'金融',
                name:'企業財務',
                checked:true,
            },
            {
                id:'6',
                sort:'金融',
                name:'管理會計',
                checked:true,
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
                name:168
            },
            {
                id:'2',
                name:200
            },
            {
                id:'3',
                name:250
            },
            {
                id:'4',
                name:300
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
        checkedSort1: [],
        checkedSort2: [],
        checkedSort3: [],
        checkedSort4: [],
        checkedSort5: [],
        searchJob1:'',
        searchJob2:[],
        com:[],
        jobID:[],
        jobID1:[],
        com2:[],
        com3:[],
        current_sort:'',
        conmLength:null,
        comPage:4,
        minPage:1,
        showPage:1,
        pageTotal:0,
    },
    mounted() {
        fetch("./php/findJob.php",{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
        })
         //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.com2 = userArr
            this.conmLength = this.com2.length //資料長度
            this.pageTotal = Math.ceil(this.conmLength/this.comPage) //page 按鈕總數量公式 總資料數量 / 每一頁要顯示的資料
            this.com2.forEach(element => {
                if(element.TOTAL_EMPLOYEE <= 30){
                    element.TOTAL_EMPLOYEE = '小'
                    console.log(element.TOTAL_EMPLOYEE);
                }
                if(element.TOTAL_EMPLOYEE > 30 && element.TOTAL_EMPLOYEE <= 60){
                    element.TOTAL_EMPLOYEE = '中'
                    console.log(element.TOTAL_EMPLOYEE);
                }
                if(element.TOTAL_EMPLOYEE > 60){
                    element.TOTAL_EMPLOYEE = '大'
                    console.log(element.TOTAL_EMPLOYEE);
                }
            });
        })            
    },
    computed: { 
        new_array(i){
            const vw = this;
            this.com2.slice((vw.showPage-1)*4, (vw.showPage-1)*4+4);
            // this.com2.slice((this.showPage-1)*2, (this.showPage-1)*2+2);
            if (vw.checkedSort1.length === 0 && vw.checkedSort2.length === 0 && vw.checkedSort3.length === 0 && vw.checkedSort4.length === 0 && vw.checkedSort5.length === 0) {
                return this.com2.slice((vw.showPage-1)*4, (vw.showPage-1)*4+4);
            } else {
                let resultArr = [...this.com2];

                if (vw.checkedSort1.length !== 0) {
                    resultArr = resultArr.filter(function(item){
                        return vw.checkedSort1.findIndex(function(condition){
                            return item.CITY.includes(condition);
                        }) !== -1;
                    })
                }
                if (vw.checkedSort2.length !== 0) {
                    resultArr = resultArr.filter(function(item){
                        return vw.checkedSort2.findIndex(function(condition){
                            return item.DEPART.includes(condition);
                        }) !== -1;
                    })
                }
                if (vw.checkedSort3.length !== 0) {
                    resultArr = resultArr.filter(function(item){
                        return vw.checkedSort3.findIndex(function(condition){
                            return item.TOTAL_EMPLOYEE.includes(condition);
                        }) !== -1;
                    })
                }
                if (vw.checkedSort4.length !== 0) {
                    resultArr = resultArr.filter(function(item){
                        return vw.checkedSort4.findIndex(function(condition){
                            return ('' + item.SALARY).includes(condition);
                        }) !== -1;
                    })
                }
                return resultArr;
            }
        },
    },
    methods: {
        left(){
            this.showPage--
            if(this.showPage<=0){
                this.showPage= 1
            }
        },
        right(){
            this.showPage++
            if(this.showPage >= this.pageTotal){
                this.showPage=  this.pageTotal
            }
        },
        pageid(i){
            this.showPage = i
        },
        comImg(comId){
            // console.log(comId);
            sessionStorage.setItem('comId',comId)
        },
        filiSort(a,b,c,d){
            this.current_sort = a
            // console.log(this.current_sort);
        },
        searchJob(){
            fetch(`./php/searchJobFront.php?searchJob1=${this.searchJob1}`)
            .then(rsp => rsp.json())
            .then(userArr => {            
                this.com2 = userArr
            })
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
            this.checkedSort1.forEach((item, index, arr) => {
                if(item == pText) {
                    this.checkedSort1.splice(index, 1);
                }
            });
            this.checkedSort2.forEach((item, index, arr) => {
                if(item == pText) {
                    this.checkedSort2.splice(index, 1);
                }
            });
            this.checkedSort3.forEach((item, index, arr) => {
                if(item == pText) {
                    this.checkedSort3.splice(index, 1);
                }
            });
            this.checkedSort4.forEach((item, index, arr) => {
                if(item == pText) {
                    this.checkedSort4.splice(index, 1);
                }
            });
            this.checkedSort5.forEach((item, index, arr) => {
                if(item == pText) {
                    this.checkedSort5.splice(index, 1);
                }
            });
        },
        jobMainGo(idNum,comidNum,brow){
            brow++
            console.log(brow);
            sessionStorage.setItem('findJobId', idNum);
            sessionStorage.setItem('findJobcomId', comidNum);
            this.jobID.push(idNum)
            this.jobID.forEach((num) => {
                if (!this.jobID1.includes(num)) {
                    this.jobID1.push(num);
                }
            })
            for(let i = 0; i < this.jobID1.length; i++){
                console.log(this.jobID1[i]);
                fetch(`./php/jobMain.php?home=${this.jobID1[i]}`)
                fetch(`./php/jobMainBrow.php?home=${this.jobID1[i]}&brow=${brow}`)
            }
            location='./jobMain.html'
        },
        
    },
    filters:{
        ellipsis(value){
            if (!value) return '';
            if (value.length > 10) {
                return value.slice(0,150) + '...'
            }
            return value
        }
    }
})


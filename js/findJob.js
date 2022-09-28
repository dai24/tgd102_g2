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
        // all_category.a
        // all_category:[
        //     a:[],
        //     b:[]
        // ]
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
                name:'168'
            },
            {
                id:'2',
                name:'200'
            },
            {
                id:'3',
                name:'250'
            },
            {
                id:'4',
                name:'300'
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
        searchJob1:'',
        searchJob2:[],
        com:[],
        jobID:[],
        jobID1:[],
        com2:[],
    },
    mounted() {
        fetch("../php/findJob.php",{
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
        })
         //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.com2 = userArr
        })

        // fetch(`../php/searchJobFront.php?searchJob1=${this.searchJob1}`)
        //     .then(rsp => rsp.json())
        //     .then(userArr => {            
        //         // console.log(userArr);
        //         this.com = userArr
        //         console.log(this.com);
        // })

        //顯示第一頁的資料
        fetch(`../php/pageFindJob.php?page=1`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            // console.log(userArr)
            this.com = userArr
        })

        //根據選擇的頁碼，顯示不同筆資料
        let pageContent = document.querySelectorAll(".pageContent");
        for(let i = 0; i < pageContent.length; i++ ){
            pageContent[i].addEventListener("click", e => {
                console.log('asd');
                // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
                fetch(`../php/pageFindJob.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
                //${e.target.innerText}
                .then(rsp => rsp.json())
                .then(userArr => {            
                    // console.log(userArr)
                    this.com = userArr  
                })
            })
        } 
            
    },
    
    methods: {
        comImg(comId){
            // console.log(comId);
            sessionStorage.setItem('comId',comId)
        },
        filiSort(a,b,c,d){
            console.log(a);
            fetch(`../php/searchJobCb.php?searchJob1=${a} & searchJob2=${a}`)
            .then(rsp => rsp.json())
            .then(userArr => {            
                console.log(userArr);
                this.com = userArr
                console.log(this.com);
            })
            // this.mounted()
            // if(this.com.SALARY == a){
            //     return this.com;
            // }else{
            //     return this.com.filter(function(b) {
			// 		return b.SALARY === this.com.SALARY;
			// 	});
            // }
            // return this.com.filter(function(item){
            //     console.log(item);
            //     // if(item.SALARY == a){
            //     //     this.com.push(item)
            //     // }
            // })
        },
        searchJob(){
            // this.searchJob2 = this.com
            fetch(`../php/searchJobFront.php?searchJob1=${this.searchJob1}`)
            .then(rsp => rsp.json())
            .then(userArr => {            
                // console.log(userArr);
                this.com = userArr
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
            this.checkedSort.forEach((item, index, arr) => {
                console.log(arr);
                console.log(item);
                if(item == pText) {
                    this.checkedSort.splice(index, 1);
                }
            });
        },
        jobMainGo(idNum,comidNum,brow){
            // console.log(comidNum);
            // console.log(brow++);
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
                fetch(`../php/jobMain.php?home=${this.jobID1[i]}`)
                fetch(`../php/jobMainBrow.php?home=${this.jobID1[i]}&brow=${brow}`)
                //jobId : this.jobID1[i]
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


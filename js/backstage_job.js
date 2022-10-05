Vue.component('job-data',{ 
    data(){
        return{
            jobData: [],
            opened_trs:null, //開關詳細資料
            banId:'', //停權用途
            searchjob:'', //搜尋關鍵字
        }       
    },
    methods:{
        banJob(jobId){ //目標：將要停權的目標id存到banId變數
            // console.log(jobId); 
            banId = jobId
        },
        search(){  //搜尋職缺         
            // console.log(this.searchjob)
            const searjob = this.searchjob;
            // console.log(searstu)
            fetch(`./php/search_job.php?job=${searjob}`)
            .then(rsp => rsp.json())
            .then(userArr => {            
                // console.log(userArr);
                this.jobData = userArr;
            })
        },
    },
    
    mounted() {       
        //顯示第一頁的資料
        fetch(`./php/search_job.php?page=1`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            this.jobData = userArr
        })

        //根據選擇的頁碼，顯示不同筆資料
        let pageContent = document.querySelectorAll(".pageContent");
        for(let i = 0; i < pageContent.length; i++ ){
            pageContent[i].addEventListener("click", e => {
                // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
                fetch(`./php/search_job.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
                //${e.target.innerText}
                .then(rsp => rsp.json())
                .then(userArr => {      
                    // console.log(userArr);    
                    this.jobData = userArr
                   
                })
            })
        }
    },
    updated() {
        //目標：職缺是否要停權
        let fa_ban = document.querySelectorAll(".fa-ban")
        for(let i = 0; i < fa_ban.length; i++){
            fa_ban[i].addEventListener("click", e => {
                // console.log(e.target)
                if(e.target.classList.contains('-on')){
                    e.target.classList.toggle('-on')
                    e.target.style.opacity = "10%"
                    fetch(`./php/backstage_banJob.php?jobId2=${banId}`) //修改資料庫ban欄位數值為0
                }else {
                    e.target.classList.toggle('-on')
                    e.target.style.opacity = "100%"
                    fetch(`./php/backstage_banJob.php?jobId=${banId}`) //修改資料庫ban欄位數值為1
                }
            })
        }
    },
    template: `
        <div class="wratable">
            <div class="block">
                <div class="category">
                    <h3>職缺種類：</h3>
                    <div class="consultantIndustrySearch">
                        <button class="btna21">全部<i class="fa-solid fa-chevron-down"></i></button>
                        <ul class="consultantIndustry searchItem" style="display:none;">
                            <li><button class="btna22">軟體</button></li>
                            <li><button class="btna22">行銷</button></li>
                            <li><button class="btna22">金融</button></li>
                        </ul>
                    </div>
                </div>

                <div class="inputsearch">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="Text" class="inputText" v-model="searchjob" @change="search" placeholder="搜尋職缺名稱或編號" name="search">
                </div>                
            </div>

            <table>
                <thead>
                    <tr>
                        <th class="id"><h3>職缺編號</h3></th>
                        <th class="companyname"><h3 >公司名稱</h3></th>
                        <th class="name"><h3 >職缺名稱</h3></th>
                        <th class="workplace"><h3>工作地點</h3></th>
                        <th class="browsed"><h3>被瀏覽數</h3></th>
                        <th class="apply"><h3>應徵次數</h3></th>
                        <th class="interview"><h3>面試次數</h3></th>
                        <th class="detail"><h3></h3></th>
                        <th class="create-date"><h3>建立日期</h3></th>
                        <th class="state"><h3>職缺狀態</h3></th>
                        <th class="ban"><h3 >停權</h3></th>
                    </tr> 
                </thead>
                        
                <tbody>
                    <template v-for="(jobs, key) in jobData">
                        <tr class="item">
                            <td class="id"><h3>J111{{jobs.ID}}</h3></td>
                            <td class="companyname"><h3>{{jobs.COMPANYNAME}}</h3></td>
                            <td class="name"><h3>{{jobs.NAME}}</h3></td>
                            <td class="workplace"><h3>{{jobs.WORKPLACE}}</h3></td>
                            <td class="browsed"><h3>{{jobs.BROWSED}}</h3></td>
                            <td class="apply"><h3>130</h3></td>
                            <td class="interview"><h3>43</h3></td>
                            <td class="detail"><h3><button class="btna3" @click="opened_trs == null  ?  opened_trs = jobs.ID : opened_trs = null"><h4>詳細資料</h4></button></h3></td>
                            <td class="create-date"><h3>{{jobs.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></td>
                            <td class="state"><i class="fa-solid fa-lightbulb"></i></td>
                            <td class="ban"><h3><i class="fa-solid fa-ban" @click="banJob(jobs.ID)" :style="{ 'opacity': jobs.BAN == 1 ? 1 : 0.1 }"></i></h3></td>
                        </tr>
                        <tr>
                            <tr class="itemDetailTile" v-if="opened_trs == jobs.ID">
                                <th class="category"><h3>職業種類</h3></th>
                                <th class="depart"><h3>部門種類</h3></th>
                                <th class="scale"><h3>公司規模(人數)</h3></th>
                                <th class="salary"><h3>時薪</h3></th>
                                <th class="wfh"><h3>是否遠端</h3></th>
                                <th class="job"><h3>職缺人數</h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                            </tr>
                            <tr class="itemDetail" v-if="opened_trs == jobs.ID">
                                <th class="category"><h3>{{jobs.CATEGORY}}</h3></th>
                                <th class="depart"><h3>{{jobs.DEPART}}</h3></th>
                                <th class="scale"><h3>{{jobs.SCALE}}</h3></th>
                                <th class="salary"><h3>{{jobs.SALARY}}</h3></th>
                                <th class="wfh"><h3>{{jobs.WFH}}</h3></th>
                                <th class="job"><h3>{{jobs.JOB}}</h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                                <th><h3></h3></th>
                            </tr>
                            <tr class="itemDetailTile" v-if="opened_trs == jobs.ID">
                                <th class="describe" colspan="4"><h3>職缺描述</h3></th>
                                <th class="require" colspan="3"><h3>職務需求</h3></th>
                                <th class="plus" colspan="3"><h3>加分條件</h3></th>
                                <th><h3></h3></th>
                            </tr>
                            <tr class="itemDetail" v-if="opened_trs == jobs.ID">                                    
                                <th class="describe" colspan="4"><h3>{{jobs.DESCRIBE}}</h3></th>
                                <th class="require" colspan="4"><h3>{{jobs.REQUIRE}}</h3></th>
                                <th class="plus" colspan="3"><h3>{{jobs.PLUS}}</h3></th>  
                            </tr> 
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    `,
})

let vm = new Vue({ //設定想要預載的html結構
    el:'#backstage_job_app',
    data: { 
        //設定要先掛載的東西
    },
    methods: {},      
    template: //預先掛載的div結構
        `
        <div  class="wrapper">
            <h1 class="title">實習職缺</h1>
            
            <job-data></job-data>
            
            <div class="pagination-div">
                <ul class="pagination-ul">
                <li><a href="#"><i class="fa-solid fa-chevron-left"></i></a></li>
                <li><a href="#" class="pageContent">1</a></li>
                <li><a href="#" class="pageContent">2</a></li>              
                <li><a href="#"><i class="fa-solid fa-chevron-right"></i></a></li>
                </ul>
            </div>
        </div>   
        
        `,  
    })     

//---------------------------

//打開/關閉子選單
let consultantIndustrySearch = document.querySelector(".consultantIndustrySearch");  
let categoryCurrent = consultantIndustrySearch.firstElementChild;
let consultantIndustry = document.querySelector(".searchItem"); 
let category = consultantIndustry.querySelectorAll("button"); //找到所有子選單選項
// console.log(category);
let currentCategory = consultantIndustrySearch.firstElementChild;
consultantIndustrySearch.addEventListener("click", () => {
    consultantIndustry.classList.toggle("-on");
    if(consultantIndustry.classList.contains("-on")){
        consultantIndustry.style.display = "block";
    }else{
        consultantIndustry.style.display = "none";
    }

    for(let i = 0; i <category.length; i++ ){
        category[i].addEventListener("click", e => {
            categoryCurrent.innerText = e.target.innerHTML;
            categoryCurrent.insertAdjacentHTML("beforeend", `
                <i class="fa-solid fa-chevron-down"></i>
            `)
        })
    }
})
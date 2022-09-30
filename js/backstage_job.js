Vue.component('job-data',{ 
    data(){
        return{
            jobData: [],
            opened_tr:null, //開關詳細資料
            banId:'', //停權用途
        }       
    },
    methods:{
        comImg(jobId){ //目標：顯示該公司的職缺
            // console.log(jobId); 
            banId = jobId
        },
        showban(){
            alert("aa")
        },
    },
    mounted() {       
        //顯示第一頁的資料
        fetch(`php/searchjob.php?page=1`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            this.jobData = userArr
        })

        //根據選擇的頁碼，顯示不同筆資料
        let pageContent = document.querySelectorAll(".pageContent");
        for(let i = 0; i < pageContent.length; i++ ){
            pageContent[i].addEventListener("click", e => {
                // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
                fetch(`php/searchJob.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
                //${e.target.innerText}
                .then(rsp => rsp.json())
                .then(userArr => {      
                    // console.log(userArr);    
                    this.jobData = userArr
                    // console.log(this.jobData);
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
                    fetch(`../php/backstage_banJob.php?jobId2=${banId}`) //修改資料庫ban欄位數值為0
                }else {
                    e.target.classList.toggle('-on')
                    e.target.style.opacity = "100%"
                    fetch(`../php/backstage_banJob.php?jobId=${banId}`) //修改資料庫ban欄位數值為1
                }
            })
        }
    },
    template: `
    <tbody>
        <tr class="item" v-for="jobs in jobData">
            <td class="id"><h3>J111{{jobs.ID}}</h3></td>
            <td class="companyname"><h3>{{jobs.COMPANYNAME}}</h3></td>
            <td class="name"><h3>{{jobs.NAME}}</h3></td>
            <td class="workplace"><h3>{{jobs.WORKPLACE}}</h3></td>
            <td class="browsed"><h3>{{jobs.BROWSED}}</h3></td>
            <td class="apply"><h3>130</h3></td>
            <td class="interview"><h3>43</h3></td>
            <td class="detail"><h3>
                <button class="btna3"><h4>詳細資料</h4></button>
            </h3></td>
            <td class="create-date"><h3>{{jobs.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></td>
            <td class="state"><i class="fa-solid fa-lightbulb"></i></td>
            <td class="ban"><h3><i class="fa-solid fa-ban" @click="comImg(jobs.ID)"></i></h3></td>
        </tr>
    </tbody>
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
        <table>
            <thead class="thead">
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
                    
            <job-data></job-data>
        </table>
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
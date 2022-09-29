Vue.component('comjob-data',{ 
    data(){
        return{
            comjobData: [],
            opened_trs:null,
            openDetail:false,
        }       
    },
    methods:{
        banOpen(){
            // console.log()
        },
        toggleDetail(comjobs){
            comjobs.openDetail = !comjobs.openDetail
        }
    },
    mounted() {       
        //顯示該公司的職缺
        fetch(`php/searchjob.php?comId=${sessionStorage.getItem('backstageCompany')}`) //撈到session的該公司ID，傳給php，
        .then(rsp => rsp.json())
        .then(userArr => {    
            console.log(userArr); 
            this.comjobData = userArr
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
                    this.comjobData = userArr
                    // console.log(this.comjobData) //確認過有抓到資料
                })
            })
        }
    },
    template: `
        <div class="wrapper">
                <h1 class="title">小野水產</h1>
                <div class="wratable">            
                    
                <table id="table">     
                    <thead>
                        <tr>
                            <th class="id"><h3>職缺編號</h3></th>
                            <th class="name"><h3 >職缺名稱</h3></th>
                            <th class="workplace"><h3>工作地點</h3></th>
                            <th class="browsed"><h3>被瀏覽數</h3></th>
                            <th class="applyTimes"><h3>應徵次數</h3></th>
                            <th class="interviewTimes"><h3>面試次數</h3></th>
                            <th class="detail"><h3></h3></th>
                            <th class="create-date"><h3>建立日期</h3></th>
                            <th class="state"><h3>職缺狀態</h3></th>
                            <th class="ban"><h3 >停權</h3></th>
                        </tr> 
                    </thead>
                    
                    <tbody>
                        <template  v-for="(comjobs,key) in comjobData">
                            <tr class="item">
                                <td class="id"><h3>{{comjobs.ID}}</h3></td>
                                <td class="name"><h3>{{comjobs.NAME}}</h3></td>
                                <td class="workplace"><h3>{{comjobs.WORKPLACE}}</h3></td>
                                <td class="browsed"><h3>{{comjobs.BROWSED}}</h3></td>
                                <td class="applyTimes"><h3>50</h3></td>
                                <td class="interviewTimes"><h3>10</h3></td>
                                <td class="detail"><h3><button class="btna3" @click="opened_trs == null  ?  opened_trs = comjobs.ID : opened_trs = null"><h4>詳細資料</h4></button></h3></td>
                                <td class="create-date"><h3>{{comjobs.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></td>
                                <td class="state"><i class="fa-solid fa-lightbulb"></i></td>
                                <td class="ban"><h3><i class="fa-solid fa-ban"></i></h3></td>
                            </tr>
                            <tr >
                                <tr class="itemDetailTile" v-if="opened_trs == comjobs.ID">
                                    <th class="category"><h3>職業種類</h3></th>
                                    <th class="depart"><h3 >部門種類</h3></th>
                                    <th class="scale"><h3>公司規模(人數)</h3></th>
                                    <th class="salary"><h3>時薪</h3></th>
                                    <th class="wfh"><h3>是否遠端</h3></th>
                                    <th class="job"><h3>職缺人數</h3></th>
                                    <th class="describe"><h3>職缺描述</h3></th>
                                    <th class="require"><h3>職務需求</h3></th>
                                    <th class="plus"><h3>加分條件</h3></th>
                                    <th><h3></h3></th>
                                </tr>
                                <tr class="itemDetail" v-if="opened_trs == comjobs.ID">
                                    <th class="category"><h3>{{comjobs.CATEGORY}}</h3></th>
                                    <th class="depart"><h3>{{comjobs.DEPART}}</h3></th>
                                    <th class="scale"><h3>{{comjobs.SCALE}}</h3></th>
                                    <th class="salary"><h3>{{comjobs.SALARY}}</h3></th>
                                    <th class="wfh"><h3>{{comjobs.WFH}}</h3></th>
                                    <th class="job"><h3>{{comjobs.JOB}}</h3></th>
                                    <th><h3></h3></th>
                                    <th><h3></h3></th>
                                    <th><h3></h3></th>
                                    <th><h3></h3></th>
                                </tr>
                                <tr class="itemDetailTile" v-if="opened_trs == comjobs.ID">
                                    <th class="describe" colspan="4"><h3>職缺描述</h3></th>
                                    <th class="require" colspan="3"><h3>職務需求</h3></th>
                                    <th class="plus" colspan="3"><h3>加分條件</h3></th>
                                </tr>
                                <tr class="itemDetail" v-if="opened_trs == comjobs.ID">                                    
                                    <th class="describe" colspan="4"><h3>{{comjobs.DESCRIBE}}</h3></th>
                                    <th class="require" colspan="3"><h3>{{comjobs.REQUIRE}}</h3></th>
                                    <th class="plus" colspan="3"><h3>{{comjobs.PLUS}}</h3></th>  
                                </tr> 
                            </tr>
                        </template>
                    </tbody>
                </table>
                        
                </div>      

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

let vm = new Vue({ //設定想要預載的html結構
    el:'#backstage_com_job_app',
    data: { 
        //設定要先掛載的東西
    },
    methods: {},      
    template://預先掛載的div結構
         `        
         <comjob-data></comjob-data>
        `,  
    })     



Vue.component('company-data',{ 
    data(){
        return{
            companyData: [],
            searchcompany:'', //搜尋功能
            banId:'', //停權用途
        }       
    },
    methods:{
        comImg(comId){ //目標：顯示該公司的職缺
            // alert(comId); //確認有抓到該公司ID
            sessionStorage.setItem('backstageCompany',comId)
        },
        banCom(comId){ //目標：將要停權的目標id存到banId變數
            // console.log(comId); 
            banId = comId
        },
        search(){  //搜尋企業會員         
            const searcom = this.searchcompany;
            fetch(`./php/searchcompany.php?company=${searcom}`)
            .then(rsp => rsp.json())
            .then(userArr => {            
                // console.log(userArr);
                this.companyData = userArr;
            })
        },
    },
    mounted() {       
        //顯示第一頁的資料
        fetch(`./php/searchcompany.php?page=1`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            this.companyData = userArr
            // console.log(this.companyData)
        })

        //根據選擇的頁碼，顯示不同筆資料
        let pageContent = document.querySelectorAll(".pageContent");
        for(let i = 0; i < pageContent.length; i++ ){
            pageContent[i].addEventListener("click", e => {
                // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
                fetch(`./php/searchcompany.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
                //${e.target.innerText}
                .then(rsp => rsp.json())
                .then(userArr => {            
                    // console.log("123") //確認有跑到這裡
                    // console.log(userArr);    
                    this.companyData = userArr
                    // console.log(this.companyData) //確認過有抓到資料
                })
            })
        }

        
    },
    updated() {
        //目標：公司是否要停權
        let fa_ban = document.querySelectorAll(".fa-ban")
        for(let i = 0; i < fa_ban.length; i++){
            fa_ban[i].addEventListener("click", e => {
                // console.log(e.target)
                if(e.target.classList.contains('-on')){
                    e.target.classList.toggle('-on')
                    e.target.style.opacity = "10%"
                    fetch(`./php/backstage_banCom.php?comId2=${banId}`) //修改資料庫ban欄位數值為0
                }else {
                    e.target.classList.toggle('-on')
                    e.target.style.opacity = "100%"
                    fetch(`./php/backstage_banCom.php?comId=${banId}`) //修改資料庫ban欄位數值為1
                }
            })
        }
    },
    template: `
        <div>
            <div class="block">
                <div class="inputsearch">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="Text" class="inputText" v-model="searchcompany" @keyup="search" placeholder="搜尋公司名稱或編號" name="search">
                </div>                
            </div>
            
            <table>
                <thead>
                    <tr>
                        <th class="id"><h3>公司編號</h3></th>
                        <th class="name"><h3 >公司名稱</h3></th>
                        <th class="property"><h3>資本額(萬)</h3></th>
                        <th class="principle"><h3>負責人</h3></th>
                        <th class="fee"><h3>年費方案</h3></th>
                        <th class="city"><h3>縣市區</h3></th>
                        <th class="district"><h3>鄉鎮市區</h3></th>
                        <th class="addummernoteress"><h3>地址</h3></th>
                        <th class="detail"></th>
                        <th class="create-date"><h3>建立日期</h3></th>
                        <th class="ban"><h3>停權</h3></th>
                    </tr> 
                </thead>
                <tbody>
                    <tr class="item" v-for="companys in companyData">
                        <td class="id"><h3>C1110{{companys.ID}}</h3></td>
                        <td class="name"><h3 >{{companys.NAME}}</h3></td>
                        <td class="property"><h3>{{companys.PROPERTY}}</h3></td>
                        <td class="principle"><h3>{{companys.PRINCIPLE}}</h3></td>
                        <td class="fee"><h3>NT:{{companys.PRICE}}</h3></td>
                        <td class="city"><h3>{{companys.CITY}}</h3></td>
                        <td class="district"><h3>{{companys.DISTRICT}}</h3></td>
                        <td class="address"><h3>{{companys.ADDRESS}}</h3></td>
                        <td class="detail"><h3><button class="btna3" @click="comImg(companys.ID)"><a href="./backstage_com_job.html"><h4>詳細資料</h4></a></button></h3></td>
                        <td class="create-date"><h3>{{companys.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></td>
                        <td class="ban"><h3><i class="fa-solid fa-ban" @click="banCom(companys.ID)" :style="{ 'opacity': companys.BAN == 1 ? 1 : 0.1 }"></i></h3></td>
                    </tr>
                </tbody>                              
            </table>
        </div>  
    `,
})

let vm = new Vue({ //設定想要預載的html結構
    el:'#backstage_company_app',
    data: { 
        //設定要先掛載的東西
    },
    methods: {},      
    template://預先掛載的div結構
        ` 
        <div class="wrapper" >
            <h1 class="title">公司營運分析</h1>
            <div class="wratable">
                       
                <company-data></company-data>  

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



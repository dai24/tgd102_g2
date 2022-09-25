Vue.component('company-data',{ 
    data(){
        return{
            companyData: [],
        }       
    },
    methods:{
        banOpen(){
            // console.log()
        }
    },
    mounted() {       
        //顯示第一頁的資料
        fetch(`./php/searchcompany.php?page=1`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            this.companyData = userArr
        })

        //根據選擇的頁碼，顯示不同筆資料
        let pageContent = document.querySelectorAll(".pageContent");
        for(let i = 0; i < pageContent.length; i++ ){
            pageContent[i].addEventListener("click", e => {
                // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
                fetch(`php/searchcompany.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
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
    template: `
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
            <td class="detail"><h3><button class="btna3"><h4><a href="./backstage_com_job.html">詳細資料</a></h4></button></h3></td>
            <td class="create-date"><h3>{{companys.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></td>
            <td class="ban"><h3><i class="fa-solid fa-ban" @click="banOpen"></i></h3></td>
        </tr>
    </tbody>
    `,
})

let vm = new Vue({ //設定想要預載的html結構
    el:'#backstage_company_app',
    data: { 
        //設定要先掛載的東西
    },
    methods: {},      
    template: //預先掛載的div結構
        `
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
                        <th class="address"><h3>地址</h3></th>
                        <th class="detail"></th>
                        <th class="create-date"><h3>建立日期</h3></th>
                        <th class="ban"><h3>停權</h3></th>
                    </tr> 
            </thead>
                               
            <company-data></company-data>            
        </table>
        `,  
})     

new Vue({
    el:'#backstage_company_app',
})

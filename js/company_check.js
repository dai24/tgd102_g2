//組件上半部
Vue.component('company-list',{
    data() {
        return {
            companyTitle:[]
        }
    },
    mounted() {
        fetch(`./php/company_list.php?home=${sessionStorage.getItem('CompanyId')}`) //從後端JS拿到資料
        // fetch(`php/company_list.php?`) //從後端JS拿到資料
        .then(rsp => rsp.json())
        .then(userArr => {            
            this.companyTitle = userArr
            console.log(userArr);
            console.log(this.companyTitle);
        })
    },
    template:`
    <div>

        <div class="companyHeader" v-for="companyTitleA in  companyTitle">
            <div class="companyHeaderLogo">
                <label for="upload" class="upload">
                    <input id="upload" type="file" accept="image/*">
                    <img :src="companyTitleA.LOGO + '.jpg'" alt="">
                </label>
                <!-- <label for="upload"  class="Avatar"><img src=""></label> -->
            </div>
            <div class="companyHeaderMain">
                <form action="" method="">
                    <div><label for="">公司名稱：</label><input type="text" name="" id="" :value=companyTitleA.NAME readonly="readonly"></div>
                    <div><label for="">產業類別：</label><input type="text" name="" id="" value="農林漁牧業" readonly="readonly"></div>
                    <div><label for="">連絡電話：</label><input type="text" name="" id="" :value=companyTitleA.PHONE readonly="readonly"></div>
                    <div><label for="">信箱：</label><input type="text" name="" id="" :value=companyTitleA.EMAIL readonly="readonly"></div>
                </form>
            </div>
            <div class="companyHeaderBtn">
                <div class="btna11">
                    <h4><a href="./company_edit.html">編輯公司資料</a></h4>
                </div>
                <div class="btna11">
                    <h4><a href="./Announcevacanciesform.html">發布職缺</a></h4>
                </div>
            </div>
        </div>
    
    </div>
    `, 
})




//父層
let vm = new Vue({
   
    el:"#company_main_app",
    data:{

    },
    methods:{},
    template:`
    <div>
        <company-list></company-list>
      
    </div>
    `,
})
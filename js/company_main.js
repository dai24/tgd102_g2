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


//組件下半部
Vue.component('company-jobdata',{
    data(){
        return{
            jobdata: []
            // inputValue:''

        }
    },
    // 刪除該欄位
    methods:{
        deleteClick(row){                
            fetch(`php/update.php?id=${row}`) //php? id指資料庫第幾筆
            .then(rsp => rsp.json())
            .then(userArr => {
                this.jobdata = userArr
               
            })
            console.log(row);
        },

        // 修改該欄位
        edit(id ,name){
             console.log('id', id);
             console.log('name', name);
            fetch('php/update_name.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body:JSON.stringify({
                    id:id,
                    name:name,
                   
                })

              })
            .then(resp => resp.json())
            //console.log(name);
            //console.log(id);
            // .then(body => {
                
            // });
          
        },

        toggle(event){
            // document.getElementById('onoff').disabled=true   
            // document.getElementsByClassName('state')[0].className='state closeSwitch'
            //    console.log('here', event.target.closest('tr').querySelectorAll('td.detail .btna20'))

            // 兩個按鈕消失的狀態
           let btns = event.target.closest('tr').querySelectorAll('td.detail .btna20')
           for(let x=0;x<btns.length;x++){
            // btns[x].style.display = 'none'

            $(btns[x]).toggle(function(){
                $(btns[x]).attr("style","display:none;");
            
            },function(){
                // $(btns[x]).attr("style","display:block;");
            });


           }

           // 開關input的狀態
           let inp = event.target.closest('tr').querySelectorAll('td.id .onoff')
           for(let x=0;x<inp.length;x++){
            inp[x].toggleAttribute ("disabled");
           }

            //    console.log('here', event.target.closest('tr').querySelectorAll('td.edit .state'))
           // 開關switch的狀態
           let swit = event.target.closest('tr').querySelectorAll('td.edit .state')
           for(let x=0;x<swit.length;x++){
            // swit[x].className.toggleClass('openSwitch')
            $(swit[x]).toggleClass('closeSwitch')


            

            }

        },
    },

    //搜尋企業欄位是沒有停權的範圍
    mounted(){ 
        fetch('php/company_main.php?')
        .then(rsp => rsp.json())
        .then(userArr => {
            this.jobdata = userArr
        })

    },
    template:`
    <tbody>
        <tr class="item" v-for="jobs in jobdata">
            <td class="id"><input type="text" class="onoff" :value=jobs.NAME @blur="edit(jobs.ID,  $event.currentTarget.value)"></td>
            <td class="detail"><button  class="btna20 a"><h4>詳細資料</h4></button><button class="btna20 btncheck"><h4><a href="./company_check.html">查看求職者</a></h4></button></td>
            <td class="edit">
                <h3>
                    <button ><i class="fa-solid fa-pen"></i></button>
                    <button @click="deleteClick(jobs.ID)"><i class="fa-solid fa-trash"></i></button>
                </h3>
                <div class="state openSwitch">
                    <div class="appleSwitch">
                        <div  @click="toggle($event)" class="appleCircle"></div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
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
        <div>
            <ul class="block">
                <li>
                    <h3>職缺列表</h3>
                </li>
                <li>
                    <div class="inputsearch">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="Text" class="inputText" placeholder="搜尋職缺名稱" name="search">
                    </div>
                </li>    
            </ul>
            <table>
                <company-jobdata></company-jobdata>
            </table>
        </div>
    </div>
    `,
})
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

    },


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
            <td class="id"><input type="text" :value=jobs.NAME @blur="edit(jobs.ID,  $event.currentTarget.value)"></td>
            <td class="detail"><button class="btna20 a"><h4>詳細資料</h4></button><button class="btna20 btncheck"><h4><a href="./company_check.html">查看求職者</a></h4></button></td>
            <td class="edit">
                <h3>
                    <button ><i class="fa-solid fa-pen"></i></button>
                    <button @click="deleteClick(jobs.ID)"><i class="fa-solid fa-trash"></i></button>
                </h3>
                <div class="state openSwitch">
                    <div class="appleSwitch">
                        <div class="appleCircle"></div>
                    </div>
                </div>
            </td>
        </tr>
    </tbody>
    `,







})




let vm = new Vue({
   
    el:"#company_main_app",
    data:{

    },
    methods:{},
    template:`
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
    `,
})

//組件：學生會員資料
Vue.component('student-data',{ 
    data(){
        return{
            studentData: [],
            opened_tr:null,
            searchstudent:'', 
        }       
    },
    methods:{
        banOpen(){
            // console.log()
        },
        search(){  //搜尋學生會員          
            // console.log(this.searchstudent)
            const searstu = this.searchstudent
            // console.log(searstu)
            fetch(`../php/searchstudent.php?student=${searstu}`)
            .then(rsp => rsp.json())
            .then(userArr => {            
                // console.log(userArr);
                this.studentData = userArr;
            })
        },
        
    },
    mounted() {       
        //顯示第一頁的資料
        fetch(`php/searchstudent.php?page=1`)
        .then(rsp => rsp.json())
        .then(userArr => {    
            // console.log(userArr)
            this.studentData = userArr
        })

        //根據選擇的頁碼，顯示不同筆資料
        let pageContent = document.querySelectorAll(".pageContent");
        for(let i = 0; i < pageContent.length; i++ ){
            pageContent[i].addEventListener("click", e => {
                // alert(e.target.innerText) //確認傳遞的數值和頁碼相同
                fetch(`../php/searchstudent.php?page=${e.target.innerText}`) //連到資料庫 。?的右邊可自訂變數讓php取資料    
                //${e.target.innerText}
                .then(rsp => rsp.json())
                .then(userArr => {            
                    // console.log(userArr)
                    this.studentData = userArr  
                })
            })
        }     
    },
    updated() {
        
    },
    template: `
        <div>
            <div class="block">
                <div class="inputsearch">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="Text" class="inputText" v-model="searchstudent" @keyup="search" placeholder="搜尋會員名稱或編號" name="search">
                </div>                
            </div>
            <table>
                <thead class="thead">
                        <tr class="theadtr">
                            <th class="id"><h3>會員編號</h3></th>
                            <th class="name"><h3 >會員姓名</h3></th>
                            <th class="gender"><h3>性別</h3></th>
                            <th class="birthday"><h3>生日</h3></th>
                            <th class="coin"><h3>點數</h3></th>
                            <th class="blacklist"><h3>被檢舉數</h3></th>
                            <th class="record"><h3>加值紀錄</h3></th>
                            <th class="detail"><h3></h3></th>
                            <th class="create-date"><h3>建立日期</h3></th>
                            <th class="ban"><h3>停權</h3></th>
                        </tr> 
                </thead>
                <tbody>
                    <template  v-for="(students,key) in studentData">
                        <tr class="item">
                            <td class="id"><h3>C111{{students.ID}}</h3></td>
                            <td class="name"><h3>{{students.NAME}}</h3></td>
                            <td class="gender"><h3>{{students.GENDER}}</h3></td>
                            <td class="birthday"><h3>{{students.BIRTHDAY}}</h3></td>
                            <td class="coin"><h3>{{students.COIN}}</h3></td>
                            <td class="blacklist"><a href="#"><h3>{{students.BLACKLIST}}</h3></a></td>
                            <td class="record"><a href="#"><h3>10</h3></a></td>
                            <td class="detail"><h3><button class="btna3 detailBtn" @click="opened_tr === null  ?  opened_tr = key : opened_tr = null"><h4>詳細資料</h4></button></h3></td>
                            <td class="create-date"><h3>{{students.CREATE_DATE.substr(0,10).split('-').join('/')}}</h3></td>
                            <td class="ban"><h3><i class="fa-solid fa-ban"></i></h3></td>    
                        </tr>     
                        <tr >
                            <tr class="itemDetailTile"  v-if="opened_tr === students.ID">
                                <th class="id"><h3>信箱</h3></th>
                                <th class="name"><h3 >電話</h3></th>
                                <th class="gender"><h3>地址</h3></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr> 
                            <tr class="itemDetail" v-if="opened_tr === students.ID">    
                                <th class="email"><h3>{{students.EMAIL}}</h3></th>
                                <th class="phone"><h3>{{students.PHONE}}</h3></th>
                                <th class="address"><h3>{{students.ADDRESS}}</h3></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    `,
})



let vm = new Vue({ //設定想要預載的html結構
    el:'#backstage_student_app',
    data:{
        // searchstudent:'', 
    },
    methods:{
        // search(){            
        //     // console.log(this.searchstudent)
        //     const searstu = this.searchstudent
        //     // console.log(searstu)
        //     fetch(`../php/searchstudent.php?student=${searstu}`)
        //     .then(rsp => rsp.json())
        //     .then(userArr => {            
        //         console.log(userArr);
        //     })
        // }
    },
    template:` 
    <div  class="wrapper"> 
        <h1 class="title">學生會員資料</h1>
        <div class="wratable">

            <student-data></student-data>

        </div>      
       
        <div class="pagination-div">
            <ul class="pagination-ul">
              <li><a href="#"><i class="fa-solid fa-chevron-left"></i></a></li>
              <li><a href="#" class="pageContent">1</a></li>
              <li><a href="#" class="pageContent">2</a></li>
              <li><a href="#" class="pageContent">3</a></li>
              <li><a href="#" class="pageContent">4</a></li>
              <li><a href="#" class="pageContent">5</a></li>
              <li><a href="#"><i class="fa-solid fa-chevron-right"></i></a></li>
            </ul>
        </div>
    </div>
        `,  
    })     
    


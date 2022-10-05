// 舊版原生js 寫法
// $(function () {


//     const account = document.querySelector('#account');
//     const password = document.querySelector('#password');


//     document.querySelector('.submit').addEventListener('click',() => {
      
//         if(account.value==""|| password.value==""){//判斷兩個均不為空（其他判斷規則在其輸入時已經判斷） 
//             alert("信箱密碼均不能為空！") 
//         return false
//         }
    
//         // if($(account).val() == ""){
//         //     alert("請輸入帳號");
//         //     return false;
//         // }else if($(password ).val() == ""){
//         //     alert("請輸入密碼");
//         //     return false;
//         // }

//         fetch('./php/company_login.php',{
//             method:'POST',
//             headers:{'Cont-Type': 'application'},
//             body:JSON.stringify({
//                 account:account.value,
//                 password:password.value,
//             })
//         })


//         //前端去接後端的字串改成resp.text()給一個變數result
        
//         // .then(resp => resp.text())
//         // .then(result => {
//         //     console.log('test', result == 'successful');
//         //     if(result == 'successful') {
//         //         location.replace('../dist/company_main.html');
//         //     }else{
//         //         alert("信箱密碼錯誤")
//         //     }
//         // });


//         .then(resp => resp.json())
//         .then(result => {
//            let companyData = []; //準備一個空陣列用來裝回傳的資料
//            companyData = result; //回傳資料裝進去空陣列
//         //    console.log(studentData) //確認回傳結果有ID值
//         //    console.log(studentData[0].ID) //有找到ID
    
//             if(companyData.length > 0) {
//                 location.replace('../dist/company_main.html');
//                 let comID = companyData[0].ID
//                 sessionStorage.setItem('CompanyId', comID)
//             }else{
//                 alert("信箱密碼錯誤!!")
//             }
//         });
      

//     });

// })





let vm = new Vue({
    el:"#company_login_app",
    data:{
        account:'otis29516368@gmail.com', //預設顯示的內容
        password:'123456321', //預設顯示的內容
        companyData:[], //裝驗證回來的資料
    },
    methods: {

        moveCom(){
            
            location='./company_sign.html'
        },


        submit(){
            // console.log(this.account) //顯示輸入的帳號
            // console.log(this.password) //顯示輸入的密碼
            if(this.account == "" || this.password == ""){
                alert("信箱密碼均不能為空！") 
                return false
            }

            fetch('./php/company_login.php',{
                method:'POST',
                headers:{'Cont-Type': 'application'},
                body:JSON.stringify({
                    account:account.value,
                    password:password.value,
                })
            })
            .then(resp => resp.json())
            .then(result => {
            let companyData = []; //準備一個空陣列用來裝回傳的資料
            companyData = result; //回傳資料裝進去空陣列
            //    console.log(studentData) //確認回傳結果有ID值
            //    console.log(studentData[0].ID) //有找到ID
        
                if(companyData.length > 0) {
                    location.replace('../dist/company_main.html');
                    let comID = companyData[0].ID
                    sessionStorage.setItem('CompanyId', comID)
                }else{
                    alert("信箱密碼錯誤!!")
                }
            });
        },
    },
    template:`
        <main class="company_login">
            <div class="logincard">
                <img src="./images/student-login/student.jpg" alt="企業圖案" class="figure">
                <h1 class="cardH1">企業登入</h1>
                <div class="wrapper">
                    <section class="input01">
                        <input type="text" placeholder="請輸入電子信箱" class="inputText" v-model.lazy="account" name="account" id="account"maxlength="30" >
                        <h4 class="inputAlert">信箱格式錯誤</h4>
                    </section>
                    <section class="input01">
                        <input type="password" placeholder="請輸入密碼" class="inputText"  v-model.lazy="password" name="password" id="password"maxlength="12" >
                        <h4 class="inputAlert">密碼格式錯誤</h4>
                    </section>
                    
                    <section>                
                        <button class="forgotpw"><h4><a href="company_forgotpw.html">忘記密碼</a></h4></button>
                    </section>    

                    <section>
                        <input type="submit" class="btna17 submit" value="登入" name="submit" @click="submit()" id="submit">
                    </section>

                    <div class="gosign">
                        <h4>還沒有註冊帳號嗎?</h4>
                        <h4 @click='moveCom'>註冊</h4>
                    </div>
                </div>   
            </div>
        </main>
        `,

})
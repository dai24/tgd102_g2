
// 舊版原生js 寫法
// $(function () {


//     const account = document.querySelector('#account');
//     const password = document.querySelector('#password');



//     document.querySelector('.submit').addEventListener('click',() => {
//         // if(!account || !password) {
//         //         alert('請輸入account,password!');
//         //     return false;
//         // }

//         if(account.value==""|| password.value==""){//判斷兩個均不為空（其他判斷規則在其輸入時已經判斷） 
//             alert("信箱密碼均不能為空！") 
//         return false
//         }
    

//         fetch('./php/login.php',{
//             method:'POST',
//             headers:{'Cont-Type': 'application'},
//             body:JSON.stringify({
//                 account:account.value,
//                 password:password.value,
//             })
//         })
//         .then(resp => resp.json())
//         .then(result => {
//            let studentData = []; //準備一個空陣列用來裝回傳的資料
//            studentData = result; //回傳資料裝進去空陣列
//         //    console.log(studentData) //確認回傳結果有ID值
//         //    console.log(studentData[0].ID) //有找到ID
//             // console.log('test', result == 'successful');
//             if(studentData.length > 0) {
//                 location.replace('../dist/student_main.html');
//                 let stuID = studentData[0].ID
//                 sessionStorage.setItem('StudentId', stuID)
//             }else{
//                 alert("信箱密碼錯誤!!")
//             }
//         });
        
        
        
//         // .then(body => {
//         //     console.log(body);
        
        
//         // 這裡寫判斷if true 去轉址 用php retrun回來 
//         // .then(resp =>{
//         //     console.log(resp);
//         //     // var value="<?php echo $num; ?>";
//         //     // console.log(value);
//         //         // if (resp.status === 200 && success ?? ) {
//         //         //     // console.log(resp);
//         //         //     // console.log(value);
//         //         //     location.replace('../dist/student_main.html');
//         //         // }else{
//         //         //     resp.status === false;
//         //         //     alert('帳號密碼錯誤')
//         //         // };
                    
//         // });

   

//         // .then(resp =>{
//         //     if (resp.status === 200) {
//         //         location.replace('../dist/student_main.html');
//         //     }
//         // });

//     });



// });



//vue 框架寫法

let vm = new Vue({
    el:"#student_login_app",
    data:{
        account:'jeremy801223@gmail.com', //預設顯示的內容
        password:'123456', //預設顯示的內容
        studentData:[], //裝驗證回來的資料
    },
    methods: {

        moveCom(){
            
            location='./student_sign.html'
        },





        submit(){
            // console.log(this.account) //顯示輸入的帳號
            // console.log(this.password) //顯示輸入的密碼
            if(this.account == "" || this.password == ""){
                alert("信箱密碼均不能為空！") 
                return false
            }

            fetch('./php/login.php',{
                method:'POST',
                headers:{'Cont-Type': 'application'},
                body:JSON.stringify({
                    account:account.value,
                    password:password.value,
                })
            })
            .then(resp => resp.json())
            .then(result => {
               let studentData = []; //準備一個空陣列用來裝回傳的資料
               studentData = result; //回傳資料裝進去空陣列
            //    console.log(studentData) //確認回傳結果有ID值
            //    console.log(studentData[0].ID) //有找到ID
                // console.log('test', result == 'successful');
                if(studentData.length > 0) {
                    location.replace('../dist/student_main.html');
                    let stuID = studentData[0].ID
                    sessionStorage.setItem('StudentId', stuID)
                }else{
                    alert("信箱密碼錯誤!!")
                }
            });
        },
    },
    template:`
            <main class="student_login">
                <div class="logincard">
                    <img src="./images/student-login/student.jpg" alt="學生圖案" class="figure">
                    <h1 class="cardH1">學生登入</h1>
                    <div class="wrapper">
                        <section class="input01">
                            <input type="text" placeholder="請輸入電子信箱" class="inputText" v-model.lazy="account" name="account" id="account" maxlength="30">
                            <h4 class="inputAlert">信箱格式錯誤</h4>
                        </section>
                        <section class="input01">
                            <input type="text" placeholder="請輸入密碼" class="inputText" v-model.lazy="password" name="password" id="password" maxlength="12">
                            <h4 class="inputAlert">密碼格式錯誤</h4>
                        </section>
                        <section>                
                            <button class="forgotpw"><h4><a href="./student_forgotpw.html">忘記密碼</a></h4></button>
                        </section> 
                        <section>
                            <h4 class="otherway">或用以下方式登入</h4>
                        </section>
                        <ul class="social">
                            <!-- <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa-brands fa-google"></i></a></li> -->                
                            <img src="./images/careertest//icon_instagram.svg" alt="IG">
                            <img src="./images/careertest//icon_facebook.svg" alt="臉書">
                        </ul>
                        

                        <section>
                            <input type="submit" class="btna17 submit" value="登入" name="submit"  @click="submit()" id="submit">
                        </section>

                        <div class="gosign">
                            <h4>還沒有註冊帳號嗎?</h4>
                            <h4 class="submit2" @click='moveCom'>註冊</h4>
                        </div>
                    </div>   
                </div>
            </main> 
            `,

})







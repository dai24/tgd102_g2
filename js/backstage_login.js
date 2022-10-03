
let vm = new Vue({
    el:"#backstage_login_app",
    data:{
        account:'456@gmail.com', //預設顯示的內容
        password:'456', //預設顯示的內容
        loginData:[], //裝驗證回來的資料
    },
    methods: {
        submit(){
            // console.log(this.account) //顯示輸入的帳號
            // console.log(this.password) //顯示輸入的密碼
            if(this.account == "" || this.password == ""){
                alert("信箱密碼均不能為空！") 
                return false
            }

            fetch('./php/backstage_login.php',{
                method:'POST',
                headers:{'Cont-Type': 'application'},
                body:JSON.stringify({
                    account:this.account,
                    password:this.password,
                })
            })
            .then(resp => resp.json())
            .then(result => {
                this.loginData = result; //回傳資料裝進去空陣列
                if(this.loginData.length > 0) { //登入成功
                    alert("歡迎! 一般管理員")
                    location.replace('../dist/backstage.html');
                    sessionStorage.setItem('BackstageId',this.loginData[0].ID)
                }else{ //登入失敗
                    alert("信箱密碼錯誤!!")
                }
            });
        },
    },
    template:`
        <main class="backstage_login">
            <div class="logincard">
                <h1 class="cardH1">管理員登入</h1>
                <div class="wrapper">
                    <section class="input01">
                        <input type="text" placeholder="請輸入信箱" class="inputText" v-model.lazy="account" name="account">
                        <h4 class="inputAlert">帳號錯誤</h4>
                    </section>
                    <section class="input01">
                        <input type="text" placeholder="請輸入密碼" class="inputText" v-model.lazy="password" name="passeord">
                        <h4 class="inputAlert">密碼錯誤</h4>
                    </section>

                    <section>                
                        <button class="btna17 submit" name="submit" @click="submit()">登入</button>
                    </section>
                    
                </div>   
            </div>
        </main>
    `,
})


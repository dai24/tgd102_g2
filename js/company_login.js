//按下"送出"按鈕，跳轉頁面
// let submit = document.querySelector(".submit");

// submit.addEventListener("click", () => {
//     location = "./company_main.html";
// })


$(function () {


    const account = document.querySelector('#account');
    const password = document.querySelector('#password');


    document.querySelector('.submit').addEventListener('click',() => {
        // if(!account || !password) {
        //         alert('請輸入account,password!');
               
        //     return false;
        // }

        if(account.value==""|| password.value==""){//判斷兩個均不為空（其他判斷規則在其輸入時已經判斷） 
            alert("信箱密碼均不能為空！") 
        return false
        }
    
        // if($(account).val() == ""){
        //     alert("請輸入帳號");
        //     return false;
        // }else if($(password ).val() == ""){
        //     alert("請輸入密碼");
        //     return false;
        // }

        fetch('./php/company_login.php',{
            method:'POST',
            headers:{'Cont-Type': 'application'},
            body:JSON.stringify({
                account:account.value,
                password:password.value,
            })
        })
        
        .then(resp => resp.text())
        .then(result => {
            console.log('test', result == 'successful');
            if(result == 'successful') {
                location.replace('../dist/company_main.html');
            }else{
                alert("信箱密碼錯誤")
            }
        });
        sessionStorage.setItem('CompanyId', account.value)
        // .then(resp =>{
        //     if (resp.status === 200) {
        //         location.replace('../dist/company_main.html');
        //     }
        // });

    });

})
$(function () {


    const account = document.querySelector('#account');
    const password = document.querySelector('#password');


    document.querySelector('.submit').addEventListener('click',() => {
        // if(!account || !password) {
        //         alert('請輸入account,password!');
               
        //     return false;
        // }

        if(account==""|| password==""){//判斷兩個均不為空（其他判斷規則在其輸入時已經判斷） 
            alert("手機號密碼均不能為空！") 
        return false
        }
    
        // if($(account).val() == ""){
        //     alert("請輸入帳號");
        //     return false;
        // }else if($(password ).val() == ""){
        //     alert("請輸入密碼");
        //     return false;
        // }

        fetch('./php/login.php',{
            method:'POST',
            headers:{'Cont-Type': 'application'},
            body:JSON.stringify({
                account:account.value,
                password:password.value,
            })
        })
        .then(resp => resp.json())
        .then(body => {
            console.log(body);
        });

    });

})